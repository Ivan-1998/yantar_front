import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

// Pages
import Auth from "./Pages/Auth/Auth";
import ProductsList from "./Pages/Products/ProductsList.vue";
import ProductsListAdd from "./Pages/Products/ProductsAdd.vue";

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/products-list',
    name: 'productsList',
    component: ProductsList,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/products-list/add',
    name: 'productsListAdd',
    component: ProductsListAdd,
    meta: {
      isPublic: false
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;