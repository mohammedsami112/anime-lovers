<template>
    <Button @click="addNewEpisodeModel = true" class="mx-2" icon="pi pi-plus" severity="primary" rounded size="small" />

    <Dialog v-model:visible="addNewEpisodeModel" modal header="Add New Episode" :style="{ width: '30vw' }">
        <form @submit.prevent="addNewEpisode">
            <div class="mb-3">
                <CFormInput type="text" label="Url" v-model="inputs.mainForm.url" />
                <template v-if="validate.mainForm.url.$errors">
                    <div v-for="(error, index) in validate.mainForm.url.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Add Episode' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { ref, reactive, computed, defineEmits } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs, email } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import animeApi from '@/controllers/anime'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const props = defineProps(['animeId'])
const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const addNewEpisodeModel = ref(false)

const inputs = reactive({
    mainForm: {
        url: null,
    },
})

const $externalResults = reactive({
    mainForm: {},
})

const rules = computed(() => ({
    mainForm: {
        url: {
            required: helpers.withMessage('Url Is Required', required),
        },
    },
}))

const validate = useVuelidate(rules, inputs, { $externalResults })

const addNewEpisode = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        animeApi
            .addEpisode(inputs.mainForm.url, props.animeId)
            .then((response) => {
                emit('success')
                console.log(response)
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.mainForm.url = null
                validate.value.$reset()
                addNewEpisodeModel.value = false
            })
            .catch((error) => {
                console.log(error.response)
            })
            .finally(() => {
                loading.value = false
            })
    }
}
</script>
