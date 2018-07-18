<style lang="scss">
.order-wrap{
  width: 1200px;
  min-width: 800px;
  min-height: 500px;
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
  <div class="order-wrap">
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
        <input type="text" class="keyWord">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="item in tableHeads" :key="item.label">{{ item.label }}</th>
        </tr>
        <tr>
          <td v-for="item in tableHeads" :key="item.label">55555</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
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
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      tableData: []
    }
  },
  computed: {
  },
  methods: {
    onParamChange (attr, val) {
      console.log(attr, val)
    },
    dateChange () {
      console.log(this.startTime)
      console.log(this.endTime)
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
  }
}
</script>
