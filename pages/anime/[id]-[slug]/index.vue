<template>
  <animeHeader v-if="Object.keys(animeStore.current.data).length > 0"></animeHeader>
  <!-- Start Episodes -->
  <v-container class="mt-5">
    <div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column">
      <h4 class="section-title w-sm-100">حلقات الانمي</h4>
      <div class="w-25 episodes-search">
        <v-text-field
          v-model="searchEpisode"
          @change="animeStore.getOneAnime(route.params.id, 1, searchEpisode)"
          variant="underlined"
          label="البحث عن حلقة"
          type="input"
          hint="اضغط على زر Enter للبحث"
        ></v-text-field>
      </div>
    </div>
    <v-row>
      <v-col class="mt-3" cols="12" lg="3" md="4" sm="6" v-for="episode in animeStore.current.episodes.data" :key="episode.id">
        <NuxtLink :to="'/anime/' + episode.anime.id + '-' + episode.anime.slug + '/' + episode.id + '-' + episode.slug">
          <v-card>
            <v-img :src="config.public.backendURL + '/storage/episodes/thumbnails/' + episode.thumbnail" cover height="200px"></v-img>
            <v-card-title class="text-center">{{ episode.title }}</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
  <!-- End Episodes -->
  <SharedPagination @change="animeStore.getOneAnime(route.params.id, $event)" :totalPages="animeStore.current.episodes.last_page"></SharedPagination>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';
const route = useRoute();
const animeStore = useAnimeStore();
const animeDescription = computed(() => {
  return animeStore.current.data.description;
});
const animeTitle = computed(() => {
  return animeStore.current.data.title;
});

const searchEpisode = ref(null);

useHead({
  title: animeTitle,
  meta: [
    {
      name: 'description',
      content: animeDescription,
    },
  ],
});

const config = useRuntimeConfig();

animeStore.getOneAnime(route.params.id);
</script>
