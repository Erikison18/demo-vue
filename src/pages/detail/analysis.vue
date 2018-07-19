<style scoped lang="scss">
.buy-dialog-table{
  width: 100%;
  margin-bottom: 20px;
  th{
    background-color: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    padding: 5px 0;
  }
  td{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding:  5px 0;
  }
}
.buy-dialog-title{
  font-size: 16px;
  font-weight: bold;
}
</style>

<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              购买数量：
          </div>
          <div class="sales-board-line-right">
            <v-counter :max="5" :min="1" @on-counter="onParamChange('buyNumber', $event)"></v-counter>
          </div>
      </div>
       <div class="sales-board-line">
          <div class="sales-board-line-left">
              产品类型：
          </div>
          <div class="sales-board-line-right">
              <v-selection :selectData="buyTypes" @on-select="onParamChange('buyType', $event)"></v-selection>
              <v-selection :selectData="buyTypes" @on-select="onParamChange('buyType', $event)"></v-selection>
          </div>
      </div>
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              有效时间：
          </div>
          <div class="sales-board-line-right">
              <v-chooser :chooserData="periodList" @on-chooser="onParamChange('period', $event)"></v-chooser>
          </div>
      </div>
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              产品版本：
          </div>
          <div class="sales-board-line-right">
              <v-multiplyChooser :multiplyChooserData="versionList" @on-multiplyChooser="onParamChange('versions', $event)"></v-multiplyChooser>
          </div>
      </div>
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              总价：
          </div>
          <div class="sales-board-line-right">
              {{ price }} 元
          </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
            <div class="btn" @click="openPayDialog">
              立即购买
            </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>
      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
    <v-dialog :isShow="isShowPayDialog" @closeDialog="closePayDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ buyNumber }}</td>
          <td>{{ buyType.label }}</td>
          <td>{{ period.label }}</td>
          <td>
            <span v-for="(item, index) in versions" :key="item.label"><span v-if="index !==0 ">/</span>{{ item.label }}</span>
          </td>
          <td>{{ price }}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <v-banks @on-bank="chooseBank"></v-banks>
      <div class="btn buy-dialog-btn" @click="confirmBuy">
        确认购买
      </div>
    </v-dialog>
    <v-checkOrder :isShowCheckDialog="isShowCheckDialog" :orderId="orderID" @on-closeCheckDialog="closeCheckDialog"></v-checkOrder>
  </div>
</template>

<script>
import _ from 'lodash'
import Counter from '../../components/base/counter'
import Selection from '../../components/base/select'
import Chooser from '../../components/base/chooser'
import MultiplyChooser from '../../components/base/multiplyChooser'
import Dialog from '../../components/base/dialog'
import Banks from '../../components/base/banks'
import CheckOrder from '../../components/base/checkOrder'
export default {
  name: 'Vanalysis',
  components: {
    'v-counter': Counter,
    'v-selection': Selection,
    'v-chooser': Chooser,
    'v-multiplyChooser': MultiplyChooser,
    'v-dialog': Dialog,
    'v-banks': Banks,
    'v-checkOrder': CheckOrder
  },
  data () {
    return {
      buyNumber: 0,
      buyType: {},
      period: {},
      versions: [],
      price: 0,
      versionList: [
        {
          label: '客户版',
          value: 0
        },
        {
          label: '代理商版',
          value: 1
        },
        {
          label: '专家版',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        }
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      isShowPayDialog: false,
      bankId: null,
      isShowCheckDialog: false,
      orderID: null
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
      this.getPrice()
    },
    getPrice () {
      let buyVersionArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNumber,
        buyType: this.buyType.value,
        period: this.period.value,
        versions: buyVersionArray.join(',')
      }
      this.$http.post('/api/getPrice', reqParams).then((res) => {
        this.price = res.data.data.amount
      }, (error) => {
        console.log(error)
      })
    },
    openPayDialog () {
      this.isShowPayDialog = true
    },
    closePayDialog () {
      this.isShowPayDialog = false
    },
    chooseBank (objBank) {
      this.bankId = objBank
    },
    confirmBuy () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNumber,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(','),
        bankId: this.bankId
      }
      this.$http.post('/api/createOrder', reqParams).then((res) => {
        this.orderID = res.data.data.orderId
        this.closePayDialog()
        this.openCheckDialog()
      }, (error) => {
        this.closePayDialog()
        console.log(error)
      })
    },
    openCheckDialog () {
      this.isShowCheckDialog = true
    },
    closeCheckDialog () {
      this.isShowCheckDialog = false
    }
  },
  mounted () {
    this.buyNumber = 1
    this.buyType = this.buyTypes[0]
    this.period = this.periodList[0]
    this.versions = [this.versionList[0]]
    this.getPrice()
  }
}
</script>
