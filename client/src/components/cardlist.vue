<script setup>
import card from './card.vue';
defineProps({
    items: Array
})
</script>

<template>
    <div class="content">
        <card v-for="item in items" :key="item.id" :imgSrc="item.image" :title="item.name" :price="item.price" :id="item.id"/>
    </div>

</template>

<style scoped>
.content{
    margin-top: 3.125rem;
    display: grid;
    grid-template-columns:repeat(4, minmax(0, 20rem));
    gap: 1rem;
    justify-content: center;
}
</style>