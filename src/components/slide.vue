<style scoped lang="scss">
.slide{
  position: relative;
  width: 900px;
  height: 500px;
  overflow: hidden;
  .slideNewLeft-enter-active{
    transition: all 0.5s linear;
  }
  .slideNewLeft-enter{
    transform: translateX(900px);
  }
  .slideOldLeft-leave-active{
    transition: all  0.5s linear;
    transform: translateX(-900px);
  }
  .slideNewRight--enter-active{
    transition: all 0.5s linear;
  }
  .slideNewRight-enter{
    transform: translateX(-900px);
  }
  .slideOldRight-leave-active{
    transition: all  0.5s linear;
    transform: translateX(900px);
  }
  .slide-img{
    width: 100%;
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
  h2{
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background-color: #000;
    opacity: 0.35;
    padding-left: 20px;
    bottom: 0;
    font-size: 26px;
  }
  ul{
    position: absolute;
    bottom: 0;
    right: 10px;
    li{
      float: left;
      color: #fff;
      height: 30px;
      line-height: 30px;
      padding: 0 15px;
      cursor: pointer;
      &.active{
        text-decoration: underline;
        color: springgreen;
      }
    }
  }
}
</style>

<template>
  <div class="slide" @mouseenter="clearTimer" @mouseleave="setTimer">
    <div class="slide-img">
      <transition :name="directive === 'left'? 'slideNewLeft' : 'slideNewRight'">
        <img :src="slides[nowIndex].src" v-if="isShow">
      </transition>
      <transition :name="directive === 'left'? 'slideOldLeft' : 'slideOldRight'">
        <img :src="slides[nowIndex].src" v-if="!isShow">
      </transition>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul>
      <li @click="goto(prevIndex, 'right')">&lt;</li>
      <li v-for="(item, index) in slides" :key="index" @click="goto(index)" :class="{active: index === nowIndex}">{{ index + 1 }}</li>
      <li @click="goto(nextIndex, 'left')">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'slide',
  components: {
  },
  props: {
    slideTime: {
      type: Number,
      dafault: 2000
    },
    slides: {
      type: Array,
      dafault: []
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      directive: 'left'
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  mounted () {
    this.setTimer()
  },
  methods: {
    goto (index, dir) {
      if (this.nowIndex <= index) {
        this.directive = 'left'
      } else {
        this.directive = 'right'
      }
      if (dir) {
        this.directive = dir
      }
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    setTimer () {
      this.timer = setInterval(() => { this.goto(this.nextIndex) }, this.slideTime)
    },
    clearTimer () {
      clearInterval(this.timer)
    }
  }
}
</script>
