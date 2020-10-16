<!--  -->
<template>
  <div>
    <van-form>
      <van-field
        v-model="username"
        name="探讨主题"
        label="探讨主题"
        placeholder="请输入探讨主题"
        :rules="[{ required: true, message: '请填写探讨主题' }]"
      />
      <!-- 参会医生 -->
      <!-- <van-field
  readonly
  clickable
  label="参会医生"
  :value="valued"
  placeholder="选择医生"
  @click="showdoctor = true"
/>
<van-popup v-model="showdoctor" round position="bottom">
  <van-picker
    show-toolbar
    :columns="doctorlist"
    @cancel="showdoctor = false"
    @confirm="doctor"
  /> 
</van-popup>-->

      <!-- 新参会医生 -->
      <div class="joinall">
        <span>参会医生</span>
        <span class="joindoctor" @click="joindoctor">{{ str }}</span>
      </div>

      <!-- 开始时间 -->
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value1"
        label="探讨报名开始时间"
        placeholder="报名开始时间"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="onConfirm" />

      <!-- 结束时间 -->
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value2"
        label="探讨报名结束时间"
        placeholder="报名结束时间"
        @click="timeend = true"
      />
      <van-calendar v-model="timeend" @confirm="endConfirm" />
      <!-- 几点开始 -->
      <!-- <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="value3"
        label="探讨开始时间"
        placeholder="开始时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="howtime"
          @cancel="showPicker = false"
        />
      </van-popup> -->
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="value3"
        label="探讨开始时间"
        placeholder="选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="datetime"
          @confirm="howtime"
          @cancel="showPicker = false"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>

      <!-- 持续时间 -->
      <van-field
        v-model="timeof"
        name="探讨持续"
        label="探讨持续时间"
        placeholder="请以分钟为单位"
        :rules="[{ required: true }]"
      />

      <!-- 费用类型 -->
      <van-row class="money">
        <van-col span="4">费用类型</van-col>
        <van-col span="20">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="valuemoney"
              :options="option1"
            /> </van-dropdown-menu
        ></van-col>
      </van-row>

      <!-- 费用 -->
      <van-field
        v-model="money"
        name="费用"
        label="费用"
        placeholder="请输入费用"
      />

      <!-- 探讨患者信息 -->

      <van-field
        readonly
        clickable
        label="探讨患者"
        :value="valueh"
        placeholder="选择患者"
        @click="showpatient = true"
      />
      <van-popup v-model="showpatient" round position="bottom">
        <van-picker
          show-toolbar
          :columns="patientname"
          @cancel="showpatient = false"
          @confirm="patient"
        />
      </van-popup>

      <!-- 探讨说明 -->
      <div class="explain">
        <P>探讨说明</P>
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          placeholder="请输入探讨说明"
          v-model="text"
        ></textarea>
        <!-- <type='textarea'   name='text' > -->
      </div>

      <!-- 提交 -->
      <van-row>
        <van-col span="12">
          <van-button type="primary" @click="sureinitiate">确认发起</van-button>
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minDate: new Date(2020, 9, 10),
      maxDate: new Date(2020, 11, 30),
      value1: "",
      value2: "",
      showCalendar: false, //日历时间设置
      timeend: false, //日历结束
      value3: "",
      showPicker: false, //几点开始
      valuemoney: 0,
      option1: [
        { text: "收费", value: 0 },
        { text: "免费", value: 1 },
      ],
      //  选择患者
      valueh: "",
      showpatient: false,
      patientname: [],
      //选择患者结束
      //选择医生
      valued: [],
      showdoctor: false,
      doctorlist: [],
      //选择医生结束
      list: "", //要传过去的
      allhname: [],
      username: "",
      text: "",
      money: "",
      timeof: "",
      count: "",
      str: "请选择医生",
    };
  },

  methods: {
    onConfirm(date) {
      this.value1 = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
      this.showCalendar = false;
    }, //选择日历开始

    endConfirm(date) {
      this.value2 = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
      this.timeend = false;
    }, //结束日历开始

    // howtime(time) {
    //   this.value3 = time;
    //   this.showPicker = false;
    // },

    //几点开始
    howtime(time) {
      this.value3 = this.$utils.formatDate(time, "yyyy-MM-dd hh:mm:ss");
      // this.value = time;
      this.showPicker = false;
    },
    patient(valueh) {
      //   选择患者
      this.valueh = valueh;
      this.showpatient = false;
    },
    // doctor(valued) {//   选择医生
    // console.log('医生医生')
    //   this.valued = valued;
    //   this.showdoctor = false;
    // },

    joindoctor: function () {
      //选择医生
      this.$router.push({
        path: "/joindoctor",
      });
    },

    sureinitiate: function () {
      //确认发起
      console.log(this.$store.state.list);
      for (let i = 0; i < this.$store.state.list.joinDoctorId.length; i++) {
        for (let j = 0; j < this.$store.state.doctorlist.length; j++) {
          if (
            this.$store.state.list.joinDoctorId[i] ==
            this.$store.state.doctorlist[j].name
          ) {
            this.valued.push(this.$store.state.doctorlist[j].id);
          }
        }
      }

      for (let j = 0; j < this.$store.state.hzlist.length; j++) {
        if (this.valueh == this.$store.state.hzlist[j].name) {
          this.valueh = this.$store.state.hzlist[j].id;
        }
      }

      (this.list = {
        theme: this.username, //会议标题
        joinDoctorId: this.valued, //参会医生
        began: this.value1, //报名开始时间
        over: this.value2, //报名结束时间
        patientId: this.valueh, //参会患者
        des: this.text, //探讨说明
        money: this.money, //费用
        moneyType: this.valuemoney, //费用类型，收费还是免费
        durations: this.timeof, //持续时间
        starttime: this.value3, //开始时间
      }),
        // this.$store.dispatch("changelist", this.list);
        (this.$store.state.list = { ...this.list });
      console.log(this.valued);
      console.log(this.$store.state.list);
      // this.$router.push({
      //   path: "/sureinitiate",
      // });

      // 开始实验
      this.$store.state.list.doctorId = 2;
      console.log(this.$store.state.list);
      this.$axios
        .post(
          "http://172.16.6.132:8080/interm/discuss/addDiscuss",
          JSON.stringify(this.$store.state.list)
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$toast.success("已发起病例探讨");
      this.$router.push({
        path: "/case-study",
      });
    },
  },

  watch: {
    username() {
      this.$store.state.list.theme = this.username;
    },
    timeof() {
      this.$store.state.list.durations = this.timeof;
    },
    value1() {
      this.$store.state.list.began = this.value1;
    },
    value2() {
      this.$store.state.list.over = this.value2;
    },
    value3() {
      this.$store.state.list.starttime = this.value3;
    },
    valuemoney() {
      this.$store.state.list.moneyType = this.valuemoney;
    },
    money() {
      this.$store.state.list.money = this.money;
    },
    valueh() {
      this.$store.state.list.patientId = this.valueh;
    },
    text() {
      this.$store.state.list.des = this.text;
    },
  },

  mounted: function () {
    this.$axios //获取患者
      .post(this.$api.xwq.initiatecase)
      .then((res) => {
        this.allhname = res.data.data;
        console.log(this.allhname);
        var arr = [];
        for (var i = 0; i < this.allhname.length; i++) {
          if (this.allhname[i].name) {
            arr.push(this.allhname[i].name);
          }
        }
        let hzarr = [];
        for (let j = 0; j < this.allhname.length; j++) {
          let hzobj = { name: this.allhname[j].name, id: this.allhname[j].id };
          hzarr.push(hzobj);
        }
        this.$store.state.hzlist = [...hzarr];
        console.log(this.$store.state.hzlist);

        this.patientname = [...arr];
        //  console.log(this.$store.state.list)
        if (this.$store.state.list.joinDoctorId.length > 0) {
          this.count = this.$store.state.list.joinDoctorId.length;
          this.str = "已选择" + this.count + "人";
        } else {
          this.str = "请选择医生";
        }
        this.username = this.$store.state.list.theme;
        this.timeof = this.$store.state.list.durations;
        this.value1 = this.$store.state.list.began;
        this.value2 = this.$store.state.list.over;
        this.value3 = this.$store.state.list.starttime;
        this.valuemoney = this.$store.state.list.moneyType;
        this.money = this.$store.state.list.money;
        this.valueh = this.$store.state.list.patientId;
        this.text = this.$store.state.list.des;
      })
      .catch((error) => {
        console.log(error);
      });
    //setTimeout(()=>{

    // 获取所有患者
  },
};
</script>
<style  scoped>
#left {
  text-align: left;
}
.money {
  padding-left: 16px;
  line-height: 48px;
  border: none;
  color: rgb(100, 101, 102);
  font-size: 14px;
}

.money /deep/ .van-dropdown-menu__bar {
  box-shadow: unset !important;
}
.money /deep/ .van-dropdown-menu {
  /* text-align: left; */
  float: left;
  padding-left: 30px;
}
.explain {
  font-size: 15px;
  color: rgb(100, 101, 102);
  margin-left: 15px;
}
.explain textarea {
  width: 90%;
  height: 90px;
  margin: 0 auto;
  margin-bottom: 60px;
  border: 1px solid rgb(20, 25, 29);
}
.van-button {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
}
.joinall {
  padding: 10px 15px;
  color: rgb(100, 101, 102);
  font-size: 14px;
}
.joindoctor {
  padding-left: 43px;
  color: rgb(150, 151, 153);
}
#text {
  margin-top: 10px;
}
</style>