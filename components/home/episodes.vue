<template>
  <div class="latest-episodes">
    <v-container>
      <div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column">
        <h4 class="section-title w-sm-100">آخر الحلقات المضافة</h4>
        <NuxtLink to="/anime">
          <v-btn variant="outlined" color="primary"> المزيد من الحلقات </v-btn>
        </NuxtLink>
      </div>
      <v-row>
        <v-col class="mt-3" cols="12" lg="3" md="4" sm="6" v-for="episode in homeStore.episodes" :key="episode.id">
          <NuxtLink :to="'/anime/' + episode.anime.id + '-' + episode.anime.slug + '/' + episode.id + '-' + episode.title">
            <v-card>
              <v-img :src="config.public.backendURL + '/storage/episodes/thumbnails/' + episode.thumbnail" cover height="200px"></v-img>
              <v-card-title class="text-center">{{ episode.title }}</v-card-title>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home';

const config = useRuntimeConfig();
const homeStore = useHomeStore();
</script>
