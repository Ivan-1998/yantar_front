import Vue from 'vue';
import VueResource from 'vue-resource';
import Vmodal from 'vue-js-modal';
import {library} from '@fortawesome/fontawesome-svg-core';

import {
  faChevronRight,
  faChevronLeft,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faChevronRight,
  faChevronLeft,
  faTimes
);

Vue.use(VueResource);
Vue.use(Vmodal);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.http.options.root = 'http://sibtiger.com:3000';
Vue.config.productionTip = false;

Vue.prototype.phone = '+7(800)555-35-35';
Vue.prototype.phoneHref = '+78005553535';
Vue.prototype.email = 'info@yantar.com';
Vue.prototype.adress = 'г. Усть-Каменогорск, ул. Грейдерная 1/1';
 

library.add();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')