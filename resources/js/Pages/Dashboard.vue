<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-[#01579B] dark:text-[#81D4FA]"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-[#E3F2FD] shadow-sm sm:rounded-lg dark:bg-[#01579B]"
                >
                    <div class="p-6 text-[#01579B] dark:text-[#B3E5FC]">
                        You're logged in, welcome to the system!
                    </div>
                </div>
                <div class="mt-12 flex justify-center text-center">
                    <a
                        href="https://daniel-tampe-webpage.vercel.app/about"
                        class="rounded-full bg-[#0288D1] px-6 py-3 text-white hover:bg-[#01579B] focus:outline-none focus:ring-4 focus:ring-[#0288D1] dark:bg-[#01579B] dark:hover:bg-[#0288D1] dark:focus:ring-[#81D4FA]"
                    >
                        Meet the creator of this page
                    </a>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
