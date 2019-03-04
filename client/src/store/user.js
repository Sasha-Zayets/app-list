import axios from 'axios'

class User {
  constructor(id, email) {
    this.id = id
    this.email = email
  }
}

const state = {
  user: null
}
const mutations = {
  SET_USER (state, data) {
    state.user = data
  }
}
const actions = {
  async registrationUser ({ commit }, payload) {
    try {
      commit('SET_ERROR_CLEAR')
      commit('SET_LOADING', true)
      const user = await axios.post('http://localhost:8000/api/auth/registration', payload)
      if (user.data.message) {
        commit('SET_ERROR', user.data.message)
        throw error
      }
      commit('SET_USER', user.data)
      commit('SET_LOADING', false)
      return user
    } catch (e) {
      commit('SET_LOADING', false)
    }
  },
  async loginUser ({ commit }, payload) {
    try {
      commit('SET_ERROR_CLEAR')
      commit('SET_LOADING', true)
      const user = await axios.post('http://localhost:8000/api/auth/login', payload)
      document.cookie = 'idUser='+user.data.id
      if (user.data.message) {
        commit('SET_ERROR', user.data.message)
        throw error
      }
      commit('SET_USER', user.data)
      commit('SET_LOADING', false)
      return user
    } catch (e) {
      commit('SET_LOADING', false)
    }
  }
}
const getters = {
  userToken (state) {
    return state.user
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
