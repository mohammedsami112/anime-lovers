<template>
  <div class="loading-screen">
    <v-progress-circular color="primary" indeterminate :size="100"></v-progress-circular>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
}
</style>
