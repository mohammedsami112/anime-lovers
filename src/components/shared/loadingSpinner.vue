<template>
    <div class="loading-page">
        <ProgressSpinner />
    </div>
</template>

<script setup>
import ProgressSpinner from 'primevue/progressspinner'
</script>

<style lang="scss">
.loading-page {
    position: fixed;
    z-index: 99999;
    background-color: #3333337a;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    align-items: center;
}
</style>
