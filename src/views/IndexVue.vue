<script setup>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
</script>
<template>
        <div>
                <TheHeader></TheHeader>
                <main><RouterView></RouterView></main>
                <TheFooter></TheFooter>
        </div>
</template>