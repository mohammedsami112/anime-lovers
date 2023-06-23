<template>
  <homeSlider></homeSlider>
  <v-row>
    <homeAd></homeAd>
    <homeAd></homeAd>
    <homeAd></homeAd>
    <homeAd></homeAd>
  </v-row>
</template>

<script setup>
import { useHomeStore } from '~/store/home';
useHead({
  title: 'Home',
});

const homeStore = useHomeStore();

homeStore.getHomePage();
</script>
