<script setup lang="ts">
defineProps(['name', 'link']);
</script>

<template>
    <div class="BarCode">
        <a class="link" :href="link" target="_blank">{{ name }}</a>
    </div>
</template>

<style scoped lang="scss">
@import 'BarCode.scss';
</style>