import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => ({
    slider: [],
  }),

  actions: {
    async getHomePage() {
      const homePageData = await useMyFetch('/home');
      console.log(homePageData);
      this.slider = homePageData.value.data.slider;
    },
  },
});
