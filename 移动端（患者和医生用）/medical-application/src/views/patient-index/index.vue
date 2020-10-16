/* 首页：轮播图、记录 */
<template>
  <div class="patientIndex">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      height="150"
    >
      <van-swipe-item>
        <img src="../../../public/one.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/two.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/three.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-around" id="record">
      <van-col span="12">
        <van-button type="default" is-link @click="showPopup">
          记录发作次数
        </van-button>
      </van-col>
      <van-col span="12">
        <van-button type="default" @click="badReac()">记录不良反应</van-button>
      </van-col>
    </van-row>
    <div>
      <router-view></router-view>
    </div>
    <!-- 记录发作次数的弹出框 -->
    <van-popup v-model="show">
      <div class="badReaction">
        <p>记录发作次数</p>
        <van-divider />
        <p>今日是否发作</p>
        <van-row type="flex" justify="center">
          <van-radio-group v-model="radio" direction="horizontal">
            <van-col span="12">
              <van-radio v-model="radioVal" name="1">是</van-radio>
            </van-col>
            <van-col span="12">
              <van-radio v-model="radioVal" name="2">否</van-radio>
            </van-col>
          </van-radio-group>
        </van-row>
        <van-row gutter="20" class="divNum">
          <van-col span="5">
            <van-button size="small" type="primary" @click="jianShao"
              >-</van-button
            >
          </van-col>
          <van-col span="14">
            <van-field
              :value="num"
              type="digit"
              placeholder="请输入次数"
              @touchstart.native.stop="jpShow = true"
            />
          </van-col>
          <van-col span="5">
            <van-button
              size="small"
              icon="plus"
              type="primary"
              @click="addNum"
            />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <van-col span="12">
            <van-button type="primary" @click="sure()">确认</van-button>
          </van-col>
          <van-col span="12">
            <van-button type="default" @click="cancel()">取消</van-button>
          </van-col>
        </van-row>
      </div>
    </van-popup>
    <!-- 弹出数字键盘 -->
    <van-number-keyboard
      v-model="num"
      :show="jpShow"
      :maxlength="6"
      @blur="jpShow = false"
      z-index="9999"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import "../../assets/css/index.css";
import Vue from "vue";
import { Lazyload } from "vant";
import { Toast } from "vant";

import { RadioGroup, Radio } from "vant";
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Lazyload);

export default {
  name: "Index",
  data() {
    return {
      // 键盘显示
      jpShow: false,
      show: false,
      radio: "1",
      digit: "",
      radioVal: "不知道",
      // 发作时间：
      time: "",
      num: ""
    };
  },
  methods: {
    /* ==========向后端服务器请求数据============== */
    // 发作次数
    /* 确认 */
    sure() {
      this.time =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
      this.show = false;
      // 提交数据
      this.$axios
        .post(
          this.$api.patient.fzNum,
          JSON.stringify({
            count: Number(this.num),
            onset: this.time,
            patienId: this.$store.state.patient.id
          })
        )
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
          } else {
          }
        })
      // 让输入框取消上次输入的值
      this.digit = "";
      this.num = "";
    },
    /* ===============请求数据结束============= */
    /* 记录不良反应 */
    badReac() {
      this.$router.push("/badReaction");
    },
    /* 记录发作次数 */
    showPopup() {
      this.show = true;
    },
    /* 取消 */
    cancel() {
      this.show = false;
    },
    // 键盘事件
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast("删除");
    },
    // 减次数
    jianShao() {
      if (Number(this.num) >= 1) {
        this.num = String(Number(this.num) - 1);
      } else {
        this.num = "0";
      }
    },
    // 加次数
    addNum() {
      this.num = String(Number(this.num) + 1);
    }
  }

};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
/* 弹出框 */
.badReaction {
  width: 300px;
  height: 235px;
  text-align: center;
}
.badReaction .van-row {
  margin-top: 10px;
}
.badReaction > p:first-child {
  margin-top: 10px;
}
.badReaction > p {
  margin-bottom: 10px;
}
img {
  width: 100%;
  height: 100%;
}
.divNum {
  text-align: center;
  overflow: hidden;
  margin-bottom: 10px;
}
.divNum button:first-child {
  width: 32px;
  height: 32px;
  font-size: 1.5em;
}
.van-col--12 > button {
  width: 80%;
  margin-left: 10%;
}
</style>
