<template>
    <header class="flex items-center">
        <h1 class="text-3xl font-bold">Betrace</h1>

        <ul class="flex gap-x-6">
          <li class="text-lg ml-20 cursor-pointer" @click="$emit('redirection', 'bets')">Paris</li>
          <li class="text-lg ml-20 cursor-pointer" @click="$emit('redirection', 'championship')">Classements</li>
        </ul>
    </header>
</template>