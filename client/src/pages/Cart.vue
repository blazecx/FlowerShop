
<script setup>

</script>

<template>
<h2>КОРЗИНА</h2>
<div class="product">
    <img src="https://sun9-48.userapi.com/impg/i2sYL5IZt1hXgasgECRYBq_I2jfublPVKyavqA/WzjL8qPq2mI.jpg?size=1200x1600&quality=96&sign=bba41bad3f8f1c5d2551572f3fd3b242&type=album" alt="">
    <div class="contentus">
        <div class="desc">
            <h4>Название: <span>”Романтика”</span></h4>
            <p>Страна: <span>Новая Зеландия</span></p>
            <p>Цена: <span>50000₽</span></p>
            <p>Кол-во: <span>5</span></p>            
        </div>
            <div class="buttonssss">
                <button>Заказать</button>
                <button>Удалить </button>
            </div>
    </div>
</div>

</template>

<style scoped>
.product{
    margin: auto;
    margin-top: 50px;
    width: 1170px;
    height: 495px;
    display: flex;
}

img{
width: 515.93px;
height: 495px;
border: 1px solid rgba(0, 0, 0, 0.01);
filter: drop-shadow(0px 0px 9.3px rgba(0, 0, 0, 0.25));
border-radius: 15px 0px 0px 15px;
}
.contentus{
width: 654px;
height: 495px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.01);
box-shadow: 0px 0px 9.3px #B7B4B4;
border-radius: 0px 15px 15px 0px;
}

p{
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
}

p span{
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 20px;
color: #774C59;
}

button{
width: 218px;
height: 54px;
font-family: 'Nunito', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
color: #E8E3EF;
background: #3A5932;
border-radius: 11px;
border: none;
}

.desc, .buttonssss{
    margin: 50px;
}

.desc{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.buttonssss{
    margin-top: 10rem;
    display: flex;
    gap: 2rem;
}
</style>
