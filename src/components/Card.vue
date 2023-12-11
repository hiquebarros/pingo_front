<template>
    <div @click="router.push('details/123')" class="flex flex-col rounded overflow-hidden bg-white cursor-pointer">
        <div class="w-full">
            <img class="p-2" src="https://web.archive.org/web/20190104085110im_/http://pingoveiculos.com.br/marca.php?img=fotos/carro4052.jpg" alt="Sunset in the mountains">
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl">Fiat Uno</div>
            <span class="text-slate-500 font-normal">2020/2020 • 69.236 KM • Automático</span>
            <h3 class="font-bold text-xl text-primary">R$ 47.180</h3>
        </div>
</div></template>

<script setup>
    import router from '../router';
</script>