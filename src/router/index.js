import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Clockin from '@/components/Clockin'
import ClockDetail from '@/components/ClockDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/clockin',
      name: 'lockin',
      component: Clockin
    }, {
      path: '/clockDetail',
      name: 'clockDetail',
      component: ClockDetail
    }
  ]
})
