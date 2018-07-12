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
      <p v-if="dialogContent.isLogin">login</p>
      <p v-if="dialogContent.isReg">register</p>
      <p v-if="dialogContent.isAbout">about</p>
    </v-dialog>
  </div>
</template>

<script>
import Header from './base/header'
import Footer from './base/footer'
import Dialog from './base/dialog'
export default {
  name: 'layout',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-dialog': Dialog
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
    }
  }
}
</script>
