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
import { useGeneralStore } from '~/store/general';
import siteIcon from '~/assets/images/favicon-32x32.png';
import siteIcon512 from '~/assets/images/android-chrome-512x512.png';
// import { useListen } from './composables/mitt';
const generalStore = useGeneralStore();

const darkMode = ref('dark');
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
      name: 'monetag',
      content: '1314fd80502fbcbfe09c00d1525d75d3',
    },
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
  bodyAttrs: {
    class: computed(() => {
      if (generalStore.darkMode == 1) return 'dark';

      return '';
    }),
  },
});

const loading = ref(true);
useListen('loading', (status) => {
  loading.value = status;
});
const categoriesStore = useCategoriesStore();
categoriesStore.getCategories();

onMounted(() => {
  if (localStorage.getItem('dark_mode') == null) {
    localStorage.setItem('dark_mode', 0);
  } else {
    generalStore.setMode(localStorage.getItem('dark_mode'));
  }
});
</script>
