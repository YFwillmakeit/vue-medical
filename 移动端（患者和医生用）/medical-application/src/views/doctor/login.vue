<!--
 * @Author: happy
 * @Date: 2020-09-22 14:41:13
 * @LastEditTime: 2020-10-10 15:00:23
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
    <h3>登录</h3>
    <div id="login">
      <van-cell-group>
        <van-field
          v-model="user.username"
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="user.pwd"
          label="密码"
          placeholder="请输入密码"
          type="password"
        />
        <van-button type="primary" @click="userlogin" block>点击登录</van-button>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      user: {
        username: "",
        pwd: "",
      },
    };
  },
  methods: {
    userlogin() {
      if (this.user.username.length == 0) {
        this.$toast("请输入用户名");
      } else {
        if (this.user.username == 1) {
          this.$router.push({ path: "/main" });
        } else if (this.user.username == 2) {
          this.$router.push({ path: "/patient1" });
        } else {
          this.$toast("请输入正确的用户名");
        }
      }
    },
  },
};
</script>
<style  scoped>
h3{
  text-align: center;
  margin: 100px 0 60px 0;
}
#login button:last-child {
  margin: 0 auto;
}
.van-field{
  margin-bottom: 30px;
}
</style>