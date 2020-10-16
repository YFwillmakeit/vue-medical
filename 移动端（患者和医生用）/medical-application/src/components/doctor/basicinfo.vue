<!--
 * @Author: happy
 * @Date: 2020-09-24 13:31:37
 * @LastEditTime: 2020-10-11 16:06:09
 * @LastEditors: happy
 * @Description:基本信息
-->
<template>
  <div>
      <div class="list">
          <p>姓名：{{infolist.name}}</p>
          <p>年龄: {{infolist.age}}</p>
          <p>电话：{{infolist.phone}}</p>
          <p>地址：{{infolist.address}}</p>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        infolist:{
          
        }
    }
},
mounted() {
  this.infolist=this.$store.state.currentPatientDetail   //取出当前患者个人信息
},
}
</script>

<style scoped>
.list{
    /*border-bottom: 1px gray solid;*/
    margin: 20px 10px;
}
.list p{
  margin: 20px 0;
}
</style>