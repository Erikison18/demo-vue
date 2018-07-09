<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ totalPrice }}
    <Apple></Apple>
    <Banana></Banana>
  </div>
</template>

<script>
import Apple from './components/apple'
import Banana from './components/banana'
export default {
  name: 'App',
  components: {
    Apple,
    Banana
  },
  data: function () {
    return { }
  },
  computed: {
    totalPrice () {
      return this.$store.state.totalPrice
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
