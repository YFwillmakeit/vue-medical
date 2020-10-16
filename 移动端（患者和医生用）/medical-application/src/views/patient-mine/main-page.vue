/* 个人信息的主页面 */
<template>
  <div class="mainPage">
    <header>
      <h3>个人中心</h3>
    </header>
    <div class="personal">
      <van-row>
        <van-col span="6">
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            @click="myInfor()"
          /><!-- v-bind:src="user.url" -->
        </van-col>
        <van-col span="10">
          <p>{{ user.username }}</p>
          <p>{{ user.phone }}</p>
        </van-col>
      </van-row>
    </div>
    <div class="menu">
      <van-cell-group>
        <van-cell title="账户信息" value="&gt;" @click="account()" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="我的信息" value="&gt;" @click="myInfor()" />
        <van-cell title="病情日志" value="&gt;" @click="journal()" />
        <van-cell title="我的医生" value="&gt;" @click="doctor()" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="设置" value="&gt;" @click="set()" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainPage",
  data() {
    return {
      user: {
        url: this.$store.state.patient.uri,
        username: this.$store.state.patient.username,
        phone: this.$store.state.patient.phone
      },
      // 存放用户的昵称、头像和手机号
      perCenter: {
        username: this.$store.state.patient.username,
        uri: this.$store.state.patient.uri,
        phone: this.$store.state.patient.phone
      }
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    /* ============请求数据=========== */
    // 患者信息
    getUser() {
      this.$axios
        .post(this.$api.patient.user, JSON.stringify({ patientId: this.$store.state.patient.id }))
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            if (result.data != null) {
              this.$store.state.patient = result.data;
              this.user = result.data;
            }
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },
    /* ============请求结束=========== */
    // 跳转到我的信息
    myInfor() {
      this.$router.push({
        path: "/mine/infor",
        name: "Information",
        // 要传过去的数据
        params: {
          perCenter: this.user
        }
      });
    },
    journal() {
      this.$router.push("/mine/journal");
    },
    doctor() {
      this.$router.push("/mine/doctor");
    },
    account() {
      this.$router.push("/mine/account");
    },
    set() {
      this.$router.push("/mine/set");
    }
  },
};
</script>

<style>
.mainPage {
  height: 100%;
  background-color: rgb(0, 199, 126);
  margin-bottom: 50px;
}
header {
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding-top: 10px;
}
.personal {
  padding-bottom: 15px;
  margin-top: 15px;
  margin-left: 10px;
  overflow: hidden;
}
.personal > img {
  float: left;
}
.personal p:first-child {
  margin-top: 5%;
  font-size: 1.2em;
}
.menu {
  height: 433px;
  background-color: rgb(241, 241, 241);
  padding-top: 10px;
}
.menu .van-cell {
  font-size: 16px;
}
.menu > .van-cell-group:not(:first-child) {
  margin-top: 10px;
}
</style>
