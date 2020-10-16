<!--
 * @Author: happy
 * @Date: 2020-09-22 14:57:35
 * @LastEditTime: 2020-09-22 18:22:37
 * @LastEditors: happy
 * @Description: 
-->
<!--  -->
<template>
  <div>
<van-tabbar v-model="active" active-color="#07c160">
  <van-tabbar-item icon="wap-home-o">
    <span @click="index">首页</span></van-tabbar-item>
  <van-tabbar-item icon="friends-o">
    <span  @click="patient">患者</span></van-tabbar-item>
  <van-tabbar-item icon="comment-o">
    <span  @click="message">消息</span></van-tabbar-item>
  <van-tabbar-item icon="manager-o" >
    <span @click="mine">我的</span></van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
        active: 0,
    };
  },

  methods: {
     index(){
      this.$router.push({ path:'/index'})
    },
    patient(){
      this.$router.push({ path:'/patient'})
    },
    message(){
      this.$router.push({ path:'/message'})
    },
    mine(){
      this.$router.push({ path:'/omine'})
    }
  },

  computed: {

  },

  components: {

  },

}
</script>
<style  scoped>
</style>