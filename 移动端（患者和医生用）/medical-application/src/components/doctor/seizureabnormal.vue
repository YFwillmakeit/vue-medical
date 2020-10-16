<!--
 * @Author: happy
 * @Date: 2020-09-25 13:18:59
 * @LastEditTime: 2020-09-25 13:56:10
 * @LastEditors: happy
 * @Description: 发作异常多选组件
-->
<template>
  <div>
      <van-checkbox-group v-model="result">
  <van-checkbox name="a">广泛性异常</van-checkbox>
  <hr>
  <van-checkbox name="b">局灶性异常</van-checkbox>
  <hr>
  <van-radio-group v-model="one" direction="horizontal">
    颞叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
 <van-radio-group v-model="two" direction="horizontal">
    顶叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
 <van-radio-group v-model="three" direction="horizontal">
    额叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
 <van-radio-group v-model="four" direction="horizontal">
    枕叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
  <van-checkbox name="g" >其他</van-checkbox>
  <hr>
</van-checkbox-group>
  </div>
</template>

<script>
export default {
data() {
    return {
      result: [],
       one: '1',
       two: '1',
       three: '1',
       four: '1',
    };
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
.van-checkbox,.van-radio-group{
  height: 60px;
}
.jiange{
  width: 40%;
  display: inline-block;
}
</style>