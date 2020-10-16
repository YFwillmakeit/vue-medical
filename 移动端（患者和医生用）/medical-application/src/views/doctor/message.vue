<!--
 * @Author: happy
 * @Date: 2020-09-22 15:30:00
 * @LastEditTime: 2020-09-22 18:51:07
 * @LastEditors: happy
 * @Description: 
-->
<template>
<div>
   <van-sticky>
<van-nav-bar id='myhead'
title="消息中心"/>
</van-sticky>

   <hr>
   <van-tabs v-model="active" id="pageF" title-active-color="rgb(0,202,133)" color='rgb(0,202,133)'>
  <van-tab title="系统消息" id="page 1">
      <system />
  </van-tab>
  <van-tab title="交易消息" id="page 2">
    <jioayi/>
  </van-tab>
  <van-tab title="探讨消息" id="page 3">
    <tantao/>
  </van-tab>
  <van-tab title="活动消息" id="page 4">
    <huodong/>
  </van-tab>
</van-tabs>
</div>
   
</template>
<script>
import system from '../../components/doctor/system';
import jioayi from '../../components/doctor/jiaoyi';
import tantao from '../../components/doctor/tantao';
import huodong from '../../components/doctor/huodong';
export default {
  components: {
    system,jioayi,tantao,huodong
  },
   data() {
    return {
      active: 1,
    };
  },
};
</script>
<style scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
/deep/ .van-nav-bar .van-icon{
  color:white
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
#MassageCenter{
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: gray;
  background: rgba(0, 199, 126,1);
}
</style>
