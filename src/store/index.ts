
import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    load (state) {
      state.loading = true
      setTimeout(() => {
        state.loading = false
      }, 2000)
    }
  }
})
