<!--  -->
<template>
  <div>

<van-nav-bar id='myhead' title="关于我们" left-text="返回"  left-arrow @click-left="onClickLeft" />
<div id='imgs'>
  <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1576028024,2351896536&fm=26&gp=0.jpg'>
</div>
<p>医护端v1.3.0</p>
<p class='fore'>组长：黄琰云</p>
<p>组员：苟开鑫，肖晚秋，刘茂，徐志豪，向雯，王银丰</p>



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
#imgs{
  text-align:center;
  margin-top:50px;
}
p:last-child{
  width:250px;
  text-align:center;
  margin:auto;
  /* margin-top:30px; */
}
p{
text-align:center;
margin:10px 0;
}
.fore{
 margin-top:40px;
}
</style>