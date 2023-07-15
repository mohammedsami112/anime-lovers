<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="4">
                    <CCardGroup>
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm class="needs-validation" novalidate :validated="loginValidation" @submit.prevent="submitLogin">
                                    <h1>Login</h1>
                                    <p class="text-medium-emphasis">Sign In to your account</p>
                                    <CAlert dismissible @close="errorMessage = null" color="danger" v-if="errorMessage != null">{{ errorMessage }}</CAlert>
                                    <CInputGroup class="mb-3 validation">
                                        <CInputGroupText>
                                            <CIcon icon="cil-user" />
                                        </CInputGroupText>
                                        <CFormInput v-model="payload.email" type="email" feedbackInvalid="Email Is Required" placeholder="Enter Your Email" required />
                                    </CInputGroup>
                                    <CInputGroup class="mb-4 has-">
                                        <CInputGroupText>
                                            <CIcon icon="cil-lock-locked" />
                                        </CInputGroupText>
                                        <CFormInput v-model="payload.password" feedbackInvalid="Password Is Required" type="password" placeholder="Enter Your Password" required />
                                    </CInputGroup>
                                    <CRow>
                                        <CCol :xs="6">
                                            <CButton :disabled="loading" type="submit" color="primary" class="px-4"> {{ loading ? 'loading ...' : 'Login' }} </CButton>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store'
import authApi from '@/controllers/auth'

const router = useRouter()
const loginValidation = ref(null)
const loading = ref(false)
const errorMessage = ref(null)
const payload = reactive({
    email: null,
    password: null,
})

const submitLogin = (e) => {
    const fromElement = e.currentTarget
    if (fromElement.checkValidity() === true) {
        loading.value = true
        authApi
            .login(payload)
            .then((response) => {
                console.log(response.data)
                store.dispatch('loginSuccess', response.data)
                router.push({ name: 'Home' })
            })
            .catch((error) => {
                errorMessage.value = error.response.data.data.error
            })
            .finally(() => {
                loading.value = false
            })
    }
    loginValidation.value = true
}
</script>
