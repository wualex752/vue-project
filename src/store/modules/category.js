const state = {
  categoryMenu: 'all',
};

const mutations = {
  CATEGORY_MENU(state, payload) {
    state.categoryMenu = payload;
  },
};

const actions = {
  changeCategoryMenu({ commit }, value) {
    commit('CATEGORY_MENU', value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
