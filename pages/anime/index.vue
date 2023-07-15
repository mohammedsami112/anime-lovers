<template>
  <AnimeHomeHeader title="جميع الانيميات"></AnimeHomeHeader>
  <v-container>
    <v-row>
      <v-col class="mt-3" cols="12" lg="3" md="4" sm="6" v-for="anime in animeStore.anime.data" :key="anime.id">
        <NuxtLink :to="'/anime/' + anime.id + '-' + anime.slug">
          <v-card>
            <v-img :src="config.public.backendURL + '/storage/thumbnails/' + anime.thumbnail" cover height="200px"></v-img>
            <v-card-title class="text-center">{{ anime.title }}</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
  <SharedPagination @change="animeStore.getAnime($event, route.query)" :totalPages="animeStore.anime.last_page"></SharedPagination>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';

const route = useRoute();
const config = useRuntimeConfig();
const animeStore = useAnimeStore();

animeStore.getAnime(1, route.query);
</script>
