<template>
    <Button @click="addNewAnimeModel = true" class="mb-3" icon="pi pi-plus" label="Add New Anime" severity="primary" rounded size="small" />

    <Dialog v-model:visible="addNewAnimeModel" modal header="Add New Anime" :style="{ width: '30vw' }">
        <form @submit.prevent="createNewAnime">
            <div class="mb-3">
                <CFormInput type="text" label="Url" v-model="inputs.mainForm.url" />
                <template v-if="validate.mainForm.url.$errors">
                    <div v-for="(error, index) in validate.mainForm.url.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Add Anime' }}</CButton>
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

const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const addNewAnimeModel = ref(false)

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

const createNewAnime = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        animeApi
            .addAnime(inputs.mainForm.url)
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
                addNewAnimeModel.value = false
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
