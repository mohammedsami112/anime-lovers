<template>
  <homeSlider></homeSlider>
  <v-container>
    <v-row class="mb-4">
      <homeAd v-for="ad in homeStore.ads" :key="ad.id" :ad="ad"></homeAd>
      <!-- <homeAd></homeAd>
      <homeAd></homeAd> -->
    </v-row>
  </v-container>
  <HomeTrend></HomeTrend>
  <homeAnime></homeAnime>
  <HomeEpisodes></HomeEpisodes>
  <HomeTopAnime></HomeTopAnime>
  <HomeMostLikes></HomeMostLikes>
</template>

<script setup>
import { useHomeStore } from '~/store/home';
useHead({
  title: 'الرئيسية',
  meta: [
    {
      name: 'description',
      content: 'Anime Hart',
    },
  ],
});

const homeStore = useHomeStore();

homeStore.getHomePage();
</script>

<style lang="scss" scoped>
.latest-anime {
  padding-top: 60px;
  padding-bottom: 60px;
}

.latest-episodes {
  @extend .latest-anime;
  background-color: #fbfbfb;
}

.top-anime {
  @extend .latest-anime;
}

.trend-anime {
  @extend .latest-episodes;
}

.like-anime {
  @extend .latest-episodes;
}
</style>
