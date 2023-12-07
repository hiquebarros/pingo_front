<template>
    <div class="flex flex-col rounded overflow-hidden bg-white">
        <div class="w-full" @click="router.push('details/123')">
            <img class="cursor-pointer p-2" src="https://web.archive.org/web/20190104085110im_/http://pingoveiculos.com.br/marca.php?img=fotos/carro4052.jpg" alt="Sunset in the mountains">
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl">Fiat Uno</div>
            <div class="font-bold text-md">1.0</div>
            <span>Ano/Modelo 2020/2020 • 69.236 KM • Manaus, AM</span>
            <h3 class="font-bold text-xl text-primary">R$ 47.180</h3>
        </div>
        <div class="px-6">
            <span
                class="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Falar com consultor
                <i class="fa fa-whatsapp"></i>
            </span>
        </div>
</div></template>

<script setup>
    import router from '../router';
</script>