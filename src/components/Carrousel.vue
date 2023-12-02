<template>
    <div>
        <carousel :items-to-show="1">
          <slide v-for="slide in 3" :key="slide">
            <div class="flex content-center items-center h-[250px]">
                <p>CAPA {{ slide }}</p>
            </div>
          </slide>
      
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
    </div>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  }
  </script>
  