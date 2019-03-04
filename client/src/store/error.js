const state = {
  error: null,
  loading: false
}

const mutations = {
  SET_ERROR (state, payload) {
    state.error = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  },
  SET_ERROR_CLEAR (state) {
    state.error = null
  }
}

const getters = {
  load (state) {
    return state.loading
  },
  messageError () {
    return state.error
  }
}

export default {
  state,
  mutations,
  getters
}