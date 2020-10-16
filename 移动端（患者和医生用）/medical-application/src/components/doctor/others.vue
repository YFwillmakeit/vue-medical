<!--
 * @Author: happy
 * @Date: 2020-09-25 14:13:45
 * @LastEditTime: 2020-09-25 14:16:02
 * @LastEditors: happy
 * @Description: 脑电图异常其他选项
-->
<template>
  <div>
       <van-checkbox-group v-model="result">
  <van-checkbox name="a">其他</van-checkbox>
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
}
</script>

<style scoped>
.van-checkbox{
  height: 60px;
}
</style>