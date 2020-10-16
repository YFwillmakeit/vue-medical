<!--
 * @Author: happy
 * @Date: 2020-10-07 16:28:23
 * @LastEditTime: 2020-10-10 08:40:53
 * @LastEditors: happy
 * @Description: 
-->

<template>
<div>
  <div id="setUpdate">
    <van-nav-bar id='myhead'
      title="版本更新"
      left-text="返回"
      left-arrow
      background-color='rgba(0,199,126)'
      @click-left="onClickLeft()"
    />
  </div>
  <div id='imgs'>
    <img src='../../assets/pay.png'/>
  </div>
  
  <p>已是最新版本</p>
  </div>
</template>

<script>
export default {
  name: "SetUpdate",
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
#myhead /deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
#imgs{
  text-align: center;
  margin-top: 50px;
}
p{
  text-align: center;
}
</style>
