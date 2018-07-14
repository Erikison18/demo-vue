<style scoped lang="scss">

</style>

<template>
  <div class="ui-form register-form">
      <div class="form-line">
          <span for="name" class="label">用户名：</span>
          <input type="text" name="name" v-model="usenameModel" placeholder="请输入用户名">
          <span class="form-line-error">{{ usenameError.errorText }}</span>
      </div>
      <div class="form-line">
          <span for="password" class="label">输入密码：</span>
          <input type="password" name="password" v-model="passwordModel" placeholder="请输入密码">
          <span class="form-line-error">{{ passwordError.errorText }}</span>
      </div>
       <div class="form-line">
          <span for="password1" class="label">确认密码：</span>
          <input type="password" name="password1" v-model="passwordModel1" placeholder="请确认密码">
          <span class="form-line-error">{{ passwordError1.errorText }}</span>
      </div>
      <div class="form-line">
          <button @click="onRegister">注册</button>
      </div>
      <p class="form-error">{{ formError }}</p>
  </div>
</template>

<script>
export default {
  name: 'v-register',
  props: {
  },
  data () {
    return {
      usenameModel: '',
      passwordModel: '',
      passwordModel1: '',
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
      }
      return {
        errorText: errorText,
        state: state
      }
    },
    passwordError1 () {
      let errorText, state
      if (this.passwordModel1 === '') {
        errorText = '*密码不能为空！'
        state = true
      } else if (!/^\w{4,6}$/g.test(this.passwordModel1)) {
        errorText = '*密码不是4~6位'
        state = true
      } else {
        errorText = ''
        state = false
      }
      if (!this.passwordFlag1) {
        errorText = ''
        state = true
      }
      return {
        errorText: errorText,
        state: state
      }
    }
  },
  mounted () {
    this.loginFlag = true
    this.passwordFlag = true
    this.passwordFlag1 = true
  },
  methods: {
    onRegister () {
      if (this.usenameError.state || this.passwordError.state || this.passwordError1.state) {
        this.formError = '*未通过验证！'
        return
      }
      if (this.passwordModel !== this.passwordModel1) {
        this.formError = '*两次输入密码不一致！'
        return
      }
      this.formError = ''
      this.$http.post('/api/login').then((res) => {
        console.log(res.data, 'succuss register')
        this.$emit('onRegister', res.data)
      }, (error) => {
        console.log(error, 'error register')
      })
    }
  }
}
</script>
