import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: {
      title: ''
    }
  },
  mutations: {
    setPage(state, page) {
      state.page = page;
    }
  }
});