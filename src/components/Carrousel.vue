<template>
    <div>
        <carousel :items-to-show="1">
          <slide v-for="slide in 6" :key="slide">
            <div class="flex content-center items-center">
              <img class="w-full" src="https://web.archive.org/web/20190104084224im_/http://pingoveiculos.com.br/marca.php?img=fotos/carro4314.jpg"/>
            </div>
          </slide>
      
          <template #addons>
            <navigation />
            <div class="flex justify-center">
              <pagination />
            </div>
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

.carousel__pagination{
  border-radius: 5%;
  background-color: lightgrey;
  position: absolute;
  bottom: 5px;
  padding: 5px;
}

img{
  object-fit: fit;
  border-radius: 10%;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background-color: lightgrey;
  border-radius: 10%
  
}
</style>
  