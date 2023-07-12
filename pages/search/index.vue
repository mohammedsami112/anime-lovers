<template>
  <searchHeader></searchHeader>
  <div class="search-content">
    <v-container>
      <v-row>
        <v-col class="mt-3" cols="12" lg="3" md="4" sm="6" v-for="anime in animeStore.search.data" :key="anime.id">
          <NuxtLink :to="'/anime/' + anime.id + '-' + anime.slug">
            <v-card>
              <v-img :src="config.public.backendURL + '/storage/thumbnails/' + anime.thumbnail" cover height="200px"></v-img>
              <v-card-title class="text-center">{{ anime.title }}</v-card-title>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <SharedPagination @change="animeStore.searchAnime(route.query.query, $event)" :totalPages="animeStore.search.last_page"></SharedPagination>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';

const route = useRoute();
const config = useRuntimeConfig();
const animeStore = useAnimeStore();

animeStore.searchAnime(route.query.query);
</script>
