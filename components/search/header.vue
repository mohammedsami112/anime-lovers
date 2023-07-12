<template>
  <div class="search-header d-flex align-center justify-center mb-5">
    <div class="content d-flex flex-column align-center justify-center">
      <h2>نتأج البحث عن : {{ route.query.query }}</h2>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';
import { useAnimeStore } from '~/store/anime';

const route = useRoute();
const animeStore = useAnimeStore();
</script>

<style lang="scss" scoped>
.search-header {
  background: url('~/assets/images/background.png') center center fixed;
  height: 266px;
  position: relative;
  h2,
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
