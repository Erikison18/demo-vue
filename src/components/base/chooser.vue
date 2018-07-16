<style lang="scss" scoped="">
.chooser-component{
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
  <div class="chooser-component">
    <ul>
      <li v-for="(item, index) in chooserData" :key="index" :class="{active: index === nowIndex}" @click="chooseOne(index)">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Vchooser',
  props: {
    chooserData: {
      type: Array,
      dafault: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data: function () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    chooseOne (index) {
      this.nowIndex = index
      this.$emit('on-chooser', this.chooserData[this.nowIndex])
    }
  }
}
</script>
