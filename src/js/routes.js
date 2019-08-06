import Main from '../app/Pages/Main/Main.vue';
import About from '../app/Pages/About/About.vue';
import Products from '../app/Pages/Products/Products.vue';
import Partners from '../app/Pages/Partners/Partners.vue';
import Consumers from '../app/Pages/Consumers/Consumers.vue';
import Contacts from '../app/Pages/Contacts/Contacts.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/consumers',
    name: 'Consumers',
    component: Consumers
  },
  {
    path: '/consumers',
    name: 'Consumers',
    component: Consumers
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
];

export default routes;
