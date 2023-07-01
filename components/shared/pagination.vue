<template>
  <div class="pagination mb-5">
    <v-pagination active-color="primary" v-model="page" :length="props.totalPages" :total-visible="3"></v-pagination>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';
const props = defineProps({
  totalPages: {
    default: 1,
  },
});
const emit = defineEmits({
  change: (v) => {
    return v;
  },
});
const page = ref(1);

watch(
  () => page.value,
  (value) => {
    emit('change', value);
  }
);
</script>

<style lang="scss">
.pagination {
  .v-pagination__prev,
  .v-pagination__next {
    transform: rotate(180deg);
  }
}
</style>
