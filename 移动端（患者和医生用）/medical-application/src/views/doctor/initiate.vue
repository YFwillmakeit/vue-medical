<!--  -->
<template>
  <div>
<van-sticky>
<van-nav-bar id="myhead" title="发起病例探讨" left-text="返回"  left-arrow @click-left="onClickLeft" />
</van-sticky>
<initiatecase />
<!-- 按钮 -->


  </div>
</template>

<script>
import initiatecase from '../../components/doctor/initiatecase.vue'
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
initiatecase,
  },

}
</script>
<style  scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
/deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
</style>