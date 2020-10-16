<!--  -->
<template>
  <div>
    <!-- 开始 -->
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    
    <div class="study_list" v-for="item in list" :key="item.id" @click="details(item)">
      
     
        <div class="title">{{item.theme}}</div>
        <div class="content">{{item.des}}</div>
        <div class="mcw" ><span>参会主持：</span>{{item.ddname}}</div>
        <div class="data"><span>时间：</span>{{item.starttime}}</div>
        <div class="people"><span>已报名人数:</span><span>{{item.Num}}</span></div>
        <div class="state">{{item.state}}</div>
        <!-- 隐藏内容 -->
        <!-- <div class="money" v-show='false'>{{item.money}}</div>
        <div class="patient" v-show='false'>{{item.patient}}</div>
        <div class="time" v-show='false'>{{item.time}}</div>
        <div class="guests" v-show='false'>{{item.guests}}</div>
        <div class="myname" v-show='false'>{{item.myname}}</div>
        <div class="joinname" v-show='false'>{{item.joinname}}</div> -->
  </div>
    
  </van-list>
</van-pull-refresh>


    <!-- 结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
        list: [ 
          {
            theme:"关心癫痫病第三期学术会议",
            des:"详情内容哈哈详情内容哈哈哈详情内容哈哈哈详情内容哈哈哈详情内容哈哈哈详情内容哈哈哈详情内容哈哈哈详情内容哈哈哈详情内容哈哈哈哈",
            dname:"秋小秋",
            starttime:"2020-8-9",
            Num:"8人（10人）",
            money_type:"免费",
            patient:"小狗",   //患者
            money:"20000人民币",      //费用
            durations:"120分钟",    //持续时间
            guests:"组长",     //邀请嘉宾
            myname:"我自己",    //参加人姓名
            joinname:"小白,小红"  //所有参加人姓名
          },
          
        ],
        loading: false,
        finished: false,
        refreshing: false,
    };
  },

  methods: {
      onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
   
          this.refreshing = false;
        }

        // for (let i = 0; i < 3; i++) {
        //   this.list.push(this.list.length + 1);
        // }
        this.loading = false;

        // if (this.list.length >= 3) {
          this.finished = true;
        // }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    details:function(id){ //点击查看详情
    console.log(id.id)
      this.$router.push({
        name:"study-details",
        params:{
          id:id
        }
      })
    }
  },
  

  mounted:function() {
    console.log('koiq')
    this.$axios.post(this.$api.xwq.studylist)
    // this.$axios.post('http://172.16.6.132:8080/interm/discuss/page')

.then((res)=>{
  this.list=res.data.data
  // this.list.starttime=new Date(this.list.starttime[0])
  // console.log(this.list[0].starttime)
  console.log('获取到病例探讨了')
  console.log(this.list)
// for(var i=0;i<res.data.data.length;i++){   
// this.alllist.push(res.data.data[i]);
// }
})
.catch((error)=>{
console.log(error)
console.log('获取病例探讨失败')
});

setTimeout(()=>{
for(let i=0;i<this.list.length;i++){
  let time=new Date(this.list[i].starttime);
  let year=time.getFullYear();
  let month=time.getMonth()+1;
  let day=time.getDate();
  let str=year+'年'+month+'月'+day+'日';
  this.list[i].starttime=str
  // console.log(this.list[i].starttime)
  // console.log('1')
}
},1000);

},

  components: {

  },

}
</script>
<style  scoped>
.study_list{
  padding:20px 5px 15px 15px;
  font-size:14px;
 border-top:3px solid rgb(222,222,222);
 border-bottom:3px solid rgb(222,222,222);
 color: black;
 
}

.content{
  color:rgb(222,222,222);
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