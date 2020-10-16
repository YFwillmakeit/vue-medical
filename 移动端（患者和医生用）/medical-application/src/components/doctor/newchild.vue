<!--
 * @Author: happy
 * @Date: 2020-09-24 18:39:20
 * @LastEditTime: 2020-09-24 18:45:20
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
    <van-checkbox-group v-model="result">
      <van-checkbox name="a">良性家族性新生儿惊阙</van-checkbox>
      <van-checkbox name="b">早期肌阵挛脑病</van-checkbox>
      <van-checkbox name="c">大田园综合征</van-checkbox>
      <van-checkbox name="f">良性新生儿惊阙</van-checkbox>
      <van-checkbox name="g">待定</van-checkbox>
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
};
</script>

<style scoped>
.van-checkbox{
    height: 50px;
    line-height: 50px;
}
</style>