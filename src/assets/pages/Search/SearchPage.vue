<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  noresult: Boolean,
  fetchReceipt: Function
});

const inputValue = ref('');
</script>

<template>
    <div class="SearchPage">
        <div class="wrapper">
            <div v-if="noresult" class="noresult">
                <div class="text">No Result!</div>
            </div>

            <div class="search">
                <form @submit.prevent="fetchReceipt(inputValue)">
                    <input 
                        v-model="inputValue"
                        type="text" 
                        id="receipt" 
                        placeholder="Enter ID"
                        maxlength="5"
                    />
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import 'SearchPage';
</style>