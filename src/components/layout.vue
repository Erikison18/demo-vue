<template>
  <div>
    <v-header></v-header>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './base/header'
import Footer from './base/footer'
export default {
  name: 'layout',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>
