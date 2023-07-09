<template>
  <episodesHeader v-if="Object.keys(animeStore.current.episode).length > 0"></episodesHeader>
  <v-container>
    <div class="episode-player w-100 d-flex justify-center align-center">
      <episodesPlayer v-if="Object.keys(animeStore.current.episode).length > 0"></episodesPlayer>
    </div>
  </v-container>
</template>
<script setup>
import { useAnimeStore } from '~/store/anime';

const route = useRoute();
const animeStore = useAnimeStore();

console.log(route);

animeStore.getOneEpisode(route.params.id);
</script>
