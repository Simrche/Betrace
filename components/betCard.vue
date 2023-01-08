<template>
    <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8">
        <div class="flex items-center">
            <span class="mdi mdi-check text-4xl text-green-500" v-if="bet.win"></span>
            <span class="mdi mdi-close text-4xl text-red-600" v-else></span>
            <h3 class="ml-4 text-lg">{{ bet.better }}</h3>
            <div class="ml-32">
                <h3 class="text-lg max-w-78">{{ bet.title }}</h3>
                <p class="text-xs text-slate-400">{{ bet.date }}</p>
            </div>
        </div>

        <div class="flex w-1/3">
            <h3 class="text-lg w-1/3 text-center">{{bet.mise}}€</h3>
            <h3 class="text-lg w-1/3 text-center">{{bet.cote}}</h3>
            <h3 class="text-lg w-1/3 text-center text-red-600">{{bet.money}}€</h3>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    bet: {win: boolean, title: string, mise: number, cote: number, better: string, money: number, date: string}
}>()

</script>