<style>
@import "./styles/reset.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: max-content;
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
