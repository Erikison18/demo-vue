<style lang="scss" scoped="">
.selection-component{
  position: relative;
  display: inline-block;
  .selection-show{
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background-color: #fff;
    .arrow{
      display: inline-block;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #e3e3e3;
      width: 0;
      height: 0;
      margin: -1px -14px 0 6px;
      vertical-align: middle;
      &.isDrop{
        border-top: none;
        border-bottom: 5px solid #e3e3e3;
      }
    }
  }
  .selection-list{
    display: inline-block;
    position: absolute;
    left: 0;
    top: 24px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e3e3e3;
    z-index: 5;
    li{
      padding: 5px 10px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>

<template>
  <div class="selection-component">
    <div class="selection-show" @click="toggleSelect">
      <span>{{ selectData[nowIndex].label }}</span>
      <div class="arrow" :class="{isDrop: isDrop}"></div>
    </div>
    <div class="selection-list" v-show="isDrop">
      <ul>
        <li v-for="(item, index) in selectData" :key="index" @click="chooseSelect(index)">{{ item.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import EventBus from '../../eventBus.js'
export default {
  name: 'Vselect',
  props: {
    selectData: {
      type: Array,
      dafault: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data: function () {
    return {
      nowIndex: 0,
      isDrop: false
    }
  },
  methods: {
    chooseSelect (index) {
      this.nowIndex = index
      this.$emit('on-select', this.selectData[this.nowIndex])
    },
    toggleSelect (event) {
      event.stopPropagation()
      EventBus.$emit('reset-component')
      this.isDrop = !this.isDrop
    }
  },
  mounted () {
    EventBus.$on('reset-component', () => {
      this.isDrop = false
    })
  }
}
</script>
