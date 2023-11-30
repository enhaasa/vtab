<script setup lang="ts">
  import HeaderComponent from './assets/components/Header/HeaderComponent.vue';
  import FooterComponent from './assets/components/Footer/FooterComponent.vue';

  import ReceiptPage from './assets/pages/receipt/ReceiptPage.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderComponent />

    <ReceiptPage />

    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
@import 'App.scss';
</style>
