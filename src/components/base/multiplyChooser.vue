<style lang="scss" scoped="">
.multiplyChooser-component{
  display: inline-block;
  position: relative;
  li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    text-align: center;
    cursor: pointer;
    &.active{
      border-color: #4fc08d;
      background-color: #4fc08d;
      color: #fff;
    }
  }
}
</style>

<template>
  <div class="multiplyChooser-component">
    <ul>
      <li v-for="(item, index) in multiplyChooserData" :key="index" :class="{active: checkActive(index)}" @click="toggleChoose(index)">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'VmultiplyChooser',
  props: {
    multiplyChooserData: {
      type: Array,
      dafault: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data: function () {
    return {
      nowIndexs: [0]
    }
  },
  methods: {
    toggleChoose (index) {
      if (this.nowIndexs.indexOf(index) === -1) {
        this.nowIndexs.push(index)
      } else {
        this.nowIndexs = _.remove(this.nowIndexs, (idx) => {
          return idx !== index
        })
      }
      let nowObjArray = _.map(this.nowIndexs, (idx) => {
        return this.multiplyChooserData[idx]
      })
      this.$emit('on-multiplyChooser', nowObjArray)
    },
    checkActive (index) {
      return this.nowIndexs.indexOf(index) !== -1
    }
  }
}
</script>
