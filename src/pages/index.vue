<style scoped lang="scss">
@import '../styles/mixin.scss';
.index-wrap{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  .index-left{
    float: left;
    width: 300px;
    .left-box{
      margin: 15px;
      background-color: #fff;
      box-shadow: 0 0 1px #ddd;
      h2{
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
      }
      h3{
        padding: 0 15px 5px;
        font-weight: bold;
        color: #222;
      }
      ul{
        padding: 10px 15px;
        li{
          padding: 5px;
          span{
            background-color: red;
            color: #fff;
          }
        }
      }
      .hr{
        margin-bottom: 20px;
      }
      .hr:last-child{
        display: none;
      }
    }
  }
  .index-right{
    width: 900px;
    float: left;
    .board-item{
      float: left;
      width: 440px;
      background-color: #fff;
      box-shadow: 0 0 1px #ddd;
      padding: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      &.odd{
        margin-right: 0px;
      }
      .board-item-inner{
        min-height: 125px;
        padding-left: 120px;
        &.board-item-car{
         background: url('../assets/index/car.png') no-repeat;
        }
        &.board-item-earth{
         background: url('../assets/index/earth.png') no-repeat;
        }
        &.board-item-loud{
         background: url('../assets/index/loud.png') no-repeat;
        }
        &.board-item-hill{
         background: url('../assets/index/hill.png') no-repeat;
        }
        h2{
          font-size: 18px;
          font-weight: bold;
          color: #000;
          margin-bottom: 15px;
        }
        .btn{
          display: inline-block;
          color: #fff;
          background-color: #4fc08d;
          padding: 10px 20px;
          cursor: pointer;
          margin-top: 20px;
          &.saleout{
             background-color: #999;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="left-box">
        <h2>全部产品</h2>
        <template v-for="(item, key, index) in productList">
          <h3>{{ item.title }}</h3>
          <ul>
            <li v-for="itemIn in item.list">
              <a :href="itemIn.url">{{ itemIn.name }}</a>
              <span v-if="itemIn.hot">HOT</span>
            </li>
          </ul>
          <div class="hr"></div>
        </template>
      </div>
      <div class="left-box">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in NewsList">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="slide">silde</div>
      <div class="index-board-list">
        <div v-for="(item, index) in boardList" class="board-item" :class="{'odd': index % 2 !==0}">
          <div class="board-item-inner" :class="'board-item-'+item.id">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="board-button">
              <a href="" v-if="item.saleout" class="btn">立即购买</a>
              <span v-else class="btn saleout">已售完</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vindex',
  data () {
    return {
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      NewsList:  [
        {
          "id": 1,
          "title": "新闻条目1新闻条目1新闻条目1新闻条目1",
          "url": "http://starcraft.com"
        },
        {
          "id": 2,
          "title": "新闻条目2新闻条目2新闻条目2新闻条目2",
          "url": "http://warcraft.com"
        },
        {
          "id": 3,
          "title": "新闻条3新闻条3新闻条3",
          "url": "http://overwatch.com"
        },
        {
          "id": 4,
          "title": "新闻条4广告发布",
          "url": "http://hearstone.com"
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  },
  computed: {

  }
}
</script>
