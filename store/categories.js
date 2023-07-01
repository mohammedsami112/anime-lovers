import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
    current: {},
  }),

  actions: {
    async getCategories() {
      const categoriesData = await useMyFetch('/categories').data;
      console.log(categoriesData.value.data);
      this.categories = categoriesData.value.data;
    },
    async getOneCategory(categoryId, page = 1) {
      const { data: categoryData } = await useMyFetch(`/categories/${categoryId}`, { params: { page: page, limit: 10 } });
      this.current = categoryData.value.data;
    },
  },
});
