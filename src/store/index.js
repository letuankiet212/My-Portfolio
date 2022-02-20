import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingState(state, flag) {
      state.isLoading = flag;
    }
  },
  actions: {
    onLoading(context, flag) {
      context.commit('updateLoadingState', flag);
    }
  },
  modules: {}
});
