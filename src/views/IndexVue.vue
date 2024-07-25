<script setup>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
</script>
<template>
  <div class="content-body">
    <TheHeader></TheHeader>
    <main id="__main" class="main-section"><RouterView></RouterView></main>
    <TheFooter></TheFooter>
  </div>
</template>
<style>
.content-body {
  grid-column-start: 2;
  grid-row-start: 1;
  min-width: 0;
}
.main-section {
  background-color: #f8f8f8;
}
</style>