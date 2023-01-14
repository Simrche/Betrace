<template>
    <header class="flex <sm:flex-col items-center">
        <h1 class="text-3xl font-bold">Betrace</h1>

        <ul class="gap-x-6 ml-16 <md:gap-x-2 <md:ml-2 flex items-center <sm:hidden">
          <li class="text-lg ml-20 <md:text-md <md:ml-2 cursor-pointer" @click="$emit('redirection', 'bets')" :class="{'font-bold': tab === 'bets'}">Paris</li>
          <li class="text-lg ml-20 <md:text-md <md:ml-2 cursor-pointer" @click="$emit('redirection', 'championship')" :class="{'font-bold': tab === 'championship'}">Classements</li>
          <li class="text-lg ml-20 <md:text-md <md:ml-2 cursor-pointer" @click="$emit('redirection', 'hof')" :class="{'font-bold': tab === 'hof'}">Hall of Fame</li>
        </ul>

        <div class="fixed bg-white w-full h-16 bottom-0 hidden justify-around <sm:flex z-10">
          <div class="flex flex-col justify-center items-center w-1/3" :class="{'bg-slate-300': tab === 'bets'}" @click="$emit('redirection', 'bets')">
            <span class="mdi mdi-cash-multiple text-2xl"></span>
            <p :class="{'font-bold': tab === 'bets'}" class="text-sm">Paris</p>
          </div>

          <div class="flex flex-col justify-center items-center w-1/3" :class="{'bg-slate-300': tab === 'championship'}" @click="$emit('redirection', 'championship')">
            <span class="mdi mdi-podium text-2xl"></span>
            <p :class="{'font-bold': tab === 'championship'}" class="text-sm">Classements</p>
          </div>

          <div class="flex flex-col justify-center items-center w-1/3" :class="{'bg-slate-300': tab === 'hof'}" @click="$emit('redirection', 'hof')">
            <span class="mdi mdi-medal text-2xl"></span>
            <p :class="{'font-bold': tab === 'hof'}" class="text-sm">Hall of Fame</p>
          </div>
        </div>
    </header>
</template>

<script setup lang="ts">

defineProps<{
  tab: string
}>()

</script>