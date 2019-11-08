import Vue from 'vue';
import VueResource from 'vue-resource';

import App from "./App.vue";
import router from "./router";

// VeeValidate init
import './validate';

Vue.use(VueResource);

Vue.http.options.root = 'http://api-new.yantar.in:5001/api/v1';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')