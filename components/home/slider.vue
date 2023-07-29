<template>
  <v-container>
    <Swiper
      :modules="[SwiperAutoplay, SwiperFreeMode, SwiperNavigation]"
      :slides-per-view="1"
      :spaceBetween="30"
      :loop="true"
      navigation
      :effect="'creative'"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
    >
      <SwiperSlide v-for="slider in homeStore.slider" :key="slider.id">
        <NuxtLink :to="'/anime/' + slider.id + '-' + slider.slug">
          <img :src="config.public.backendURL + '/storage/thumbnails/' + slider.thumbnail" alt="" />
          <div class="content">
            <div class="content-item">
              <h3>{{ slider.title }}</h3>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHomeStore } from '~/store/home';

const config = useRuntimeConfig();
const homeStore = useHomeStore();
</script>
<style lang="scss">
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: auto;
  width: 400px;
  height: 400px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
    .content-item {
      color: #fff;
      padding: 10px;
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  background-color: hsla(0, 0%, 100%, 0.75);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    font-size: 20px;
    color: #333;
  }
}
</style>
