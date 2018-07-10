<style lang="scss" scoped="">
@import "../../styles/mixin.scss";
.footer{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #e3e4e8;
  @include flex-center;
  p{
    color: #999;
  }
}
</style>

<template>
  <div class="footer">
    <p>© 2016 Fishenal MIT</p>
  </div>
</template>

<script>
export default {
  name: 'Vfooter'
}
</script>
