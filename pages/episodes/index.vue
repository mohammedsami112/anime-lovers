<template>
  <AnimeHomeHeader title="جميع الحلقات"></AnimeHomeHeader>
  <v-container>
    <v-row>
      <v-col class="mt-3" cols="12" lg="3" md="4" sm="6" v-for="episode in animeStore.episodes.data" :key="episode.id">
        <NuxtLink :to="'/anime/' + episode.anime.id + '-' + episode.anime.slug + '/' + episode.id + '-' + episode.slug">
          <v-card>
            <v-img :src="config.public.backendURL + '/storage/episodes/thumbnails/' + episode.thumbnail" cover height="200px"></v-img>
            <v-card-title class="text-center">{{ episode.title }}</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
  <SharedPagination @change="animeStore.getEpisodes($event)" :totalPages="animeStore.episodes.last_page"></SharedPagination>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';

useHead({
  title: 'الحلقات',
  meta: [
    {
      name: 'description',
      content: 'Anime Hart',
    },
  ],
});

const config = useRuntimeConfig();
const animeStore = useAnimeStore();

animeStore.getEpisodes();
</script>
