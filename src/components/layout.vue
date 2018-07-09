<template>
  <div>
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './header'
import Content from './content'
import Footer from './footer'
export default {
  name: 'layout',
  components: {
    'v-header': Header,
    'v-content': Content,
    'v-footer': Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
