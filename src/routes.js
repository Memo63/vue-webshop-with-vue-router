import Vue from 'vue'

import VueRouter from 'vue-router'

import ProductList from './components/product/productlist'

import CartList from './components/cart/cartlist'

import ProductItem from './components/product/productitem'

import NotFound from './components/error/notfound'

import SignIn from './components/auth/signin'

import OrderEnd from './components/end/orderend'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: SignIn,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('tokenwert');
            if(token) next('/')
            else next();
        }
    },

    {

        path: '/orderend',
        component: OrderEnd
    },

    {
        path: '/',
        component: ProductList
    },

    {
        path: '/cart',
        component: CartList
    },

    {
        path: '/products/:id',
        component: ProductItem,
        props: true
    },

    {
        path: '*',
        component: NotFound
    }
]

//Globaler Route guard



const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from ,next) => {
    const token = localStorage.getItem('tokenwert');
    if(!token && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});

export default router;