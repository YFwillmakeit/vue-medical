<template>
  <div>
    <div class="content" >
      <div class="top">
        <div class="left">德巴金缓释片</div>
      </div>
      <div class="top">
        <div class="left">德巴金口服液</div>
      </div>
      <div class="top">
        <div class="left">丙戎酸钠片</div>
      </div>
      <div class="top">
        <div class="left">得理多</div>
      </div>
      <div class="top">
        <div class="left">曲菜</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ywzl",
  mounted() {
      this.$store.state.contentList.medicine = this.valuemoney1;
  },
};
</script>

<style scoped>
.left {
  float: left;
  font-size: 15px;
}
.top {
  padding: 20px 0 25px 0;
}
.top,
.bottom {
  border-bottom: 1px solid rgba(10, 10, 10, 0.5);
}
</style>
