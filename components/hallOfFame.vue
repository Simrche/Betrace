<template>
    <section class="mt-16 <sm:mt-4 <sm:pb-16">
        <h2 class=" text-xl font-bold">Hall of fame</h2>

        <div class="flex mt-8 items-center">
            <h3>
                Le nouveau riche
            </h3>
            <b-tooltip size="is-small" multilined label="Le plus gros gain">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <BetCard class="mt-2" :bet="theRich" :open="true" v-if="theRich"></BetCard>
        <p class="text-sm text-slate-500" v-else>Il n'y a pas d'expert ici</p>


        <div class="flex mt-8 items-center">
            <h3>
                L'expert
            </h3>
            <b-tooltip size="is-small" multilined label="Le pari remporté qui a la plus grosse côte">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <BetCard class="mt-2" :bet="theExpert" :open="true" v-if="theExpert"></BetCard>
        <p class="text-sm text-slate-500" v-else>Il n'y a pas d'expert ici</p>

        <div class="flex mt-8 items-center">
            <h3>
                Les grosses couilles
            </h3>
            <b-tooltip size="is-small" multilined label="Le pari qui a la plus grosse mise avec une côte minimum de 1.8">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <BetCard class="mt-2" :bet="theBalls" v-if="theBalls" :open="true"></BetCard>
        <p class="text-sm text-slate-500" v-else>Il n'y a pas de grosses couilles ici</p>

        <div class="flex mt-8 items-center">
            <h3>
                Le drogué
            </h3>
            <b-tooltip size="is-small" multilined label="Le joueur qui a le plus grand nombre de pari">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-2" v-if="theDrugman">
            <div class="flex items-center">
                <h3 class="ml-4 text-lg <sm:text-sm">{{theDrugman.name}}</h3>
            </div>

            <div class="flex">
                <h3 class="text-lg text-center <sm:text-sm">{{theDrugman.count}} paris</h3>
            </div>
        </div>
        <p class="text-sm text-slate-500" v-else>Il n'y a pas de drogué ici</p>

    </section>
</template>

<script setup lang="ts">
import { groupBy } from 'lodash';
import { computed } from 'vue';
import { Bet } from '~/types/types';

const props = defineProps<{
    bets: Bet[]
}>()

let initialBet = props.bets

let theRich = computed(() => {
    return initialBet.sort((a, b) => {
        return a.winLose - b.winLose
    })[initialBet.length - 1]
})

let theExpert = computed(() => {
    return initialBet.filter(bet => bet.win).sort((a, b) => {
        return a.odd - b.odd
    })[initialBet.filter(bet => bet.win).length - 1]
})

let theBalls = computed(() => {
    let ball = props.bets.filter(bet => bet.odd >= 1.8).sort((a, b) => {
        return a.bet - b.bet
    })

    if(ball.length) return ball[ball.length - 1]
    else return undefined
})

let theDrugman = computed(() => {
    let drugman = Object.values(groupBy(props.bets, 'better')).sort((a, b) => {
        return a.length - b.length
    }).reverse()[0]

    return {
        count: drugman.length,
        name: drugman[0].better
    }
})

</script>