<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
import mainpg2 from '../components/mainpg2.vue';
import cardList from '../components/cardlist.vue';

const items = ref([])

onMounted(async () =>{
    try{
        const {data} = await axios.get('http://localhost:3001/api/flowers');
        items.value = data;
    }
    catch (err){
        console.log(err);
    }

})
</script>

<template>
<mainpg2/>
<div class="Sortcontent">
    <div class="conteiiiner">
    <p>Сортировать по</p>
    <select>
        <option value="">По новизне</option>
        <option value="">По название</option>
        <option value="">По цене (дешёвые)</option>
        <option value="">По цене (дорогие)</option>
    </select>
    </div>
    <div class="search">
        <input type="text" placeholder="Поиск...">
        <img src="./assets/img/search.svg" alt="">
    </div>
</div>
<cardList :items="items"/>
</template>

<style >
.Sortcontent{
    margin: auto;
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1340px;
    height: 96px;
    background: #FF84B8;
    border-radius: 20px;
}

select{
    width: 140px;
    height: 25px;
    background: #F35B9C;
    border-radius: 5px;
    border: none;
}

input{
    padding: 1rem;
    width: 837px;
    height: 38px;
    background: #FFFFFF;
    border-radius: 20px;
    border: none;
}

.search{
    position: relative;
}

.search img{
    position: absolute;
    right: 8px;
    top: 10px;
}

.conteiiiner{
    display: flex;
    gap: 1rem;
}

.Sortcontent p{
font-weight: 400;
font-size: 20px;
line-height: 24px;

}
</style>
