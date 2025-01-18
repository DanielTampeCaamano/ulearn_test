<script setup lang="ts">
import DangerButton from '@/Components/DangerButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value?.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.focus(),
        onFinish: () => {
            form.reset();
        },
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.clearErrors();
    form.reset();
};
</script>

<template>
    <section class="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 md:px-8">
        <header>
            <h2 class="text-lg font-medium text-[#01579B] dark:text-[#81D4FA]">
                Delete Account
            </h2>

            <p class="mt-1 text-sm text-[#0277BD] dark:text-[#B3E5FC]">
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
            </p>
        </header>

        <DangerButton
            @click="confirmUserDeletion"
            class="w-full bg-[#D32F2F] text-white hover:bg-[#B71C1C] sm:w-auto dark:bg-[#b33c3c] dark:hover:bg-[#D50000]"
        >
            Delete Account
        </DangerButton>

        <Modal :show="confirmingUserDeletion" @close="closeModal" class="dark:bg-[#0B3557] bg-[#E3F2FD]">
            <div class="mx-auto max-w-xl p-6 bg-[#E3F2FD] rounded-lg dark:bg-[#0B3557]">
                <h2 class="text-lg font-medium text-[#01579B] dark:text-[#81D4FA]">
                    Are you sure you want to delete your account?
                </h2>

                <p class="mt-1 text-sm text-[#0277BD] dark:text-[#B3E5FC]">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Please enter your password to
                    confirm you would like to permanently delete your account.
                </p>

                <div class="mt-6 flex justify-center">
                    <InputLabel
                        for="password"
                        value="Password"
                        class="sr-only"
                    />

                    <TextInput
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-full sm:w-3/4 md:w-2/3 bg-[#BBDEFB] text-[#01579B] dark:bg-[#082B48] dark:text-[#B3E5FC]"
                        placeholder="Password"
                        @keyup.enter="deleteUser"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-6 flex flex-row justify-center gap-4 sm:flex-row">
                    <SecondaryButton
                        @click="closeModal"
                        class="w-full justify-center bg-[#81D4FA] text-[#01579B] hover:bg-[#4FC3F7] sm:w-auto dark:bg-[#0277BD] dark:text-white dark:hover:bg-[#01579B]"
                    >
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        class="ms-3 w-full sm:w-auto bg-[#D32F2F] text-white hover:bg-[#B71C1C] dark:bg-[#d33232] dark:hover:bg-[#D50000]"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Delete Account
                    </DangerButton>
                </div>
            </div>
        </Modal>
    </section>
</template>
