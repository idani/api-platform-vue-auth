import Vue from 'vue';
import VueRouter from 'vue-router';
import productRoutes from './product';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [productRoutes]
});