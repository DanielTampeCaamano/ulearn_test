<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

defineProps<{
    href: string;
}>();
</script>

<template>
    <Link
        :href="href"
        class="block w-full px-4 py-2 text-start text-sm leading-5 text-[#01579B] transition duration-150 ease-in-out hover:bg-[#E1F5FE] focus:bg-[#B3E5FC] focus:outline-none dark:text-[#81D4FA] dark:hover:bg-[#0B3557] dark:focus:bg-[#1565C0]"
    >
        <slot />
    </Link>
</template>
