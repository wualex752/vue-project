import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

import pageIndex from './modules/pageIndex';
import category from './modules/category';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  mutations: {},
  actions: {},
  modules: {
    pageIndex,
    category,
    user
  }
});
