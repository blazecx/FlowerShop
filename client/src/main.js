// import './assets/main.css'
// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

// import App from './App.vue'

// import Home from './pages/Home.vue'
// import Catalog from './pages/Catalog.vue'
// import Cart from './pages/Cart.vue'
// import Order from './pages/Order.vue'
// import Flower from './pages/Flower.vue'
// import About from './pages/About.vue'
// import Login from './pages/Login.vue'
// import Registration from './pages/Registration.vue'
// import Errorpage from './pages/ErrorPage.vue'

// createApp(App).mount('#app')


// const routes = [
//     { path: '/', name: 'Home', component: Home },
//     { path: '/catalog', name: 'Catalog', component: Catalog },
//     { path: '/cart', name: 'Cart', component: Cart },
//     { path: '/Flower', name: 'Flower', component: Flower },
//     { path: '/order', name: 'Order', component: Order },
//     { path: '/about', name: 'About', component: About },
//     { path: '/login', name: 'Login', component: Login },
//     { path: '/registration', name: 'Registration', component: Registration },
//     { path: '/errorpage', name: 'Errorpage', component: Errorpage }
//   ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })




// app.use(router)

// app.mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import Home from './pages/Home.vue'
import Catalog from './pages/Catalog.vue'
import Cart from './pages/Cart.vue'
import Order from './pages/Order.vue'
import Flower from './pages/Flower.vue'
import About from './pages/About.vue'
import Login from './pages/Login.vue'
import Registration from './pages/Registration.vue'
import Errorpage from './pages/ErrorPage.vue'

import './assets/main.css'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/catalog', name: 'Catalog', component: Catalog },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/flower', name: 'Flower', component: Flower },
    { path: '/order', name: 'Order', component: Order },
    { path: '/about', name: 'About', component: About },
    { path: '/login', name: 'Login', component: Login },
    { path: '/registration', name: 'Registration', component: Registration },
    { path: '/errorpage', name: 'Errorpage', component: Errorpage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')