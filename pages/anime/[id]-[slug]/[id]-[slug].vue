<template>
  <episodesHeader v-if="Object.keys(animeStore.current.episode).length > 0"></episodesHeader>
  <v-container>
    <div class="episode-player w-100 d-flex justify-center align-center">
      <episodesPlayer v-if="Object.keys(animeStore.current.episode).length > 0"></episodesPlayer>
    </div>
    <div class="next-prev-episodes d-flex flex-column flex-sm-row align-center justify-space-between w-100 mt-5">
      <episodesButtons v-if="Object.keys(animeStore.current.episode)"></episodesButtons>
    </div>
    <div class="download-episodes mt-5">
      <episodesDownload></episodesDownload>
    </div>
    <div class="related-episodes mt-5">
      <episodesRelated></episodesRelated>
    </div>
  </v-container>
  <SharedPagination @change="animeStore.getOneAnime(animeStore.current.episode.anime.id, $event)" :totalPages="animeStore.current.episodes.last_page"></SharedPagination>
  <ClientOnly>
    <v-container>
      <Disqus />
    </v-container>
  </ClientOnly>
</template>
<script setup>
import { useAnimeStore } from '~/store/anime';

const config = useRuntimeConfig();
const route = useRoute();
const animeStore = useAnimeStore();
const episodeTitle = computed(() => {
  return animeStore.current.episode.title;
});

useHead({
  title: episodeTitle,
});

const getEpisode = async () => {
  await animeStore.getOneEpisode(route.params.id);

  animeStore.getOneAnime(animeStore.current.episode.anime.id);
};

getEpisode();
</script>
