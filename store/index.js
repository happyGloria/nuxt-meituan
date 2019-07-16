import Vue from 'vue'
import Vuex from 'vuex'
import cities from './modules/city'
import navbars from './modules/navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    cities,
    navbars
  },
  actions: {

  }
})
// 需实例化Vuex,再抛出。与之前直接抛出vuex不一样
export default store
