import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router'

Vue.use(VueResource);
Vue.http.options.root = 'http://sibtiger.com:3000';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')