const state = {
  categoryMenu: 'all',
};

const mutations = {
  ADD_CATEGORY_MENU(state, payload) {
    state.categoryMenu = payload;
  },
};

const actions = {
  changeCategoryMenu({ commit }, value) {
    commit('ADD_CATEGORY_MENU', value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
