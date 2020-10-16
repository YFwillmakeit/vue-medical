<!--
 * @Author: happy
 * @Date: 2020-09-25 11:16:48
 * @LastEditTime: 2020-09-25 16:54:08
 * @LastEditors: happy
 * @Description: 
-->
<template>
<div><van-sticky>
      <van-nav-bar
      id="myhead"
      title="患者详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </van-sticky>
  <van-checkbox-group v-model="result">
  <van-checkbox name="a">德巴金</van-checkbox>
  <hr>
  <van-checkbox name="b">苯妥英钠</van-checkbox>
  <hr>
  <van-checkbox name="c">卡马西平</van-checkbox>
  <hr>
  <van-checkbox name="d" >奥卡西平</van-checkbox>
  <hr>
  <van-checkbox name="e">苯巴比妥</van-checkbox>
  <hr>
  <van-checkbox name="f">利必通</van-checkbox>
  <hr>
  <van-checkbox name="g" >开浦兰</van-checkbox>
  <hr>
  <van-checkbox name="h">妥泰</van-checkbox>
  <hr>
</van-checkbox-group>
</div>
</template>

<script>
export default {
    data() {
    return {
      result: [],
    };
  },
  methods: {
        onClickLeft() {
      this.$router.go(-1);
    },
  },
watch: {//监听选择情况
    result:function(){
        let str ='';
      for(let i in this.result){
       str+=i;
      }
      console.log(str)
    },
  },
}
</script>

<style scoped>
#myhead /deep/.van-nav-bar .van-icon {
  color: white;
}
#myhead /deep/.van-nav-bar__text {
  color: white;
}
#myhead /deep/.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
.van-checkbox{
  height: 60px;
}
</style>