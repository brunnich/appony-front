import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgValue: "toto"
  },
  mutations: {
    setMessage(state, msgData) {
      state.msgValue = msgData;
    }
  },
  actions: {
    updateMessage(context, msgValue) {
      context.commit('setMessage', msgValue);
    }
  },
  modules: {
  }
})
