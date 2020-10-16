<!--  -->
<template>
  <div>
<van-sticky>
<van-nav-bar id='myheard' title="选择提醒人群" left-text="返回"  left-arrow @click-left="onClickLeft" />
</van-sticky>
<van-tabs v-model="active">
  <van-tab title="分组">
      <grouping />
  </van-tab>
  <van-tab title="全部">
      <allpeople />
  </van-tab>
</van-tabs>
<!-- 提交 -->
<van-row>
  <van-col  span="12">
    <van-button type="primary" @click="sureinitiate">完成</van-button>
  </van-col>
</van-row>

  </div>
</template>

<script>
import grouping from '../../components/doctor/grouping'
import allpeople from '../../components/doctor/allpeople'

export default {
  data () {
    return {
      active:''
    };
  },

  methods: {
    
      onClickLeft() {
      this.$router.go(-1);
    },
    sureinitiate:function(){
    //   this.$store.dispatch('changeremind',this.remind)
    // console.log('呜呜呜呜')
    // console.log(this.$store.state.remind)
    // 返回传递参数 通过中转站eventBus
    
       this.$router.back();
    },
    
  },
 
mounted:function(){
  console.log(this.$route.params.obj)
  
},
  

  

components: {
grouping,
allpeople,
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
  color:white
}
#myheard /deep/ .van-nav-bar__text{
  color: white;
}
#myheard /deep/ .van-ellipsis{
  color: white;
}
.van-button{
  width:100%;
  height:50px;
  position:fixed;
  bottom:0;
  right:0;
}
</style>