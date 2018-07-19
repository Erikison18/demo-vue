<style lang="scss">
.order-wrap{
  width: 1200px;
  min-width: 800px;
  margin: 20px auto;
  overflow: hidden;
  h3{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .order-list-option{
    display: inline-block;
    padding-right: 15px;
    .mx-input{
      height: 25px;
    }
    .mx-input-append{
      padding: 3px;
    }
    .mx-clear-icon::before{
      vertical-align: baseline;
    }
    .keyWord{
      border: 1px solid #e3e3e3;
      height: 25px;
      border-radius: 3px;
    }
  }
  .order-list-table{
    margin-top: 20px;
    table{
      width: 100%;
      background-color: #fff;
      th{
        background-color: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
        cursor: pointer;
        padding: 10px 0;
        &.active{
          background-color: #35495e;
        }
      }
      td{
        text-align: center;
        border: 1px solid #e3e3e3;
        padding: 10px 0;
      }
    }
  }
}
</style>

<template>
  <div class="order-wrap wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selectData="products" @on-select="onParamChange('product', $event)"></v-selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <v-dataPicker v-model="startTime" :not-after="new Date()" width="250" @change="dateChange"></v-dataPicker>
      </div>
      <div class="order-list-option">
        结束日期：
        <v-dataPicker v-model="endTime" :not-after="new Date()" width="250" @change="dateChange"></v-dataPicker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" class="keyWord" v-model.lazy="query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="(item, index) in tableHeads" :key="index" @click="changeOrderType(item)" :class="{active: item.active}">{{ item.label }}</th>
        </tr>
        <tr v-for="(itemTr, index) in tableData" :key="index">
          <td v-for="item in tableHeads" :key="item.label">{{ itemTr[item.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import _ from 'lodash'
import Selection from '../components/base/select'
import DatePicker from 'vue2-datepicker'
export default {
  name: 'VorderList',
  components: {
    'v-selection': Selection,
    'v-dataPicker': DatePicker
  },
  data () {
    return {
      startTime: new Date(new Date() - 604800000),
      endTime: new Date(),
      query: '',
      productId: 0,
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId',
          active: false
        },
        {
          label: '购买产品',
          key: 'product',
          active: false
        },
        {
          label: '版本类型',
          key: 'version',
          active: false
        },
        {
          label: '有效时间',
          key: 'period',
          active: false
        },
        {
          label: '购买日期',
          key: 'date',
          active: false
        },
        {
          label: '数量',
          key: 'buyNum',
          active: false
        },
        {
          label: '总价',
          key: 'amount',
          active: false
        }
      ],
      // tableData: [],
      currentOrder: 'desc'
    }
  },
  computed: {
    tableData: {
      get: function () {
        return this.$store.getters.getOrderList
      },
      set: function (newValue) {
        this.$store.commit('updateOrderList', newValue)
        console.log('computed set', newValue[0])
      }
    }
  },
  watch: {
    query () {
      this.setStoreParams()
      this.$store.dispatch('fetchOrderList')
      // this.getList()
    }
  },
  methods: {
    onParamChange (attr, val) {
      this.productId = val.value
      this.setStoreParams()
      this.$store.dispatch('fetchOrderList')
      // this.getList()
    },
    dateChange () {
      this.setStoreParams()
      this.$store.dispatch('fetchOrderList')
      // this.getList()
    },
    /**
     * 获取数据，已用store替换掉
     */
    getList () {
      let reqParams = {
        startTime: this.startTime,
        endTime: this.endTime,
        query: this.query,
        productId: this.productId
      }
      this.$http.post('/api/getOrderList', reqParams).then((req) => {
        console.log(req.data.data.list, 'getOrderList success')
        this.tableData = req.data.data.list
      }, (error) => {
        console.log(error, 'getOrderList error')
      })
    },
    setStoreParams () {
      let reqParams = {
        startTime: this.startTime,
        endTime: this.endTime,
        query: this.query,
        productId: this.productId
      }
      this.$store.commit('updateParams', reqParams)
    },
    changeOrderType (headItem) {
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      } else {
        this.currentOrder = 'asc'
      }
      this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    }
  },
  beforeRouteEnter (to, from, next) {
    $(document).scrollLeft(0)
    $(document).scrollTop(0)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    $(document).scrollLeft(0)
    $(document).scrollTop(0)
    next()
  },
  mounted () {
    // this.getList()
    this.setStoreParams()
    this.$store.dispatch('fetchOrderList')
    console.log(this.$store, '$store.dispatch')
  }
}
</script>
