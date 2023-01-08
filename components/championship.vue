<template>
    <section class="mt-16">
        <h2 class=" text-xl font-bold">Classements</h2>

        <b-tabs class="mt-4" v-model="tab">
            <b-tab-item value="allTime" label="All Time">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Gain/Perte</p>
                    </div>
                </div>

                <template v-if="betsByPlayers">
                    <ChampionshipCard :index="index" :bets="betsByPlayers[player]" v-for="(player, index) in playersChampionship" :key="`week-${index}`"></ChampionshipCard>
                </template>
            </b-tab-item>

            <b-tab-item value="month" label="Mois">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Gain/Perte</p>
                    </div>
                </div>

                <template v-if="betsByPlayers">
                    <ChampionshipCard :index="index" :bets="betsByPlayers[player]" v-for="(player, index) in playersChampionship" :key="`week-${index}`"></ChampionshipCard>
                </template>
            </b-tab-item>

            <b-tab-item value="week" label="Semaine">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Gain/Perte</p>
                    </div>
                </div>

                <template v-if="betsByPlayers">
                    <ChampionshipCard :index="index" :bets="betsByPlayers[player]" v-for="(player, index) in playersChampionship" :key="`week-${index}`"></ChampionshipCard>
                </template>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Bet } from '~/types/types';
import { uniqBy } from "lodash";

const props = defineProps<{
    bets: Bet[];
}>()

let tab = ref('allTime')

let filteredBets = computed(() => {
    if(tab.value === 'allTime') return props.bets

    let date = new Date
    
    // TODO : faire par semaine du Lundi au Dimanche et par mois du 1 au 31

    if(tab.value === 'week') return props.bets.filter(bet => {
        return bet.createdAt > date.setDate((new Date).getDate() - 7)
    })

    if(tab.value === 'month') return props.bets.filter(bet => {
        return bet.createdAt > date.setDate((new Date).getDate() - 31)
    })
})

let betsByPlayers = computed(() => {
    if(!filteredBets.value) return undefined

    return filteredBets.value.reduce((winLoseByPlayer, bet) => {
        if (!winLoseByPlayer[bet.better]) winLoseByPlayer[bet.better] = [];
        winLoseByPlayer[bet.better].push(bet);

        return winLoseByPlayer;
    }, {} as Record<string, Bet[]>);
})

let players = computed(() => {
    return uniqBy(filteredBets.value, 'better').map(bet => bet.better)
})

let playersChampionship = computed(() => {
    if(!betsByPlayers.value) return undefined

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