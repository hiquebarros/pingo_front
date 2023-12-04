<template>
    <div>
        <carousel :items-to-show="1">
          <slide v-for="slide in 3" :key="slide">
            <div class="flex content-center items-center">
              <img class="w-full" src="https://web.archive.org/web/20190104084224im_/http://pingoveiculos.com.br/marca.php?img=fotos/carro4314.jpg"/>
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

<style>
.carousel__item {
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  max-height: 450px;
}

img{
  object-fit: fit;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background-color: #d1ad04;
  border-radius: 10%
  
}
</style>
  