<!--
 * @Author: happy
 * @Date: 2020-09-24 13:33:29
 * @LastEditTime: 2020-10-11 16:37:08
 * @LastEditors: happy
 * @Description: 既往史
-->
<template>
  <div>
    <van-form>
      <!-- 过敏药物名称 -->
      <van-row class="money">
        <van-col span="8">是否有药物过敏</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="guomin"
          name="过敏药物名称"
          placeholder="过敏药名称"
        />
      </van-row>
      <!-- 是否有外伤 -->
      <van-row class="money">
        <van-col span="8">是否有外伤史</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="wai"
          name="外伤史描述"
          placeholder="描述"
        />
      </van-row>
      <!-- 慢病史 -->
      <van-row class="money">
        <van-col span="8">慢病史</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney3" :options="option3" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="man"
          name="慢病史名称"
          placeholder="慢病史名称"
        />
      </van-row>
      <van-row class="money">
        <van-col span="8">产伤</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney5" :options="option5" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 感染 -->
      <van-row class="money">
        <van-col span="8">感染</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu direction="up" active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney6" :options="option6" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 出血 -->
      <van-row class="money">
        <van-col span="8">出血</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu direction="up" active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney7" :options="option7" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 是否高热惊厥史 -->
      <van-row class="money">
        <van-col span="8">是否高热惊厥史</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu direction="up" active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney8" :options="option8" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!--  其它 -->
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guomin:'',
      wai:'',
      man:'',
      valuemoney1: 2,
      valuemoney2: 2,
      valuemoney3: 2,
      valuemoney5: 2,
      valuemoney6: 2,
      valuemoney7: 2,
      valuemoney8: 2,
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
      option5: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option6: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option7: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option8: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
    };
  },
  mounted() {
    this.$store.state.family.patientId=this.$store.state.currentPatientDetail.id
    let patientId = this.$store.state.currentPatientDetail.id
    this.$axios//患者既往史接口
      .post(this.$api.gkx.jws,JSON.stringify({patientId
:patientId}))
      .then((res) => {
          this.$store.state.ago=res.data.data
        // this.valuemoney1=this.$store.state.ago.allergy;//是否过敏
        // this.guomin=this.$store.state.ago.allergy_name; //过敏内容
        // this.valuemoney2=this.$store.state.ago.trauma;   //是否有外伤
        // this.wai=this.$store.state.ago.trauma_des;//外伤
        // this.valuemoney3=this.$store.state.ago.chronic;  //是否有慢病史
        // this.man=this.$store.state.ago.Chronic_name;//慢病史
        // this.valuemoney5=this.$store.state.ago.injury;    //产伤
        // this.valuemoney6=this.$store.state.ago.infected;  //  感染
        // this.valuemoney7=this.$store.state.ago.hemorrhage;  //  出血
        // this.valuemoney8=this.$store.state.ago.convulsion;   //  高热
        // console.log(this.valuemoney8)
        console.log(this.valuemoney1);
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
  },
  methods: {
    content() {
      this.$router.push("/about");
      console.log("About");
    }
  },
  watch:{
    valuemoney1(){
       this.$store.state.family.allergy=this.valuemoney1;   //是否过敏
    },
    guomin(){
      this.$store.state.family.allergy_name=this.guomin;       //过敏药名称
    } , 
    valuemoney2(){
      this.$store.state.family.trauma= this.valuemoney2;//是否有外伤
    },   
    wai(){
      this.$store.state.family.trauma_des=this.wai;//外伤
    }, 
    valuemoney3(){
      this.$store.state.family.chronic=this.valuemoney3;//是否有慢病史
    }, 
    man(){
      this.$store.state.family.Chronic_name=this.man;//慢病史内容
    }, 
    valuemoney5(){
      this.$store.state.family.injury=this.valuemoney5;
    }, 
    valuemoney6(){
      this.$store.state.family.infected=this.valuemoney6;
    }, 
    valuemoney7(){
      this.$store.state.family.hemorrhage=this.valuemoney7;
    }, 
    valuemoney8(){
      this.$store.state.family.convulsion=this.valuemoney8;
    }, 
  }
};
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
  }
  .money /deep/ .van-dropdown-menu {
    /* text-align: left; */
    float: left;
    padding-left: 30px;
  }
  .contentlist {
    padding: 0px;
  }
  .van-row {
    border-bottom: 1px solid rgba(10, 10, 10, 0.4);
  }
</style>