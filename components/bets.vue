<template>
    <section class="mt-16 pb-4 <sm:mt-4 <sm:pb-16">
        <div class="flex justify-between items-center">
          <h2 class=" text-xl font-bold">Paris</h2>
          <b-button type="is-primary" @click="$emit('add')">Ajouter un pari</b-button>
        </div>

        <div class="flex justify-end mt-4 px-8">
          <div class="w-1/3 flex <sm:w-2/3">
            <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Mise</p>
            <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Côte</p>
            <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Gain/Perte</p>
          </div>
        </div>

        <template v-if="bets && bets.length">
          <BetCard :bet="bet" v-for="(bet, index) in bets" :key="index" class="mt-2"></BetCard>
        </template>

        <p v-else class="text-lg text-slate-400">Pas de paris</p>
    </section>
</template>

<script setup lang="ts">
import { Bet } from '~/types/types';

  defineProps<{
    bets: Bet[]
  }>()

</script>