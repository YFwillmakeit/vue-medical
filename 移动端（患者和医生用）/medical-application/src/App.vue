<template>
  <div id="app">
    <router-view />
    <foot v-show="$store.state.powerId === 2"></foot>
  </div>
</template>
<script>
import foot from "./components/foot.vue";
export default {
  name: "App",
  components: {
    foot,
  },
  methods: {},
  created() {
    //此方法是为了保障页面刷新时vuex的数据不丢失，使用时需注存储容量
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("messageStore", JSON.stringify(this.$store.state));
    });
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("messageStore") &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(localStorage.getItem("messageStore"))
        )
      );
  },
};
</script>
<style scoped>
/* 去掉滚动条 */
html,
body {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  clear: both;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
div /deep/.van-nav-bar .van-icon {
  color: wheat;
}
div /deep/.van-nav-bar__text  {
  color: wheat;
}
div /deep/.van-ellipsis  {
  color: wheat;
}
.van-nav-bar  {
  background-color: rgba(0,  199,  126);
}
</style>
