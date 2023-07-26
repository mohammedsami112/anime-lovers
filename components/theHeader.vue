<template>
  <header class="theHeader w-100" :class="{ scrollShadow: scrollShadow }">
    <v-container class="d-flex justify-space-between align-center">
      <div class="left-icons d-flex align-center">
        <HeaderDarkMode></HeaderDarkMode>
        <headerSearch></headerSearch>
      </div>
      <div class="logo">
        <NuxtLink to="/"><h2>Anime Hart</h2></NuxtLink>
      </div>
      <div class="right-icons"><headerMenu></headerMenu></div>
    </v-container>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';
import headerSearch from '@/components/header/search.vue';

const scrollShadow = ref(false);

const handelHeaderScroll = () => {
  if (window.scrollY >= 100) {
    scrollShadow.value = true;
  } else {
    scrollShadow.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handelHeaderScroll);
});
</script>

<style lang="scss" scoped>
.theHeader {
  transition: $mainTransition;
  position: fixed;
  z-index: 999;
  background-color: #fff;
  top: 0;
  &.scrollShadow {
    box-shadow: 1px 1px 10px #3333333d;
  }
  .logo {
    h2 {
      color: $mainColor;
      text-transform: uppercase;
    }
  }
}
</style>
