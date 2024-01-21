<script setup>
import SearchIcon from '../assets/SearchIcon.vue';
import FiltersIcon from '../assets/FiltersIcon.vue';
</script>

<template>
    <div class="w-full relative flex flex-row bg-dark-blue py-2 px-2 flex items-center rounded-full hover:drop-shadow">
        <div class="flex items-center gap-4 w-full p-4 h-6 rounded-l-lg focus:outline-none">
            <SearchIcon></SearchIcon>
            <input
            type="search"
            id="default-search"
            class="block text-gray-900 bg-transparent w-full focus:outline-none  "
            placeholder="Search..."
            required
            />
            
        </div>
        
        <div
        class="p-2 flex items-center bg-mid-blue rounded-full focus:bg-opacity-60" @click="console.log('emit')"
        >
            <FiltersIcon></FiltersIcon>
        
        </div>
    </div>
</template>

<style scoped>
</style>