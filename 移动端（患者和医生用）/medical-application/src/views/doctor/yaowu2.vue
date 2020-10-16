<!--
 * @Author: happy
 * @Date: 2020-09-26 19:06:44
 * @LastEditTime: 2020-10-10 19:40:08
 * @LastEditors: happy
 * @Description: 就诊记录药物治疗
-->
<template>
  <div id="app">
    <van-cell is-link title="选择药物" @click="show = true" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" id="three"/>
    <hr />
    <div v-for="index in yaowu" :key="index">
      <p>药物名称：{{ index.name }}  规格：{{ index.Specifications }}</p>    
      指定用量(mg/天)： 
      <van-slider v-model="index.value" active-color="#ee0a24" @change="onChange">
  <template #button>
    <div class="custom-button">{{index.value }}</div>
  </template>
</van-slider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: "无药物治疗" },
        { name: "德巴金缓释片" ,Specifications:'200mg*20片',value:50},
        { name: "丙戊酸钠片",Specifications:'50mg*20片',value:50 },
        { name: "得理多" ,Specifications:'30mg*20片',value:50},
        { name: "奥卡西平口服液" ,Specifications:'20ml*12瓶',value:50},
        { name: "苯妥英钠" ,Specifications:'10mg*20片',value:50},
      ],
      yaowu: [],
    };
  },
  mounted(){
      // this.yaowu.push(this.$store.state.check.medicine)
  },
  methods: {
    onSelect(item) {
      this.show = false;
      if(item.name!='无药物治疗'){
        this.yaowu.push(item);
      }
    },
    onChange(value){
        this.value=value;
        console.log(value)
        console.log(arguments)
    },
  },
  watch:{
    yaowu(){
      this.$store.state.now.medicine_des=this.yaowu
    }
  }
};
</script>

<style scoped>
#app{
  height: 400px;
}
.custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
  .van-slider{
    margin-top: 30px;
  }
  #three{
    margin-left: 200%;
  }
</style>