<style lang="scss" scoped="">

</style>

<template>
  <div>
    <v-dialog :isShow="isShowCheckDialog" @closeDialog="closeCheckDialog">
      请检查你的支付状态！
      <div class="btn" @click="checkStatus">
        支付成功
      </div>
      <div class="btn" @click="checkStatus">
        支付失败
      </div>
    </v-dialog>
    <v-dialog :isShow="isShowSuccessDialog" @closeDialog="closeCheckDialog">
      支付成功
    </v-dialog>
    <v-dialog :isShow="isShowFailDialog" @closeDialog="closeCheckDialog">
      支付失败
    </v-dialog>
  </div>
</template>

<script>
import Dialog from '../../components/base/dialog'
export default {
  name: 'VcheckOrder',
  components: {
    'v-dialog': Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number]
    }
  },
  data: function () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.post('/api/checkOrder', {
        orderId: this.orderId
      }).then((res) => {
        console.log(res.data, 'checkOrder succuss')
        this.isShowSuccessDialog = true
        this.$emit('on-closeCheckDialog')
      }, (error) => {
        console.log(error, 'checkOrder error')
        this.isShowFailDialog = true
        this.$emit('on-closeCheckDialog')
      })
    },
    closeCheckDialog () {
      this.isShowSuccessDialog = false
      this.isShowFailDialog = false
      this.$emit('on-closeCheckDialog')
    }
  }
}
</script>
