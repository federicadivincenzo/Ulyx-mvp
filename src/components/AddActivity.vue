<script setup>
import { onMounted, ref } from 'vue';

const input = ref(null);


onMounted(()=>{
    //input.focus()
})
</script>

<template>
    <Transition name="slide-fade">
        <div class="h-[calc(100vh-180px)] w-full absolute bottom-0 rounded-t-2xl z-50 bg-main-blue flex flex-col items-center gap-8 p-6 shadow-3xl" >
            <div class="line h-1 w-8 full rounded bg-main-gray-text" @drag="$emit('close-dropdown')"></div>
            <input ref="input" type="text" class="w-full" v-focus>
         </div>
    </Transition>
    

</template>

<style scoped>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(620px);
  opacity: 0;
}
.bg-white {
    background-color: white;
}
</style>