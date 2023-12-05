<script setup>
  import Header from "../components/Header.vue"
  import Banner from "../components/Banner.vue"
  import Carrousel from "../components/Carrousel.vue"
  import Card from "../components/Card.vue"
  import PopOverFilter from "../components/PopOverFilter.vue"
  import WhatsApp from "../components/WhatsApp.vue"

  import { TagIcon, CalendarIcon, CurrencyDollarIcon, MagnifyingGlassIcon, TruckIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-wrap justify-center w-full gap-2 p-4 shadow-lg">
        <PopOverFilter title="Categoria"><TruckIcon class="h-5 w-5"/></PopOverFilter>
        <PopOverFilter title="Marca"><TagIcon class="h-5 w-5"/></PopOverFilter>
        <PopOverFilter title="Preço"><CurrencyDollarIcon class="h-5 w-5"/></PopOverFilter>
        <PopOverFilter title="Ano"><CalendarIcon class="h-5 w-5"/></PopOverFilter>
        <PopOverFilter title="KM"><MagnifyingGlassIcon class="h-5 w-5"/></PopOverFilter>
        <button class="items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:border-b">
          <div class="flex gap-1">
            <TrashIcon class="h-5 w-5"/><span>Limpar filtros</span>
          </div>
        </button>
    </div>
    <main class="flex-1 justify-center bg-gray-100">
      <div class="container mx-auto lg:px-12 xl:px-60 flex justify-center flex-col">
        <div class="py-4">
            <span class="text-sm font-semibold leading-6 text-gray-900">20 veículos encontrados</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
    </main>
    <WhatsApp />
  </div>
</template>
