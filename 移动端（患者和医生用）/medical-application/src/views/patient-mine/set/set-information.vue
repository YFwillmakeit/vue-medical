/* 消息设置 */
<template>
  <div id="setInfor">
    <van-nav-bar
      title="消息设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
  </div>
</template>

<script>
export default {
  name: "SetInfor",
  methods: {
    onClickLeft() {
      this.$router.push("/mine/set");
    }
  }
};
</script>

<style></style>
