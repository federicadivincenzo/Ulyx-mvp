<script setup>
import ArrowDownIcon from '../assets/ArrowDownIcon.vue';

defineProps(['title', 'isFilter'])
</script>

<template>
    <div class="flex items-center gap-2 justify-between bg-transparent text-main-gray-text text-sm font-medium me-2 px-4 py-1 rounded-full border border-main-gray-text">
        <span>{{ title }}</span>
        <span v-if="isFilter">
            <ArrowDownIcon></ArrowDownIcon>
        </span>
    </div>
</template>