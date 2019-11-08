import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Pages
import Auth from "./Pages/Auth/Auth";
import ProductsList from "./Pages/Products/ProductsList.vue";

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
    path: '/products',
    name: 'products',
    component: ProductsList,
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

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0);

  if (!to.matched.some(record => record.meta.isPublic)) {
    const token = localStorage.getItem('token');
    if (!token) {
      return next({ name: 'auth' });
    }
    next();
  }

  next();
});

export default router;