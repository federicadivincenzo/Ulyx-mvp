<script setup>
import ActivityCard from './ActivityCard.vue';
import { ref, onMounted } from 'vue';
import data from '../static/data-itineraries.json'

const active = ref(true)

const tabs = ['Day 1', 'Day 2', 'Day 3']
const activeIndex = ref(0)

</script>

<template>
    <div class="activities-container flex flex-col gap-4">
        <div class="border-b flex border-gray-200 dark:border-gray-700">
            <ul v-for="(tab, index) in tabs" 
                :class="['flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400', 
                        {'border-b-2 border-main-orange': index === activeIndex}]"
                        @click="activeIndex = index">
                <li class="me-2">
                    <p href="#" :class="['inline-flex items-center justify-center p-4 border-transparent rounded-t-lg group']" aria-current="page">
                        {{ tab }}
                    </p>
                </li>
            </ul>
        </div>
        <div class="activities-details flex flex-col gap-3">
            <div v-for="activity in data.itineraries[0].activities[activeIndex].details">
                <p>{{ activity }}</p>
                <ActivityCard :activity="activity"></ActivityCard>
            </div>
            
        </div>
    </div>
</template>

<style></style>