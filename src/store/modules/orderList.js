import Vue from 'vue'
// 数据状态
const state = {
  orderList: [],
  params: {}
}
// 获取数据
const getters = {
  getOrderList: function (state) {
    return state.orderList
  }
}
// 可异步
const actions = {
  fetchOrderList ({ commit, state }) {
    Vue.http.post('/api/getOrderList', state.params).then((res) => {
      console.log(res, 'getOrderList success')
      commit('updateOrderList', res.data.data.list)
    }, (err) => {
      console.log(err)
    })
  }
}
// 只能同步
const mutations = {
  updateOrderList (state, orderList) {
    console.log(orderList, 'updateOrderList')
    state.orderList = orderList
  },
  updateParams (state, params) {
    console.log(params, 'updateParams')
    state.params = params
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
