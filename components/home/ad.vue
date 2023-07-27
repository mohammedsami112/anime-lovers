<template>
  <v-col class="mt-3 ad" cols="12" lg="4" md="4" sm="6">
    <a :href="props.ad.url" target="_blank">
      <img :src="config.public.backendURL + props.ad.image" />
    </a>
  </v-col>
</template>

<script setup>
const props = defineProps(['ad']);
const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.ad {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
