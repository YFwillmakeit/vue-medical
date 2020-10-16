/* 医生的最大页面 */
<template>
  <div class="doctor">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Doctor"
};
</script>

<style scoped>
/* 医生列表共有的 */
table {
  width: 100%;
}
/* 医生信息表的div */
.doctorDetails > div:not(:last-child) {
  margin-left: 10px;
}
/* 从医经验和所属医院的 .van-row */
.doctorDetails .van-row:not(:first-child) {
  padding-top: 5px;
}
/* 医生信息表的头像 */
.doctorDetails .van-image--round {
  width: 60px !important;
  height: 60px !important;
}
/* 医生列表结束 */
/* 是否关注的按钮 */
button {
  float: right;
  margin-right: 16px !important;
}
.van-button--primary {
  width: 60.5px;
}
/* 已关注的按钮颜色 */
.guanzhu {
  background-color: #969799;
  border: 1px solid #969799;
}
/* 未关注的按钮颜色 */
.van-button--primary {
  background-color: rgb(0, 199, 126);
}
</style>
