<style scoped>

</style>

<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="imgPath" alt="">
        <ul>
          <router-link v-for="item in products" tag="li" active-class="active"
           :to="{ path: item.path }" :key="item.name">{{ item.name }}</router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vdetail',
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/analysis': require('../assets/index/car.png'),
        '/detail/count': require('../assets/index/earth.png'),
        '/detail/publish': require('../assets/index/loud.png'),
        '/detail/forecast': require('../assets/index/hill.png')
      }
    }
  },
  computed: {
    imgPath () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>
