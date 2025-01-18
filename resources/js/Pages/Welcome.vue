<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="Welcome" />
    <div class="bg-blue-50 text-blue-900 dark:bg-[#263238] dark:text-[#B0BEC5]">
        <div
            class="relative flex min-h-screen flex-col items-center justify-center selection:bg-blue-500 selection:text-white dark:selection:bg-blue-700"
        >
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header
                    class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"
                >
                    <div class="flex lg:col-start-2 lg:justify-center">
                        <svg
                            class="h-12 w-auto text-blue-800 lg:h-16 lg:text-[#FF2D20] dark:text-[#B0BEC5]"
                            viewBox="0 0 62 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <!-- SVG Path here -->
                        </svg>
                    </div>
                    <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="rounded-md px-3 py-2 text-blue-600 ring-1 ring-transparent transition hover:text-blue-800 focus:outline-none focus-visible:ring-blue-500 dark:text-[#B0BEC5] dark:hover:text-[#81D4FA] dark:focus-visible:ring-[#81D4FA]"
                        >
                            Dashboard
                        </Link>

                        <template v-else>
                            <Link
                                :href="route('login')"
                                class="rounded-md px-3 py-2 text-blue-600 ring-1 ring-transparent transition hover:text-blue-800 focus:outline-none focus-visible:ring-blue-500 dark:text-[#B0BEC5] dark:hover:text-[#81D4FA] dark:focus-visible:ring-[#81D4FA]"
                            >
                                Log in
                            </Link>

                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="rounded-md px-3 py-2 text-blue-600 ring-1 ring-transparent transition hover:text-blue-800 focus:outline-none focus-visible:ring-blue-500 dark:text-[#B0BEC5] dark:hover:text-[#81D4FA] dark:focus-visible:ring-[#81D4FA]"
                            >
                                Register
                            </Link>
                        </template>
                    </nav>
                </header>

                <main
                    class="min-h-screen bg-transparent transition-all duration-300 dark:bg-transparent"
                >
                    <div class="mx-auto max-w-7xl px-6 py-12">
                        <div class="text-center">
                            <h1
                                class="text-4xl font-semibold text-[#01579B] dark:text-[#0288D1]"
                            >
                                Welcome to the Web Development Blog
                            </h1>
                            <p
                                class="mt-4 text-lg text-[#01579B] dark:text-[#0288D1]"
                            >
                                Explore useful resources for Laravel, Vue.js,
                                and Tailwind CSS.
                            </p>
                        </div>

                        <!-- Sección del blog -->
                        <div class="mt-10">
                            <h2
                                class="text-3xl font-semibold text-[#0288D1] dark:text-[#01579B]"
                            >
                                Important Links
                            </h2>
                            <p
                                class="mt-2 text-sm text-[#0288D1] dark:text-[#01579B]"
                            >
                                Below you'll find some of the most important
                                links for getting started with the latest
                                frameworks in web development.
                            </p>

                            <!-- Enlaces a Laravel, Vue.js y Tailwind -->
                            <div
                                class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                            >
                                <!-- Laravel -->
                                <div
                                    class="rounded-lg bg-white p-6 shadow-lg ring-1 ring-[#0288D1] transition duration-300 hover:ring-[#0288D1] dark:bg-[#01579B] dark:ring-[#0288D1]"
                                >
                                    <h3
                                        class="text-xl font-semibold text-[#01579B] dark:text-[#B0BEC5]"
                                    >
                                        Laravel
                                    </h3>
                                    <p
                                        class="mt-4 text-sm text-[#01579B] dark:text-[#B0BEC5]"
                                    >
                                        Laravel is a robust PHP framework for
                                        building modern web applications.
                                    </p>
                                    <a
                                        href="https://laravel.com/docs"
                                        target="_blank"
                                        class="mt-4 text-[#0288D1] hover:underline dark:text-[#81D4FA]"
                                    >
                                        Official Laravel Documentation
                                    </a>
                                    <a
                                        href="https://laravel.com/docs/8.x/installation"
                                        target="_blank"
                                        class="mt-2 block text-[#0288D1] hover:underline dark:text-[#81D4FA]"
                                    >
                                        Installation Guide
                                    </a>
                                </div>

                                <!-- Vue.js -->
                                <div
                                    class="rounded-lg bg-white p-6 shadow-lg ring-1 ring-[#0288D1] transition duration-300 hover:ring-[#0288D1] dark:bg-[#01579B] dark:ring-[#0288D1]"
                                >
                                    <h3
                                        class="text-xl font-semibold text-[#01579B] dark:text-[#B0BEC5]"
                                    >
                                        Vue.js
                                    </h3>
                                    <p
                                        class="mt-4 text-sm text-[#01579B] dark:text-[#B0BEC5]"
                                    >
                                        Vue.js is a progressive JavaScript
                                        framework for building user interfaces.
                                    </p>
                                    <a
                                        href="https://vuejs.org/"
                                        target="_blank"
                                        class="mt-4 text-[#0288D1] hover:underline dark:text-[#81D4FA]"
                                    >
                                        Official Vue.js Website
                                    </a>
                                    <a
                                        href="https://vuejs.org/guide/introduction.html"
                                        target="_blank"
                                        class="mt-2 block text-[#0288D1] hover:underline dark:text-[#81D4FA]"
                                    >
                                        Vue 3 Guide
                                    </a>
                                </div>

                                <!-- Tailwind CSS -->
                                <div
                                    class="rounded-lg bg-white p-6 shadow-lg ring-1 ring-[#0288D1] transition duration-300 hover:ring-[#0288D1] dark:bg-[#01579B] dark:ring-[#0288D1]"
                                >
                                    <h3
                                        class="text-xl font-semibold text-[#01579B] dark:text-[#B0BEC5]"
                                    >
                                        Tailwind CSS
                                    </h3>
                                    <p
                                        class="mt-4 text-sm text-[#01579B] dark:text-[#B0BEC5]"
                                    >
                                        Tailwind CSS is a utility-first CSS
                                        framework for building custom designs.
                                    </p>
                                    <a
                                        href="https://tailwindcss.com/docs"
                                        target="_blank"
                                        class="mt-4 text-[#0288D1] hover:underline dark:text-[#81D4FA]"
                                    >
                                        Official Tailwind CSS Documentation
                                    </a>
                                    <a
                                        href="https://tailwindcss.com/docs/installation"
                                        target="_blank"
                                        class="mt-2 block text-[#0288D1] hover:underline dark:text-[#81D4FA]"
                                    >
                                        Tailwind CSS Installation Guide
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Sección de llamado a la acción -->
                        <div class="flex mt-12 text-center justify-center">
                            <a
                                href="https://daniel-tampe-webpage.vercel.app/about"
                                class="rounded-full bg-[#0288D1] px-6 py-3 text-white hover:bg-[#01579B] focus:outline-none focus:ring-4 focus:ring-[#0288D1] dark:bg-[#01579B] dark:hover:bg-[#0288D1] dark:focus:ring-[#81D4FA]"
                            >
                                Meet the creator of this page
                            </a>
                        </div>
                    </div>
                </main>

                <footer
                    class="py-16 text-center text-sm text-[#01579B] dark:text-[#81D4FA]"
                >
                    <div
                        class="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8"
                    >
                        <!-- Icono Laravel y badge -->
                        <div class="mb-4 flex items-center space-x-2 sm:mb-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#FF2D20"
                                class="h-6 w-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 2v20m-7-7l7 7 7-7"
                                />
                            </svg>
                            <span class="text-xl font-semibold">Laravel</span>
                            <span
                                class="rounded-full bg-[#FF2D20] px-3 py-1 text-xs font-semibold text-white"
                            >
                                v{{ laravelVersion }}
                            </span>
                        </div>

                        <!-- Icono PHP y badge -->
                        <div class="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#6f42c1"
                                class="h-6 w-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 2v20m-7-7l7 7 7-7"
                                />
                            </svg>
                            <span class="text-xl font-semibold">PHP</span>
                            <span
                                class="rounded-full bg-[#8993be] px-3 py-1 text-xs font-semibold text-white"
                            >
                                v{{ phpVersion }}
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
