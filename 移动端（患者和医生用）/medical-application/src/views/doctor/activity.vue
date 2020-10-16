<!--  -->
<template>
  <div>
<van-sticky>
<van-nav-bar
  title="诊疗活动"
  left-text="返回"
  right-text="添加"
  left-arrow
  @click-left="onClickLeft"
  @click-right="add"
/>
</van-sticky>
<!-- 日历 -->
<activitydata @selectTime="selectTime" />

<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="study_list" v-for="item in mylist" :key="item" @click="details(item)">
        <div class="title"><span>诊疗时间：</span>{{item.time}}</div>
        <div class="content"><span>诊疗人数：</span>{{item.people}}</div>
        <div class="mcw" ><span>诊疗地点：</span>{{item.dName}}</div>
        <!-- <div class="data"><span>付款方姓名：</span>{{item.fname}}</div>
        <div class="people"><span>收款方姓名：</span><span>{{item.sname}}</span></div> -->
  </div>
  </van-list>
</van-pull-refresh>





<!-- 测试生命周期-->    
<!-- {{time}}
{{test}} -->
  </div>
</template>

<script>
import activitydata from '../../components/doctor/activitydata.vue'
export default {
  data () {
    return {
      arr:{},
      test:'测试',
      time:'',
      mylist:[],
      // ========================
       list: [ 
          {
            aTime:"",
            people:"",
            dId:"",
            // fname:"",
            // sname:"",
          },
        ],
       loading: true,
        finished: true,
        refreshing: false,
    };
  },
  created(){
    this.test="秋"
  },
  mounted(){
    this.test="秋秋"
    let today=this.$utils.formatDate(new Date(), "yyyy-MM").replace(/-/g, "/")
    this.time=new Date(today).getTime().toString().substring(0,new Date(today).getTime().toString().length-3)
    console.log(this.time)
    this.$axios     //time是我要传过去的时间
        .post(this.$api.xwq.activity,{"doctorId":"6"})//JSON.stringify({id: 1,})
        .then((data) => {
          this.arr=data.data.data
          this.$store.state.myall=this.arr;
          console.log('这是存的数据')
          console.log(this.$store.state.myall)
          console.log('获取诊疗活动成功了');
          // 时间戳转日期
          // var timestamp4 = new Date(1472048779952)
          // console.log(timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8));
          // console.log(data.data.data[0].a_time/1000)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取诊疗活动失败了');
        });
  },
  methods: {
onClickLeft() {
      this.$router.go(-1);
  },
    add() {  //添加
      this.$router.push({
        path:'/add'
      })
    },
selectTime(e){
  this.mylist=[];
  console.log('子组件传过来的值',e)
  // console.log(e.date)
  // this.time=e
  // let newtime='';
  let month1 = (new Date(+(e.date)*1000)).getMonth() + 1;
  let day1 = (new Date(+(e.date)*1000)).getDate();
//  newtime = new Date(parseInt((e.date)*1000));
  console.log(month1)
  console.log(day1)
  // console.log(newtime.getDate())
  console.log(this.$store.state.myday)
  for(let i=0;i<this.$store.state.myday.length;i++){
    if(month1==this.$store.state.myday[i].month){
      if(day1==this.$store.state.myday[i].day){
        let obj={
          time:month1+'月'+day1+'日',
          people:this.$store.state.myday[i].people,
          dName:this.$store.state.myday[i].dName,
        };
        this.mylist.push(obj)
      }
    }
  }
}
  },

  computed: {

  },

  components: {
    activitydata,
  },

}
</script>
<style  scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
/deep/ .van-nav-bar .van-icon{
  color:white
}
div /deep/ .van-nav-bar__text{
  color: white;
}
div /deep/ .van-ellipsis{
  color: white;
}

.study_list{
  padding:20px 5px 15px 15px;
  /* font-size:14px; */
 border-top:3px solid rgb(222,222,222);
 border-bottom:3px solid rgb(222,222,222);
 color: black;
 
}
.content{
  /* color:rgb(222,222,222); */
  height:19px;
  width:394px;
  overflow:hidden;
}
.state{
  padding-left:300px;
  font-size:16px;
}
.title{
  font-size:16px;
}

</style>