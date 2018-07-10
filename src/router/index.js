import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Index1 from '@/pages/index1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/11',
      component: Index1
    }
  ]
})
