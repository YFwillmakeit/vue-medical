<!--  -->
<template>
  <div>
    <van-sticky>
    <van-nav-bar title="病例探讨" left-text="返回"  left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <!-- 按钮 -->
    
    
   
    <van-row>
      <van-col  span="12">
        <van-button icon="friends" to="/case-study">全部病例探讨</van-button>
      </van-col>
    <!-- </van-row>

     <van-row> -->
      <van-col span="12">
         <van-button icon="manager" to="/my-study" >我发起的探讨</van-button>
      </van-col>
    </van-row>
    <!-- 圆形按钮搜索 -->
    <div class="circle" @click='initiate'><span>发起<br/>探讨</span></div>
    <!-- 列表组件 -->
    <study_list />
  </div>
</template>

<script>
import study_list from '../../components/doctor/study-list.vue'
export default {
  data () {
    return {

    };
  },

  methods: {
onClickLeft() {
      this.$router.push('index');
    },
    initiate:function(){
      // let a=[]
      this.$store.state.list=[]
      // this.$store.state.list.username
      this.$router.push({
        path:'/initiate'
      })
    }
  },

  computed: {

  },

  components: {
    study_list,
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
.van-icon{
  color:rgba(1, 165, 247, 0.541)
}
/deep/ .van-nav-bar .van-icon{
  color:white
}
/deep/ .van-nav-bar__text{
  color: white;
}
/deep/ .van-ellipsis{
  color: white;
}
.van-col{
  text-align: center;

}
.van-button{
  width: 100%;
}
.circle{
width:70px;
height:70px;
line-height: 35px;
/* padding-top:20px; */
background-color: rgba(0,199,126,.6);
border-radius:50%;
color:white;
text-align:center;
position: fixed;
top: 80%;
left:75%;
z-index:999;
}
/* .circle span{

} */
</style>