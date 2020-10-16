<!--
 * @Author: happy
 * @Date: 2020-09-26 19:05:48
 * @LastEditTime: 2020-09-27 09:20:29
 * @LastEditors: happy
 * @Description: 就诊记录里辅助检查
-->
<template>
  <div>
    <!-- 脑电图 -->
    <van-row class="money">
      <van-col span="11">脑电图</van-col>
      <div>{{ contentlist.eeg }}</div>
      <div>{{ contentlist.eegDes }}</div>
    </van-row>
    <!-- 核磁/CT -->
    <van-row class="money">
      <van-col span="11"> 核磁/CT</van-col>
      <div>{{ contentlist.ct }}</div>
      <div>{{ contentlist.ct_des }}</div>
    </van-row>
    <van-row class="money">
      <van-col span="11">基因</van-col>
      <div>{{ contentlist.gene }}</div>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "help",
  data() {
    return {
      contentlist: {},
    };
  },
  methods: {
    auxiliary() {
      this.$axios    //就诊记录的详情
        .post(
          this.$api.xzh.auxiliary,
          JSON.stringify({
            patientId: 2,
          })
        )
        .then((data) => {
          this.contentlist = data.data.data;
          console.log(this.contentlist);
        });
    },
  },
  mounted() {
    this.auxiliary();
  },
};
</script>

<style scoped>
.money {
  padding-left: 16px;
  line-height: 48px;
  border: none;
  color: rgb(100, 101, 102);
  font-size: 14px;
}

.money /deep/ .van-dropdown-menu__bar {
  box-shadow: unset !important;
  background-color: none !important;
}
.money /deep/ .van-dropdown-menu {
  /* text-align: left; */
  float: left;
  padding-left: 68px;
}
.contentlist {
  padding: 0px;
}
.van-row {
  border-bottom: 1px solid rgba(10, 10, 10, 0.4);
}
.van-col {
  margin: 0;
}
.medical {
  color: #323233;
  font-size: 14px;
  padding: 12px 16px;
}
</style>
