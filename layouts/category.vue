<template>
  <CategoriesHeader :title="route.params.title"></CategoriesHeader>
  <slot />
  <SharedPagination @change="categoriesStore.getOneCategory(route.params.id, $event)" :totalPages="categoriesStore.current.last_page"></SharedPagination>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';

const route = useRoute();
const categoriesStore = useCategoriesStore();
</script>
