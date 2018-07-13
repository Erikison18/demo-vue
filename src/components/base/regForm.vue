<style scoped lang="scss">

</style>

<template>
  <div class="register-form">
      <div class="form-line">
          <span for="name">用户名：</span>
          <input type="text" name="name" placeholder="请输入用户名">
      </div>
      <div class="form-line">
          <span for="password">新密码：</span>
          <input type="password" name="password" placeholder="请输入密码">
      </div>
      <div class="form-line">
          <span for="password">确认密码：</span>
          <input type="password" name="password" placeholder="请输入密码">
      </div>
      <div class="form-line">
          <button>注册</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'v-login',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
