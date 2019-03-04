import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'
import errorModule from '@/store/error'
import post from '@/store/post'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    errorModule,
    post
  }
})