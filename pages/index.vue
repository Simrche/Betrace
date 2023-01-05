<template>
    <div class="px-48 w-full bg-slate-200 min-h-screen pt-4">
      <Header @redirection="viewSelection = $event"></Header>

      <Bets v-if="viewSelection === 'bets'" @add="viewSelection = 'create'"></Bets>

      <Create v-if="viewSelection === 'create'"></Create>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let viewSelection = ref('bets')

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: Montserrat;
  list-style: none;
}
</style>
