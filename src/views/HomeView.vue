<script setup>
  import Header from "../components/Header.vue"
  import Banner from "../components/Banner.vue"
  import Carrousel from "../components/Carrousel.vue"
  import Card from "../components/Card.vue"
  import PopOverFilter from "../components/PopOverFilter.vue"
  import { TagIcon, CalendarIcon, CurrencyDollarIcon, MagnifyingGlassIcon, TruckIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <Header />
  <div class="flex justify-center gap-2 w-full pb-4">
    <PopOverFilter title="Categoria"><TruckIcon /></PopOverFilter>
    <PopOverFilter title="Marca"><TagIcon /></PopOverFilter>
    <PopOverFilter title="Preço"><CurrencyDollarIcon /></PopOverFilter>
    <PopOverFilter title="Ano"><CalendarIcon /></PopOverFilter>
    <PopOverFilter title="Quilometragem"><MagnifyingGlassIcon /></PopOverFilter>
    <button>Limpar filtros</button>
  </div>
  <main class="bg-gray-100">
    <div class="container mx-auto">
      <div class="py-4">
        <span>20 veículos encontrados</span>
      </div>
      <div class="flex wrap gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </main>
</template>
