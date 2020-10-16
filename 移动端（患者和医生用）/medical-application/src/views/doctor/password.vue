/* 修改密码 */
<template>
  <div id="setPwd">
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <van-field v-model="oldPwd" type="password" label="旧密码：" />
    <van-field v-model="newPwd" type="password" label="新密码：" />
    <van-row>
      <van-col offset="12" span="6">
        <van-button type="primary" @click="surePwd">确认</van-button>
      </van-col>
      <van-col span="6">
        <van-button type="default" @click="onClickLeft">取消</van-button>
      </van-col>
    </van-row>
    <van-popup v-model="show" round position="top" :style="{ height: '20%' }" class="zheZhao">
      <p>{{ showValue }}</p>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SetPassword",
  data() {
    return {
      password: "",
      oldPwd: "",
      newPwd: "",
      show: false,
      showValue: "",
      // 电话号码
      telPhone: ""
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    /* =========提交数据========= */
    // 患者信息
    getUser() {
      this.$axios
        .post(this.$api.xwq.password1, JSON.stringify({ doctorId: 1 }))
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            console.log(result.data);
            this.password = result.data.password;
            this.telPhone = result.data.phone;
            console.log(this.password);
            console.log(this.telPhone);
          } else {
            console.log(result);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },
    surePwd() {
      if(this.oldPwd == ""){
        this.showValue = "旧密码不能为空";
        this.show = true;
      } else if( this.newPwd == "" ) {
        this.showValue = "新密码不能为空";
        this.show = true;
      } else {
        // 旧密码输入正确
        // if(this.password == this.oldPwd) {
          this.$axios
            .post(this.$api.xwq.password2, {
              phone: this.telPhone,
              oldPassword: this.oldPwd,
              newPassword: this.newPwd
            })
            .then(response => {
              var result = response.data;
              if (result.code === "200") {
                this.showValue = result.msg;
                console.log(result);
                this.$router.push("/mine/set");
              } else {
                this.showValue = result.msg;
                console.log(result);
              }
            })
            .catch(err => {
              console.log(err);
              console.log("服务器请求失败");
            });
            this.show = true;
        /* } else {
          // 旧密码输入错误，就弹出框
          this.showValue = "旧密码输入错误";
          this.show = true;
        } */
      }
    },
    /* =========提交结束========= */
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
/deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
.zheZhao {
  text-align: center;
}
.zheZhao > p {
  margin-top: 10%;
}
</style>
