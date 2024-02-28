<script setup>
import Headerv1 from './components/Headerv1.vue';
import cardlist from './components/cardlist.vue';
</script>

<template>
<cardlist/>
</template>

<style scoped>
.content{
    display: grid;
    grid-template-columns:repeat(3, minmax(0, 20rem));
    gap: 1rem;
}
</style>
