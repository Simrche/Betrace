<template>
    <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8">
        <div class="flex items-center">
            <span class="mdi mdi-check text-4xl text-green-500 <sm:text-sm" v-if="bet.win"></span>
            <span class="mdi mdi-close text-4xl text-red-600 <sm:text-sm" v-else></span>
            <h3 class="ml-4 text-lg <sm:text-sm w-16 <sm:w-6">{{ bet.better }}</h3>
            <div class="ml-32 <sm:hidden">
                <h3 class="text-lg max-w-78 hidden lg:block truncate">{{ bet.title }}</h3>
                <p class="text-xs text-slate-400">{{ bet.date }}</p>
            </div>
        </div>

        <div class="flex w-1/3 <sm:w-2/3">
            <h3 class="text-lg w-1/3 <sm:text-sm text-center">{{bet.bet}}€</h3>
            <h3 class="text-lg w-1/3 <sm:text-sm text-center">{{bet.odd}}</h3>
            <h3 class="text-lg w-1/3 <sm:text-sm text-center text-green-500" v-if="bet.win">{{bet.winLose}}€</h3>
            <h3 class="text-lg w-1/3 <sm:text-sm text-center text-red-600" v-else>{{bet.winLose}}€</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bet } from '~/types/types';

defineProps<{
    bet: Bet
}>()

</script>