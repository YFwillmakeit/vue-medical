<template>
  <div id="symptom">
    <van-nav-bar title="完整症状" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="标签 1"><symwe></symwe></van-tab>
      <van-tab title="标签 2"><symmonth></symmonth></van-tab>
      <van-tab title="标签 3"><symday></symday></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import symwe from "./sym-we.vue";
import symmonth from "./sym-month.vue";
import symday from "./sym-day.vue";
export default {
  name: "symptom",
  data() {
    return {
      value: -1,
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  components: {
    symday,
    symwe,
    symmonth,
  },
};
</script>

<style>
/* .van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar__text {
  color: white;
}
.van-ellipsis {
  color: white;
} */
/* .van-nav-bar {
  background-color: rgba(0, 199, 126);
} */

.doctorClass {
  overflow: hidden;
  text-align: center;
  width: 100%;
  margin-bottom: 16px;
}
.doctorClass > p {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1.5em;
  float: left;
  width: 33.3%;
}
/* 点击事件 */
/* .bg {
  background-color: rgb(0, 199, 126);
} */
</style>
