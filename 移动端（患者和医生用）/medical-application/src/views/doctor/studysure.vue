<!--  -->
<template>
  <div>
    <van-sticky>
    <van-nav-bar
      title="报名成功"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </van-sticky>
    <div v-for="item in list" :key="item.people">
      <div class="caption">
        <div class='meettitle'>{{ list[0].theme }}</div>
        <span class="meetdata">会议持续时间：{{ list[0].durations }}</span>
        <span class="meetdata">会议时间：{{ list[0].starttime }}</span>
      </div>

      <!-- 表格内容开始 -->
      <van-cell-group>
        <van-cell title="探讨患者信息" v-model='list[0].pname' />
        <van-cell title="收费" v-model="list[0].money" />
        <!-- <van-cell title="参加人姓名" v-model="list[0].dname" /> -->
        <van-cell title="主持人"  v-model='list[0].ddname' />
         <!-- <div class='joinall'><p>所有参与人</p>{{list[0].joinname}}</div> -->
        
      </van-cell-group>
      
    </div>
    <!-- 表格内容结束 -->


<!-- 确认开始 -->
<van-row>
  <van-col  span="12">
    <van-button type="primary" @click="surejoin(list[0])">确认</van-button>
  </van-col>
</van-row>
<!-- 确认参与结束 -->


  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: ["人民币支付"],
      result: [],
     
      list: [
        {
          theme: "",
          starttime: "",
          money: "",
          durations: "",
          dname: "",
        },
      ],
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push('case-study');
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    surejoin:function(id){
      this.$toast.success('报名成功');
      this.$router.push({
        name:"case-study",
        params:{
          id:id
        }
      })
    }
  },

  computed: {},
  mounted: function () {
    // console.log(this.$router.history.current.params.id);
    let item = this.$router.history.current.params;
    this.$set(this.list, 0, item.id);

// this.$axios
//         .post("http://172.16.6.115:8080/interm/doctor/findById",JSON.stringify({id:6}))//JSON.stringify({id: 1,})
//         .then((data) => {
//           this.list[0].myname=data.data.data.dname
//           console.log('获取到参与人姓名了');
//           console.log(data.data.data)
         
//         })
//         .catch((err) => {
//           console.log(err);
//           console.log('获取姓名失败了');
//         });
      //  this.$set(this.list[0],'myname',data.data.data.dname)




  },

  components: {},
};
</script>
<style  scoped>
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
div /deep/ .van-nav-bar .van-icon {
  color: white;
}
div /deep/ .van-nav-bar__text {
  color: white;
}
div /deep/ .van-ellipsis {
  color: white;
}
.van-button{
  width:100%;
  height:50px;
  position:fixed;
  bottom:0;
  right:0;
}

.onebutton {
  left: 0;
}
.caption {
  padding: 10px 10px 5px 10px;
  color: rgb(150, 151, 153);
  border-bottom: 15px solid rgb(242, 242, 242);
}
.van-cell-group{
  margin:20px 0;
  /* padding:30px; */
  color:rgb(150,151,153);
}
.van-cell-group .van-cell{
  margin-top:15px;
  padding-left:16px;
  color:rgb(150,151,153);
  border-bottom:2px solid rgb(242,242,242);
  padding-bottom:7px;
}
.meetdata1,.meetdata2{
  font-size:14px;
}
.meettitle{
  margin-bottom:20px;
}
.meetdata2{
  margin-left:50px;
  text-align:right;
}
.joinall{
    padding-left:16px;
}
</style>