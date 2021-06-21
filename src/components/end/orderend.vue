<template>
    <div class="container mt-3 w-50 p-3">
        <h1>Bestellung abschließen</h1>
        <strong class="text-muted">Gesamtkosten</strong>
        <h5 class="font-weight-bold">{{cartTotal.toFixed(2)}}€ ({{cartItemsCount}} Artikel)</h5>
        <div class="d-grid gap-2">
            <button
            class="btn bg-vue rounded-pill py-2 btn-block"
            >Kaufen
        </button>
        </div>
        
    </div>
</template>

<script>

import {mapGetters} from 'vuex';


    export default {

        name: 'OrderEnd',


        computed: { 
            ...mapGetters([
                'cartTotal',
                'cartItemsCount'
                
             ]),
        },

    }
    
</script>

<style scoped>

</style>