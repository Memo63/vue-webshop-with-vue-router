<template>
    
    <div class="container mt-3">
        <div class="row">
            <div class="col-6 offset-3">
                <h3 class="text-uppercase">Warenkorb
                    <span>
                        ({{cartItemsCount}} Artikel)
                        <i
                            class="fas fa-trash"
                            style="cursor: pointer;"
                            @click="removeAllCartItems"
                        >
                        </i>
                    </span>
                </h3>
                <div 
                    class="alert bg-vue"
                    v-if="!cartItems.length"
                >
                    Ihr Warenkorb ist im Moment leer
                </div>

                <div  v-if="cartItems.length > 0">
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                            <th>
                                <div class="p-2 px-3 text-uppercase">Produkt</div>
                            </th>
                            <th>
                                <div class="py-2 text-uppercase">Preis</div>
                            </th>
                            <th>
                                <div class="py-2 text-uppercase">Anzahl</div>
                            </th>
                            <th>
                                <div class="py-2 px-3"></div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartListItem
                            v-for="cartItem in cartItems"
                            :key="cartItem.id"
                            :cartItem="cartItem"
                            />
                        </tbody>

                    </table>
                    <hr>
                    <div class="bg-light rounded-pill px-4 pt-3 text-uppercase font-weight-bold">
                        Bestellübersicht
                    </div>

                    <div class="p-4">
                        <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between pb-3">
                        <strong class="text-muted">Zwischensumme</strong><strong>{{cartTotalTaxfree}}€</strong>
                        </li>
                        <li class="d-flex justify-content-between py-3">
                        <strong class="text-muted">Steuer</strong><strong>{{Tax}}</strong>
                        </li>
                        <!-- <li class="d-flex justify-content-between py-3">
                        <strong class="text-muted">Versandkosten</strong><strong>0,00 €</strong>
                        </li> -->
                        <li class="d-flex justify-content-between py-3">
                        <strong class="text-muted">Gesamtkosten</strong>
                        <h5 class="font-weight-bold">{{cartTotal.toFixed(2)}}€</h5>
                        </li>
                        </ul>
                        <div class="d-grid gap-2">
                            <router-link 
                                to="/orderend"
                                class="btn bg-vue rounded-pill py-2 btn-block"
                                >
                                Zur Kasse
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import CartListItem from './cartlistitem';



    export default {

        name: 'CartList',

        components: {
            CartListItem
        },

        computed: { 
            ...mapGetters([
                'cartItems',
                'cartTotal',
                'cartItemsCount',
                
             ]),

            cartTotalTaxfree() {
                return (this.$store.getters.cartTotal/6*5).toFixed(2);
            },
            Tax() {
                return (this.cartTotal-this.cartTotalTaxfree).toFixed(2);
            }

        },

        methods: {
            ...mapActions([
                'removeAllCartItems'
            ])
        }
            // cartItems(){
            // return this.$store.getters.cartItems;
            // },
            // cartTotal() {
            //     return this.$store.getters.cartTotal;
            // },



    }
    
</script>

<style scoped>

</style>