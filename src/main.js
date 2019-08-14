import Vue from 'vue';
import VueResource from 'vue-resource';
import VueTruncate from 'vue-truncate-filter';
import {library} from '@fortawesome/fontawesome-svg-core';

import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faChevronRight,
  faChevronLeft
);

Vue.use(VueResource);
Vue.use(VueTruncate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.http.options.root = 'http://sibtiger.com:3000';
Vue.config.productionTip = false;
 

library.add();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')