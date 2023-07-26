<template>
  <div class="dark-mode">
    <div class="darkMode-icon ml-3" @click="switchMode"><font-awesome-icon icon="fa-solid fa-moon" /></div>
  </div>
</template>

<script setup>
import { useGeneralStore } from '~/store/general';

const generalStore = useGeneralStore();

const switchMode = () => {
  generalStore.setMode(generalStore.darkMode == 0 ? 1 : 0);
  localStorage.setItem('dark_mode', generalStore.darkMode);
};
</script>

<style lang="scss">
.darkMode-icon {
  transition: $mainTransition;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: $mainColor;
  }
}
</style>
