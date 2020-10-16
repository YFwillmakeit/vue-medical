<!--  -->
<template>
  <div>
    <!-- 开始 -->
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="study_list" v-for="item in list" :key="item.id" @click="details">
      
     
        <div class="title">关心癫痫病第三期学术会议</div>
        <div class="content">这里是详情内容</div>
        <div class="mcw"><span>参会主持：</span>秋小秋</div>
        <div class="data"><span>时间：</span>2020-9-23</div>
        <div class="people"><span>已报名人数:</span>7人 <span>(10人)</span></div>
        <div class="state">收费</div>
     
      
  </div>
    <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
  </van-list>
</van-pull-refresh>


    <!-- 结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
        list: [ ],
        loading: false,
        finished: false,
        refreshing: false,
    };
  },

  methods: {
      onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 10) {
          this.finished = true;
        }
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
    details:function(){ //点击查看详情
      this.$router.push({path:'/study_details'})
    }
  },
  

  computed: {

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
  color:rgb(222,222,222)
}
.state{
  padding-left:250px;
  font-size:16px;
}
.title{
  font-size:16px;
}
</style>