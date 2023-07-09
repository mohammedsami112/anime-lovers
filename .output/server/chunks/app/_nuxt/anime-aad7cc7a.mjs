import { d as defineStore, b as useMyFetch } from '../server.mjs';

const useAnimeStore = defineStore("anime", {
  state: () => ({
    current: {
      data: {},
      episodes: {},
      episode: {}
    }
  }),
  actions: {
    async getOneAnime(animeId, page = 1) {
      const { data: animeData } = await useMyFetch(`/anime/${animeId}`, { params: { page } });
      this.current.data = animeData.value.data.anime;
      this.current.episodes = animeData.value.data.episodes;
    },
    async getOneEpisode(episodeId) {
      const { data: episodeData } = await useMyFetch(`/episodes/${episodeId}`);
      this.current.episode = episodeData.value.data;
    }
  }
});

export { useAnimeStore as u };
//# sourceMappingURL=anime-aad7cc7a.mjs.map
