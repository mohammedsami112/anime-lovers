<template>
  <div class="category-header d-flex align-center justify-center mb-5">
    <h2>قسم : {{ props.title }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['title']);
</script>

<style lang="scss" scoped>
.category-header {
  background: url('~/assets/images/background.png');
  height: 266px;
  position: relative;
  h2 {
    position: relative;
    z-index: 9;
    color: #fff;
  }
  &::before {
    content: '';
    background-color: #000000ab;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
