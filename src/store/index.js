import Vue from 'vue'
import Vuex from 'vuex'
import layout from '@/store/modules/layout';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    router:""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    layout
  }
})
