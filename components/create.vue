<template>
    <section class="mt-16">
        <h2 class=" text-xl font-bold">Ajouter un pari</h2>

        <div class="mt-8">
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
                <b-input placeholder="Arsenal - Manchester United" v-model="initialBet.title"></b-input>
            </b-field>

            <b-field label="Mise" class="w-48">
                <b-numberinput step="0.1" min="0" exponential controls-position="compact" controls-rounded v-model="initialBet.mise"></b-numberinput>
            </b-field>

            <b-field label="Côte" class="w-48">
                <b-numberinput step="0.1" min="1" exponential controls-position="compact" controls-rounded v-model="initialBet.cote"></b-numberinput>
            </b-field>

            <div>
                <p :class="{'text-green-500': initialBet.win, 'text-red-600': !initialBet.win}">
                    {{ initialBet.win ? `Gain : ${(initialBet.mise * initialBet.cote - initialBet.mise).toFixed(2)}` : `Perte : ${initialBet.mise}` }}
                </p>
            </div>

            <div class="flex justify-end">
                <b-button type="is-primary">Publier</b-button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let initialBet = ref({
    win: null,
    title: "",
    mise: 0,
    cote: 1,
})

</script>