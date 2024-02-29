<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
import router from '../main.js'

const items = ref([])
    // let id = $route.params.id;
    // console.log(router.currentRoute.value.params.id);

onMounted(async () =>{

    try{
        const id = router.currentRoute.value.params.id
        const {data} = await axios.get(`http://localhost:3001/api/flowers/${id}`);
        items.value = data;
        console.log( data);
    }
    catch (err){
        console.log(err);
    }
});


</script>

<template>
<div class="contenteiner">
    <img :src="items.image" alt="">
    <div class="content">
        <div>
        <h4>Название: {{ items.name }}</h4>       
             <p class="price">Цена: <span>{{ items.price }}</span></p>
        </div>
        <h6>Характеристика:</h6>
        <div class="specifications">
            <p>Страна: <span>{{items.country}}</span></p>
            <!-- Модели -->
            <p>Изготовитель <span>{{items.model}}</span></p> 
            <p>Год выпуска: <span>{{items.year}}</span></p>
            <!-- Сюда категория -->
            <p>Состав: <span>{{items.category}}</span></p> 
        </div>
        <div class="buttoni">
            <button class="inacart">В корзину</button>
            <div class="quantbut">
                <p>Кол-во</p>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
        </div>
        <div>
            <h5>Описание:</h5>
            <p class="description">{{items.description}}</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.contenteiner{
margin:auto ;
margin-top: 100px;
width: 1318px;
display: flex;
justify-content: space-around;
}

img{
    width: 44.5rem;
    height: 50.8125rem;
}

.description{
    width: 29.125rem;
}

h4{
font-weight: 500;
font-size: 32px;
line-height: 39px;
}

.price{
margin-top: 1rem;
font-weight: 500;
font-size: 20px;
line-height: 24px;
}

.price span{
font-weight: 400;
font-size: 20px;
line-height: 24px;
}

h6{
margin-top: 2rem;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
}

.specifications{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.specifications p{
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
}

.specifications p span{
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 20px;
color: #774C59;
}

button{

background: #3A5932;
border-radius: 35px;
border: none;
}
.buttoni{
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 2rem;
}

.quantbut{
    display: flex;
    gap: 0.5rem;
    align-items: center;
}


.inacart{
width: 266px;
height: 47px;
font-family: 'Nunito', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
color: #E8E3EF;
}


.quantbut p{
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
}

.quantbut button{
width: 20px;
height: 20px;
background: #3A5932;
border-radius: 5px;
color: white;
}

h5{
    margin-top: 50px;   
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}

.description{
margin-top: 30px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
}

</style>
