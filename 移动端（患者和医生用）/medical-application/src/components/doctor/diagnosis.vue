<!--
 * @Author: happy
 * @Date: 2020-09-24 14:00:14
 * @LastEditTime: 2020-10-10 20:28:02
 * @LastEditors: happy
 * @Description: 诊断/现病史诊断
-->
<template>
 <div>
 <van-row class="money">
        <van-col span="11">是否诊断</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value" :options="option" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="content"
          name="诊断内容"
          placeholder="诊断内容"
        />
      </van-row>
 </div>
</template>
<script>

export default {
  data() {
   return {
      value: 0,
      content:'诊断内容测试',
      option: [
        { text: '是', value: 0 },
        { text: '否', value: 1 },
        { text: '不详', value: 2 },
      ],
    };
  },

   mounted() {
    //  let patientId = this.$store.state.jiuzhen.patientId
    // this.$axios//患者详情就诊记录诊断接口
    //   .post(this.$api.gkx.jzlj,JSON.stringify({patientId:patientId}))
    //   .then((res) => {
    //     this.$store.state.zhenduan=res.data.data
    //     this.value=this.$store.state.zhenduan.diagnosis //是否诊断
    //     this.content=this.$store.state.zhenduan.diagnosisDes       //诊断描述
    //     console.log("接口测试成功");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("接口测试失败");
    //   });
       this.value=this.$store.state.jiuzhen.diagnosis //是否诊断
        this.content=this.$store.state.jiuzhen.diagnosisDes       //诊断描述
  },
  watch: {
    value(){
      // this.$store.state.zhenduan.diagnosis=this.value //是否诊断 
      this.$store.state.now.diagnosis=this.value
    },
    content(){
      // this.$store.state.zhenduan.diagnosisDes=this.content      //诊断描述 
      this.$store.state.now.diagnosisDes=this.content      //诊断描述 
    }
  },
}
</script>

<style scoped>
.money {
    padding-left: 16px;
    line-height: 48px;
    border: none;
    color: rgb(100, 101, 102);
    font-size: 14px;
  }
  .money /deep/ .van-dropdown-menu__bar {
    box-shadow: unset !important;
    background-color: none !important;
  }
  .money /deep/ .van-dropdown-menu {
    /* text-align: left; */
    float: left;
    padding-left: 12px;
  }
  .contentlist {
    padding: 0px;
  }
  .van-row {
    border-bottom: 1px solid rgba(10, 10, 10, 0.4);
  }
  .van-col{
    margin: 0;
  }
</style>