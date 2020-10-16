<!--
 * @Author: happy
 * @Date: 2020-09-24 11:33:25
 * @LastEditTime: 2020-10-11 16:00:42
 * @LastEditors: happy
 * @Description: 患者详情药物治疗
-->
<template>
  <div>
    <van-swipe @change="onChange" id="banner" :show-indicators=false>
      <van-swipe-item v-for="item in yaowu" :key="item">
        <p>{{ item }}</p></van-swipe-item>    
    </van-swipe>
    <div v-for="i in 9" :key="i" class="list">
      患者于2020年10月11日15:59:55已服用药物
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      yaowu:[],
    } 
  },
  mounted() {
    let id =this.$store.state.currentPatientDetail.id;
  this.$axios//医生关注患者接口
      .post(this.$api.gkx.yaowu,JSON.stringify({patientId:id}))
      .then((res) => {
        for(let i=0;i<res.data.data.length;i++){
        this.yaowu.push(res.data.data[i].medicine_des)
        }  
         console.log(this.yaowu)
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
  //     setTimeout(()=>{
  //       for(let i=0;i<this.list2.length;i++){
  //         this.list.push(this.list2[i].patient)
  //       }
  // console.log(this.list2)
  //     },200);
  },
methods: {
    onChange(index) {
      console.log(index);
    }
  },
}
</script>

<style scoped>
#banner{
    height: 150px;
    border-top: 1px gray solid;
    border-bottom: 1px gray solid;
}
#btnremind{
    padding: 2px;
    border-radius: 25%;
    background-color: rgba(0, 199, 126);
    color: white;
}
#remind{
    line-height: 40px;
}
.list{
    line-height: 40px;
    padding-left: 20px;
}
p{
  text-align: center;
  line-height: 150px;
}
</style>