/* 所有医生（未关注和已关注） */
<template>
  <div class="allDoctor">
    <table>
      <tbody>
        <tr v-for="doctor in doctor" v-bind:key="doctor.id">
          <div>
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
                  <van-col span="17">{{ doctor.dname }}</van-col>
                  <van-col span="17">{{ doctor.position }}</van-col>
                </van-row>
                <div
                  v-for="(followDoctor, index) in followDoctor"
                  v-bind:key="followDoctor.key"
                >
                  <div v-if="followDoctor.id == doctor.id">
                    <van-button
                      type="primary"
                      size="small"
                      :icon="followDoctor.type == false ? 'plus' : ''"
                      :class="followDoctor.type == true ? 'guanzhu' : ''"
                      @click="follow(index)"
                    >
                      {{ followDoctor.type == false ? "关注" : "已关注" }}
                    </van-button>
                  </div>
                </div>
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
                    <span class="indexDocHospital">{{ doctor.hname }}</span>
                  </van-col>
                </van-row>
              </div>
              <van-divider />
            </div>
          </div>
        </tr>
      </tbody>
    </table>
    <!-- <van-col span="17">{{ this.$store.getters.getStateCount }}</van-col> -->
  </div>
</template>

<script>
export default {
  name: "AllDoctor",
  data() {
    return {
      // 后台的数据
      doctor: this.$store.state.doctor,
      conDoctor: this.$store.state.conDoctor,
      followDoctor: this.$store.state.followDoctor
    };
  },
  /* 挂载后 */
  mounted() {
    this.getAllDoc();
    this.getConDoctor();
  },
  methods: {
    /* ==========请求数据========== */
    // 获取所有医生
    getAllDoc() {
      this.$axios
        .post(this.$api.patient.allDoctor)
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            this.doctor = [];
            for (var i = 1; i < result.data.length; i++) {
              this.doctor.push(result.data[i]);
            }
            this.$store.state.doctor = this.doctor;
            console.log("所有医生:", this.doctor);
          } else {
            console.log(result);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },

    // 关注的医生
    getConDoctor() {
      this.$axios
        .post(this.$api.patient.conDoctor, {
          patientId: this.$store.state.patient.id
        })
        .then(response => {
          var result = response.data;
          if (result.code == "200") {
            console.log("关注的医生：", result.data);
            this.conDoctor = result.data;
            this.fun();
          } else {
            console.log(result.msg);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },

    // 点击关注，成功后显示添加成功
    follow(index) {
      if (this.followDoctor[index].type == false) {
        // 关注一个医生
        console.log(this.followDoctor[index].id);
        this.$axios
          .post(this.$api.patient.follDoctor, {
            doctorId: this.followDoctor[index].id,
            patientId: this.$store.state.patient.id
          })
          .then(response => {
            var result = response.data;
            if (result.code === "200") {
              console.log(result.msg);
            } else {
              console.log(result.msg);
            }
          })
          .catch(err => {
            console.log(err);
            console.log("服务器请求失败");
          });
      } else {
        console.log(this.followDoctor[index]);
        this.$axios
          .post(this.$api.patient.follConDoctor, {
            doctorId: this.followDoctor[index].id,
            patientId: this.$store.state.patient.id
          })
          .then(response => {
            var result = response.data;
            if (result.code === "200") {
              console.log(result.msg);
            } else {
              console.log(result.msg);
            }
          })
          .catch(err => {
            console.log(err);
            console.log("服务器请求失败");
          });
        console.log(22222222);
      }
      this.doctor = [];
      this.conDoctor = [];
      this.followDoctor = [];
      this.getAllDoc();
      this.getConDoctor();
      // 页面刷新
      // location.reload();
    },
    /* ==========请求结束========== */

    /* 判断患者是否关注医生 */
    fun() {
      this.followDoctor = [];
      for (var i = 0; i < this.doctor.length; i++) {
        for (var j = 0; j < this.conDoctor.length; j++) {
          if (this.doctor[i].id == this.conDoctor[j].doctorId) {
            this.followDoctor.push({ id: this.doctor[i].id, type: true });
            break;
          } else if (j == this.conDoctor.length - 1) {
            this.followDoctor.push({ id: this.doctor[i].id, type: false });
          }
        }
      }
      this.$store.state.followDoctor = this.followDoctor;
      console.log(this.followDoctor);
    },

    // 跳转到医生详情
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
  margin-left: 10px;
  width: 100%;
}
</style>
