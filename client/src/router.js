import Vue from 'vue'
import Router from 'vue-router'
import FullLayout from '@/views/FullLayout'
import Default from '@/views/default'
import Login from '@/components/login/login'
import List from '@/components/list/list'
import Registration from '@/components/registration/registration'
import AddList from '@/components/addList/addList'
import EditList from '@/components/editList/editList'
import RemoveList from '@/components/removeList/removeList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'FullLayout',
      component: FullLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'registration',
          name: 'registration',
          component: Registration
        }
      ]
    }, 
    {
      path: '/list',
      name: 'Default',
      component: Default,
      children: [
        {
          path: '',
          name: 'List',
          component: List
        },
        {
          path: 'add',
          name: 'add List',
          component: AddList
        },
        {
          path: 'edit',
          name: 'edit List',
          component: EditList
        },
        {
          path: 'remove',
          name: 'remove list',
          component: RemoveList
        }
      ]
    }
  ]
})
