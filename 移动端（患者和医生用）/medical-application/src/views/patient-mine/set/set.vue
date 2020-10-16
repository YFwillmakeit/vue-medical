/* 设置 */
<template>
  <div id="set">
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <van-cell-group>
      <!-- <van-cell title="消息设置" value="&gt;" @click="setInfor()" /> -->
      <van-cell title="修改密码" value="&gt;" @click="changePwd()" />
      <van-cell title="版本更新" value="&gt;" @click="update()" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="退出登录" @click="exitLogin()" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Set",
  methods: {
    onClickLeft() {
      this.$router.push("/mine");
    },
    // 消息设置
    setInfor() {
      this.$router.push("/mine/set/information");
    },
    // 修改密码
    changePwd() {
      this.$router.push("/mine/set/password");
    },
    // 版本更新
    update() {
      this.$router.push("/mine/set/update");
    },
    // 退出登录
    exitLogin() {
      // 跳转到登录页面
       this.$router.replace("/login");
       window.localStorage.removeItem('token');
    }
  }
};
</script>

<style></style>
