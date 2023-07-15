<template>
    <CDropdownItem @click="changePasswordModel = true"> <CIcon icon="cil-shield-alt" /> Change Password </CDropdownItem>
    <Dialog v-model:visible="changePasswordModel" modal header="Change Your Password" :style="{ width: '30vw' }">
        <form @submit.prevent="changePassword">
            <div class="mb-3">
                <CFormInput type="password" label="Current Password" v-model="inputs.old_password" />
                <template v-if="validate.old_password.$errors">
                    <div v-for="(error, index) in validate.old_password.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <div class="mb-3">
                <CFormInput type="password" label="New Password" v-model="inputs.new_password" />
                <template v-if="validate.new_password.$errors">
                    <div v-for="(error, index) in validate.new_password.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <div class="mb-3">
                <CFormInput type="password" label="Confirm Password" v-model="inputs.c_password" />
                <template v-if="validate.c_password.$errors">
                    <div v-for="(error, index) in validate.c_password.$errors" :key="index" class="text-danger mt-2">
                        {{ error.$message }}
                    </div>
                </template>
            </div>
            <CButton color="primary" type="submit" :disabled="loading">{{ loading ? 'loading...' : 'Change Password' }}</CButton>
        </form>
    </Dialog>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs } from '@vuelidate/validators'
import { useToast } from 'primevue/usetoast'
import authApi from '@/controllers/auth'
import Dialog from 'primevue/dialog'

const loading = ref(false)
const toast = useToast()
const changePasswordModel = ref(false)

const inputs = reactive({
    old_password: null,
    new_password: null,
    c_password: null,
})

const rules = computed(() => ({
    old_password: {
        required: helpers.withMessage('Current Password Is Required', required),
    },
    new_password: {
        required: helpers.withMessage('New Password Is Required', required),
    },
    c_password: {
        required: helpers.withMessage('Please Confirm Your Password', required),
        sameAs: helpers.withMessage('Password Not Math', sameAs(inputs.new_password)),
    },
}))

const validate = useVuelidate(rules, inputs)

const changePassword = () => {
    validate.value.$touch()
    if (!validate.value.$error) {
        loading.value = true
        authApi
            .changePassword(inputs)
            .then((response) => {
                toast.add({
                    severity: 'success',
                    detail: response.message,
                    life: 3000,
                })
                inputs.new_password = inputs.old_password = inputs.c_password = null
                validate.value.$reset()
                changePasswordModel.value = false
            })
            .catch((error) => {
                toast.add({
                    severity: 'error',
                    detail: error.response.data.data.error,
                    life: 3000,
                })
            })
            .finally(() => {
                loading.value = false
            })
    }
}
</script>
