<!--  -->
<template>
  <div>

<van-nav-bar id='myhead' title="" left-text="返回"  left-arrow @click-left="onClickLeft" />

<!-- 按钮 -->


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
*{
  margin:0;
  padding:0;
}
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