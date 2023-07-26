<template>
  <v-col class="mt-3 ad" cols="12" lg="4" md="4" sm="6">
    <!-- <img src="../../assets/images/test.jpg" alt="" /> -->

    <client-only>
      <!-- <script src="" data-zone="1412" async data-cfasync="false"></script> -->
    </client-only>
  </v-col>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://alwingulla.com/88/tag.min.js',
      'data-zone': 1412,
      async: true,
      ' data-cfasync': false,
    },
  ],
});
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
