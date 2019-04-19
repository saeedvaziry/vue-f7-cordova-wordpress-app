import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    splash: true,
  },
  mutations: {
    showSplash(state) {
      state.splash = true;
    },
    hideSplash(state) {
      state.splash = false;
    }
  },
  getters: {
    splash: state => {
      return state.splash;
    }
  }
});