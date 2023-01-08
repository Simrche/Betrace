<template>
    <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-2">
        <div class="flex items-center">
            <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">{{ index + 1 }}</h3>
            <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">{{ stats.better }}</h3>
        </div>

        <div class="flex w-2/5">
            <h3 class="text-lg w-1/3 text-center">{{stats.bet}}€</h3>
            <h3 class="text-lg w-1/3 text-center">{{stats.odds}}</h3>
            <h3 class="text-lg w-1/3 text-center text-green-500" v-if="+stats.winLose > 0">{{stats.winLose}}€</h3>
            <h3 class="text-lg w-1/3 text-center text-red-600" v-else>{{stats.winLose}}€</h3>
        </div>
    </div>
</template>

<script setup lang=ts>
import { mean } from 'lodash';
import { computed } from 'vue';
import { Bet } from '~/types/types';

const props = defineProps<{
    index: number,
    bets: Bet[],
}>()

let stats = computed(() => {
    return {
        better: props.bets[0].better,
        odds: mean(props.bets.map(bet => bet.odd)),
        bet: mean(props.bets.map(bet => bet.bet)),
        winLose: props.bets.map(bet => +bet.winLose).reduce((a, b) => a + b, 0).toFixed(2)
    }
})
</script>