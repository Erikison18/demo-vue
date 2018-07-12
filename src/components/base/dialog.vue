<style scoped lang="scss">
.dialog-wrap{
  position: fixed;
  .dialog-cover{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .dialog-content{
    width: 400px;
    min-height: 100px;
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #464068;
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
      <div class="dialog-cover" @click="onClose"></div>
      <div class="dialog-content">
        <a class="dialog-close" @click="onClose">X</a>
        <p>555555</p>
        <slot>empty!!!!!!!</slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'v-dialog',
  components: {
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    onClose () {
      this.$emit('closeDialog')
    }
  }
}
</script>
