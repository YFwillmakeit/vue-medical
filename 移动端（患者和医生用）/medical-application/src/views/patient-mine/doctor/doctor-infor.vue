/* 医生的详细信息 */
<template>
  <div class="doctorInformation">
    <van-nav-bar
      title="我的医生"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <div class="doctorDetails concerned">
      <div>
        <van-row gutter="0">
          <van-col span="5">
            <van-image
              round
              width="5rem"
              height="5rem"
              src=""
            /><!-- v-bind:src="doctor.uri" -->
          </van-col>
          <van-col span="7">{{ doctor.name }}</van-col>
          <van-col span="17">{{ doctor.position }}</van-col>
        </van-row>
        <div v-for="typeDoc in typeDoc" v-bind:key="typeDoc.key">
          <div v-if="typeDoc.id == doctor.id">
            <van-button
              type="primary"
              size="small"
              :icon="typeDoc.type == false ? 'plus' : ''"
              :class="typeDoc.type == true ? 'guanzhu' : ''"
              @click="follow(doctor.id)"
            >
              {{ typeDoc.type == false ? "关注" : "已关注" }}
            </van-button>
          </div>
        </div>
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
            <span class="indexDocHospital">{{ doctor.hname }}</span>
          </van-col>
        </van-row>
      </div>
      <van-divider />
    </div>
    <div class="briefIntro">
      <p>医生简介</p>
      <p>
        {{ doctor.des }}
      </p>
    </div>
    <van-divider />
    <div class="dtActivities">
      <p>诊疗活动</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoctorInfor",
  data() {
    return {
      doctor: {
        id: "",
        username: "",
        uri: "",
        position: "",
        year: "",
        hospital: ""
      },
      typeDoc: ""
    };
  },
  mounted() {
    this.getParams();
    this.getDoctor();
  },
  methods: {
    /* 请求数据 */
    // 根据医生id查询医生信息
    getDoctor() {
      // console.log(this.doctor);
      this.$axios
        .post(
          this.$api.patient.doctorInfor,
          JSON.stringify({
            id: this.doctor.id
          })
        )
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            console.log("医生详细信息：", result.data);
            this.doctor = result.data;
          } else {
            console.log(result);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
          // this.$message.error('服务器请求失败')
        });
    },
    /* 请求结束 */
    onClickLeft() {
      this.$router.push("/mine/doctor");
    },
    getParams() {
      // 将路由带过来的参数放在当前组件的数据内
      this.doctor = this.$route.params.doctor;
      this.typeDoc = this.$route.params.type;
    }
  }
};
</script>

<style scoped>
.van-nav-bar {
  margin-bottom: 16px;
}
/* 医生简介模块 */
.briefIntro,
.dtActivities {
  margin-left: 10px;
  min-height: 110px;
}
/* 简介 */
.briefIntro > p:nth-child(2) {
  font-size: 0.8em;
}
/* 结束 */
.guanzhu {
  background-color: #969799;
  border: 1px solid #969799;
}
</style>
