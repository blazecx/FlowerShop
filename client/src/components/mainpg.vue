<template>
    <div class="container">
        <div class="content1">
            <div class="logotype">
                <img src="../assets/img/Logo.svg" alt="" class="logo">
                <p class="logoText">FLOWER WORLD</p>
            </div>
            <h1>FLOWER</h1>
        </div>
        <div class="content2">
            <nav>
                <a href="">Главная</a>
                <a href="">О нас</a>
                <a href="">Где нас найти?</a>
                <a href=""><img src="../assets/img/profile.svg" alt="" class="profile"></a>
                <a href=""><img src="../assets/img/cart.svg" alt="" class="cart"></a>
            </nav>
            <div class="conteiner2">
                <img src="../assets/img/world.svg" alt="" class="world">
                <p>В нашем цветочном магазине мы предлагаем огромный выбор свежих и красивых цветов для всех ваших праздников и событий. Наши цветы всегда свежие и красивые.  </p>
                <button>КАТАЛОГ</button>
            </div>
        </div>
    </div>


</template>

<style scoped>
.container{
    display: flex;
}

.content1, .content2{
    width: 60rem;
    height: 51.375rem;
}

.content1{
background: url(../assets/img/firstflower.png);
}

.content2{
background: #FFCEE3;
}

.logotype{
    display: flex;
    justify-content:center;
}

.logotype p{
font-family: "Nunito Sans", sans-serif;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 44px;

color: #FFFFFF;
margin-left: 1rem;
}

nav{
    display: flex;
    gap: 1.9rem;
    justify-content:center;
    margin-top: 2rem;
}

nav a{
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #742E42;
}

.logotype, nav{
    margin-top: 1rem;
}

.content1 h1{
margin: 12.1rem 0 0 23rem;
font-family: 'Nunito', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 128px;
line-height: 175px;
color: #FFFFFF;
}

.content2 p{
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #742E42;
width: 483px;
}

button{
cursor: pointer;
width: 344px;
height: 60px;
background: #3A5932;
border-radius: 38px;
border: none;
font-family: 'Nunito', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 44px;
color: #E8E3EF;
}

.content2 .conteiner2{
margin-top: 14.875rem;
margin-left: 3rem;
}

.content2 .conteiner2 p{
margin-top: 3rem;
}

.content2 .conteiner2 button{
    margin-top: 1.5rem;
}

</style>