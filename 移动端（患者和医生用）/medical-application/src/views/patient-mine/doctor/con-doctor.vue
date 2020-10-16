/* 已关注的医生 */
<template>
  <div class="conDoctor">
    <table>
      <tbody>
        <tr
          class="concerned"
          v-for="(doctor, index) in doctor"
          v-bind:key="doctor.id"
        >
          <div class="doctorDetails">
            <div>
              <van-row gutter="0" @click="docInfor(doctor)">
                <van-col span="5">
                  <van-image
                    round
                    width="5rem"
                    height="5rem"
                    src=""
                  /><!-- v-bind:src="doctor.uri" -->
                </van-col>
                <van-col span="17">{{ doctor.name }}</van-col>
                <van-col span="17">{{ doctor.position }}</van-col>
              </van-row>
              <van-button
                class="guanzhu"
                type="primary"
                size="small"
                @click="follow(doctor.doctorId, index)"
                >已关注
              </van-button>
              <van-row type="flex" @click="docInfor(doctor)">
                <van-col span="24">
                  从医经验：主治癫痫
                  <span class="indexDocYear">{{ doctor.work_year }}</span
                  >年
                </van-col>
              </van-row>
              <van-row @click="docInfor(doctor)">
                <van-col span="24">
                  所属医院：
                  <span class="indexDocHospital">{{
                    doctor.hospitalname
                  }}</span>
                </van-col>
              </van-row>
            </div>
            <van-divider />
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ConDoctor",
  data() {
    return {
      // 后台的数据
      doctor: this.$store.state.conDoctor,
      conDoctor: [],
      followDoctor: this.$store.state.followDoctor
    };
  },
  mounted() {
    this.getConDoctor();
  },
  methods: {
    /* ==========请求数据============== */
    // 关注的医生
    getConDoctor() {
      this.$axios
        .post(
          this.$api.patient.cDoctor,
          JSON.stringify({
            patientId: this.$store.state.patient.id
          })
        )
        .then(response => {
          var result = response.data;
          if (result.code == "200") {
            console.log("关注的医生：", result.data);
            this.doctor = result.data;
            this.$store.state.conDoctor = result.data;
            for (var i = 0; i < this.doctor.length; i++) {
              this.followDoctor.push({
                id: this.doctor[i].doctorId,
                type: true
              });
            }
            console.log(this.doctor);
            console.log(333333333);
          } else {
            console.log(result.msg);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },
    // 取消关注
    follow(pid, index) {
      this.followDoctor.type = !this.followDoctor.type;
      console.log(this.followDoctor);
      this.$axios
        .post(this.$api.patient.follConDoctor, {
          doctorId: pid,
          patientId: this.$store.state.patient.id
        })
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            console.log(result.msg);
            // 删除这一条
            this.doctor.splice(index, 1);
          } else {
            console.log(result.msg);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },
    /* ==========请求结束============== */

    docInfor(doctor) {
      this.$router.push({
        path: "/mine/doctor/doctorInfor",
        name: "DoctorInfor",
        // 要传过去的数据
        params: {
          doctor: doctor,
          type: this.followDoctor
        }
      });
    }
  }
};
</script>

<style scoped>
.guanzhu {
  background-color: #969799;
  border: 1px solid #969799;
}
button {
  float: right;
  margin-right: 16px !important;
}
table {
  width: 100%;
  margin-left: 10px;
}
</style>
