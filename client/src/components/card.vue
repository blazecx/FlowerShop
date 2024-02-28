<script setup>
defineProps({
    imgSrc: String,
    title: String,
    price: Number
});
</script>

<template>

    
    <div class="card">
        <img :src="imgSrc" alt="">
        <div class="content">
            <div class="conteiner">
                <div class="conteiner2">
                    <p>{{ title }}</p>
                    <span>{{ price }}</span>                
                </div>
                <div class="buttoni">
                    <button class="podrob">Подробнее</button>
                    <button class="inacart"><img src="../assets/img/cartonbut.svg" alt="cart" ></button>
                </div>  
            </div>
            
        </div>
    </div>
    </template>
    
    <style scoped>

    .conteiner2{
        margin-top: 1rem;
    }
    .conteiner{
     margin-left: 1.5rem;   
    }
    
    .content{
    width: 320px;
    height: 181px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.01);
    box-shadow: 0px 0px 9.3px #B7B4B4;
    border-radius: 0px 0px 15px 15px;
    }
    
    .buttoni{
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
    }
    
    .podrob{
    width: 179px;
    height: 45px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #E8E3EF;
    }
    
    .inacart{
    margin-right: 1.5rem;
    width: 50px;
    height: 45px;
    }
    
    button{
        border-radius: 11px;
        border: none;
        color: white;
        background: #3A5932;
    }
    
    p{
    
    font-size: 24px;
    line-height: 29px;
    }
    
    span{
    font-size: 20px;
    line-height: 24px;
    }
    </style>
    