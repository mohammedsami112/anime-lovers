<template>
    <Button @click="addNewAdsModel = true" class="mb-3" icon="pi pi-plus" label="Add New Ad" severity="primary" rounded size="small" />

    <Dialog v-model:visible="addNewAdsModel" modal header="Add New Ad" :style="{ width: '30vw' }">
        <form @submit.prevent="createNewAd" enctype="multipart/form-data">
            <div class="mb-3">
                <CFormInput type="text" label="Title" v-model="inputs.mainForm.title" />
                <template v-if="validate.mainForm.title.$errors">
                    <div v-for="(error, index) in validate.mainForm.title.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>

            <div class="mb-3">
                <CFormInput type="file" label="Image" id="formFile" @change="handelImage" />
                <template v-if="validate.mainForm.image.$errors">
                    <div v-for="(error, index) in validate.mainForm.image.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>

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
import adsApi from '@/controllers/ads'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const addNewAdsModel = ref(false)

const inputs = reactive({
    mainForm: {
        title: null,
        image: null,
        url: null,
    },
})

const $externalResults = reactive({
    mainForm: {},
})

const rules = computed(() => ({
    mainForm: {
        title: {
            required: helpers.withMessage('Title Is Required', required),
        },
        image: {
            required: helpers.withMessage('Image Is Required', required),
        },
        url: {
            required: helpers.withMessage('Url Is Required', required),
        },
    },
}))

const validate = useVuelidate(rules, inputs, { $externalResults })

const handelImage = (e) => {
    inputs.mainForm.image = e.target.files[0]
}

const createNewAd = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        adsApi
            .addAds(inputs.mainForm)
            .then((response) => {
                emit('success')
                console.log(response)
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.mainForm.url = inputs.mainForm.title = inputs.mainForm.image = null
                validate.value.$reset()
                addNewAdsModel.value = false
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
