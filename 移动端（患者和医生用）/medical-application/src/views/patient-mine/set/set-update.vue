/* 版本更新 */
<template>
  <div id="setUpdate">
    <van-nav-bar
      title="版本更新"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <div class="imgAddp">
      <img src="../../../../public/图片.jpg" alt="">
      <p>已是最新版本</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetUpdate",
  methods: {
    onClickLeft() {
      this.$router.push("/mine/set");
    }
  }
};
</script>

<style>
img{
  width: 280px;
  height: 280px;
}
.imgAddp {
  text-align: center;
}
</style>
