<!--  -->
<template>
  <div>
    <van-sticky>
<van-nav-bar
id='myhead'
  title="基本信息"
  left-text="返回"
  right-text="编辑"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</van-sticky>
<!-- 按钮 -->
<div class='all'>

<p class='name'>姓名：
  <span :name='all.dname'>{{all.dname}}</span>  
  </p>
<p class='sex'>性别：
  <span :sex='all.sex'>{{all.sex}}</span>
  </p>
<p id='headimg'>头像：
  <van-image round width="5rem" height="5rem" :src='"http://172.16.6.115:8080/interm/upload"+all.uri' />
</p>
<p>医院：
  <span :hname='hname'>{{all.hname}}</span>
  </p>
<p>科室：
  <span :department='dename'>{{all.dename}}</span>
  </p>
<p>职称：
  <span :position='position'>{{all.position}}</span>
  </p>
<p id='statuimg'>资格证：
  <van-image width="250" height="200" :src='all.qualification' />
</p>

</div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      all:
        {
        dname:'',
        sex:'',
        uri:'https://img.yzcdn.cn/vant/cat.jpeg', //头像
        hname:'',
        dename:'',
        position:'',
        qualification:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3693197147,1345032425&fm=26&gp=0.jpg'
        },
      obj:{},     //放自己的信息
    };
  },

  methods: {
    
      onClickLeft() {
      this.$router.push('mine');
    },
    //编辑医生信息的请求
    onClickRight() {
      console.log(this.all.dname)
      this.obj={
        dname:this.all.dname,
        sex:this.all.sex,
        uri:this.all.uri,
        hname:this.all.hname,
        dename:this.all.dename,
        position:this.all.position,
        qualification:this.all.qualification,
      }
      this.$store.dispatch('changeall',this.obj)
      console.log(this.$store.state.obj)
      this.$router.push({
        path:'/editmsg'
      }) 
    },
  },

  mounted(){
    console.log('嘻嘻嘻')
      this.$axios
        .post(this.$api.xwq.basicmsg,JSON.stringify({id:5}))//JSON.stringify({id: 1,})
        .then((data) => {
          this.all=data.data.data
          // console.log(this.all)
          console.log('获取到个人信息了了');
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取个人信息失败了');
        });
    console.log(this.$router.history.current.params.data.data.data)
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
.all{
  height:100%;
  line-height:45px;
  padding:5px 20px;
}
.all p{
  border-bottom:1px solid gray;
  
}
.all p>:first-child{
color:grey;
margin-left:25px;

}
.van-image{
  vertical-align:middle;
  margin:5px 0;
  
}
#statuimg,#headimg{
  border-bottom:none;
}
</style>