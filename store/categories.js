import { defineStore } from 'pinia';
// import { useEvent } from '../composables/mitt';

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
      await useEvent('loading', true);
      const { data: categoryData } = await useMyFetch(`/categories/${categoryId}`, { params: { page: page, limit: 10 } });
      useEvent('loading', false);

      this.current = categoryData.value.data;
    },
  },
});
