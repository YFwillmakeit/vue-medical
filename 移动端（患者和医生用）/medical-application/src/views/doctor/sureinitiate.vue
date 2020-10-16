<!--
 * @Author: happy
 * @Date: 2020-10-07 16:28:23
 * @LastEditTime: 2020-10-10 08:41:06
 * @LastEditors: happy
 * @Description: 
-->
<!--  -->
<template>
  <div>
<van-sticky>
<van-nav-bar id="myhead" title="确认发起探讨" left-text="返回"  left-arrow @click-left="onClickLeft" />
</van-sticky>
<sureinit />



  </div>
</template>

<script>
import sureinit from '../../components/doctor/sureinit.vue'
export default {
  data () {
    return {
      checkbox: ["人民币支付"],
      result: [],
    };
  },

  methods: {
      onClickLeft() {
      this.$router.go(-1);
    },
    
  },

  mounted:function() {
    console.log('秋秋')
    
    
  },

  components: {
  sureinit,
  },

}
</script>
<style  scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
#myhead /deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
</style>