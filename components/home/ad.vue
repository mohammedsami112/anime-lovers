<template>
  <v-col class="mt-3 ad" cols="12" lg="4" md="4" sm="6">
    <!-- <img src="../../assets/images/test.jpg" alt="" /> -->

    <client-only> </client-only>
  </v-col>
</template>

<script setup>
useHead({
  script: [
    {
      children: `(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('outoctillerytor.com',6165012,document.createElement('script'))`,
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
