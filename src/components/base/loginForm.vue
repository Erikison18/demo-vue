<style scoped lang="scss">
.login-form{
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
  <div class="login-form">
      <div class="form-line">
          <span for="name" class="label">用户名：</span>
          <input type="text" name="name" v-model="usenameModel" placeholder="请输入用户名">
          <span class="form-line-error">{{ usenameError.errorText }}</span>
      </div>
      <div class="form-line">
          <span for="password" class="label">密码：</span>
          <input type="password" name="password" v-model="passwordModel" placeholder="请输入密码">
          <span class="form-line-error">{{ passwordError.errorText }}</span>
      </div>
      <div class="form-line">
          <button @click="onLogin">登录</button>
      </div>
      <p class="form-error">{{ formError }}</p>
  </div>
</template>

<script>
export default {
  name: 'v-login',
  props: {
  },
  data () {
    return {
      usenameModel: '',
      passwordModel: '',
      formError: ''
    }
  },
  computed: {
    usenameError () {
      let errorText, state
      if (this.usenameModel === '') {
        errorText = '*用户名不能为空！'
        state = true
      } else if (!/@/g.test(this.usenameModel)) {
        errorText = '*用户名不能包含@'
        state = true
      } else {
        errorText = ''
        state = false
      }
      if (!this.loginFlag) {
        errorText = ''
        state = true
        this.loginFlag = true
      }
      return {
        errorText: errorText,
        state: state
      }
    },
    passwordError () {
      let errorText, state
      if (this.passwordModel === '') {
        errorText = '*密码不能为空！'
        state = true
      } else if (!/^\w{4,6}$/g.test(this.passwordModel)) {
        errorText = '*密码不是4~6位'
        state = true
      } else {
        errorText = ''
        state = false
      }
      if (!this.passwordFlag) {
        errorText = ''
        state = true
        this.passwordFlag = true
      }
      return {
        errorText: errorText,
        state: state
      }
    }
  },
  methods: {
    onLogin () {
      if (this.usenameError.state || this.passwordError.state) {
        this.formError = '*未通过验证！'
        return
      }
      this.formError = ''
      this.$http.post('/api/login').then((res) => {
        console.log(res.data, 'succuss login')
        this.$emit('onLogin')
      }, (error) => {
        console.log(error, 'error login')
      })
    }
  }
}
</script>
