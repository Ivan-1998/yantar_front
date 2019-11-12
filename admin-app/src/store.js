import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    toast: {}
  },
  mutations: {
    setUserData(state, user) {
      state.user = user;
    },
    setToastInfo(state, toast) {
      state.toast = toast;
    }
  }
});