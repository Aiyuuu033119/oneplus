export const state = () => ({
  isLogin: false
})

export const mutations = {
  login(state) {
    state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}
