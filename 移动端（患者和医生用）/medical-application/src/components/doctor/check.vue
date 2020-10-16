<!--
 * @Author: happy
 * @Date: 2020-09-24 14:03:49
 * @LastEditTime: 2020-10-10 20:33:20
 * @LastEditors: happy
 * @Description: 就诊记录辅助检查接口

-->
<template>
  <div>
    <van-form @submit="onSubmit">
      <!-- 脑电图 -->
      <van-row class="money">
        <van-col span="11">脑电图</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="headcontent"
          name="脑电图"
          placeholder="脑电图"
        />
      </van-row>
      <!-- 核磁/CT -->
      <van-row class="money">
        <van-col span="11">核磁/CT</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="ctcontent"
          name="核磁/CT"
          placeholder="核磁/CT"
        />
      </van-row>
      <!-- 基因 -->
      <van-row class="money">
        <van-col span="11">基因</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="value3" :options="option3" />
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
      value1: 0,
      value2: 0,
      value3: 0,
      headcontent:'',
      ctcontent:'',
      option1: [
        { text: "异常", value: 0 },
        { text: "正常", value: 1 },
      ],
      option2: [
        { text: "异常", value: 0 },
        { text: "正常", value: 1 },
      ],
      option3: [
        { text: "阴性", value: 0 },
        { text: "阳性", value: 1 },
      ],
    };
  },
  
  mounted() {
    // let id = this.$store.state.jiuzhen.patientId
    // this.$axios//患者详情就诊记录辅助检查接口
    //   .post("http://172.16.6.115:8080/interm/record/ysjc",JSON.stringify({patientId:id}))
    //   .then((res) => {
    //     console.log(res.data.data)
    //     this.$store.state.check=res.data.data;
    //     this.$store.state.check=res.data.data;
    //     this.value1=this.$store.state.check.eeg  //取出脑图信息
    //     this.value2=this.$store.state.check.ct  //取出CT信息
    //     this.value3=this.$store.state.check.gene  //取出基因信息
    //     this.headcontent=this.$store.state.check.eegDes  //取出脑电图信息
    //     this.ctcontent=this.$store.state.check.ctDes //取出核磁信息
    //     console.log("就诊记录辅助检查接口测试成功");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("接口测试失败");
    //   });
    // this.value1=this.$store.state.jiuzhen.eeg  //取出脑图信息
        //  this.value2=this.$store.state.jiuzhen.ct  //取出CT信息
        //  this.value3=this.$store.state.jiuzhen.gene  //取出基因信息
         this.headcontent=this.$store.state.jiuzhen.eegDes  //取出脑电图信息
        this.ctcontent=this.$store.state.jiuzhen.ctDes //取出核磁信息
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
  watch: {
    value1(){
     this.$store.state.now.eeg=this.value1  //取出脑图信息  
    },
    headcontent(){
    this.$store.state.now.eegDes=this.headcontent  //取出脑电图信息
    },
    value2(){
     this.$store.state.now.ct=this.value2  //取出CT信息
    },
    value3(){
    this.$store.state.now.gene=this.value3  //取出基因信息
    },
    ctcontent(){
    this.$store.state.now.ctDes=this.ctcontent //取出核磁信息
    },
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