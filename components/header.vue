<template>
    <header class="flex items-center">
        <h1 class="text-3xl font-bold">Betrace</h1>

        <ul class="gap-x-6 ml-16 <md:gap-x-2 <md:ml-2 flex items-center">
          <li class="text-lg ml-20 <md:text-sm <md:ml-2 cursor-pointer" @click="$emit('redirection', 'bets')">Paris</li>
          <li class="text-lg ml-20 <md:text-sm <md:ml-2 cursor-pointer" @click="$emit('redirection', 'championship')">Classements</li>
          <li class="text-lg ml-20 <md:text-sm <md:ml-2 cursor-pointer" @click="$emit('redirection', 'hof')">Hall of Fame</li>
        </ul>
    </header>
</template>