import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout
    }
  ]
})
