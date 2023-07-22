<template>
    <Button
        @click="
            editUserModel = true;
            $store.dispatch('setCurrentUser', props.userId)
        "
        icon="pi pi-file-edit"
        severity="success"
        rounded
        size="small"
    />
    <Dialog v-model:visible="editUserModel" modal :header="`Edit User : ${$store.state.users.current.name}`" :style="{ width: '30vw' }">
        <form @submit.prevent="editUser">
            <div class="mb-3">
                <CFormInput type="text" label="Name" v-model="inputs.mainForm.name" />
                <template v-if="validate.mainForm.name.$errors">
                    <div v-for="(error, index) in validate.mainForm.name.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <div class="mb-3">
                <CFormInput type="email" label="Email" v-model="inputs.mainForm.email" />
                <template v-if="validate.mainForm.email.$errors">
                    <div v-for="(error, index) in validate.mainForm.email.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>

            <div class="mb-3">
                <CFormSelect v-model="inputs.mainForm.type" label="type">
                    <option selected="" value="">Choose...</option>
                    <option value="admin">Admin</option>
                </CFormSelect>
                <template v-if="validate.mainForm.type.$errors">
                    <div v-for="(error, index) in validate.mainForm.type.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>

            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Edit User' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { ref, reactive, computed, defineEmits, defineProps, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs, email } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import store from '@/store'
import usersApi from '@/controllers/users'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const props = defineProps(['userId'])
const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const editUserModel = ref(false)

const inputs = reactive({
    userId: null,
    mainForm: {
        name: null,
        email: null,
        type: null,
    },
})

const $externalResults = reactive({
    mainForm: {},
})

const rules = computed(() => ({
    mainForm: {
        name: {
            required: helpers.withMessage('Name Is Required', required),
        },
        email: {
            required: helpers.withMessage('Email Is Required', required),
            email: helpers.withMessage('Email Invalid', email),
        },
        type: {
            required: helpers.withMessage('Type Is Required', required),
        },
    },
}))

const validate = useVuelidate(rules, inputs, { $externalResults })

const editUser = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        usersApi
            .manageUsers(inputs.mainForm, inputs.userId)
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
                editUserModel.value = false
            })
            .catch((error) => {
                console.log(error.response)
                toast.add({
                    severity: 'error',
                    detail: error.response.data.data.email[0],
                    life: 3000,
                })
            })
            .finally(() => {
                loading.value = false
            })
    }
}

// Handel Setting Data
watch(
    () => store.state.users.current,
    (user) => {
        inputs.userId = user.id
        inputs.mainForm.name = user.name
        inputs.mainForm.email = user.email
        inputs.mainForm.type = user.type
    },
)
</script>
