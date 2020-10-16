
<template>

  <div class="detailed">
    <van-sticky>
    <van-nav-bar id='myhead'
      title="余额明细"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
   </van-sticky> 
    <!-- <van-cell-group>
      <van-cell title="支出" value="100" />
      <van-cell title="收入" value="512" />
    </van-cell-group> -->

<!-- ========================== -->
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="study_list" v-for="item in list" :key="item.id" @click="details(item)">
        <div class="title"><span>流水号：</span>{{item.dealNumber}}</div>
        <div class="title"><span>交易项目：</span>{{item.NAME}}</div>
        <div class="content"><span>交易时间：</span>{{item.dealTime}}</div>
        <div class="mcw" ><span>交易金额：</span>{{item.money}}</div>
        <div class="data"><span>付款方姓名：</span>{{item.fName}}</div>
        <div class="people"><span>收款方姓名：</span><span>{{item.sName}}</span></div>
  </div>
  </van-list>
</van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
        list: [ 
          {
            dealNumber:"",
            dealTime:"",
            money:"",
            fname:"",
            sname:"",
          },
        ],
       loading: false,
        finished: false,
        refreshing: false,
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
       onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }
        this.loading = false;
          this.finished = true;
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
  mounted:function(){
     this.$axios
        .post(this.$api.xwq.balance,{"phone":"111222333"})//JSON.stringify({id: 1,})
        .then((data) => {
          this.list=data.data.data
         
          console.log('获取交易明细成功');
          console.log(data.data.data)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取交易明细失败了');
        });
setTimeout(()=>{
for(let i=0;i<this.list.length;i++){
  this.list[i].dealTime=new Date(this.list[i].dealTime).toLocaleString()
}
},200)



  }
};
</script>

<style scoped>

.van-nav-bar{
  background-color: rgba(0,199,126);
}
#myhead /deep/ .van-icon-arrow-left::before{
  color: white;
}
#myhead /deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
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
