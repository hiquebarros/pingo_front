<script setup>
import Header from "../components/Header.vue"
import Carrousel from "../components/Carrousel.vue"
import ToolBar from "../components/ToolBar.vue"
import DetailsCard from "../components/DetailsCard.vue"
import CarItemsCard from "../components/CarItemsCard.vue"
import SpecsCard from "../components/SpecsCard.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-1 bg-gray-100 pb-16">
            <div class="container mx-auto lg:px-12 xl:px-60">
                <ToolBar />
                <div class="grid grid-cols-12 gap-4 py-4">
                    <div class="grid col-span-12 lg:col-span-8">
                        <Carrousel />
                    </div>
                    <div class="grid col-span-12 lg:col-span-4">
                        <DetailsCard />
                    </div>
                    <div class="grid col-span-12 lg:col-span-8">
                        <SpecsCard />
                    </div>
                    <div class="grid col-span-12 lg:col-span-8">
                        <CarItemsCard />
                    </div>
                </div>
            </div>
        </main>
    </div>
    <Footer />
</template>
