<script setup lang="ts">
    import { ref } from 'vue';
    import BarCode from './Barcode/BarCode.vue';

    const venue = ref('Venue Name');
    const location = ref('[World] Area, Ward, Plot');
    const seating = ref('Seating 0');
    const datetime = ref('2023-01-01');

    const diningItems =  ref([
        {
            id: 0,
            amount: 3,
            name: 'Satraps Secret',
            price: 20
        },
        {
            id: 1,
            amount: 1,
            name: 'Motor Oil',
            price: 50000
        }
    ]);

    const serviceItems = ref([
        {
            id: 0,
            name: 'Sloppy BJ',
            price: 69,
            duration: '10m'
        }
    ]);

    const total = ref(150000);

</script>

<template>
    <div class="Receipt paper">
        <header>
            <h1>{{ venue }}</h1>
            <div>{{ location }}</div>
        </header>

        <div class="divider"></div>

        <div class="seating-info">
            <span>{{ seating }}</span>
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
                    <td>{{ item.price }} gil</td>
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
                    <td>{{ item.duration }}</td>
                    <td>{{ item.price }} gil</td>
                </tr>
            </table>
        </div>

        <div class="divider"></div>

        <div class="total">
            <span class="label">Total:</span> 
            <span class="amount">{{ total }} gil</span>
        </div>

        <div class="divider"></div>
        
        <BarCode name="Cocos Oasis" link="https://www.cocosoasis.info"/>

    </div>
</template>

<style scoped lang="scss">
@import 'Receipt.scss';
</style>