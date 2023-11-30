<script setup lang="ts">
import Receipt from './receipt/Receipt.vue';
</script>

<template>
    <div class="ReceiptPage">
        <div class="receipt-wrapper">
            <div class="paper-clip">
                <img src="./../../images/paper-clip.webp" alt="Paper Clip"/>
            </div>
            <Receipt />
            <div class="sleeve">
                <img src="./../../images/sleeve.png" alt="sleeve"/>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import 'ReceiptPage.scss';
</style>