<!--
 * @Author: happy
 * @Date: 2020-09-25 16:32:19
 * @LastEditTime: 2020-09-25 16:55:48
 * @LastEditors: happy
 * @Description: 手术选项
-->
<template>
  <div>
      <van-sticky>
    <van-nav-bar
      title="所有患者"
      id="myhead"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      right-text="保存"
      @click-right="onClickRight"
    />
</van-sticky>
<van-checkbox-group v-model="result">
  <van-checkbox name="a">质间灶切除</van-checkbox>
  <hr>
  <van-checkbox name="b">半球断离</van-checkbox>
  <hr>
  <van-checkbox name="c">胼胝体切开</van-checkbox>
  <hr>
  <van-checkbox name="d" >DBS</van-checkbox>
  <hr>
  <van-checkbox name="e">VNS</van-checkbox>
  <hr>
  <van-checkbox name="f">其他</van-checkbox>
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
    onClickRight() {
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