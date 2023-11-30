<script setup lang="ts">
import Receipt from './Receipt/Receipt.vue';
import type { TReceipt } from '@/shared/types/TReceipt';

defineProps<{
        receipt: TReceipt
    }>();
</script>

<template>
    <div class="ReceiptPage">
        <div class="receipt-wrapper">
            <div class="paper-clip">
                <img src="./../../images/paper-clip.webp" alt="Paper Clip"/>
            </div>
            <Receipt :receipt="receipt" />
            <div class="sleeve">
                <img src="./../../images/sleeve.webp" alt="sleeve"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './ReceiptPage.scss';
</style>