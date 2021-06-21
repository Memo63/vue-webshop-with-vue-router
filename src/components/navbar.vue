<template>
    <nav class="navbar navbar-expand-lg bg-vue">
        <div class="container">
            <router-link to="/" class="navbar-brand">SHOPLOGO</router-link>
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Shop</router-link>

                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a 
                            class="nav-link"
                            @click="signOut"
                        >
                                <i class="fas fa-sign-out-alt me-2"
                                    
                                ></i>
                                Logout
                        </a>
                    </li>
                    <li class="nav-item ms-4 rounded bg-vue2">
                        <router-link to="/cart" class="nav-link">
                            <i class="fas fa-cart-arrow-down"></i>
                            {{cartItemsCount}} Artikel ({{cartTotal.toFixed(2)}}€)
                        </router-link>
                    </li>
                </ul>
        </div>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex';

    export default {
        name: 'Navbar',

        computed: { 
        ...mapGetters([
            'cartTotal',
            'cartItemsCount' 
            ])
        },

        methods: {
            signOut() {
                this.$store
                    .dispatch('signout')
                    .then(() => {
                        this.$router.push('/login');
                    })
            }
        }
    }


</script>

<style scoped>
a {
    color:white;
}

a:hover {
    opacity: .3;
    transition:all .3 ease 0s;
}
</style>