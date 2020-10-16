<template>
  <div id="detJour">
    <van-nav-bar
      title="日志详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <p>{{ journal.recordTime }}</p>
    <div>{{ journal.des }}</div>
    <div>{{ journal.purl }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailedJour",
  data() {
    return {
      journal: ""
    };
  },
  mounted() {
    this.getParams();
  },
  methods: {
    getParams() {
      // 将路由带过来的参数放在当前组件的数据内
      this.journal = this.$route.params.detJour;
    },
    onClickLeft() {
      this.$router.push("/mine/journal");
    }
  }
};
</script>

<style></style>
