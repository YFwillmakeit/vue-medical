<!--
 * @Author: happy
 * @Date: 2020-09-24 11:20:22
 * @LastEditTime: 2020-10-11 14:47:49
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
      <div v-for="index in newlist" :key="index" class="list">
          <p>{{ index.time }}</p>
          <p>{{ index.des }}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            newlist:[],
            list:[],
        }
    },
    mounted() {
        let patientId = this.$store.state.currentPatientDetail.id;
    this.$axios
      .post(this.$api.gkx.note,JSON.stringify({patientId:patientId}))
      .then((res) => {
        this.newlist = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    //     for(let i=0;i<this.newlist.length;i++){
          let now = this.newlist.recordTime;
        var year=now.getFullYear();  //取得4位数的年份
        var month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
        var date=now.getDate();      //返回日期月份中的天数（1到31
          let str=year+"-"+month+"-"+date;
          let obj = {time:str,
          des:this.newlist.des};
          this.list.push(obj)
          console.log(this.list)
    //   }
},
}

</script>

<style scoped>
.list{
    margin: 20px 0;
    border: 1px rgba(220, 220, 220,1) solid;
    padding: 0 20px;
}
</style>