import axios from 'axios';


const state = {
    productItems: []
}

const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload) {
        state.productItems = payload;
    }
    
}

const actions = {
    getProductItems ({commit}, token) {
        console.log(token);
        axios.get(`/api/products?token=${token}`)
            .then((response)=>{
                console.log(response);
                commit('UPDATE_PRODUCT_ITEMS', response.data);
            })
    } 
}

const getters = {
    productItems: state => state.productItems,
    productItemById: state => id => state.productItems.find(productItem => productItem.id === id)
    
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export  default productModule;