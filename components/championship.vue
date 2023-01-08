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

                <ChampionshipCard :index="index" v-for="(player, index) in 4" :key="index"></ChampionshipCard>
            </b-tab-item>

            <b-tab-item label="Mois">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Gain/Perte</p>
                    </div>
                </div>

                <ChampionshipCard :index="index" v-for="(player, index) in 4" :key="index"></ChampionshipCard>
            </b-tab-item>

            <b-tab-item label="All Time">
                <div class="flex justify-end mt-4 px-8">
                    <div class="w-2/5 flex">
                        <p class="w-1/3 text-center text-slate-400 text-sm">Mise Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Côte Moyenne</p>
                        <p class="w-1/3 text-center text-slate-400 text-sm">Gain/Perte</p>
                    </div>
                </div>

                <ChampionshipCard :index="index" v-for="(player, index) in 4" :key="index"></ChampionshipCard>
            </b-tab-item>
        </b-tabs>
    </section>
</template>