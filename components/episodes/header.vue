<template>
  <div class="episode-header d-flex align-center justify-center mb-5 text-center">
    <div class="content d-flex flex-column align-center justify-center">
      <h2>{{ animeStore.current.episode.anime.title }} - {{ animeStore.current.episode.title }}</h2>
      <p class="mt-3" v-if="animeStore.current.episode.comment != null">{{ animeStore.current.episode.comment }}</p>
      <div class="episode-meta d-flex align-center justify-center w-100 mt-4">
        <!-- <span class="report"><NuxtLink to="/contact-us">ابلاغ عن مشكلة</NuxtLink> <font-awesome-icon class="ml-2" icon="fa-solid fa-bug" /></span> -->
        <span class="date">{{ moment(animeStore.current.episode.created_at).format('YYYY-MM-DD') }} <font-awesome-icon class="ml-2" icon="fa-solid fa-clock" /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';
import { useAnimeStore } from '~/store/anime';

const animeStore = useAnimeStore();
</script>

<style lang="scss" scoped>
.episode-header {
  background: url('~/assets/images/background.png') center center fixed;
  height: 266px;
  position: relative;
  h2,
  p,
  .episode-meta {
    position: relative;
    z-index: 9;
    color: #fff;
  }
  .episode-meta {
    .report {
      a {
        color: $mainColor;
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
