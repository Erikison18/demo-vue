<style lang="scss">
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
    width: 50%;
    min-height: 100px;
    position: fixed;
    left: 25%;
    top: 30%;
    background: #ffffff;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #464068;
    box-shadow: 1px 1px 1px #999,
                -1px -1px 1px #999;
    .dialog-close{
      position: absolute;
      top: 5px;
      right: 5px;
      &:hover{
      color: #4fc08d;
    }
    }
  }
  .drop-enter-active,
  .drop-leave-active{
    transition: all 0.5s ease;
  }
  .drop-enter{
    transform: translateY(-600px);
  }
  .drop-leave-to{
    transform: translateY(-600px);
  }
}
.ui-form{
  .form-line{
    padding: 15px 0;
    .label{
      width: 100px;
      font-size: 16px;
      display: inline-block;
    }
    input{
      width: 200px;
      border: 1px solid #ccc;
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
    }
    button{
      padding: 10px 20px;
      cursor: pointer;
      background-color: #4fc08d;
      color: #ffffff;
      margin-left: 100px;
    }
    .form-line-error{
      color: orange;
    }
  }
  .form-error{
    color: red;
  }
}
</style>

<template>
  <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="onClose"></div>
      <transition name="drop">
        <div class="dialog-content" v-if="isShow">
          <a class="dialog-close" @click="onClose">X</a>
          <slot>empty!!!!!!!</slot>
        </div>
      </transition>
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
  methods: {
    onClose () {
      this.$emit('closeDialog')
    }
  }
}
</script>
