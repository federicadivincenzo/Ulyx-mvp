<script setup>
import { ref, inject, onMounted } from 'vue';

import TappaCard from '../components/TappaCard.vue';


const myItinerary = inject('itineraryArray')
const cities = ref([])

onMounted(() => {
    getCities()
})

function getCities() {
    cities.value = new Set(myItinerary.value.map(el => el.city))
}

</script>

<template>
    <div class="container">
        <div v-if="myItinerary.length >= 0"  >
            <p class="text-2xl">My itinerary page</p>
            <TappaCard v-for="city in cities" :city="city"></TappaCard>
            {{ cities }}
        </div>
        <div v-else>
            <p> please add a activity to your itinerary</p>
        </div>
    </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.5em 1em;
}
</style>