<script setup lang="ts">
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value?.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value?.focus();
            }
        },
    });
};
</script>

<template>
    <section
        class="mx-auto max-w-2xl bg-[#E3F2FD] p-6 lg:rounded-lg lg:shadow-lg dark:bg-[#0B3557]"
    >
        <header>
            <h2 class="text-xl font-semibold text-[#01579B] dark:text-[#81D4FA]">
                Update Password
            </h2>

            <p class="mt-2 text-sm text-[#0277BD] dark:text-[#B3E5FC]">
                Ensure your account is using a long, random password to stay
                secure.
            </p>
        </header>

        <form @submit.prevent="updatePassword" class="mt-6 space-y-6">
            <!-- Current Password -->
            <div class="mb-4">
                <InputLabel for="current_password" value="Current Password" />
                <TextInput
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    type="password"
                    class="mt-1 block w-full bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                    autocomplete="current-password"
                />
                <InputError
                    :message="form.errors.current_password"
                    class="mt-2 text-red-600 dark:text-red-400"
                />
            </div>

            <!-- New Password -->
            <div class="mb-4">
                <InputLabel for="password" value="New Password" />
                <TextInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                    autocomplete="new-password"
                />
                <InputError
                    :message="form.errors.password"
                    class="mt-2 text-red-600 dark:text-red-400"
                />
            </div>

            <!-- Confirm Password -->
            <div class="mb-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                    autocomplete="new-password"
                />
                <InputError
                    :message="form.errors.password_confirmation"
                    class="mt-2 text-red-600 dark:text-red-400"
                />
            </div>

            <!-- Save Button and Success Message -->
            <div class="flex flex-row gap-4 sm:flex-row sm:justify-center">
                <PrimaryButton
                    :disabled="form.processing"
                    class="w-full justify-center bg-[#0288D1] text-white hover:bg-[#01579B] sm:w-auto dark:bg-[#81D4FA] dark:text-[#01579B] dark:hover:bg-[#4FC3F7]"
                >
                    Save
                </PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                    class="flex justify-center"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="text-sm text-[#0277BD] dark:text-[#B3E5FC]"
                    >
                        Saved.
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
