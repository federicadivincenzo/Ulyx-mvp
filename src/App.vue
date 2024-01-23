<script setup>
import BottomNavbar from './components/BottomNavbar.vue';
import FeedPage from './pages/FeedPage.vue';
import ItineraryPage from './pages/ItineraryPage.vue';
import { inject, provide, ref } from 'vue';

const myItinerary  = ref([])

provide('itineraryArray', myItinerary)

</script>

<template>
  <div class="w-full relative">
    {{ activity }}
    <router-view />
    <BottomNavbar></BottomNavbar>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
