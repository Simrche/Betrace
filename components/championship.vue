<template>
    <section class="mt-16">
        <h2 class=" text-xl font-bold">Classements</h2>

        <b-tabs class="mt-4">
            <b-tab-item label="All Time">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Gain/Perte</p>
                    </div>
                </div>

                <ChampionshipCard :index="index" :bets="betsByPlayers[player]" v-for="(player, index) in playersChampionship" :key="`week-${index}`"></ChampionshipCard>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Bet } from '~/types/types';
import { uniqBy } from "lodash";

const props = defineProps<{
    bets: Bet[];
}>()

let betsByPlayers = computed(() => {
    return props.bets.reduce((winLoseByPlayer, bet) => {
        if (!winLoseByPlayer[bet.better]) winLoseByPlayer[bet.better] = [];
        winLoseByPlayer[bet.better].push(bet);

        return winLoseByPlayer;
    }, {} as Record<string, Bet[]>);
})

let players = computed(() => {
    return uniqBy(props.bets, 'better').map(bet => bet.better)
})

let playersChampionship = computed(() => {
    let data: Record<string, number> = {}

    for(const player of players.value) {
        data[player] = betsByPlayers.value[player].map(bet => +bet.winLose).reduce((a, b) => a + b, 0)
    }

    let championship = players.value.sort((a: string, b: string) => {
        return data[a] - data[b]
    })

    return championship.reverse()
})

</script>