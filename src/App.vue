<style lang="scss">
@import "./styles/reset.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: max-content;
}
.btn{
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  &.gray{
      background-color: #999;
  }
}
.wrap{
  min-height: 85vh;
}
</style>

<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './components/layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
