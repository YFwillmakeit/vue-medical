/* 按钮（全部和已关注） */
<template>
  <div class="mydoctor">
    <van-nav-bar
      title="我的医生"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <van-row class="doctorClass" type="flex" justify="center">
      <van-col span="12">
        <p :class="{ bg1: value == -1, bg: value == 1 }" @click="allDoctor(-1)">
            全部
          </p>
      </van-col>
      <van-col span="12">
        <p :class="{ bg1: value == 1, bg: value == -1 }" @click="conDoctor(1)">
            我的关注
          </p>
      </van-col>
    </van-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyDoctor",
  data() {
    return {
      value: -1
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/mine");
    },
    allDoctor(index) {
      this.value = index;
      console.log(this.value);
      this.$router.push("/mine/doctor");
    },
    conDoctor(index) {
      this.value = index;
      console.log(this.value);
      this.$router.push("/mine/doctor/conDoctor");
    }
  }
};
</script>

<style>
/* 全部和我的关注 */
.doctorClass {
  overflow: hidden;
  text-align: center;
  /* width: 100%; */
  margin-bottom: 16px;
}
.doctorClass p {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1.5em;
  /* float: left; */
  /* width: 100%; */
}
/* 结束 */
/* 点击事件 */
.bg {
  background-color: rgb(0, 199, 126);
}
.bg1 {
  background-color: rgb(255, 255, 255);
}
</style>
