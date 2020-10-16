<template>
  <div>
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item name="index" icon="wap-home-o" @click="index">首页</van-tabbar-item>
      <van-tabbar-item name="patient" icon="friends-o" @click="patient">患者</van-tabbar-item>
      <van-tabbar-item name="information" icon="comment-o" @click="information">消息</van-tabbar-item>
      <van-tabbar-item name="mine" icon="manager-o" @click="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'index',
    };
  },

  methods: {
    information() {
      this.$router.replace("/information");
    },
    patient() {
      this.$router.replace("/notes");
    },
    index() {
      this.$router.replace("/patientIndex");
    },
    mine() {
      this.$router.replace("/mine");
    },
  },

  computed: {},

  components: {},
};
</script>
<style scoped></style>
