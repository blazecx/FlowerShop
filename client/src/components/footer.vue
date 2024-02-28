<template>
<footer>
 <img src="../assets/img/logo2vid.svg" alt="" class="logo">
    <div class="conteiner">
    <div class="content">
        <h3>Разделы</h3>
        <nav>
            <a href="">О нас</a>
            <a href="">Каталог</a>
            <a href="">Корзина</a>
        </nav>
    </div>
    <div class="content">
        <h3>Аккаунт</h3>
        <nav>
            <a href="">Заказы</a>
            <a href="">Войти</a>
        </nav>
    </div>
    <div class="content">
        <h3>Контакты</h3>
        <nav class="last">
            <a href="">
                <img src="../assets/img/Phone.svg" alt="">
                <p>+7 (999) 999 99-99</p>
            </a>
            <a href="">
                <img src="../assets/img/emailfoot.svg" alt="">
                <p>email@gmail.com</p>
            </a>
            <a href="">
                <img src="../assets/img/mapfoor.svg" alt="">
                <p>ул. Пушкина д. 11</p>
            </a>
            <a href="">
                <img src="../assets/img/clockfoot.svg" alt="">
                <p>Ежедневно с 9:00 - 21:00</p>
            </a>
        </nav>
    </div>
    </div>
</footer>
</template>

<style scoped>
footer{
    margin-top: 6.25rem;
    width: 100%;
    height: 26.25rem;
    background: #FFCEE3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 33rem 11rem 18.5rem;
}

.conteiner{
    margin-top: 5.5rem;
    display: flex;
    gap: 11rem;
}

nav a{
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #742E42;
}

nav{
margin-top: 1rem;
display: flex;
flex-direction: column;
gap: 0.7rem;
}

.last a{
    display: flex;
}

.last a p{
    margin-left: 0.6rem;
}

</style>