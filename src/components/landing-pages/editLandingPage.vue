<template>
    <Button
        @click="
            editLandingPageModel = true;
            $store.dispatch('setCurrentLandingPage', props.landingPageId)
        "
        icon="pi pi-file-edit"
        severity="success"
        rounded
        size="small"
    />
    <Dialog v-model:visible="editLandingPageModel" modal :header="`Edit Landing Page : ${$store.state.landingPages.current.title}`" :style="{ width: '30vw' }">
        <form @submit.prevent="editLandingPage">
            <div class="mb-3">
                <CFormInput type="text" label="Title" v-model="inputs.mainForm.title" />
                <template v-if="validate.mainForm.title.$errors">
                    <div v-for="(error, index) in validate.mainForm.title.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <div class="mb-3">
                <CFormInput type="url" label="Url" v-model="inputs.mainForm.url" />
                <template v-if="validate.mainForm.url.$errors">
                    <div v-for="(error, index) in validate.mainForm.url.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <div class="mb-3">
                <CFormSelect v-model="inputs.mainForm.category" label="Category">
                    <option selected="" value="">Choose...</option>
                    <option v-for="category in $store.state.landingPages.categories" :key="category.id" :value="category.id">{{ category.title }}</option>
                </CFormSelect>
                <template v-if="validate.mainForm.category.$errors">
                    <div v-for="(error, index) in validate.mainForm.category.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>

            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Edit Landing Page' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { ref, reactive, computed, defineEmits, defineProps, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs, email } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import store from '@/store'
import landingPagesApi from '@/controllers/landingPages'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const props = defineProps(['landingPageId'])
const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const editLandingPageModel = ref(false)

const inputs = reactive({
    landingPageId: null,
    mainForm: {
        title: null,
        url: null,
        category: null,
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
        url: {
            required: helpers.withMessage('Url Is Required', required),
        },
        category: {
            required: helpers.withMessage('Category Is Required', required),
        },
    },
}))

const validate = useVuelidate(rules, inputs, { $externalResults })

const editLandingPage = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        landingPagesApi
            .manageLandingPages(inputs.mainForm, inputs.landingPageId)
            .then((response) => {
                emit('success')
                console.log(response)
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.mainForm.title = inputs.mainForm.url = inputs.mainForm.category = null

                validate.value.$reset()
                editLandingPageModel.value = false
            })

            .finally(() => {
                loading.value = false
            })
    }
}

// Handel Setting Data
watch(
    () => store.state.landingPages.current,
    (landingPage) => {
        inputs.landingPageId = landingPage.id
        inputs.mainForm.title = landingPage.title
        inputs.mainForm.url = landingPage.url
        inputs.mainForm.category = landingPage.category.id
    },
)
</script>
