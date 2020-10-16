<template>
  <div id="epiNum">
    <van-nav-bar title="完整频次" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="标签 1"><epiday></epiday></van-tab>
      <van-tab title="标签 2"><epimon></epimon></van-tab>
      <van-tab title="标签 3"><epiweek></epiweek></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import epiday from "./epi-day.vue";
import epimon from "./epi-mon.vue";
import epiweek from "./epi-week.vue";
export default {
  name: "EpiNum",
  data() {
    return {
      // value: -1,
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  components: {
    epiday,
    epimon,
    epiweek,
  },
};
</script>

<style>
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
