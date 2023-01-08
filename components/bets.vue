<template>

    <section class="mt-16 pb-4">

        <div class="flex justify-between">
          <h2 class=" text-xl font-bold">Paris</h2>
          <b-button type="is-primary" @click="$emit('add')">Ajouter un pari</b-button>
        </div>

        <div class="flex justify-end mt-4 px-8">
          <div class="w-1/3 flex">
            <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Mise</p>
            <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Côte</p>
            <p class="w-1/3 text-center text-slate-400 text-sm <sm:text-[0.8rem]">Gain/Perte</p>
          </div>
        </div>

        <BetCard :bet="bet" v-for="(bets, index) in 10" :key="index" class="mt-2"></BetCard>
    </section>
</template>

<script setup lang="ts">

  let bet = {
    win: false,
    cote: 1.30,
    mise: 10,
    money: -10,
    title: 'Manchester United - Arsenal',
    better: 'Simon',
    date: "05/01/2023"
  }

</script>