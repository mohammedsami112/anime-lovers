<template>
    <Toast />
    <router-view />
</template>

<script setup>
import Toast from 'primevue/toast'
import store from '@/store'

// if (localStorage.getItem('access_token')) {
//     store.dispatch('setUserData')
// }
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>
