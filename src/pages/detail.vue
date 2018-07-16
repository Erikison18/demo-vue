<style lang="scss">
.detail-wrap{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
  .detail-left{
    float: left;
    width: 200px;
    text-align: center;
    .product-board{
      background-color: #fff;
      padding: 20px 0;
      ul{
        margin-top: 20px;
        li{
          text-align: left;
          padding: 10px 15px;
          cursor: pointer;
          &.active{
            background-color: #4fc08d;
            color: #fff;
          }
        }
        li:hover{
          background-color: #4fc08d;
          color: #fff;
        }
      }
    }
  }
  .detail-right{
    float: left;
    width: 980px;
    margin-left: 20px;
    .sales-board{
      background-color: #fff;
      .sales-board-intro{
        h2{
          font-size: 20px;
          padding: 20px;
        }
        p{
          background-color: #f7fcff;
          padding: 10px 20px;
          color: #999;
          line-height: 1.8;
        }
      }
      .sales-board-form{
        padding: 30px 20px;
        font-size: 14px;
        .sales-board-line{
          padding-bottom: 20px;
          display: flex;
          .sales-board-line-left{
            flex: 1;
          }
          .sales-board-line-right{
            flex: 9;
            .button{
              background-color: #4fc08d;
              color: #fff;
              display: inline-block;
              padding: 10px 20px;
              cursor: pointer;
            }
          }
        }
      }
      .sales-board-des{
        border-top: 20px solid #f5f5f5;
        padding: 15px 20px;
        h2{
          font-size: 20px;
          font-weight: bold;
          padding-bottom: 15px;
        }
        p{
          line-height: 1.6;
        }
        h3{
          font-size: 18px;
          font-weight: bold;
          padding: 20px 0 10px 0;
        }
        ul li{
          padding: 5px 0;
        }
      }
    }
  }
}
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
