<template>
   <tr>
        <th>
            <div class="p-2">
                <img 
                    src="https://picsum.photos/70" 
                    width="70" 
                    class="img-fluid rounded shadow-sm"
                >
                <div class="ml-3 d-inline-block align-middle">
                    <h5 class="mb-0">
                    <div class="text-dark d-inline-block align-middle">{{cartItem.title}}</div>
                    </h5>
                    <span class="text-muted font-weight-normal font-italic">Kommt in den Übungen ;)</span>
                </div>
            </div>
        </th>
        <td class="align-middle">
            <strong>{{cartItem.price}}€</strong>
        </td>
        <td class="align-middle">
             <i 
                class="fas fa-minus-circle me-2"
                style="cursor: pointer;"
                @click="removeCartItem(cartItem)"
            ></i>
            <strong>{{cartItem.quantity}}</strong>
            <i 
                class="fas fa-plus-circle ms-2"
                style="cursor: pointer;"
                @click="addCartItem(cartItem)"
            ></i>
           
        </td>
        <td class="align-middle">
            <i 
                class="fa fa-trash"
                style="cursor: pointer;"
                @click="removeProductFromCart(cartItem)"
            ></i>
        </td>
    </tr>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'CartListItem',
        props: ['cartItem'],
        methods: {
            ...mapActions([
                'addCartItem',
                'removeCartItem',
                'removeProductFromCart'

            ])
        }
        
    }
</script>

<style scoped>

</style>