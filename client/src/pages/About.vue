<script setup>

</script>

<template>
<h2>Где нас Найти?</h2>
<div class="conteiner">
    <div class="pinkback">
        <div class="content">
                <h3>Адрес:</h3>
                <div class="contentin">
                    <img src="../assets/img/AboutMap.svg" alt="">
                    <p>ул. Пушкина д. 11</p>
                </div>
            </div>
        <div class="content">
                <h3>Рабочие часы:</h3>
                <div class="contentin">
                    <img src="../assets/img/AboutClock.svg" alt="">
                    <p>Ежедневно с 9:00 - 21:00</p>
                </div>
            </div>
            <div class="content">
                <h3>Телефон:</h3>
                <div class="contentin">
                    <img src="../assets/img/AboutPhone.svg" alt="">
                    <p>+7 (999) 999 99-99</p>
                </div>
            </div>
    </div>
</div>
</template>

<style scoped>
.conteiner{
width: 1437px;
height: 622px;
background: url(../assets/img/AboutMap.png);
margin: auto;
margin-top: 3.125rem;
padding: 8rem;
}

h2{
font-weight: 700;
font-size: 48px;
line-height: 65px;
}

.pinkback{
width: 366px;
height: 403px;
background: rgba(233, 151, 187, 0.74);
border-radius: 25px;
padding: 3.2rem;
}

.contentin{
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    display: flex;
}

p, h3{
    color: #FFFFFF;
}

h3{
font-weight: 500;
font-size: 24px;
line-height: 29px;
}

p{
margin-left: 0.4rem;
margin-bottom: 0.3rem;
font-weight: 400;
font-size: 20px;
line-height: 24px;
}
</style>
