import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('general', {
  state: () => ({
    darkMode: 0,
  }),

  actions: {
    setMode(mode) {
      this.darkMode = mode;
    },
  },
});
