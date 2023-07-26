<template>
  <div class="menu-box">
    <div class="menu-icon" @click="menuBoxStatus = true"><font-awesome-icon icon="fa-solid fa-bars" /></div>
    <div class="box">
      <v-layout>
        <v-navigation-drawer location="left" v-model="menuBoxStatus" temporary>
          <v-list :lines="false" nav>
            <v-list-subheader>القائمة</v-list-subheader>
            <v-list-item to="/" value="home" title="الرئيسية" color="primary"> </v-list-item>
            <v-list-item to="anime" value="anime" title="قائمة الانمي" color="primary"> </v-list-item>
            <!-- <v-list-item to="/anime?type=1" value="movies" color="primary"> افلام الانمي</v-list-item> -->
            <v-list-subheader v-if="store.categories.length > 0">الاقسام</v-list-subheader>
            <NuxtLink :to="'/category/' + category.id + '-' + category.title" v-for="category in store.categories" :key="category.id">
              <v-list-item :to="'/category/' + category.id + '-' + category.title" :value="category.id" :title="category.title" color="primary"> </v-list-item>
            </NuxtLink>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </div>
  </div>
</template>
<script setup>
import { useCategoriesStore } from '~/store/categories';
import { ref } from 'vue';
const store = useCategoriesStore();
const menuBoxStatus = ref(false);
</script>
<style lang="scss" scoped>
.v-navigation-drawer__scrim {
  position: fixed;
}
.menu-icon {
  transition: $mainTransition;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: $mainColor;
  }
}
</style>
