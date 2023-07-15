import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => ({
    slider: [],
    anime: [],
    top: [],
    episodes: [],
  }),

  actions: {
    async getHomePage() {
      await useEvent('loading', true);
      const { data: homePageData } = await useMyFetch('/home');
      useEvent('loading', false);
      this.slider = homePageData.value.data.slider;
      this.anime = homePageData.value.data.latest_anime;
      this.top = homePageData.value.data.top_anime;
      this.episodes = homePageData.value.data.latest_episodes;
    },
  },
});
