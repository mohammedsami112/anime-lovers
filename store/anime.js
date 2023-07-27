import { defineStore } from 'pinia';
// import { useEvent } from '../composables/mitt';

export const useAnimeStore = defineStore('anime', {
  state: () => ({
    anime: {},
    episodes: {},
    current: {
      data: {},
      episodes: {},
      episode: {},
    },
    search: {},
  }),

  actions: {
    async getAnime(page = 1, queries = {}) {
      await useEvent('loading', true);
      const { data: anime } = await useMyFetch('/anime', { params: { page: page, ...queries } });
      useEvent('loading', false);
      this.anime = anime.value.data;
    },
    async getEpisodes(page = 1) {
      await useEvent('loading', true);
      const { data: episodes } = await useMyFetch('/episodes', { params: { page: page } });
      useEvent('loading', false);

      this.episodes = episodes.value.data;
    },
    async searchAnime(query, page = 1) {
      await useEvent('loading', true);
      const { data: searchData } = await useMyFetch('/anime', { params: { search: query, page: page } });
      useEvent('loading', false);

      this.search = searchData.value.data;
    },
    async getOneAnime(animeId, page = 1) {
      await useEvent('loading', true);
      const { data: animeData } = await useMyFetch(`/anime/${animeId}`, { params: { page: page } });
      useEvent('loading', false);

      this.current.data = animeData.value.data.anime;
      this.current.episodes = animeData.value.data.episodes;
    },
    async getOneEpisode(episodeId) {
      await useEvent('loading', true);
      const { data: episodeData } = await useMyFetch(`/episodes/${episodeId}`);
      useEvent('loading', false);

      episodeData.value.data.servers = JSON.parse(episodeData.value.data.servers);
      episodeData.value.data.download = JSON.parse(episodeData.value.data.download);

      this.current.episode = episodeData.value.data;
    },
  },
});
