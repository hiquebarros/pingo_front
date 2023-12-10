<template>
    <Popover class="relative flex-1 border rounded-full p-2 hover:bg-gray-100">
      <PopoverButton class="flex justify-between items-center w-full gap-x-1 px-2 text-sm font-semibold leading-6 text-gray-900">

        <div class="flex items-center gap-2">
          <slot name="icon"></slot>
          <span>{{title}}</span>
        </div>
        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
      </PopoverButton>
  
      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
        <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div
          class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div class="p-4">
            <slot name="content"></slot>
          </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
  } from '@heroicons/vue/24/outline'

    defineProps({
    title: String,
    icon: String
    })
  
  const solutions = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  </script>