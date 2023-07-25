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
import siteIcon from '~/assets/images/favicon-32x32.png';
import siteIcon512 from '~/assets/images/android-chrome-512x512.png';
// import { useListen } from './composables/mitt';

useHead({
  titleTemplate: 'Anime Hart - %s',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: siteIcon,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: siteIcon512,
    },
    {
      rel: 'canonical',
      href: 'https://animehart.com',
    },
  ],
  meta: [
    {
      name: 'author',
      content: 'Anime Hart',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:site_name',
      content: 'Anime Hart',
    },
    {
      property: 'og:locale',
      content: 'ar_AR',
    },
    {
      property: 'og:locale:alternate',
      content: 'ar_AR',
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
