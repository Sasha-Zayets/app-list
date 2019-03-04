import axios from 'axios'

const state = {
  post: null
}

const mutations = {
  SET_POST (state, payload) {
    state.post = payload
  }
}

const actions = {
  async myallPost ({ commit }, payload) {
    const allPost = await axios.post('http://localhost:8000/api/post/all', payload)
    commit('SET_POST', allPost.data)
    return allPost
  },
  async addPost ({ commit }, payload) {
    commit('SET_LOADING', true)
    const post = await axios.post('http://localhost:8000/api/post/add', payload)
    commit('SET_LOADING', false)
    return post
  },
  async deletePost ({ commit }, payload) {
    const message = await axios.post('http://localhost:8000/api/post/delete', payload)
    return message
  }
}

const getters = {
  allPost (state) {
    return state.post
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}