import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import store from './store'
import api from './api'         //引用api
import Vuex from 'vuex'
//导入全局样式表
import './assets/css/global.css'
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
Axios.defaults.baseURL= "/api";     //后台接口
import Axios from "axios"
Axios.interceptors.request.use(config => {
  if (window.localStorage.getItem("token")) {
    config.headers.Authorization = window.localStorage.getItem("token");
  }
  return config;
})
Vue.prototype.$echarts=echarts
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ElementUI)
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
