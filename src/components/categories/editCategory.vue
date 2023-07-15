<template>
    <Button
        @click="
            editCategoryModel = true;
            $store.dispatch('setCurrentCategory', props.categoryId)
        "
        icon="pi pi-file-edit"
        severity="success"
        rounded
        size="small"
    />
    <Dialog v-model:visible="editCategoryModel" modal :header="`Edit Category : ${$store.state.categories.current.title}`" :style="{ width: '30vw' }">
        <form @submit.prevent="editCategory">
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
                    <option value="null">No Parent</option>
                    <option v-for="parent in $store.state.categories.parents" :key="parent.id" :value="parent.id">{{ parent.title }}</option>
                </CFormSelect>
            </div>

            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Edit Category' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { ref, reactive, computed, defineEmits, defineProps, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs, email } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import store from '@/store'
import categoriesApi from '@/controllers/categories'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const props = defineProps(['categoryId'])
const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const editCategoryModel = ref(false)

const inputs = reactive({
    categoryId: null,
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

const editCategory = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        categoriesApi
            .manageUsers(inputs.mainForm, inputs.categoryId)
            .then((response) => {
                emit('success')
                console.log(response)
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.mainForm.name = inputs.mainForm.email = null
                validate.value.$reset()
                editCategoryModel.value = false
            })

            .finally(() => {
                loading.value = false
            })
    }
}

// Handel Setting Data
watch(
    () => store.state.categories.current,
    (category) => {
        inputs.categoryId = category.id
        inputs.mainForm.title = category.title
        inputs.mainForm.parent = category.parent_category == null ? null : category.parent_category.id
    },
)
</script>
