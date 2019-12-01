import Vue from 'vue';
import VueResource from 'vue-resource';
import VueSweetalert2 from 'vue-sweetalert2';
import VueUploadComponent from 'vue-upload-component';
import vSelect from 'vue-select'

import App from "./App.vue";
import router from "./router";
import store from "./store";

// VeeValidate init
import './validate';

Vue.use(VueResource);
Vue.use(VueSweetalert2);
Vue.component('file-upload', VueUploadComponent);
Vue.component('v-select', vSelect);

Vue.http.options.root = 'http://api-new.yantar.in:5001/api/v1';
Vue.prototype.fileUrl = 'http://api-new.yantar.in:5001/uploads';

Vue.http.interceptors.push((request, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    request.headers.set('Authorization', `Bearer ${token}`);
  }

  next(response => {
    if (response.status === 401 || response.status === 403) {
      localStorage.removeItem('token');
      request.headers.delete('Authorization');
      window.location.href = '/';
    }
  })
});

const requestMe = url => {
  Vue.http.get(url)
    .then(response => {
      store.commit('setUserData', response.data);
    }).catch(() => {
      localStorage.removeItem('token');
      window.location.href = '/';
    });
};

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0,0);
  const token = localStorage.getItem('token');
  const url = 'http://api-new.yantar.in:5001/api/v1/auth/me';

  if (!to.matched.some(record => record.meta.isPublic)) {

    if (!token) return next({ name: 'auth' });

    await requestMe(url);
    next();
  } else if (token) {

    if (to.name === 'auth') {
      await requestMe(url);
      next({ name: 'productsList' });
    }
    
  }

  next();
});



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')