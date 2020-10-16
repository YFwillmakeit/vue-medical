<!--
 * @Author: happy
 * @Date: 2020-09-24 13:33:56
 * @LastEditTime: 2020-10-11 16:37:34
 * @LastEditors: happy
 * @Description: 家族病史
-->
<template>
  <div id="family">
    <van-form>
      <!-- 家族病 -->
      <van-row class="money">
        <van-col span="8">家族病</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="Familialdis_name"
          name="家族病描述"
          placeholder="描述"
        />
      </van-row>
      <!-- 是否结婚 -->
      <van-row class="money">
        <van-col span="8">是否结婚</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 是否生育 -->
      <van-row class="money">
        <van-col span="8">是否生育</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney3" :options="option3" />
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
      valuemoney1: 2,
      valuemoney2: 2,
      valuemoney3: 2,
      Familialdis_name:'家族病测试',
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
    };
  },
  mounted(){
    console.log(this.$store.state.ago)
    //  this.valuemoney1=this.$store.state.ago.Familialdis;
    //  this.Familialdis_name=this.$store.state.ago.Familialdis_name;
    //  this.valuemoney2=this.$store.state.ago.marry;
    //  this.valuemoney3=this.$store.state.ago.birth;
  },
  methods: {
    content() {
      this.$router.push("/about");
      console.log("About");
    },
  },
  watch:{
    valuemoney1(){
       this.$store.state.family.Familialdis=this.valuemoney1;
    },
    Familialdis_name(){
       this.$store.state.family.Familialdis_name=this.Familialdis_name;
    },
    marry(){
       this.$store.state.family.marry=this.valuemoney2;
    },
    birth(){
       this.$store.state.family.birth=this.valuemoney3;
    },   
  }
};
</script>

<style scoped>
#family{
  height: 600px;
}
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