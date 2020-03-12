const state = {
  gameMenu: 'sport',
  switchRegisterModal: false
};

const mutations = {
  GAME_MENU(state, payload) {
    state.gameMenu = payload;
  },
  REGISTER_MODAL(state, payload) {
    state.switchRegisterModal = payload;
  },
};

const actions = {
  changeGameMenu({ commit }, value) {
    commit('GAME_MENU', value);
  },
  switchRegisterModal({commit}, value) {
    commit('REGISTER_MODAL', value);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
