<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="健康提醒"><jktx></jktx></van-tab>
      <van-tab title="活动提醒"><hdtx></hdtx></van-tab>
      <van-tab title="系统提醒"><xttx></xttx></van-tab>
    </van-tabs>
  </div>

</template>

<script>
import jktx from "../components/jktx.vue";
import hdtx from "../components/hdtx.vue";
import xttx from "../components/xttx.vue";
export default {
  name: "information",
  data() {
    return {
      active: 0,
    };
  },
  components: {
    jktx,
    hdtx,
    xttx,
  },
};
</script>

<style scoped></style>
