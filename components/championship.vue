<template>
    <section class="mt-16">
        <h2 class=" text-xl font-bold">Classements</h2>

        <b-tabs class="mt-4">
            <b-tab-item label="Semaine">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Gain/Perte</p>
                    </div>
                </div>

                <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-2" v-for="(player, index) in 4" :key="index">
                    <div class="flex items-center">
                    <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">1.</h3>
                    <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">Simon</h3>
                    </div>

                    <div class="flex w-2/5">
                    <h3 class="text-lg w-1/3 text-center">10€</h3>
                    <h3 class="text-lg w-1/3 text-center">1.30</h3>
                    <h3 class="text-lg w-1/3 text-center text-red-600">10€</h3>
                    </div>
                </div>
            </b-tab-item>

            <b-tab-item label="Mois">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Gain/Perte</p>
                    </div>
                </div>

                <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-2" v-for="(player, index) in 4" :key="index">
                    <div class="flex items-center">
                    <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">1.</h3>
                    <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">Simon</h3>
                    </div>

                    <div class="flex w-2/5">
                    <h3 class="text-lg w-1/3 text-center">10€</h3>
                    <h3 class="text-lg w-1/3 text-center">1.30</h3>
                    <h3 class="text-lg w-1/3 text-center text-red-600">10€</h3>
                    </div>
                </div>
            </b-tab-item>

            <b-tab-item label="All Time">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Gain/Perte</p>
                    </div>
                </div>

                <div class="bg-white w-full flex justify-between items-center py-2 rounded-xl px-8 mt-2" v-for="(player, index) in 4" :key="index">
                    <div class="flex items-center">
                    <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">1.</h3>
                    <h3 class="ml-4 text-lg" :class="{'text-yellow-400': index === 0, 'text-gray-400': index === 1, 'text-amber-800': index === 2}">Simon</h3>
                    </div>

                    <div class="flex w-2/5">
                    <h3 class="text-lg w-1/3 text-center">10€</h3>
                    <h3 class="text-lg w-1/3 text-center">1.30</h3>
                    <h3 class="text-lg w-1/3 text-center text-red-600">10€</h3>
                    </div>
                </div>
            </b-tab-item>
        </b-tabs>
    </section>
</template>