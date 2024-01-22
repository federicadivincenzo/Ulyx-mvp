<script setup>
import { ref, inject, onMounted, watch } from 'vue';
import ActivityCard from '../components/ActivityCard.vue';
import GoBackIcon from '../assets/GoBackIcon.vue';
import { useRouter } from 'vue-router'
import Basebutton from '../components/basebutton.vue';
import AddActivity from '../components/AddActivity.vue';

const router = useRouter()


const myItinerary = inject('itineraryArray')
const activities = ref([])
const showDropdown = ref(false)


// whenever question changes, this function will run
watch(myItinerary.value, (newArray, oldArray) => {
    console.log('change')
    getActivities()
   
})


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
    <div class="container h-full relative">
        <div class="flex gap-4">
            <GoBackIcon @click="router.back()"></GoBackIcon>
            <p class="text-2xl">Activities</p>
        </div>
            
        {{ activities }}
        <template v-for="activity in activities">
            <Transition>
                <ActivityCard :activity="activity"></ActivityCard>
            </Transition>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>