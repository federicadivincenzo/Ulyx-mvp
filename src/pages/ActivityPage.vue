<script setup>
import { ref, inject, onMounted } from 'vue';
import ActivityCard from '../components/ActivityCard.vue';
import GoBackIcon from '../assets/GoBackIcon.vue';
import { useRouter } from 'vue-router'
import Basebutton from '../components/basebutton.vue';
import AddActivity from '../components/AddActivity.vue';

const router = useRouter()


const myItinerary = inject('itineraryArray')
const activities = ref([])
const showDropdown = ref(false)

onMounted(() => {
    
    getActivities()
    console.log(activities.value)
})

function getActivities() {
    activities.value = myItinerary.value.filter(el => {
        return el.city === "Bangkok"
        //activities.value.push(el.city === 'Bangkok')}) 
    })
}

</script>

<template>
    <div class="container">
        <div class="flex gap-4">
            <GoBackIcon @click="router.back()"></GoBackIcon>
            <p class="text-2xl">Activities</p>
        </div>
            
        {{ activities }}
        <template v-for="activity in activities">
            <ActivityCard :activity="activity"></ActivityCard>
        </template>
        <div class="flex align-center justify-between">
            <Basebutton>✨ Lasciati ispirare</Basebutton>
            <Basebutton @click="showDropdown = true">✍🏻 Aggiungi Attività</Basebutton>
        </div>
        
    </div>
    <AddActivity v-show="showDropdown" @close-dropdown="showDropdown = false"></AddActivity>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.5em 1em;
  margin-bottom: 3em;
}
</style>