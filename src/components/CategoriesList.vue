<script setup>

import {
    ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon,
} from '@heroicons/vue/24/outline'

const categories = [
    { name: 'Hatch', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Sedã', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Picape', href: '#', icon: CursorArrowRaysIcon },
    { name: 'SUV', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Premium', href: '#', icon: CursorArrowRaysIcon },
]
</script>

<template>
    <div v-for="item in categories" :key="item.name"
        class="group relative flex items-center gap-x-6 rounded-lg p-2 hover:bg-gray-50">
        <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
        </div>
        <div>
            <a :href="item.href" class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0" />
            </a>
        </div>
    </div>
</template>