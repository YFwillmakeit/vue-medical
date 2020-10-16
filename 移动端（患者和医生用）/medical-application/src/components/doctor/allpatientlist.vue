<!--
 * @Author: happy
 * @Date: 2020-09-23 09:30:20
 * @LastEditTime: 2020-10-11 14:43:18
 * @LastEditors: happy
 * @Description: 所有患者列表组件
-->
<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        v-for="item in list"
        :key="item.name"
        :title="item.name"
        class="list"
        id="list"
        @click="patientdetail(item)"
      >
        <img src="../../assets/miao.jpg" alt="" class="headimg" />
        <p>
          姓名: {{ item.name }} | 年龄: {{ item.age }} | 性别: {{ item.sex }}<br />
          关联日期：2020-09-23<br />
        </p>
        <hr />
      </div>
    </van-list>
  </van-pull-refresh>
</template>
<script>
export default {
  data() {
    return {
      list: [{name:'测试',
      sex:0,
      age:18,
      }],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  mounted() {
    //所有患者接口
    this.$axios
      .post(this.$api.gkx.syhz)
      .then((res) => {
        this.list = res.data.data;
       this.list=[...res.data.data]
       for(let i=0;i<this.list.length;i++){
         if(this.list[i].sex==0){
            this.list[i].sex='女'
         }else{
           this.list[i].sex='男'
         }
       }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
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

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    patientdetail(item) {//点击跳转该患者详情页
      this.$router.push("/patientdetail");
      this.$store.state.currentPatientDetail = item;
    },
  },
};
</script>
<style scoped>
.headimg {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: 20px 15px;
  vertical-align: top;
}
.age{
  display: inline-block;
  width: 100px;
}
.name{
  display: inline-block;
  width: 120px;
}
p{
  display: inline-block;
  margin: 20px 0;
}


</style>