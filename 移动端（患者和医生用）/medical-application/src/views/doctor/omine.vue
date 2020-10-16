<!--  -->
<template>
  <div id='app'>
<van-row>
  <!-- 头像 -->
  <van-col  span="24">
    <van-image @click='basicmsg' round width="8rem" height="8rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
  </van-col>
</van-row>
<!-- 姓名 -->
<p class='name'>{{this.all.dname}}</p>
<!-- 数据 -->
<van-row gutter="20">
  <van-col span="8">所有患者<br>{{this.alllist.length}}</van-col>
  <van-col span="8" class='borderlr'>我关注的患者<br>{{this.noticelist.length}}</van-col>
  <van-col span="8">我的余额<br>{{this.all.acount}}</van-col>
</van-row>
<!-- <br> -->
<hr/>
<!-- 信息 -->
<p class='accountmsg' @click='accountmsg'>账户信息<span>&gt;</span></p>
<!-- <van-divider /> -->
<p class='set' @click='set'>设置<span>&gt;</span></p>
<!-- <van-divider /> -->
<p class='about' @click='about'>关于我们<span>&gt;</span></p>
<!-- <van-divider /> -->

  </div>
</template>

<script>

export default {
  data () {
    return {
       alllist:[],
      noticelist:[],
      all:[],
    };
  },

  methods: {
      onClickLeft() {
      this.$router.go(-1);
    },
    basicmsg(){ //点击头像跳转基本信息
    // let obj={id:6};
    this.$router.push({
            name:'basicmsg',
            params:{
              id:6,
            }
          });
    






//================================//


      // this.$router.push({
      //   path:'/basicmsg'
      // })
    },
    accountmsg(){ //跳转账户信息
      this.$router.push({
        path:'/accountmsg'
      })
      },
      set(){ //跳转设置
      this.$router.push({
        path:'/set'
      })
      },
      about(){ //跳转关于我们
      this.$router.push({
        path:'/about'
      })
      },
  },

  mounted:function() { //所有关注患者接口
this.$axios.post(this.$api.xwq.indexguanzhu,JSON.stringify({doctorId:1}))
.then((res)=>{
  this.noticelist=res.data.data
  console.log('获取到关注患者了')
// for(var i=0;i<res.data.data.length;i++){   
// this.alllist.push(res.data.data[i]);
// }
})
.catch((error)=>{
console.log(error)
});

// 所有患者
this.$axios.post(this.$api.xwq.initiatecase)
.then((res)=>{
  this.alllist=res.data.data
  console.log('查询到所有患者了')
// for(var i=0;i<res.data.data.length;i++){   
// this.alllist.push(res.data.data[i]);
// }
})
.catch((error)=>{
console.log(error)
});

//个人信息
this.$axios
        .post(this.$api.xwq.basicmsg,JSON.stringify({id:5}))//JSON.stringify({id: 1,})
        .then((data) => {
          this.all=data.data.data
          console.log('获取到个人信息了了');
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取个人信息失败了');
        });


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
.van-col--24 {
  text-align:center;
  padding:10px 0;
  background-color: rgb(0,199,126);
}
.name{
  text-align:center;
  padding-bottom:10px;
  background-color: rgb(0,199,126);
}
.van-row{
  text-align:center;
  line-height:25px;
}
.borderlr{
  border-left:1px solid gray;
  border-right:1px solid gray;
}
.van-col--8 {
   border-bottom:1px solid gray; 
   border-top:1px solid gray;
   padding:10px 0;
   
}
.van-row::after {
    display: table;
    clear: both;
    content: none;
}
.accountmsg,.set,.about{
  border-bottom:1px solid gray;
  line-height: 60px;
  height: 60px;
  padding:0 10px;
  position: relative;
}
#app{
  overflow:hidden;
}
hr{
  margin-block-start: 0em;
  margin-block-end: 0em;
  border:1px solid white;
}
.accountmsg span,.set span,.about span{
  /* padding-left:70%; */
  position: absolute;
right:10px;
}

</style>