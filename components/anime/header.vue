<template>
  <div class="anime-header mb-5" style="direction: rtl">
    <v-container>
      <div class="content d-flex align-center">
        <div class="thumbnail ml-5"><img class="w-100" :src="config.public.backendURL + '/storage/thumbnails/' + animeStore.current.data.thumbnail" alt="" /></div>
        <div class="anime-meta mr-5 w-100">
          <h2 class="title">{{ animeStore.current.data.title }}</h2>
          <div class="categories mt-5">
            <NuxtLink v-for="category in animeStore.current.data.anime_categories" :key="category.id" :to="`/category/${category.category.id}-${category.category.title}`">
              <v-btn color="primary" variant="tonal" class="ml-3">
                <span>{{ category.category.title }}</span>
              </v-btn>
            </NuxtLink>
          </div>
          <p class="description mt-5">{{ animeStore.current.data.description }}</p>
          <v-row class="mt-5 anime-details">
            <v-col cols="12" md="6">
              <ul>
                <li>
                  النوع : <NuxtLink :to="{ path: '/anime', query: { type: animeStore.current.data.anime_type.id } }">{{ animeStore.current.data.anime_type.title }}</NuxtLink>
                </li>
                <li>
                  حالة الانمي : <NuxtLink :to="{ path: '/anime', query: { status: animeStore.current.data.anime_status.id } }">{{ animeStore.current.data.anime_status.title }}</NuxtLink>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="6">
              <ul>
                <li>
                  المصدر : <span>{{ animeStore.current.data.source }}</span>
                </li>
                <li>
                  بداية العرض : <span>{{ animeStore.current.data.start_from }}</span>
                </li>
              </ul>
            </v-col>
          </v-row>
          <div class="anime-links mt-5">
            <a :href="animeStore.current.data.teaser" target="_blank"
              ><v-btn color="primary" flat><span style="color: #fff">العرض التشويقي</span></v-btn></a
            >
            <a class="mr-3" :href="animeStore.current.data.mal_site" target="_blank"><v-btn variant="tonal" color="primary">صفحة الأنمي على موقع MAL</v-btn></a>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';

const props = defineProps(['anime']);
const config = useRuntimeConfig();
const animeStore = useAnimeStore();
</script>

<style lang="scss" scoped>
.anime-header {
  background: url('~/assets/images/background.png') center center fixed;
  position: relative;
  .content {
    position: relative;
    z-index: 9;
    h2,
    .description {
      color: #fff;
    }

    .anime-details {
      li {
        list-style: none;
        color: #fff;
        a,
        span {
          color: $mainColor;
        }
      }
    }

    .thumbnail {
      width: 450px;
      img {
        border-radius: 10px;
      }
    }
  }

  &::before {
    content: '';
    background-color: #000000ab;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
