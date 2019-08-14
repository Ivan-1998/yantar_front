import Vue from 'vue';
import VueResource from 'vue-resource';
import VueTruncate from 'vue-truncate-filter';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueResource);
Vue.use(VueTruncate);
Vue.http.options.root = 'http://sibtiger.com:3000';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')