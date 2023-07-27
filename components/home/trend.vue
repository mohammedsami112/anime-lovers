<template>
  <div class="trend-anime">
    <v-container>
      <div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column">
        <h4 class="section-title w-sm-100">Trending Now</h4>
        <!-- <NuxtLink to="/anime">
            <v-btn variant="tonal" color="primary"> جميع الانميات </v-btn>
          </NuxtLink> -->
      </div>
      <v-row>
        <v-col class="mt-3" cols="12" lg="3" md="4" sm="6" v-for="anime in homeStore.trend" :key="anime.id">
          <NuxtLink :to="'/anime/' + anime.id + '-' + anime.slug">
            <v-card>
              <v-img :src="config.public.backendURL + '/storage/thumbnails/' + anime.thumbnail" cover height="300px"></v-img>
              <v-card-title class="text-center">{{ anime.title }}</v-card-title>
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
