const state = {
  gameMenu: 'sport',
  switchRegisterModal: false,
  tabbarMenu: 'index',
};

const mutations = {
  GAME_MENU(state, payload) {
    state.gameMenu = payload;
  },
  REGISTER_MODAL(state, payload) {
    state.switchRegisterModal = payload;
  },
  TABBAR_MENU (state, payload) {
    state.tabbarMenu = payload;
  },
};

const actions = {
  changeGameMenu({ commit }, value) {
    // 首頁 Game選單
    commit('GAME_MENU', value);
  },
  switchRegisterModal({commit}, value) {
    commit('REGISTER_MODAL', value);
  },
  changeTabbarMenu({commit}, value) {
    // Footer選單Menu
    commit('TABBAR_MENU', value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
