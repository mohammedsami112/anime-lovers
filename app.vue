<template>
  <sharedLoading v-if="loading"></sharedLoading>
  <TheHeader></TheHeader>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>

  <TheFooter></TheFooter>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';
// import { useListen } from './composables/mitt';

useHead({
  titleTemplate: 'Anime Lovers - %s',
  meta: [
    {
      name: 'referrer',
      content: 'no-referrer-when-downgrade',
    },
  ],
});

const loading = ref(true);
useListen('loading', (status) => {
  loading.value = status;
});
const categoriesStore = useCategoriesStore();
categoriesStore.getCategories();
</script>
