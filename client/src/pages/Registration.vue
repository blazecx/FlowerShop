<script setup>

</script>

<template>
    <div class="bg">
        <div class="bg2">
            <h1>Создать <br>
                Аккаунт</h1>
            <div class="reg">
                <input  placeholder="Имя:">
                <input  placeholder="Фамилия:">
                <input  placeholder="Отчество:">
                <input  placeholder="Login:">
                <input  placeholder="Email:">
                <input  placeholder="Номер:">
                <input type="password" placeholder="Пароль:">
                <button class="btn">Зарегаться</button>
                <p>Есть аккаунт? <a href="">Войдите</a></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1{
    margin-top: 5rem;
}
.bg2{
display: flex;
flex-direction: column;
align-items: center;
width: 418px;
height: 720px;
background: #E997BB;
border-radius: 29px;
margin: auto;
}

.bg{
    display: flex;
    align-items: center;
    width: 99vw;
    height: 100vh;
    background: url(../assets/img/logregbag.png);
    background-repeat: no-repeat;
   
}

.reg{
    margin-top: 2rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input{
width: 290px;
height: 44px;
background: #F0E6E7;
border-radius: 17px;
}

input:hover{
    border: 2px solid #BD9DDE;
}

input:focus{
    border: 2px solid #BD9DDE;
}

.btn{
width: 210px;
height: 33px;
background: #3A5932;
border-radius: 38px;
border: none;
font-family: 'Nunito', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
color: #E8E3EF;
}
</style>