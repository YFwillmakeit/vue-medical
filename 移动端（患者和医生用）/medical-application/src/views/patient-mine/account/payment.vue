/* 确认充值的页面 */
<template>
  <div class="payment">
    <van-nav-bar
      title="确认订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
  </div>
</template>

<script>
export default {
  name: "Payment",
  methods: {
    onClickLeft() {
      this.$router.push("/mine/account");
    }
  }
};
</script>

<style></style>
