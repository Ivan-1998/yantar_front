import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routes from './js/routes';

import './styles/index.scss';
import App from './app/App.vue';


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
