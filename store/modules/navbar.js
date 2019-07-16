const state = () => ({
  navbar: []
})

const mutations = {
  add (state, text) {
    state.navbar.push(text)
  }
}

const actions = {
  add ({commit, text}) {
    commit('add', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
