<script setup>
import Chips from '../components/Chips.vue';
import SearchBar from '../components/SearchBar.vue';
import ItineraryCard from '../components/ItineraryCard.vue';
import AvatarLarge from '../components/AvatarLarge.vue';
import moodData from '../static/mood.json'

const filters = ['Periodo', 'Prezzo', 'Persone', 'Mood']

</script>

<template>
  <div class="h-full w-full py-2">
    <div class="container">
      <SearchBar></SearchBar>
      <div class="flex gap-1 overflow-x-scroll no-scrollbar">
        <Chips v-for="filter in filters" :title="filter" :isFilter="true"></Chips>
      </div>
      <div class="itinerary-container flex flex-col gap-3">
        <p class="text-2xl">I migliori itinerari</p>
        <div class="flex gap-3 overflow-x-scroll no-scrollbar snap-x">
          <ItineraryCard @click=""></ItineraryCard>
          <ItineraryCard></ItineraryCard>
          <ItineraryCard></ItineraryCard>
          <ItineraryCard></ItineraryCard>
        </div>
      </div>
    </div>
   
    <div class="container itinerary-container bg-dark-blue flex flex-col gap-3">
      <p class="text-2xl">Travel mood</p>
      <div class="flex gap-3 overflow-x-scroll no-scrollbar snap-x">
        <AvatarLarge v-for="mood in moodData" :text="mood.mood"></AvatarLarge>
      </div>
    </div>

    <div class="itinerary-container container  flex flex-col gap-3">
        <p class="text-2xl">I migliori itinerari</p>
        <div class="flex gap-3 overflow-x-scroll no-scrollbar snap-x">
          <ItineraryCard></ItineraryCard>
          <ItineraryCard></ItineraryCard>
          <ItineraryCard></ItineraryCard>
          <ItineraryCard></ItineraryCard>
        </div>
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
