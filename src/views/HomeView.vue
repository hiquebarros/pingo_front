<script setup>
import Header from "../components/Header.vue"
import Card from "../components/Card.vue"
import PopOverFilter from "../components/PopOverFilter.vue"
import WhatsApp from "../components/WhatsApp.vue"

import {
  TagIcon, CalendarIcon, CurrencyDollarIcon, MagnifyingGlassIcon, TruckIcon, TrashIcon
} from '@heroicons/vue/24/outline'
import CategoriesList from "../components/CategoriesList.vue"
import BrandsList from "../components/BrandsList.vue"
import RangeSlider from "../components/RangeSlider.vue"
import Footer from "../components/Footer.vue"
import { ref } from "vue"

const sliderMin = ref(65);
const sliderMax = ref(150);

</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="container mx-auto lg:px-12 xl:px-60 flex justify-center flex-col">
      <div class="flex flex-wrap justify-center w-full gap-2 py-4">
        <PopOverFilter title="Categoria">
          <template #icon>
            <TruckIcon class="h-5 w-5" />
          </template>
          <template #content>
            <div>
              <h3 class="text-lg font-base">Categoria</h3>
            </div>
            <CategoriesList />
          </template>
        </PopOverFilter>
        <PopOverFilter title="Marca">
          <template #icon>
            <TagIcon class="h-5 w-5" />
          </template>
          <template #content>
            <div>
                <h3 class="text-lg font-base">Marca</h3>
              </div>
            <BrandsList />
          </template>
        </PopOverFilter>
        <PopOverFilter title="Preço">
          <template #icon>
            <CurrencyDollarIcon class="h-5 w-5" />
          </template>
          <template #content>
            <div>
              <h3 class="text-lg font-base">Preço</h3>
            </div>
            <RangeSlider :min="65" :max="368" v-model:min-value="sliderMin" v-model:max-value="sliderMax" />
          </template>
        </PopOverFilter>
        <PopOverFilter title="Ano">
          <template #icon>
            <CalendarIcon class="h-5 w-5" />
          </template>
          <template #content>
            <div>
              <h3 class="text-lg font-base">Ano</h3>
            </div>
            <RangeSlider :min="65" :max="368" v-model:min-value="sliderMin" v-model:max-value="sliderMax" />
          </template>
        </PopOverFilter>
        <PopOverFilter title="KM">
          <template #icon>
            <MagnifyingGlassIcon class="h-5 w-5" />
          </template>
          <template #content>
            <div>
              <h3 class="text-lg font-base">Quilometragem</h3>
            </div>
            <RangeSlider :min="65" :max="368" v-model:min-value="sliderMin" v-model:max-value="sliderMax" />
          </template>
        </PopOverFilter>
        <button class="items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:border-b">
          <div class="flex gap-1">
            <TrashIcon class="h-5 w-5" /><span>Limpar filtros</span>
          </div>
        </button>
      </div>
    </div>
    <main class="flex-1 justify-center bg-gray-100">
      <div class="container mx-auto lg:px-12 xl:px-60 flex justify-center flex-col">
        <div class="py-4">
          <span class="text-sm font-semibold leading-6 text-gray-900">9 veículos encontrados</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-2 pb-8">
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
    <Footer />
    <WhatsApp />
  </div>
  
</template>
