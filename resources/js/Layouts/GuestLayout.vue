<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class="flex min-h-screen flex-col items-center bg-[#BBDEFB] pt-6 sm:justify-center sm:pt-0 dark:bg-[#0B3557]"
    >
        <div>
            <Link href="/">
                <ApplicationLogo class="h-20 w-20 fill-current text-[#0277BD] dark:text-[#81D4FA]" />
            </Link>
        </div>

        <div
            class="mt-6 w-full overflow-hidden bg-[#90CAF9] px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-[#102A43]"
        >
            <slot />
        </div>
    </div>
</template>
