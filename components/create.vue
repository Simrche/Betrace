<template>
    <section class="mt-16">
        <h2 class=" text-xl font-bold">Ajouter un pari</h2>

        <div class="mt-8">
            <b-field label="C'est qui ?">
                <b-select placeholder="Quel parieur est-tu ?" v-model="initialBet.better">
                    <option>Simon</option>
                    <option>Léo</option>
                    <option>Hugo</option>
                    <option>Toms</option>
                </b-select>
            </b-field>

            <b-field label="Tu as gagné ?" class="w-48">
                <b-radio-button v-model="initialBet.win"
                    :native-value="false"
                    type="is-danger is-outlined">
                    <b-icon icon="close"></b-icon>
                    <span>Nope</span>
                </b-radio-button>

                <b-radio-button v-model="initialBet.win"
                    :native-value="true"
                    type="is-success is-outlined">
                    <b-icon icon="check"></b-icon>
                    <span>Yep</span>
                </b-radio-button>
            </b-field>

            <b-field label="Titre">
                <b-input placeholder="Victoire de Arsenal contre Manchester United" v-model="initialBet.title"></b-input>
            </b-field>

            <b-field label="Mise" class="w-48">
                <b-numberinput step="0.1" min="0" exponential controls-position="compact" controls-rounded v-model="initialBet.bet"></b-numberinput>
            </b-field>

            <b-field label="Côte" class="w-48">
                <b-numberinput step="0.1" min="1" exponential controls-position="compact" controls-rounded v-model="initialBet.odd"></b-numberinput>
            </b-field>

            <div v-if="initialBet.win !== null">
                <p :class="{'text-green-500': initialBet.win, 'text-red-600': !initialBet.win}">
                    {{ initialBet.win ? `Gain : ${(initialBet.bet * initialBet.odd - initialBet.bet).toFixed(2)}` : `Perte : ${initialBet.bet.toFixed(2)}` }}
                </p>
            </div>

            <div class="flex justify-end">
                <b-button type="is-primary" @click="save()">Publier</b-button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { last } from '@antfu/utils';
import { initializeApp } from '@firebase/app';
import { getFirestore, addDoc, collection, getDocs } from '@firebase/firestore';
import { ref } from 'vue';

const emit = defineEmits<{ (event: "create"): void }>();

let initialBet = ref({
    win: null,
    title: "",
    bet: 0,
    odd: 1,
    better: null
})

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

async function save() {
    let fetchBets = await getDocs(collection(db, "bets"))

    let date = new Date

    if(fetchBets.docs.length <= 1) {
        await addDoc(collection(db, 'bets'), {
            id: fetchBets.docs.length + 1,
            ...initialBet.value,
            date: `${date.getDate() > 10 ? date.getDate() : '0' + date.getDate() }/${(date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)}/${date.getFullYear()}`,
            winLose: initialBet.value.win ? +(initialBet.value.bet * initialBet.value.odd - initialBet.value.bet).toFixed(2) : -(initialBet.value.bet).toFixed(2),
            createdAt: date.setDate((new Date).getDate() + 7)
        })

        emit('create')

        return;
    }

    let lastBet = fetchBets.docs.sort((a, b) => {
        return a.data().id - b.data().id
    }).reverse()[0].data()

    await addDoc(collection(db, 'bets'), {
        id: lastBet.id + 1,
        ...initialBet.value,
        date: `${date.getDate() > 10 ? date.getDate() : '0' + date.getDate() }/${(date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)}/${date.getFullYear()}`,
        winLose: initialBet.value.win ? +(initialBet.value.bet * initialBet.value.odd - initialBet.value.bet).toFixed(2) : -(initialBet.value.bet).toFixed(2),
        createdAt: date.setDate((new Date).getDate() - 10)
    })

    emit('create')
}

</script>