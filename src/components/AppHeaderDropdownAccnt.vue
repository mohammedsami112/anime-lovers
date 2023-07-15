<template>
    <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
            <CAvatar :src="''" size="md" style="background-color: #ddd" />
        </CDropdownToggle>
        <CDropdownMenu class="pt-0">
            <changePassword></changePassword>
            <CDropdownItem @click="logout()"> <CIcon icon="cil-lock-locked" /> Logout </CDropdownItem>
        </CDropdownMenu>
    </CDropdown>
</template>

<script setup>
import authApi from '@/controllers/auth'
import store from '@/store'
import { useRouter } from 'vue-router'
import changePassword from '@/components/user/changePassword.vue'

const router = useRouter()

const logout = async () => {
    authApi.logout().then(async (response) => {
        await store.dispatch('logoutSuccess')
        router.push({ name: 'Login' })
    })
}
</script>
