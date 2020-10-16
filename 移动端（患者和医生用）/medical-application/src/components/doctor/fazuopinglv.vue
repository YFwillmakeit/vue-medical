<!--
 * @Author: happy
 * @Date: 2020-09-25 14:46:56
 * @LastEditTime: 2020-09-25 15:11:13
 * @LastEditors: happy
 * @Description: 发作频率
-->
<template>
  <div>
    <van-form @submit="onSubmit">
      <!-- 发作次数 -->
      <van-row class="money">
        <van-col span="11">发作次数</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 发作频次 -->
      <van-row class="money">
        <van-col span="11">发作频次</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valuemoney1: 0,
      valuemoney2: 0,
      option1: [
        { text: "0", value: 0 },
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
        { text: "6", value: 6 },
        { text: "7", value: 7 },
        { text: "8", value: 8 },
        { text: "9", value: 9 },
        { text: "10", value: 10 },
        { text: "11", value: 11 },
        { text: "12", value: 12 },
        { text: "13", value: 13 },
        { text: "14", value: 14 },
        { text: "15", value: 15 },
      ],
      option2: [
        { text: "日", value: 0 },
        { text: "周", value: 1 },
        { text: "月", value: 2 },
      ],
    };
  },
   methods: {
     onLoad() {
       // 异步更新数据
       // setTimeout 仅做示例，真实场景中一般为 ajax 请求
       setTimeout(() => {
         for (let i = 0; i < 10; i++) {
           this.list.push(this.list.length + 1);
         }

         // 加载状态结束
         this.loading = false;

         // 数据全部加载完成
         if (this.list.length >= 15) {
           this.finished = true;
         }
       }, 1000);
     },
     content() {
       this.$router.push("/about");
       console.log("About");
     },
   }
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
  .van-row {
    border-bottom: 1px solid rgba(10, 10, 10, 0.4);
  }
  .van-col{
    margin: 0;
  }
</style>