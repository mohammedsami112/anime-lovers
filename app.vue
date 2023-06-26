<template>
  <TheHeader></TheHeader>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <TheFooter></TheFooter>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';

useHead({
  titleTemplate: 'Anime Lovers - %s',
});

const categoriesStore = useCategoriesStore();
categoriesStore.getCategories();
</script>
