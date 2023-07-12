<template>
  <div class="search-box">
    <div class="search-icon" @click="searchBoxStatus = true"><font-awesome-icon icon="fa-solid fa-search" /></div>
    <v-expand-transition mode="out-in">
      <div class="box" v-if="searchBoxStatus">
        <v-container class="d-flex align-center justify-center w-100 h-100">
          <div class="close-box" @click="searchBoxStatus = false"><font-awesome-icon icon="fa-solid fa-times"></font-awesome-icon></div>
          <form @submit.prevent="handelSearchAction()" class="search">
            <v-text-field v-model="searchQuery" variant="underlined" label="البحث في الموقع" type="text"></v-text-field>
          </form>
        </v-container>
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimeStore } from '~/store/anime';

const router = useRouter();
const animeStore = useAnimeStore();
const searchBoxStatus = ref(false);
const searchQuery = ref(null);

const handelSearchAction = () => {
  if (router.currentRoute.value.name == 'search') {
    animeStore.searchAnime(searchQuery.value);
  }
  router.push({ path: 'search', query: { query: searchQuery.value } });
  searchBoxStatus.value = false;
};
</script>

<style lang="scss" scoped>
.search-box {
  position: relative;
  .search-icon {
    transition: $mainTransition;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      color: $mainColor;
    }
  }
  .close-box {
    @extend .search-icon;
    font-size: 36px;
    position: absolute;
    top: 50px;
    right: 100px;
  }
  .box {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999;
    top: 0;
    box-shadow: 1px 1px 10px #33333340;
    .search {
      width: 600px;
      max-width: 100%;
    }
  }
}
</style>
