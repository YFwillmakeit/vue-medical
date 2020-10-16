<!--
 * @Author: happy
 * @Date: 2020-09-23 14:20:37
 * @LastEditTime: 2020-09-24 14:44:10
 * @LastEditors: happy
 * @Description: 
-->
<!--  -->
<template>
  <div>
<van-nav-bar title="我的探讨" left-text="返回" id="myhead" left-arrow @click-left="onClickLeft" />
<h1>哈哈哈</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

  methods: {
onClickLeft() {
      this.$router.go(-1);
    },
  },

  computed: {

  },

  components: {

  },

}
</script>
<style  scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
#myhead /deep/ .van-nav-bar .van-icon{
  color:white
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
</style>