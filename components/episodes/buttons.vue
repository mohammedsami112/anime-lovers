<template>
  <div class="next">
    <NuxtLink
      :to="
        animeStore.current.episode.next_episode != null
          ? '/anime/' +
            animeStore.current.episode.anime.id +
            '-' +
            animeStore.current.episode.anime.slug +
            '/' +
            animeStore.current.episode.next_episode.id +
            '-' +
            animeStore.current.episode.next_episode.slug
          : ''
      "
    >
      <v-btn color="primary" variant="tonal" size="large">الحلقة التالية</v-btn>
    </NuxtLink>
  </div>
  <div class="prev">
    <NuxtLink
      :event="false"
      :to="
        animeStore.current.episode.prev_episode != null
          ? '/anime/' +
            animeStore.current.episode.anime.id +
            '-' +
            animeStore.current.episode.anime.slug +
            '/' +
            animeStore.current.episode.prev_episode.id +
            '-' +
            animeStore.current.episode.prev_episode.slug
          : ''
      "
    >
      <v-btn color="primary" variant="tonal" size="large">الحلقة السابقة</v-btn>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';

const animeStore = useAnimeStore();
</script>
