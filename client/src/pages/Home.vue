<script setup>

import mainpg from '../components/mainpg.vue'
import fot from '../components/footer.vue'
import Card from '@/components/card.vue';

</script>

<template>
<mainpg/>
<!-- почему мы -->
<h2>ПОЧЕМУ МЫ?</h2>
<div class="containerWe">
    <div class="content">
        <img src="../assets/img/Map.svg" alt="Map">
        <h3>Расположение</h3>
        <p>Удобное расположение <br>
            в центре города</p>
    </div>
    <div class="content">
        <img src="../assets/img/car.svg" alt="">
        <h3>Быстрая доставка</h3>
        <p>Быстрая доставка <br>
            до 10 минут.</p>
    </div>
    <div class="content">
        <img src="../assets/img/clock.svg" alt="">
        <h3>Экономия времени</h3>
        <p>
            Заказывая у нас, вы <br>
            экономите свое время.
        </p>
    </div>
    <div class="content">
        <img src="../assets/img/flowerico.svg" alt="">
        <h3>Свежие цветы</h3>
        <p>
            Лучшие поставщики и <br>
            большой ассортимент цветов
        </p>
    </div>
</div>
<h2>НОВИНКИ КОМПАНИИ</h2>
    <h2>ТУТ БУДЕТ СЛАЙДЕР ЛЕНЬ БИБЛИОТЕКУ КАЧАТЬ, позже <br>
        НЕ ЗАБЫТЬ ЕГО СДЕЛАТЬ!!!!!!!</h2>
<div class="card grid" style="display: flex; gap: 1.5rem; margin: 5rem;">        
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>

<h2>ОТЗЫВЫ КЛИЕНТОВ</h2>
<div class="containerRew">
    <div class="contentRewies">
        <h3>Артём Третьяк</h3>
        <p>Я очень доволен букетом, который я получил в этом магазине. Цветы были свежими и красивыми, и букетом было очень приятно смотреть. Они были прекрасно уложены и доставлены вовремя. Я бы рекомендовал этот магазин всем, кто ищет красивые цветы для своих праздников и событий.</p>
    </div>
    <div class="contentRewies">
        <h3>Артём Третьяк</h3>
        <p>Я очень доволен букетом, который я получил в этом магазине. Цветы были свежими и красивыми, и букетом было очень приятно смотреть. Они были прекрасно уложены и доставлены вовремя. Я бы рекомендовал этот магазин всем, кто ищет красивые цветы для своих праздников и событий.</p>
    </div>
</div>
</template>

<style scoped>
h2{
    margin-top: 6.25rem;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
}

.containerWe{
    margin-top: 3.125rem;
    display: flex;
    gap: 3rem;
    justify-content: center;
}

.content{
    display: grid;
    grid-template-columns: (4, auto);
    text-align: center;
    justify-items: center;
}

.content:nth-child(2){
    margin-top: 0.6rem;
}

.content h3{

font-weight: 500;
font-size: 24px;
line-height: 29px;
margin-top: 1.3rem;
}

.content p{
    font-size: 20px;
    line-height: 24px;
    margin-top: 0.6rem;
}

.contentRewies{
    width: 620px;
    height: 371px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.01);
    box-shadow: 0px 0px 9.3px #B7B4B4;
    border-radius: 15px;
    padding: 2.2rem;
}

.contentRewies h3{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
}

.contentRewies p{
    padding-top: 2rem;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    width: 32rem;

}

.containerRew{
    margin: auto;
    margin-top: 3.125rem;
    width: 83.625rem;
    display: flex;
    justify-content: space-between;
}

.contentRewies h3{
    margin: auto;
}

</style>
