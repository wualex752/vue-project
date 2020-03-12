import Vue from "vue";
import Vuex from "vuex";
import pageIndex from './modules/pageIndex';
import category from './modules/category';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pageIndex,
    category,
    user
  }
});
