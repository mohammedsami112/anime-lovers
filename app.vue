<template>
  <TheHeader></TheHeader>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';

useHead({
  titleTemplate: 'Anime Lovers - %s',
});

const categoriesStore = useCategoriesStore();
categoriesStore.getCategories();
</script>
