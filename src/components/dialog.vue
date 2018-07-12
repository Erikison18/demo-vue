<style scoped lang="scss">
.dialog-wrap{
  position: fixed;
  .dialog-cover{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(150, 150, 150, 0.7);
  }
  .dialog-content{
    width: 400px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #999,
                -1px -1px 1px #999;
    .dialog-close{
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
}
</style>

<template>
  <div class="dialog-wrap" v-if="isShow">
      <div class="dialog-cover"></div>
      <div class="dialog-content">
        <a class="dialog-close" @click="() => { isShow = false }">X</a>
        <p>555555</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'v-dialog',
  components: {
  },
  props: {
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
