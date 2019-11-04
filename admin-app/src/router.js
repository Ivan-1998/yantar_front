import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from "./Pages/Auth/Auth";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
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