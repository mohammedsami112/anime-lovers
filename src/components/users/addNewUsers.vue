<template>
    <Button @click="addNewUserModel = true" class="mb-3" icon="pi pi-plus" label="Add New User" severity="primary" rounded size="small" />

    <Dialog v-model:visible="addNewUserModel" modal header="Add New User" :style="{ width: '30vw' }">
        <form @submit.prevent="createNewUser">
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
            <div class="mb-3">
                <CFormInput type="password" label="Password" v-model="inputs.mainForm.password" />
                <template v-if="validate.mainForm.password.$errors">
                    <div v-for="(error, index) in validate.mainForm.password.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <div class="mb-3">
                <CFormInput type="password" label="Confirm Password" v-model="inputs.mainForm.c_password" />
                <template v-if="validate.mainForm.c_password.$errors">
                    <div v-for="(error, index) in validate.mainForm.c_password.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>

            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Add User' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { ref, reactive, computed, defineEmits } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs, email } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import usersApi from '@/controllers/users'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const emit = defineEmits(['success'])
const loading = ref(false)
const toast = useToast()
const addNewUserModel = ref(false)

const inputs = reactive({
    mainForm: {
        name: null,
        email: null,
        type: null,
        password: null,
        c_password: null,
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
        password: {
            required: helpers.withMessage('Password Is Required', required),
        },
        c_password: {
            required: helpers.withMessage('Please Confirm Password', required),
            sameAs: helpers.withMessage('Password Not Match', sameAs(inputs.mainForm.password)),
        },
    },
}))

const validate = useVuelidate(rules, inputs, { $externalResults })

const createNewUser = () => {
    validate.value.$clearExternalResults()
    validate.value.mainForm.$touch()
    if (!validate.value.mainForm.$error) {
        loading.value = true
        usersApi
            .manageUsers(inputs.mainForm)
            .then((response) => {
                emit('success')
                console.log(response)
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.mainForm.name = inputs.mainForm.email = inputs.mainForm.type = inputs.mainForm.password = inputs.mainForm.c_password = null
                validate.value.$reset()
                addNewUserModel.value = false
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
</script>
