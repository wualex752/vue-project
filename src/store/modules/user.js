const state = {
  isLogin: true,
  account: '阿諾'
};

const mutations = {
  IS_LOGIN(state, payload) {
    state.isLogin = payload;
  },
  ACCOUNT(state, payload) {
    state.account = payload;
  },
};

const actions = {
  changeLoginStatus({ commit }, value) {
    commit('IS_LOGIN', value);
  },
  changeAccount({ commit }, value) {
    commit('account', value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
