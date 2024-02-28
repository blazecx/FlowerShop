<script setup>

</script>

<template>
    <header>
        <div class="logo">
            <img src="../assets/img/Logo.svg" alt="Logo">
            <p>FLOWER WORLD</p>
        </div>
        <nav>
            <a href="">О нас</a>
            <a href="">Каталог</a>
            <a href="">Где нас найти</a>
            <a href=""><img src="../assets/img/profile.svg" alt="" class="profile"></a>
            <a href=""><img src="../assets/img/cart.svg" alt="" class="cart"></a>
        </nav>
    </header>
</template>

<style scoped>

a{
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #742E42;
}
.logo{
    gap: 1.2rem;
    display: flex;
}

nav{
margin-top: 0.5rem;
display: flex;
gap: 1.9rem;
}

.logo p{

font-family: "Nunito Sans", sans-serif;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 44px;

color: #FFFFFF;


}

header{

    width: 80%;
    display: flex;
    justify-content: space-between;
    background: pink;
    margin: auto;
    margin-top: 2rem;
}
</style>