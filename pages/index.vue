<template>
    <div class=" w-full bg-slate-200 min-h-screen pt-4 pb-8 <sm:px-2 sm:px-4 md:px-16 lg:px-48">
      <Header @redirection="viewSelection = $event"></Header>

      <Bets v-if="viewSelection === 'bets'" @add="viewSelection = 'create'" :bets="sortedBets"></Bets>

      <Create v-if="viewSelection === 'create'" @create="viewSelection = 'bets'; fetchBets()"></Create>

      <Championship v-if="viewSelection === 'championship'"></Championship>

      <HallOfFame v-if="viewSelection === 'hof'"></HallOfFame>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { Bet } from '~/types/types';

let viewSelection = ref('bets')

const firebaseConfig = {
  apiKey: "AIzaSyBWrm8vCcnq2aDZDivI1KbBK9kFfsKEoOM",
  authDomain: "betrace-d88e6.firebaseapp.com",
  projectId: "betrace-d88e6",
  storageBucket: "betrace-d88e6.appspot.com",
  messagingSenderId: "992930789688",
  appId: "1:992930789688:web:e0d30c472f50da7d96a9cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

let bets: Bet[] | any = ref([])

onMounted(async () => {
  fetchBets()
})

async function fetchBets() {
  let fetchBets = await getDocs(collection(db, "bets"))
  bets.value = []
  fetchBets.forEach(bet => {
    bets.value.push(bet.data())
  });
}

let sortedBets = computed(() => {
  console.log(bets.value)
  return bets.value.sort((a: Bet, b: Bet) => {
    return a.id - b.id
  }).reverse()
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: Montserrat;
  list-style: none;
}
</style>
