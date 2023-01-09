<template>
    <b-collapse animation="slide" v-model="isOpen">
        <template #trigger>
            <div class="bg-white w-full flex justify-between items-center py-2 px-8" :class="{'rounded-t-xl': isOpen, 'rounded-xl': !isOpen}">
                <div class="flex items-center w-2/3 <sm:w-1/3">
                    <span class="mdi mdi-check text-4xl text-green-500 <sm:text-sm" v-if="bet.win"></span>
                    <span class="mdi mdi-close text-4xl text-red-600 <sm:text-sm" v-else></span>
                    <h3 class="ml-4 text-lg <sm:text-sm w-16 <sm:w-6">{{ bet.better }}</h3>
                    <div class="ml-16 <sm:hidden">
                        <h3 class="text-lg max-w-78 hidden lg:block truncate">{{ bet.title }}</h3>
                        <p class="text-xs text-slate-400">{{ bet.date }}</p>
                    </div>
                </div>

                <div class="flex w-1/3 <sm:w-2/3">
                    <h3 class="text-lg w-1/3 <sm:text-sm text-center">{{bet.bet}}€</h3>
                    <h3 class="text-lg w-1/3 <sm:text-sm text-center">{{bet.odd}}</h3>
                    <h3 class="text-lg w-1/3 <sm:text-sm text-center text-green-500" v-if="bet.win">{{bet.winLose}}€</h3>
                    <h3 class="text-lg w-1/3 <sm:text-sm text-center text-red-600" v-else>{{bet.winLose}}€</h3>
                </div>
            </div>
        </template>

        <div class="bg-slate-100 flex items-center px-8 py-2 rounded-b-xl">
            <p class="<sm:text-xs text-md">{{ bet.title }}</p>
        </div>
    </b-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Bet } from '~/types/types';

const props = defineProps<{
    bet: Bet
    open?: boolean
}>()

let isOpen = ref(props.open ? props.open : false)

</script>