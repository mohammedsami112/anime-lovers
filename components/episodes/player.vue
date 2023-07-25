<template>
  <div class="d-flex flex-column-reverse flex-md-row episode-player">
    <div class="servers mt-5 mt-md-0 w-md-auto">
      <h5>اختر سيرفر المشاهدة</h5>
      <ul>
        <li v-for="(server, index) in servers" :key="index" :class="{ active: server.embed_url == selectedServer.embed_url }" @click="handelSelectedServer(server)">{{ server.title }}</li>
      </ul>
    </div>
    <div class="player">
      <iframe :src="selectedServer.embed_url" allowfullscreen frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { useAnimeStore } from '~/store/anime';

const animeStore = useAnimeStore();
const servers = JSON.parse(animeStore.current.episode.servers);
const selectedServer = ref();

const handelSelectedServer = (server) => {
  selectedServer.value = server;
};

handelSelectedServer(servers[0]);
</script>

<style lang="scss" scoped>
.servers {
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 250px;
  margin-left: 10px;
  overflow: hidden;
  height: 400px;
  h5 {
    background-color: #5151512e;
    padding: 10px;
    margin-bottom: 10px;
  }
  ul {
    overflow-y: auto;
    height: calc(100% - 40px);
    li {
      cursor: pointer;
      list-style: none;
      margin-bottom: 10px;
      padding: 10px;
      transition: $mainTransition;
      &.active,
      &:hover {
        background-color: #d8d8d8;
      }
    }
  }
}

.player {
  width: 700px;
  height: 400px;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
