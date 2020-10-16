/* 具体的余额、充值余额 */
<template>
  <div class="mainAccount">
    <div>
      <van-nav-bar
        id="myhead"
        title="账户信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft()"
      />
      <div class="balance">
        <p>我的余额</p>
        <h2>{{ restMoney }}</h2>
        <p @click="pDetailed()">余额明细</p>
      </div>
    </div>
    <div class="recharge">
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <van-button type="primary" size="normal" @click="btnAdd('300')"
            >300</van-button
          >
        </van-col>
        <van-col span="6">
          <van-button type="primary" size="normal" @click="btnAdd('500')"
            >500</van-button
          >
        </van-col>
        <van-col span="6">
          <van-button type="primary" size="normal" @click="btnAdd('1000')"
            >1000</van-button
          >
        </van-col>
      </van-row>
      <div>
        <van-form>
          <van-field
            :value="recharge"
            label="充值金额："
            placeholder="请输入金额"
            @touchstart.native.stop="show = true"
          />
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">支付宝</van-radio>
            <van-radio name="2">微信</van-radio>
          </van-radio-group>
          <div style="margin: 16px" class="btnSubmit">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              is-link
              @click="showPopup"
            >
              提交
            </van-button>
            <p @click="pExplain()">充值说明</p>
          </div>
          <van-number-keyboard
            v-model="recharge"
            :show="show"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"
          />
        </van-form>
      </div>
    </div>
    <!-- 确认充值的弹出框 -->
    <van-popup v-model="sureShow" class="sureMoney">
      <h3>充值金额</h3>
      <p>{{ this.recharge }}</p>
      <van-row type="flex" justify="space-around">
        <van-col span="12">
          <van-button type="primary" @click="sure()" id='moneysure'>确认</van-button>
        </van-col>
        <van-col span="12">
          <van-button type="default" @click="cancel()" id='moneycancel'>取消</van-button>
        </van-col>
      </van-row>
    </van-popup>
    <van-popup
      v-model="headShow"
      round
      position="top"
      :style="{ height: '20%' }"
      class="zheZhao"
    >
      <p>充值金额不能为空</p>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);
// import { Toast } from "vant";
import { RadioGroup, Radio } from "vant";
Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  name: "MainAccount",
  data() {
    return {
      show: false,
      // 弹出框的显示
      sureShow: false,
      headShow: false,
      radio: "1",
      // 用户的余额
      restMoney: this.$store.state.patient.acount,
      // 充值的金额
      recharge: "",
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    /* =========请求数据========= */
    /* 获取余额 */
    getDetail() {
      this.$axios
        .post(
          this.$api.xwq.basicmsg,
          JSON.stringify({id:5})
        )
        .then((response) => {
          var result = response.data;
          if (result.code === "200") {
            this.restMoney = result.data.acount;
            console.log(result.data);
          } else {
            console.log(result.message);
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },
    /* 充值金额确认 */
    sure() {
      // 提交数据
      this.sureShow = false;
      console.log(this.recharge);
      this.$axios
        .post(
         this.$api.xwq.accountmsg,
          JSON.stringify({ acount: this.recharge, doctorId: 5 })
        )
        .then((response) => {
          var result = response.data;
          if (result.code === "200") {
            console.log(result.data.acount);
            this.getDetail();
          } else {
            console.log(result.message);
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("获取充值服务器请求失败");
          // this.$message.error('服务器请求失败')
        });
    },
    /* =========请求结束========= */
    
      onClickLeft() {
        this.$router.push("/mine");
      },
      onSubmit(values) {
        console.log("submit", values);
        this.$router.push("/mine/account/payment");
      },
      onInput(value) {
        // Toast(value);
        console.log(value);
      },
      onDelete() {
        // Toast("删除");
      
      },
      pExplain() {
        this.$router.push({
          path: "/explain",
        });
      },
      pDetailed() {
        this.$router.push({
          path: "/balance",
        });
      },
     showPopup() {
      if (this.recharge == "") {
        this.headShow = true;
        console.log("充值金额不能为零");
      } else {
        this.sureShow = true;
      }
    },
    
    /* 取消 */
    cancel() {
      this.sureShow = false;
    },
    // 按钮的数字加在输入框里
    btnAdd(value) {
      this.recharge = value;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
#myhead /deep/ .van-icon-arrow-left::before {
  color: white;
}
#myhead /deep/ .van-nav-bar .van-icon {
  color: white;
}
#myhead /deep/ .van-nav-bar__text {
  color: white;
}
#myhead /deep/ .van-ellipsis {
  color: white;
}
.mainAccount > div:first-child {
  background-color: rgb(0, 199, 126);
}
.balance {
  margin-top: 20px;
  text-align: center;
  height: 100px;
}
.balance > h2 {
  margin-top: 10px;
  font-size: 2em;
}
.balance > p:nth-child(3) {
  float: right;
  padding-right: 20px;
  font-size: 0.7em;
  color: rgb(255, 255, 255);
}
.recharge {
  margin: 10px 20px;
}
.recharge > p {
  font-size: 1.5em;
}
.recharge > div {
  position: relative;
  margin-top: 10px;
}
.recharge .van-cell {
  font-size: 16px;
}
.recharge > div > button:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.recharge > div > .van-button--normal {
  font-size: 1.3em;
  width: 102px;
  padding: 0 22px;
}
.recharge > div > button:nth-child(3) {
  float: right;
}
.recharge > div:nth-child(3) {
  margin-top: 20px;
}
.van-col--6 > button {
  width: 100%;
}
.recharge .van-button--info {
  background-color: rgba(0, 199, 126);
  border: 1px solid rgba(0, 199, 126);
}
.recharge .van-button--primary {
  background-color: #ffffff;
  border: 1px solid rgba(0, 199, 126);
  color: black;
}
.btnSubmit {
  overflow: hidden;
  margin-top: 20px !important;
  margin-right: 0px !important;
}
.btnSubmit .van-button--block {
  float: right;
  width: 25%;
  height: 35px;
}
.btnSubmit > p {
  color: rgba(0, 199, 126);
  font-size: 0.7em;
}
.van-radio-group {
  margin-top: 10px;
  margin-left: 16px;
}
.sureMoney {
  text-align: center;
  width: 300px;
  height: 140px;
}
.sureMoney p {
  margin-top: 10px;
  margin-bottom: 10px;
}
.sureMoney h3 {
  margin-top: 10px;
}
/* 提示kuang */
.zheZhao {
  text-align: center;
}
.zheZhao > p {
  margin-top: 10%;
}
#moneycancel{
     color:white;
  background-color:rgb(0, 199, 126);
  width:100px;
  height:50px;
}
#moneysure{
   color:white;
  background-color:rgb(0, 199, 126);
  width:100px;
  height:50px;
}
</style>
