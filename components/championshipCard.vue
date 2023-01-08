<template>
    <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-2">
        <div class="flex items-center">
            <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">1.</h3>
            <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">Simon</h3>
        </div>

        <div class="flex w-2/5">
            <h3 class="text-lg w-1/3 text-center">10€</h3>
            <h3 class="text-lg w-1/3 text-center">1.30</h3>
            <h3 class="text-lg w-1/3 text-center text-red-600">10€</h3>
        </div>
    </div>
</template>

<script setup lang=ts>
    defineProps<{
        index: number
    }>()
</script>