<style lang="scss" scoped="">
  .header{
    width: 100%;
    height: 60px;
    background-color: #363636;
    img{
      width: 50px;
      margin: 15px;
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
      <li>登录</li>
      <li>|</li>
      <li>注册</li>
      <li>|</li>
      <li>关于</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Vheader'
}
</script>
