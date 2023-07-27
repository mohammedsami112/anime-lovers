<template>
  <div class="category-content">
    <v-container v-if="categoriesStore.current.data && categoriesStore.current.data.length > 0">
      <v-row>
        <v-col class="mt-3" cols="12" lg="3" md="4" sm="6" v-for="anime in categoriesStore.current.data" :key="anime.id">
          <NuxtLink :to="'/anime/' + anime.id + '-' + anime.slug">
            <v-card>
              <v-img :src="config.public.backendURL + '/storage/thumbnails/' + anime.thumbnail" cover height="300px"></v-img>
              <v-card-title class="text-center">{{ anime.title }}</v-card-title>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
    <SharedNotFound v-else></SharedNotFound>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';

definePageMeta({
  layout: 'category',
});

const route = useRoute();

useHead({
  title: route.params.title,
});

const config = useRuntimeConfig();
const categoriesStore = useCategoriesStore();

categoriesStore.getOneCategory(route.params.id);
</script>

<style lang="scss" scoped>
.category-content {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
