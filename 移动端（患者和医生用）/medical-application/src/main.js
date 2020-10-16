import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import { Col, Row } from "vant";
require("echarts/lib/component/legend");



import Vuex from "vuex";
import echarts from "echarts";
import api from "./api";

import 'mint-ui/lib/style.css'
Vue.use(Col);
Vue.use(Row);
Vue.prototype.$echarts = echarts;

import Axios from "axios";
Vue.prototype.$axios = Axios;

Axios.defaults.baseURL = "/api"; // 接口的公共部分
Axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
Axios.interceptors.request.use(config => {
  if (window.localStorage.getItem("token")) {
    config.headers.Authorization = window.localStorage.getItem("token");
  }
  return config;
});

Vue.prototype.$api = api;

Vue.use(Vant);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
