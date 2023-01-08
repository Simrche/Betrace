<template>
    <header class="flex items-center">
        <h1 class="text-3xl font-bold">Betrace</h1>

        <ul class="flex gap-x-6 ml-16">
          <li class="text-lg ml-20 cursor-pointer" @click="$emit('redirection', 'bets')">Paris</li>
          <li class="text-lg ml-20 cursor-pointer" @click="$emit('redirection', 'championship')">Classements</li>
          <li class="text-lg ml-20 cursor-pointer" @click="$emit('redirection', 'hof')">Hall of Fame</li>
        </ul>
    </header>
</template>