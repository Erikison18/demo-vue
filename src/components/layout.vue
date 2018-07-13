<template>
  <div>
    <v-header @login="openLogin" @register="openReg" @about="openAbout"></v-header>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <v-footer></v-footer>
    <v-dialog :isShow="isShowDialog" @closeDialog="closeDialog">
      <v-login v-if="dialogContent.isLogin" @onLogin="onLogin"></v-login>
      <v-register v-if="dialogContent.isReg">register</v-register>
      <p v-if="dialogContent.isAbout">本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
    </v-dialog>
  </div>
</template>

<script>
import Header from './base/header'
import Footer from './base/footer'
import Dialog from './base/dialog'
import Login from './base/loginForm'
import Register from './base/regForm'
export default {
  name: 'layout',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-dialog': Dialog,
    'v-login': Login,
    'v-register': Register
  },
  data: function () {
    return {
      isShowDialog: false,
      dialogContent: {
        isLogin: false,
        isReg: false,
        isAbout: false
      }
    }
  },
  methods: {
    closeDialog () {
      this.isShowDialog = false
    },
    openDialog () {
      this.isShowDialog = true
    },
    setDialogContent () {
      for (let i in this.dialogContent) {
        this.dialogContent[i] = false
      }
    },
    openLogin () {
      this.setDialogContent()
      this.dialogContent.isLogin = true
      this.openDialog()
    },
    openReg () {
      this.setDialogContent()
      this.dialogContent.isReg = true
      this.openDialog()
    },
    openAbout () {
      this.setDialogContent()
      this.dialogContent.isAbout = true
      this.openDialog()
    },
    onLogin () {
      this.closeDialog()
    }
  }
}
</script>
