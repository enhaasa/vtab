<script setup lang="ts">
    import { ref } from 'vue';
    import BarCode from './Barcode/BarCode.vue';
    import type { TReceipt } from '@/shared/types/TReceipt';

    function extractDate(isoString: string) {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    function stripSpecialCharacters(str: string) {
        return str.replace(/[^a-zA-Z0-9 ]/g, '');
    }

    //const props = defineProps(['receipt']);
    //const { receipt } = props

    const props = defineProps<{
        receipt: TReceipt
    }>();
    const { receipt } = props;

    const venue = ref(receipt.name);
    const location = ref(receipt.address);
    const seating = ref(receipt.channel.name);
    const datetime = ref(extractDate(receipt.datetime));
    const diningItems = ref(receipt.orders);
    const serviceItems = ref(receipt.services);
    const link = ref(receipt.link)

    const total = ref(receipt.price);
</script>

<template>
    <div class="Receipt paper">
        <header>
            <h1>{{ venue }}</h1>
            <div>{{ location }}</div>
        </header>

        <div class="divider"></div>

        <div class="seating-info">
            <span>Seating {{ seating }}</span>
            <span>{{ datetime }}</span>
        </div>

        <div v-if="diningItems.length > 0" class="item-list dining">
            <div class="title">
                <span></span>Dining<span></span>
            </div>
            <table>
                <tr v-for="item in diningItems" v-bind:key="`dining-item${item.id}`">
                    <td>x{{ item.amount }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price.toLocaleString('en-US') }} gil</td>
                </tr>
            </table>
        </div>

        <div v-if="serviceItems.length > 0" class="item-list services">
            <div class="title">
                <span></span>Services<span></span>
            </div>
            <table>
                <tr v-for="item in serviceItems" v-bind:key="`service-item${item.id}`">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price.toLocaleString('en-US') }} gil</td>
                </tr>
            </table>
        </div>

        <div class="divider"></div>

        <div class="total">
            <span class="label">Total: </span> 
            <span class="amount">{{ total.toLocaleString('en-US') }} gil</span>
        </div>

        <div class="divider"></div>
        <BarCode :name="stripSpecialCharacters(venue)" :link="link" />
    </div>
</template>

<style scoped lang="scss">
@import 'Receipt.scss';
</style>