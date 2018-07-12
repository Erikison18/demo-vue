<style lang="scss" scoped="">
  .header{
    width: 100%;
    height: 60px;
    background-color: #363636;
    img{
      width: 50px;
      margin-left: 20px;
      margin-top: 5px;
    }
    ul{
      display: inline-block;
      line-height: 60px;
      margin-right: 5px;
      li{
        float: left;
        color: #b2b2b2;
        padding: 0 5px;
      }
    }
  }
</style>

<template>
  <div class="header">
    <img src="../../assets/logo.png">
    <ul class="right">
      <li @click="logClick">登录</li>
      <li>|</li>
      <li @click="regClick">注册</li>
      <li>|</li>
      <li @click="aboutClick">关于</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Vheader',
  methods: {
    logClick () {
      this.$emit('login')
    },
    regClick () {
      this.$emit('register')
    },
    aboutClick () {
      this.$emit('about')
    }
  }
}
</script>
