/* 用药提醒、我的医生 */
<template>
  <div class="IndexBottom">
    <div class="medicationReminder">
      <p>用药提醒</p>
      <div>
        <van-row type="flex" justify="space-around">
          <van-col span="6">{{ medicine.medicine }}</van-col>
          <van-col span="12">{{ medicine.onset }}</van-col>
        </van-row>
      </div>
    </div>
    <div id="myDoctor">
      <p>我的医生</p>
      <table>
        <tbody>
          <tr v-for="doctor in doctor" v-bind:key="doctor.key">
            <div class="doctorInfor">
              <div>
                <van-row>
                  <van-col span="7">
                    <van-image
                      round
                      width="5rem"
                      height="5rem"
                      v-bind:src="doctor.docImg"
                    />
                  </van-col>
                  <van-col span="17">{{ doctor.name }}</van-col>
                  <van-col span="17">{{ doctor.position }}</van-col>
                </van-row>
                <van-row type="flex">
                  <van-col span="24">
                    从医经验：主治癫痫
                    <span class="indexDocYear">{{ doctor.work_year }}</span
                    >年
                  </van-col>
                </van-row>
                <van-row>
                  <van-col span="24">
                    所属医院：
                    <span class="indexDocHospital">{{
                      doctor.hospitalname
                    }}</span>
                  </van-col>
                </van-row>
              </div>
              <div class="Activity">
                <p>诊疗活动</p>
                <div
                  v-for="(activity, index) in activity"
                  v-bind:key="activity.acId"
                >
                  <div v-if="activity.doctor_id == doctor.doctorId">
                    <van-cell-group>
                      <van-cell
                        v-bind:title="nowTime[index]"
                        v-bind:value="activiType[index]"
                        v-bind:label="activity.dName"
                        @click="agree(activiType[index], index)"
                      />
                    </van-cell-group>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
    <van-popup
      v-model="headShow"
      round
      position="top"
      :style="{ height: '20%' }"
      class="zheZhao"
    >
      <p>{{ neirong }}</p>
    </van-popup>
    <van-popup v-model="show">
      <div class="badReaction">
        <p>确定要报名该活动吗？</p>
        <van-row type="flex" justify="space-around">
          <van-col span="12">
            <van-button type="primary" @click="sure(nowAct)">确认</van-button>
          </van-col>
          <van-col span="12">
            <van-button type="default" @click="cancel()">取消</van-button>
          </van-col>
        </van-row>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);

export default {
  name: "IndexBottom",
  data() {
    return {
      sureShow: false,
      tishi: "",
      show: false,
      // 用药提醒
      medicine: this.$store.state.medicine,
      // 时间
      time: "",
      did: [],
      // 弹出框
      headShow: false,
      // 弹出框内容
      neirong: "",
      doctor: this.$store.state.conDoctor,
      // 诊疗活动
      activity: this.$store.state.activity,
      nowTime: [],
      // 诊疗活动是报名还是结束
      activiType: [],
      nowAct: ""
    };
  },
  mounted() {
    this.getUseYao();
    this.getConDoctor();
    this.getActivity();
    // this.;
  },
  methods: {
    /* =========请求数据=========== */
    // 用药提醒
    getUseYao() {
      this.$axios
        .post(this.$api.patient.useYao, {
          patientId: this.$store.state.patient.id
        })
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            this.medicine = result.data;
            this.medicine.onset = new Date(
              this.medicine.onset
            ).toLocaleString();
            this.$store.state.medicine = this.medicine;
          }
        })
    },
    // 关注的医生
    getConDoctor() {
      this.$axios
        .post(this.$api.patient.cDoctor, {
          patientId: this.$store.state.patient.id
        })
        .then(response => {
          var result = response.data;
          if (result.code == "200") {
            for (var i = 0; i < result.data.length; i++) {
              this.did.push(result.data[i].doctorId);
            }
            this.$store.state.did = [...this.did];
            this.$store.state.conDoctor = result.data;
            this.doctor = result.data;
          }
        })
    },
    // 诊疗活动
    getActivity() {
      this.$axios
        .post(
          this.$api.patient.activity,
          JSON.stringify({
            list: this.$store.state.did
          })
        )
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            this.$store.state.activity = result.data;
            this.activity = result.data;
          }
        })
      for (var i = 0; i < this.activity.length; i++) {
        this.nowTime.push(new Date(this.activity[i].a_time).toLocaleString());
      }
      this.timeFun();
    },
    // 报名
    agree(time, index) {
      // 如果截止时间就是今天，就说明已结束
      if (time == "已结束") {
        this.headShow = true;
        this.neirong = "报名已结束";
      } else if (time == "未开始") {
        this.headShow = true;
        this.neirong = "报名未开始";
      } else {
        this.show = true;
        this.nowAct = this.activity[index].id;
      }
    },
    sure(nowAct) {
      // 报名诊疗活动
      this.$axios
        .post(
          this.$api.patient.regActivity,
          JSON.stringify({
            aId: nowAct /* this.activity[index].id */,
            pId: this.$store.state.patient.id
          })
        )
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            this.headShow = true;
            this.neirong = result.msg;
          } else {
            this.headShow = true;
            this.neirong = result.msg;
          }
        })
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    /* } */
    /* 请求结束 */
    // 判断是报名还是结束
    timeFun() {
      // 现在的时间（时间戳）
      const time = new Date().getTime();
      // console.log(time)
      for (var i = 0; i < this.activity.length; i++) {
        // 如果当前时间 >= 报名截止时间，就说明报名已结束
        if (time >= this.activity[i].e_time) {
          this.activiType.push("已结束");
        } else {
          // 如果当前时间 > 开始报名时间，就说明正在报名
          if (time >= this.activity[i].b_time) {
            this.activiType.push("报名中");
          } else {
            this.activiType.push("未开始");
          }
        }
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
#myDoctor,
.medicationReminder {
  overflow: hidden;
}
#myDoctor > p {
  float: left;
}
#myDoctor > p,
.medicationReminder > p {
  padding: 0;
}
.doctorInfor,
.medicationReminder > div {
  clear: both;
  background-color: white;
  min-height: 100px;
}
.medicationReminder > p {
  float: left;
  margin: 0 10px 10px;
}
.medicationReminder > div {
  margin: 0 10px;
}
#myDoctor > p {
  margin: 10px;
}
.doctorInfor {
  clear: both;
  margin: 0 10px;
}
.doctorInfor > div:first-child {
  margin-left: 10px;
}
.doctorInfor > div:nth-child(2) {
  margin-top: 10px;
}
.doctorInfor > div > .van-row:first-child {
  padding-top: 10px;
}
.doctorInfor > div > .van-row:not(:first-child) {
  padding-top: 5px;
}
.doctorInfor > div > .van-row:first-child > van-col:nth-child(3) {
  padding-top: 10px;
}
/* 诊疗活动的css */
.Activity > p {
  /* margin-left: 20px; */
  margin: 15px 0 10px 20px;
  font-size: 0.6em;
  color: rgb(2, 167, 240);
}
.Activity .van-cell {
  font-size: 0.7em;
  padding: 10px;
}
.Activity .van-cell__title {
  width: 80%;
}
.Activity .van-cell__value {
  width: 20%;
}
/* 提示kuang */
.zheZhao {
  text-align: center;
}
.zheZhao > p {
  margin-top: 10%;
}
</style>
