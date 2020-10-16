<!--
 * @Author: happy
 * @Date: 2020-09-25 16:04:24
 * @LastEditTime: 2020-10-10 20:28:45
 * @LastEditors: happy
 * @Description: 就诊记录特殊治疗选项
-->
<template>
  <div>
    <van-form @submit="onSubmit">
      <!-- 是否手术 -->
      <van-row class="money">
        <van-col span="11">是否手术</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="shoushucontent"
          name="手术内容"
          placeholder="手术内容"
        />
      </van-row>
      <!-- 甲强==激素治疗 -->
      <van-row class="money">
        <van-col span="11">甲强==激素治疗</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 免疫治疗 -->
      <van-row class="money">
        <van-col span="11">免疫治疗</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 生酮饮食 -->
      <van-row class="money">
        <van-col span="11">生酮饮食</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value4" :options="option3" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 其它 -->
      <van-row class="money">
        <van-col span="11">其它</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value5" :options="option3" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        shoushucontent:'',
    value1: 2,
    value2: 2,
    value3: 2,
    value4: 2,
    value5: 2,
    option1: [
      { text: "是", value: 0 },
      { text: "否", value: 1 },
      { text: "不详", value: 2 },
    ],
    option2: [
      { text: "是", value: 0 },
      { text: "否", value: 1 },
      { text: "不详", value: 2 },
    ],
    option3: [
      { text: "是", value: 0 },
      { text: "否", value: 1 },
      { text: "不详", value: 2 },
    ],
    option4: [
      { text: "是", value: 0 },
      { text: "否", value: 1 },
      { text: "不详", value: 2 },
    ],
    option5: [
      { text: "是", value: 0 },
      { text: "否", value: 1 },
      { text: "不详", value: 2 },
    ],
  };
    },
   mounted() { //取出特殊治疗信息
   console.log(this.$store.state.check)
     this.shoushucontent = this.$store.state.jiuzhen.operationDes;    //手术内容
     this.value1 = this.$store.state.jiuzhen.operation;   //是否手术
     this.value2 = this.$store.state.jiuzhen.jqjs;          //甲亢激素
     this.value3 = this.$store.state.jiuzhen.immune;       //免疫
     this.value4 = this.$store.state.jiuzhen.stys;         //生酮治疗
     this.value5 = this.$store.state.jiuzhen.other;         //其他
     
    // this.$axios//患者详情就诊记录特殊治疗接口
    //   .post("http://192.168.1.2:8080/record/ystb",JSON.stringify({patientId:9}))
    //   .then((res) => {
    //     console.log(res)
    //     console.log("接口测试成功");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("接口测试失败");
    //   });
  },
   methods: {
     onLoad() {
       // 异步更新数据
       // setTimeout 仅做示例，真实场景中一般为 ajax 请求
       setTimeout(() => {
         for (let i = 0; i < 10; i++) {
           this.list.push(this.list.length + 1);
         }
         // 加载状态结束
         this.loading = false;
         // 数据全部加载完成
         if (this.list.length >= 15) {
           this.finished = true;
         }
       }, 1000);
     },
     content() {
       this.$router.push("/about");
       console.log("About");
     },
   },
   watch:{
     shoushucontent(){
    this.$store.state.now.operationDes=this.shoushucontent;    //手术内容
    },
    value1(){
     this.$store.state.now.operation=this.value1;   //是否手术
    },
    value2(){
    this.$store.state.now.jqjs=this.value2;          //甲亢激素
    },
    value3(){
    this.$store.state.now.immune=this.value3;       //免疫
    },
    value4(){
    this.$store.state.now.stys=this.value4;         //生酮治疗
    },
    value5(){
    this.$store.state.now.other=this.value5;         //其他
    },
   }
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
    padding-left: 68px;
  }
  .contentlist {
    padding: 0px;
  }
  .van-row {
    border-bottom: 1px solid rgba(10, 10, 10, 0.4);
  }
  .van-col {
    margin: 0;
  }
</style>