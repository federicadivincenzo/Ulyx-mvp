<script setup>

defineProps(['city'])
</script>

<template>
    <router-link to="/activities">
        <div href="#" class="flex items-center bg-card-blue border border-card-blue rounded-lg shadow md:flex-row md:max-w-xl hover:bg-opacity-[.8] ">
            <img class="object-cover rounded-t-lg h-24 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=3150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal grow">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                    {{ city }}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                    16 sett - 18 sett
                </p>
            </div>
        </div>
    </router-link>
</template>

<script setup>
</script>