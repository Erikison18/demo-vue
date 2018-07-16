<style lang="scss" scoped="">
.counter-component{
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    .counter-btn{
        border: 1px solid #e3e3e3;
        float: left;
        height: 25px;
        width: 25px;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
    }
    .counter-btn:hover{
        background: #4fc08d;
        color: #fff;
    }
    .counter-show{
        float: left;
        input{
            border: none;
            border-top: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3;
            height: 25px;
            line-height: 23px;
            width: 30px;
            outline: none;
            text-align: center;
        }
    }
}
</style>

<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus">-</div>
    <div class="counter-show">
        <input type="text" v-model="number">
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
export default {
  name: 'Vcounter',
  data: function () {
    return {
      number: 1
    }
  },
  methods: {
    add () {
      this.number++
      console.log(this.number)
    },
    minus () {
      this.number--
      console.log(this.number)
    }
  }
}
</script>
