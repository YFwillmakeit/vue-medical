import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // thisUser: {},    //
    teplist:{}    //查看
  },
  // getters: {
  //   getUserInfo(state){
  //     return { ...state.thisUser };
  //   }
  // },
  mutations: {
    // changeUser(state,userinfo){
    //   console.log("changeUser获取的值为："+userinfo);
    //   state.thisUser = userinfo;
    // },
    setTeplist(state,teplist){
      state.teplist=teplist
    }
  },
  actions: {
    // setUserInfo({commit},userinfo){
    //   commit("changeUser",userinfo);
    // }
    changeTeplist(context,value){
      context.commit('setTeplist',value)
    }
  },
  modules: {
  }
})
