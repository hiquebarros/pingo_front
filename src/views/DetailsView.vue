<script setup>
import Header from "../components/Header.vue"
import Banner from "../components/Banner.vue"
import Carrousel from "../components/Carrousel.vue"
import Card from "../components/Card.vue"
import ToolBar from "../components/ToolBar.vue"
import { CheckIcon } from '@heroicons/vue/20/solid'
import Footer from "../components/Footer.vue"
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-1 bg-gray-100">
            <div class="container mx-auto lg:px-12 xl:px-60">
                <ToolBar/>
                <div class="grid lg:grid-cols-12 gap-4 py-4">
                    <div class="lg:col-span-7">
                        <Carrousel />
                        <div class="grid grid-cols-3 rounded shadow-lg bg-white mt-4 p-4">
                            <div class="flex flex-col mb-2">
                                <h3 class="font-base">Ano</h3>
                                <p class="font-semibold">Lorem Ipsum</p>
                            </div>
                            <div class="flex flex-col mb-2">
                                <h3>Combustível</h3>
                                <p class="font-semibold">Lorem Ipsum</p>
                            </div>
                            <div class="flex flex-col mb-2">
                                <h3>KM</h3>
                                <p class="font-semibold">Lorem Ipsum</p>
                            </div>
                            <div class="flex flex-col mb-2">
                                <h3>Câmbio</h3>
                                <p class="font-semibold">Lorem Ipsum</p>
                            </div>
                            <div class="flex flex-col mb-2">
                                <h3>Cor</h3>
                                <p class="font-semibold">Lorem Ipsum</p>
                            </div>
                            <div class="flex flex-col mb-2">
                                <h3>Categoria</h3>
                                <p class="font-semibold">Lorem Ipsum</p>
                            </div>
                        </div>
                        <div class="rounded shadow-lg bg-white p-4 mt-4">
                            <h3 class="font-semibold text-xl mb-4">Items e acessórios</h3>
                            <ul class="grid grid-cols-2">
                                <li class="flex gap-2 items-center"> <CheckIcon class="h-5 w-5"/> Lorem Ipsum</li>
                                <li class="flex gap-2 items-center"> <CheckIcon class="h-5 w-5"/> Lorem Ipsum</li>
                                <li class="flex gap-2 items-center"> <CheckIcon class="h-5 w-5"/> Lorem Ipsum</li>
                                <li class="flex gap-2 items-center"> <CheckIcon class="h-5 w-5"/> Lorem Ipsum</li>
                                <li class="flex gap-2 items-center"> <CheckIcon class="h-5 w-5"/> Lorem Ipsum</li>
                                <li class="flex gap-2 items-center"> <CheckIcon class="h-5 w-5"/> Lorem Ipsum</li>
                                <li class="flex gap-2 items-center"> <CheckIcon class="h-5 w-5"/> Lorem Ipsum</li>
                            </ul>
                        </div>
                    </div>
                    <div class="lg:col-span-5">
                        <div class="rounded shadow-lg bg-white">
                            <div class="flex flex-col justify-between p-4">
                                <div class="flex flex-col pb-4">
                                    <div class="font-bold text-xl">Fiat Uno</div>
                                    <div class="font-bold text-md">1.0</div>
                                    <span class="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing</span>
                                    <h3 class="font-bold text-xl text-primary">R$ 47.180</h3>
                                </div>
                                <div class="flex">
                                    <span
                                        class="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        Tenho interesse
                                        <i class="fa fa-wpforms"></i>
                                    </span>
                                    <span
                                        class="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        Falar com consultor
                                        <i class="fa fa-whatsapp"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <Footer />
</template>
