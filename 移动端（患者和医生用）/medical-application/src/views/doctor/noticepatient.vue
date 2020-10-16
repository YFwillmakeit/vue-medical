<!--
 * @Author: happy
 * @Date: 2020-09-24 16:16:29
 * @LastEditTime: 2020-10-11 16:47:31
 * @LastEditors: happy
 * @Description: 关注患者列表
-->
<template>
  <div>
       <van-nav-bar
      id="myhead"
      title="关注患者"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad">
    <div v-for="item in list" :key="item" :title="item" class="list" @click="patientdetail(item)">
       <img src="../../assets/miao.jpg" alt="" class="headimg" />
        <div class="content">
          <span class="name">姓名: {{ item.name }} </span>
          <span class="age">年龄: {{ item.age }} </span>
          <span class="sex">性别: 男</span><br />
          <span class="time">关联日期：2020-09-23</span><br />
        </div>
        <hr />
    </div>
  </van-list>
</van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      list: [],
      list2:[],
      loading: false,
      finished: false,
      refreshing: false,
    }
    },
    mounted() {    

      //doctorId需要在登录成功获取
      this.$axios//医生关注患者接口
      .post(this.$api.gkx.notice,JSON.stringify({doctorId:1}))
      .then((res) => {
        this.list2=res.data.data
        console.log("接口测试成功");
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
      setTimeout(()=>{
        for(let i=0;i<this.list2.length;i++){
          this.list.push(this.list2[i].patient)
        }
  console.log(this.list2)
      },200);
      
    },
 methods: {
        onClickLeft() {
      this.$router.go(-1);
    },
     onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }    
        this.loading = false;
          this.finished = true;
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
    patientdetail(item){
      this.$store.state.notice = item;
      this.$router.push({ path:'/personalinformation'})
      console.log(this.$store.state.notice)
    }
    },
}
</script>

<style scoped>
#myhead /deep/.van-nav-bar .van-icon {
  color: white;
}
#myhead /deep/.van-nav-bar__text {
  color: white;
}
#myhead /deep/.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
/* .list{
  height: 60px;
  width: 100%;
  border: 1px solid gray;
} */
.headimg {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: 25px 15px;
}
.list div {
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  line-height: 25px;
}
.age{
  display: inline-block;
  width: 100px;
}
.name{
  display: inline-block;
  width: 120px;
}

</style>