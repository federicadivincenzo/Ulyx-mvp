<script setup>
defineProps(['text'])
</script>

<template>
    <div class="min-w-fit flex flex-col gap-3 items-center">
        <img class="w-20 h-20 rounded-full bg-red-400" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar">
        <p class="w-full text-center text-wrap">{{ text }}</p>
    </div>
</template>
   

<style>
</style>