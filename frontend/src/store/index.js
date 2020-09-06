import Vue from 'vue';
import Vuex from 'vuex';
import makeCrudModule from './modules/crud';
import notifications from './modules/notifications';
import productService from '../services/product';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        notifications,
        product: makeCrudModule({
            service: productService
        }),
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;