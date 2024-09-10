<template>
     <learn-lit :product-title="productTitle" :product-price="productPrice"
    :product-description="productDescription">
  </learn-lit>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const productTitle = ref('Apple iPhone 15 Pro Max');
const productPrice = ref('1,40,999');
const productDescription = ref('FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant');
</script>

<style>

</style>