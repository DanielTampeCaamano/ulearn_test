<script setup lang="ts">
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps<{
    mustVerifyEmail?: Boolean;
    status?: String;
}>();

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    last_name: user.last_name,
    phone: user.phone,
    created_at: new Date(user.created_at).toLocaleDateString(),
    email: user.email,
});
</script>

<template>
    <section
        class="mx-auto max-w-lg rounded-lg bg-[#E3F2FD] p-6 lg:shadow-lg dark:bg-[#0B3557]"
    >
        <header>
            <h2 class="text-xl font-semibold text-[#01579B] dark:text-[#81D4FA]">
                Profile Information
            </h2>

            <p class="mt-2 text-sm text-[#0277BD] dark:text-[#B3E5FC]">
                Update your account's profile information and email address.
            </p>
        </header>

        <form
            @submit.prevent="form.patch(route('profile.update'))"
            class="mt-6 space-y-6"
        >
            <div class="md:grid md:grid-cols-2 md:gap-6">
                <div class="mb-4">
                    <InputLabel for="name" value="Name" />
                    <TextInput
                        id="name"
                        type="text"
                        class="mt-1 block w-full bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                    />
                    <InputError class="mt-2 text-red-600 dark:text-red-400" :message="form.errors.name" />
                </div>

                <div class="mb-4">
                    <InputLabel for="last_name" value="Last Name" />
                    <TextInput
                        id="last_name"
                        type="text"
                        class="mt-1 block w-full bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                        v-model="form.last_name"
                        required
                        autocomplete="lastname"
                    />
                    <InputError class="mt-2 text-red-600 dark:text-red-400" :message="form.errors.last_name" />
                </div>
            </div>

            <div class="md:grid md:grid-cols-2 md:gap-6">
                <div class="mb-4">
                    <InputLabel for="phone" value="Phone Number" />
                    <TextInput
                        id="phone"
                        type="text"
                        class="mt-1 block w-full bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                        v-model="form.phone"
                        required
                        autocomplete="phone"
                    />
                    <InputError class="mt-2 text-red-600 dark:text-red-400" :message="form.errors.phone" />
                </div>

                <div class="mb-4">
                    <InputLabel for="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        class="mt-1 block w-full bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                        v-model="form.email"
                        required
                        autocomplete="username"
                    />
                    <InputError class="mt-2 text-red-600 dark:text-red-400" :message="form.errors.email" />
                </div>
            </div>

            <div class="mb-4">
                <InputLabel for="created_at" value="Registration Date" />
                <TextInput
                    :disabled="true"
                    id="created_at"
                    type="text"
                    class="mt-1 block w-full cursor-not-allowed bg-[#BBDEFB] text-[#0277BD] opacity-70 dark:bg-[#082B48] dark:text-[#B3E5FC]"
                    v-model="form.created_at"
                />
            </div>

            <div
                v-if="mustVerifyEmail && user.email_verified_at === null"
                class="mb-4"
            >
                <p class="mt-2 text-sm text-[#01579B] dark:text-[#81D4FA]">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="rounded-md text-sm text-[#0277BD] underline hover:text-[#01579B] dark:text-[#B3E5FC] dark:hover:text-[#81D4FA]"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 text-sm font-medium text-green-600 dark:text-green-400"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <PrimaryButton
                    class="justify-center text-center bg-[#0288D1] text-white hover:bg-[#01579B] sm:w-auto dark:bg-[#81D4FA] dark:text-[#01579B] dark:hover:bg-[#4FC3F7]"
                    :disabled="form.processing"
                >
                    Save
                </PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="text-center text-sm text-[#0277BD] dark:text-[#B3E5FC]"
                    >
                        Saved.
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
