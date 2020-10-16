/* 消息设置 */
<template>
  <div id="setInfor">
    <van-nav-bar id='myhead'
      title="消息设置"
      left-text="返回"
      left-arrow
       background-color='rgba(0,199,126)'
      @click-left="onClickLeft()"
    />
  </div>
</template>

<script>
export default {
  name: "SetInfor",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
/deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
</style>
