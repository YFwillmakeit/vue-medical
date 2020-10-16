<!--
 * @Author: happy
 * @Date: 2020-09-25 13:56:52
 * @LastEditTime: 2020-09-25 13:59:47
 * @LastEditors: happy
 * @Description: 背景活动异常
-->
<template>
  <div>
      <van-checkbox-group v-model="result">
  <van-checkbox name="a">慢波异常</van-checkbox>
  <hr>
  <van-checkbox name="b">其他</van-checkbox>
  <hr>
  </van-checkbox-group>
  </div>
</template>

<script>
export default {
data() {
    return {
      result: [],
}
},
watch: {//监听选择情况
    result:function(){
      for(let i in this.result){
        if(this.result[i]=='a'){
          // this.$router.push({ path:'/guomin'})
        }
      }
    }
  },
};
</script>

<style scoped>
.van-checkbox{
  height: 60px;
}
</style>