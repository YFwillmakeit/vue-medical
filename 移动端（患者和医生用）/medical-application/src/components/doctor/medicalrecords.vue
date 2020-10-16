<!--
 * @Author: happy
 * @Date: 2020-09-24 09:52:59
 * @LastEditTime: 2020-10-11 16:10:31
 * @LastEditors: happy
 * @Description: 患者详情就诊记录
-->
<template>
  <div id="test">
      <div v-for="item in list[0]" :key="item" class="list" @click="jiuzhen">
           <hr>
          <p>
            第{{ item.count }}次就诊
            |{{ item.time }}|
            星期一</p>
          <p>就诊医院：北京癫痫病医院</p>   
      </div>
    <van-button type="primary" @click="add">新增记录</van-button>


  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
    }
  },
  mounted() {
    let patient =this.$store.state.currentPatientDetail.id;
    this.$axios//请求所有就诊记录
      .post(this.$api.gkx.medicalrecords,JSON.stringify({id:patient}))
      .then((res) => {     
        this.$store.state.jiuzhen=res.data.data
        this.list.push(this.$store.state.jiuzhen)
        console.log(res.data.data)
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
  },
    methods: {
      jiuzhen(item){
        this.$router.push('/jiuzhen')
        console.log(item)
       },
       add(){
          this.$router.push('/addjiuzhen')
       }
    },
    
}
</script>

<style scoped>
.list{
    margin: 10px 10px;
}
.van-button{
  width:100%;
  height:50px;
  /* position:fixed; */
  /* bottom:0;
  right:0; */
}
#test{
  height: 600px;
}
</style>