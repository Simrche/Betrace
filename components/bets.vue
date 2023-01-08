<template>

    <section class="mt-16 pb-4">

        <div class="flex justify-between">
          <h2 class=" text-xl font-bold">Paris</h2>
          <b-button type="is-primary" @click="$emit('add')">Ajouter un pari</b-button>
        </div>

        <div class="flex justify-end mt-4 px-8">
          <div class="w-1/3 flex">
            <p class="w-1/3 text-center text-slate-400 text-sm">Mise</p>
            <p class="w-1/3 text-center text-slate-400 text-sm">Côte</p>
            <p class="w-1/3 text-center text-slate-400 text-sm">Gain/Perte</p>
          </div>
        </div>

        <BetCard :bet="bet" v-for="(bets, index) in 10" :key="index" class="mt-2"></BetCard>
          <!-- <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-1">

            <div class="flex items-center">
              <span class="mdi mdi-check text-4xl text-green-500"></span>
              <h3 class="ml-4 text-lg">Simon</h3>
              <div class="ml-32">
                <h3 class="text-lg">Manchester United - Arsenal</h3>
                <p class="text-xs text-slate-400">05/01/2023</p>
              </div>
            </div>

            <div class="flex w-1/3">
              <h3 class="text-lg w-1/3 text-center">10€</h3>
              <h3 class="text-lg w-1/3 text-center">1.30</h3>
              <h3 class="text-lg w-1/3 text-center text-green-500">10€</h3>
            </div>

          </div> -->
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