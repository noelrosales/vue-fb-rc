import Vue from 'vue'
import Vuex from 'vuex'
import getRemoteConfig from '../services/getRemoteConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: []
  },
  mutations: {
    SET_CONFIG (state, payload) {
      state.config = payload
    }
  },
  actions: {
    async LOAD_CONFIG ({ commit }) {
      const config = await getRemoteConfig('channels')
      commit('SET_CONFIG', config)
    },
    CLEAR_CONFIG ({ commit }) {
      commit('SET_CONFIG', [])
    }
  },
  modules: {
  },
  getters: {
    CHANNELS: state => {
      return state.config
    }
  }
})
