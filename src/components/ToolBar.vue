<script setup>
    import { ShareIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
</script>
<template>
    <div class="flex justify-between pt-4 w-full">
        <div class="flex gap-2 items-center">
            <ArrowLeftIcon class="h-5 h-5" />
            <span class="text-sm font-semibold leading-6 text-gray-900">Voltar</span>
        </div>
        <div class="flex gap-2 items-center">
            <ShareIcon class="h-5 h-5" />
            <span class="text-sm font-semibold leading-6 text-gray-900">Compartilhar</span>
        </div>
    </div>
</template>