import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import Consumers from './Pages/Consumers/Consumers';
import Contacts from './Pages/Contacts/Contacts';
import Partners from './Pages/Partners/Partners';
import Products from './Pages/Products/Products';
import News from './Pages/News/News';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/consumers',
    name: 'consumers',
    component: Consumers
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/partners',
    name: 'partners',
    component: Partners
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;