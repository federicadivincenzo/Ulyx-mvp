<script setup>
</script>

<template>

    <div class="h-[calc(100%-50px)] w-full absolute bottom-0 rounded-t-2xl bg-white z-50" @dragstart="$emit('close-dropdown')">
        <input type="text">
    </div>

</template>

<style scoped>
.bg-white {
    background-color: white;
}
</style>