<script setup>
import Chips from './Chips.vue';
import Line from './Line.vue';
import AddIcon from '../assets/AddIcon.vue';
import BaseButton from '../components/BaseButton.vue'
import TickIcon from '../assets/TickIcon.vue'
import { inject, provide, ref } from 'vue';

const props = defineProps({
    activity: Object
})

const test = inject('itineraryArray')

const handleItinerary = (act) => {
    if ( !test.value.includes(act)) {
        test.value.push(act)
    } else {
        let found = test.value.indexOf(act)
        test.value.splice(found, 1)
    }
    
    console.log(test.value)
}

</script>

<template>
    <div class="max-w-sm py-4 px-4 bg-white bg-dark-blue rounded-lg shadow flex flex-col gap-4">
        
        <div class="flex items-center justify-between">
            <Chips :title="activity.category"></Chips>
            <AddIcon v-if="!test.includes(activity)" @click="handleItinerary(activity)"></AddIcon>
            <TickIcon v-else @click="handleItinerary(activity)"></TickIcon>
        </div>
        <div>
            <p class="mb-2 text-lg font-semibold tracking-tight">{{ activity.title }}</p>
            <p class="mb-3 font-normal text-sm text-gray-500 ">{{ activity.description }}</p>
        </div>
       <Line></Line>
       <div class="flex h-fit items-center justify-between">
            <div class="flex -space-x-2 overflow-hidden">
                <img class="inline-block h-6 w-6 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img class="inline-block h-6 w-6 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img class="inline-block h-6 w-6 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                <img class="inline-block h-6 w-6 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <BaseButton>Approfondisci</BaseButton>
       </div>
       
    </div>
</template>