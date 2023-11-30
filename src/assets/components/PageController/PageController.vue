<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { TReceipt } from '@/shared/types/TReceipt';
import ReceiptPage from '@/assets/pages/receipt/ReceiptPage.vue';
import SearchPage from '@/assets/pages/Search/SearchPage.vue';
import Kiwi from '@/kiwi';

const searchID = ref<number | null>(null);
const noresult = ref<boolean>(false);
const receipt = ref<TReceipt | null>(null);

onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));

    if (id) {
        searchID.value = id;
        fetchReceipt(id);
    }
});

async function fetchReceipt(id: number) {
    const data = await Kiwi.getReceipt(id);
    
    if (!data) {
        noresult.value = true; 
        return;
    }

    receipt.value = data.receipt;
}

</script>

<template>
    <div class="PageController">
        <ReceiptPage v-if="receipt" :receipt="receipt" />
        <SearchPage v-else :noresult="noresult" :fetchReceipt="fetchReceipt"/>
    </div>
</template>

<style scoped lang="scss">
@import 'PageController.scss';
</style>