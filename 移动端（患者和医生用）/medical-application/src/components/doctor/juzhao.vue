<!--
 * @Author: happy
 * @Date: 2020-09-24 17:53:41
 * @LastEditTime: 2020-09-24 18:08:30
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
    <van-checkbox-group v-model="result">
      <van-checkbox name="a">感觉症状</van-checkbox>
      <van-checkbox name="b">其他简单感觉先(听、味、嗅等)</van-checkbox>
      <van-checkbox name="c">复杂感觉(幻觉或错觉)</van-checkbox>
      <van-checkbox name="d">局部阵挛强直</van-checkbox>
      <van-checkbox name="e">负性肌阵挛</van-checkbox>
      <van-checkbox name="f">偏转或不对称姿势强直</van-checkbox>
      <van-checkbox name="g">偏转或姿势性强直</van-checkbox>
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