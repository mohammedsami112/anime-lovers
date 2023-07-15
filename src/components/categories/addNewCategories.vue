<template>
    <Button @click="addNewCategoryModel = true" class="mb-3" icon="pi pi-plus" label="Add New Category" severity="primary" rounded size="small" />

    <Dialog v-model:visible="addNewCategoryModel" modal header="Add New Category" :style="{ width: '30vw' }">
        <form @submit.prevent="createNewCategory">
            <div class="mb-3">
                <CFormInput type="text" label="Title" v-model="inputs.mainForm.title" />
                <template v-if="validate.mainForm.title.$errors">
                    <div v-for="(error, index) in validate.mainForm.title.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <div class="mb-3">
                <CFormSelect v-model="inputs.mainForm.parent" label="Parent">
                    <option selected="" value="null">No Parent</option>
                    <option v-for="parent in $store.state.categories.parents" :key="parent.id" :value="parent.id">{{ parent.title }}</option>
                </CFormSelect>
            </div>

            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Add Category' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { ref, reactive, computed, defineEmits } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs, email } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import categoriesApi from '@/controllers/categories'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const addNewCategoryModel = ref(false)

const inputs = reactive({
    mainForm: {
        title: null,
        parent: null,
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
    },
}))

const validate = useVuelidate(rules, inputs, { $externalResults })

const createNewCategory = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        categoriesApi
            .manageCategories(inputs.mainForm)
            .then((response) => {
                emit('success')
                console.log(response)
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.mainForm.title = null
                validate.value.$reset()
                addNewCategoryModel.value = false
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
