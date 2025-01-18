<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="min-h-screen bg-[#BBDEFB] dark:bg-[#0B3557]">
            <nav
                class="border-b border-[#90CAF9] bg-[#E3F2FD] dark:border-[#102A43] dark:bg-[#102A43]"
            >
                <!-- Primary Navigation Menu -->
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 justify-between">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex shrink-0 items-center">
                                <Link :href="route('dashboard')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-[#0277BD] dark:text-[#81D4FA]"
                                    />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div
                                class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"
                            >
                                <NavLink
                                    :href="route('dashboard')"
                                    :active="route().current('dashboard')"
                                    class="text-[#01579B] hover:text-[#0277BD] dark:text-[#B0BEC5] dark:hover:text-[#81D4FA]"
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div class="hidden sm:ms-6 sm:flex sm:items-center">
                            <!-- Settings Dropdown -->
                            <div class="relative ms-3">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center rounded-md border border-transparent bg-[#E3F2FD] px-3 py-2 text-sm font-medium leading-4 text-[#0277BD] transition duration-150 ease-in-out hover:text-[#01579B] focus:outline-none dark:bg-[#102A43] dark:text-[#81D4FA] dark:hover:text-[#B0BEC5]"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink
                                            :href="route('profile.edit')"
                                            :active="
                                                route().current('profile.edit')
                                            "
                                            class="text-[#01579B] hover:text-[#0277BD] dark:text-[#B0BEC5] dark:hover:bg-[#0B3557] dark:hover:text-[#81D4FA]"
                                        >
                                            Profile
                                        </DropdownLink>
                                        <DropdownLink
                                            :href="route('logout')"
                                            method="post"
                                            as="button"
                                            class="text-[#01579B] hover:text-[#0277BD] dark:text-[#B0BEC5] dark:hover:bg-[#0B3557] dark:hover:text-[#81D4FA]"
                                        >
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <button
                                @click="
                                    showingNavigationDropdown =
                                        !showingNavigationDropdown
                                "
                                class="inline-flex items-center justify-center rounded-md p-2 text-[#0277BD] transition duration-150 ease-in-out hover:bg-[#BBDEFB] hover:text-[#01579B] focus:bg-[#BBDEFB] focus:text-[#01579B] dark:text-[#81D4FA] dark:hover:bg-[#0B3557] dark:hover:text-[#B0BEC5] dark:focus:bg-[#0B3557] dark:focus:text-[#B0BEC5]"
                            >
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex':
                                                !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex':
                                                showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <Transition
                    enter-active-class="transition-all duration-500 ease-in-out"
                    enter-from-class="max-h-0 opacity-0 overflow-hidden"
                    enter-to-class="max-h-[500px] opacity-100 overflow-hidden"
                    leave-active-class="transition-all duration-500 ease-in"
                    leave-from-class="max-h-[500px] opacity-100 overflow-hidden"
                    leave-to-class="max-h-0 opacity-0 overflow-hidden"
                >
                    <div
                        v-show="showingNavigationDropdown"
                        class="bg-[#E3F2FD] sm:hidden dark:bg-[#102A43]"
                    >
                        <div class="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink
                                :href="route('dashboard')"
                                :active="route().current('dashboard')"
                                class="text-[#01579B] hover:text-[#0277BD] dark:text-[#B0BEC5] dark:hover:bg-[#0B3557] dark:hover:text-[#81D4FA]"
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <!-- Responsive Settings Options -->
                        <div
                            class="border-t border-[#90CAF9] pb-1 pt-4 dark:border-[#102A43]"
                        >
                            <div class="px-4">
                                <div
                                    class="text-base font-medium text-[#01579B] dark:text-[#B0BEC5]"
                                >
                                    {{ $page.props.auth.user.name }}
                                </div>
                                <div
                                    class="text-sm font-medium text-[#0277BD] dark:text-[#81D4FA]"
                                >
                                    {{ $page.props.auth.user.email }}
                                </div>
                            </div>

                            <div class="mt-3 space-y-1">
                                <ResponsiveNavLink
                                    :href="route('profile.edit')"
                                    :active="route().current('profile.edit')"
                                    class="text-[#01579B] hover:text-[#0277BD] dark:text-[#B0BEC5] dark:hover:bg-[#0B3557] dark:hover:text-[#81D4FA]"
                                >
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    :href="route('logout')"
                                    method="post"
                                    as="button"
                                    class="text-[#01579B] hover:text-[#0277BD] dark:text-[#B0BEC5] dark:hover:bg-[#0B3557] dark:hover:text-[#81D4FA]"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </Transition>
            </nav>

            <!-- Page Heading -->
            <header
                class="bg-[#E3F2FD] shadow dark:bg-[#102A43]"
                v-if="$slots.header"
            >
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
