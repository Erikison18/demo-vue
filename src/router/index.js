import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import OrderList from '@/pages/orderList'
import Detail from '@/pages/detail'
import Analysis from '@/pages/detail/analysis'
import Count from '@/pages/detail/count'
import Forecast from '@/pages/detail/forecast'
import Publish from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: Index
    },
    {
      path: '/detail',
      component: Detail,
      redirect: '/detail/count',
      children: [
        { path: 'analysis',
          component: Analysis
        },
        { path: 'count',
          component: Count
        },
        { path: 'forecast',
          component: Forecast
        },
        { path: 'publish',
          component: Publish
        }
      ]
    },
    {
      path: '/orderList',
      component: OrderList
    }
  ]
})
