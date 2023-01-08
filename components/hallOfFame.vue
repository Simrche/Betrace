<template>
    <section class="mt-16">
        <h2 class=" text-xl font-bold">Hall of fame</h2>

        <div class="flex mt-8 items-center">
            <h3>
                Les grosses couilles
            </h3>
            <b-tooltip label="Le pari remporté qui a le plus gros ratio mise/côte">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <BetCard class="mt-2" :bet="bet"></BetCard>

        <div class="flex mt-8 items-center">
            <h3>
                L'expert
            </h3>
            <b-tooltip label="Le pari remporté qui a la plus grosse côte">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <BetCard class="mt-2" :bet="bet"></BetCard>

        <div class="flex mt-8 items-center">
            <h3>
                La moula
            </h3>
            <b-tooltip label="Le pari remporté qui a la plus grosse mise">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <BetCard class="mt-2" :bet="bet"></BetCard>

        <div class="flex mt-8 items-center">
            <h3>
                Le drogué
            </h3>
            <b-tooltip label="Le joueur qui a le plus grand nombre de pari">
                <span class="flex items-center mdi mdi-information ml-1"></span>
            </b-tooltip>
        </div>
        <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-2">
            <div class="flex items-center">
                <h3 class="ml-4 text-lg <sm:text-sm">Simon</h3>
            </div>

            <div class="flex">
                <h3 class="text-lg text-center <sm:text-sm">245 paris</h3>
            </div>
        </div>
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