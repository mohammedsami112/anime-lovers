<template>
  <div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column">
    <h4 class="section-title w-sm-100">روابط تحميل الحلقة</h4>
  </div>
  <div class="d-flex flex-column flex-md-row download-links">
    <!-- <li v-for="(download, index) in animeStore.current.episode.download" :key="index">
      <a>{{ download.title }}</a>
    </li> -->

    <a class="ml-md-3" target="_blank" v-for="(download, index) in animeStore.current.episode.download" :key="index" :href="download.url">
      <v-btn color="primary" variant="tonal" size="large">{{ download.title }}</v-btn>
    </a>
  </div>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';

const config = useRuntimeConfig();
const animeStore = useAnimeStore();
</script>
