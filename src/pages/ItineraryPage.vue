<script setup>


import ActivityCard from '../components/ActivityCard.vue';
import ImageCarousel from '../components/ImageCarousel.vue';
import Line from '../components/Line.vue';
import TabActivities from '../components/TabActivities.vue';

defineProps({
    itinerary: Object
})

const tabs = ['Day 1', 'Day 2', 'Day 3']

</script>

<template>
  <div class="h-full w-full pb-12">
    <ImageCarousel/>
    <div class="container flex flex-col">
        <div class="itinerary-details ">
            <a href="#">
                <p class="mb-2 text-2xl font-medium tracking-tight text-main-gray-text">Esplorazione Culturale e Tropicale</p>
            </a>
            <div class="w-full flex justify-between items-center">
                <p class="text-xs font-normal text-gray-700 dark:text-gray-400">Bangkok, Chiang Mai, Koh Samui</p>
                <p class="text-xs font-normal text-gray-700 dark:text-gray-400">€€-€€€</p>
            </div>
            <div class="w-full flex gap-2 items-center">
                <p class="text-xs font-normal text-gray-700">12 giorni </p>
                <p>⭐️</p>
                <p class="text-xs font-normal text-gray-700">4.3 (302)</p>
            </div>
            <a href="" class="underline text-xs text-gray-700">Vedi su mappa</a>
        </div>
        <Line></Line>
        <div>
            <p class="text-lg font-medium">About</p>
            <p class="text-sm font-light">Benvenuti in un indimenticabile viaggio di 12 giorni attraverso la Thailandia, un'esperienza meticciata di cultura, natura e avventura. Da Bangkok, la metropoli culturale, a Chiang Mai, l'oasi naturale, fino a Krabi, paradiso costiero, questo itinerario è plasmato dalla saggezza dei viaggiatori e offre un assaggio variegato delle meraviglie che la "Terra del Sorriso" ha da offrire. Preparatevi per un'immersione totale nell'anima vibrante della Thailandia.</p>
        </div>
        <Line></Line>
        <div class="itinerary-controller">
            <div class="top-controller flex flex-col gap-1">
                <div class="bg-dark-blue grid grid-cols-2 rounded-t-[2.5rem] py-3">
                    <div class="border-r-2 border-white grid place-items-center">
                        <p class="font-medium">Range Prezzo</p>
                        <p>$50 - $150</p>
                    </div> 
                    <div class="grid place-items-center">
                        <p class="font-medium">Giorni</p>
                        <p>6 Sett - 18 Sett</p>
                    </div>
                </div>
                <div class="bg-dark-blue grid grid-cols-2 rounded-b-[2.5rem] py-3">
                    <div class="border-r-2 border-white grid place-items-center">
                        <p class="font-medium">Persone</p>
                        <p>6</p>
                    </div>
                    <div class="grid place-items-center w-full ">
                        <p class="font-medium">Mood</p>
                        <div class="flex -space-x-2 rtl:space-x-reverse">
                            <img class="w-6 h-6  border-2 border-white rounded-full dark:border-gray-800" src="#" alt="">
                            <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800" src="#" alt="">
                            <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800" src="#" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Line></Line>
        <!-- TAB CONTROLLER  -->
        <TabActivities :tabs="tabs"></TabActivities>
        
    </div>
    

  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  gap: 1.6em;
  padding: 1.5em 1em;
}

</style>
