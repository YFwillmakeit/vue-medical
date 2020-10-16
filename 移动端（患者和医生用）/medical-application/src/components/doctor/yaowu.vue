<!--
 * @Author: happy
 * @Date: 2020-09-25 15:20:58
 * @LastEditTime: 2020-10-10 18:32:27
 * @LastEditors: happy
 * @Description: 药物治疗
-->
<template>
  <div>
      <router-view></router-view>
      <!-- <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
</van-dropdown-menu> -->
  </div>
</template>
<script>
export default {
// data() {
//     return {
//       value1: 0,
//       option1: [
//         { text: '全部商品', value: 0 },
//         { text: '新款商品', value: 1 },
//         { text: '活动商品', value: 2 },
//       ],
//     };
//   },
mounted() {
  this.$router.push({path:'/yaowu2'})
    this.$axios//药物治疗接口
      .post(this.$api.gkx.yaowu,JSON.stringify({id:1}))
      .then((res) => {
        console.log(res)
        console.log("接口测试成功");
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
  },
  watch: {//监听选择情况
    result:function(){
        let str ='';
      for(let i in this.result){
       str+=i;
      }
      console.log(str)
    },
  },
}

</script>

<style scoped>
  .left {
    float: left;
    font-size: 15px;
  }
  .top{
    padding: 20px 0 25px 0;
  }
  .top,.bottom{
    border-bottom: 1px solid rgba(10, 10, 10, 0.5);
  }
</style>