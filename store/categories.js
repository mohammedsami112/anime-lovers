import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
  }),

  actions: {
    async getCategories() {
      const categoriesData = await useMyFetch('/categories');
      console.log(categoriesData.value.data);
      this.categories = categoriesData.value.data;
    },
  },
});
