import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    if (this.$cookie.get('idUser')) {
      this.$router.push('/list')
    }
    else {
      this.$router.push('/login')
    }
  },
  render: h => h(App)
}).$mount('#app')
