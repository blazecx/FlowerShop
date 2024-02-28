<script setup>
import card from './card.vue';
</script>

<template>
    <div class="content">
        <card imgSrc="src\assets\flowers\flower.png" title="Романтика" :price="5000"/>
        <card/>
        <card/>
        <card/>
        <card/>
        <card/>
        <card/>
        <card/>      
    </div>

</template>

<style scoped>
.content{
    display: grid;
    grid-template-columns:repeat(3, minmax(0, 20rem));
    gap: 1rem;
}
</style>