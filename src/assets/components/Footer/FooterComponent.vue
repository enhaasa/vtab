<script setup lang="ts">
function getCurrentYear() {
  return new Date().getFullYear()
}
</script>

<template>
  <footer class="FooterComponent">
    <span>©2022-{{ getCurrentYear() }} Virtual Tab All Rights Reserved</span>
    <span class="dot">•</span>
    <span>Tool & Website by _enhasa</span>
  </footer>
</template>

<style lang="scss" scoped>
@import 'FooterComponent.scss';
</style>
