<!--  -->
<template>
  <div>
    <van-sticky>
    <van-nav-bar title="探讨详情" left-text="返回"  left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <div v-for='item in list' :key='item.people'>
      <div class="caption">
      <div class='meettitle'>{{list[0].theme}}</div><span class="meetdata">会议持续时间：{{list[0].durations}}</span>
      </div>

  <!-- 表格内容开始 -->
  
<van-cell-group>
  <van-cell title="状态"  v-model='list[0].STATUS' />
  <van-cell title="驳回原因"  v-model='list[0].canceldes'  v-show='isShow'/>
  <van-cell title="邀请嘉宾"  v-model='list[0].jname'/>
  <van-cell title="会议时间" v-model='list[0].starttime' />
  <van-cell title="参会人数" v-model='list[0].Num' />
  <van-cell title="费用" v-model='list[0].money' />
  <van-cell title="探讨患者信息" v-model='list[0].pname' />
  <div class='state'><p>探讨说明</p>
  
  {{list[0].des}}</div>
</van-cell-group>
</div>


<!-- 表格内容结束 -->

<!-- 立即参与开始 -->
<!-- <van-row>
  <van-col  span="12">
    <van-button type="primary" @click="join(list[0])">立即参与</van-button>
  </van-col>
</van-row> -->
<!-- 立即参与结束 -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow:true,
      list:[
      {
      title:'',
      content:"",
      mcw:"",
      data:"",
      peope:"",
      state:"",
      patient:"",
      money:"",
      time:"",
      guests:"",
      },
    ],
    };
  },
  mounted:function(){
    let item=this.$router.history.current.params;
   console.log(item)

   console.log(item.id.STATUS)
   this.$set(this.list,0,item.id)
    // console.log(this.list);
  //  this.$set(this.list[0],  'STATUS',  item.id.STATUS==0?'待审核':item.STATUS==1?'驳回':'通过')
   if(item.id.STATUS==0){
     item.id.STATUS='待审核';
     this.isShow=false
   }else if(item.id.STATUS==1){
     item.id.STATUS='驳回';
   }else{
     item.id.STATUS='通过';
    //  item.id.canceldes='已通过，请准备';
    this.isShow=false
   }



  },
  methods: {
onClickLeft() {
      this.$router.go(-1);
  },
  join:function(id){
    this.$router.push({
      name:"join",
      params:{
        id:id
      }
    })
  }

  
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
div /deep/ .van-nav-bar .van-icon{
  color:white
}
div /deep/ .van-nav-bar__text{
  color: white;
}
div /deep/ .van-ellipsis{
  color: white;
}
.meetdata{
  margin-left:170px;
  font-size:14px;
  
}
.meettitle{
  margin-bottom:20px;
}
.caption{
  padding:10px 10px 5px 10px;
  color:rgb(150,151,153);
  border-bottom:15px solid rgb(242,242,242);
}
.van-cell-group{
  margin:20px;
  /* padding:30px; */
  color:rgb(150,151,153);
}
.van-cell-group .van-cell{
  margin-top:30px;
  color:rgb(150,151,153);
  border-bottom:2px solid rgb(242,242,242);
  padding-bottom:7px;
}
.state p{
  line-height:70px;
}
.van-button{
  width:100%;
  height:50px;
  position:fixed;
  bottom:0;
  right:0;
}
</style>