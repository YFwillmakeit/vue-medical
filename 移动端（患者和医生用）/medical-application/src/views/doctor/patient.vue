<!--
 * @Author: happy
 * @Date: 2020-09-22 14:54:29
 * @LastEditTime: 2020-10-10 09:02:28
 * @LastEditors: happy
 * @Description: 患者管理
-->
<template>
  <div id="test">
   
    <!-- <p id="title">患者管理</p>
    <hr /> -->
<van-sticky id='myhead'>
<van-nav-bar 
  title="患者管理"/>
</van-sticky>
    <province />
    <hr />
    <div>
      <!-- `/allpatient/${'allpatientlist'}` -->
      <van-row>
        <van-col span="12" id="left" @click="$router.push(`/allpatient/${'allpatientlist'}`)">
          <van-icon name="friends-o" class="icon1" />
          <span>所有患者</span>
        </van-col>
        <van-col span="12" id="right">
          <van-icon name="like-o" class="icon1" @click="$router.push('/noticepatient')"/>关注患者
        </van-col>
      </van-row>
    </div>
    <hr />
    <div id="echartsId">
      <frequencyCount />
    </div>
    <div id="echartsId2">
      <adverseEffectCount/>
    </div>
    <hr />
  </div>
</template>
<script>
import province from "../../components/doctor/province";
import frequencyCount from "../../components/doctor/frequencyCount";
import adverseEffectCount from "../../components/doctor/adverseEffectCount";
export default {
  components: {
    province,
    frequencyCount,
    adverseEffectCount
  },
  data() {
    return {
      list:[],
       
    }
  },
  mounted() {
    //请求所有患者信息，首页展示用
    this.$axios
      .post("http://172.16.6.141:8080/patient/findAll")
      .then((res) => {
        this.list = res.data.data;
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    allpatient(){

    },
    noticepatient(){

    }
  },
};
</script>
<style scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}

#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
/deep/ .van-nav-bar__title{
  color:black
}
div /deep/.van-ellipsis{
   color:black
}
#title {
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: gray;
  background: rgba(0, 199, 126,1);
}
#left {
  border-right: 1px solid gray;
  line-height: 60px;
  text-align: center;
}
#right {
  text-align: center;
}
.icon1 {
  font-size: 36px;
  line-height: 60px;
  vertical-align: middle;
}
#left span {
  line-height: 60px;
}
/* #test /deep/.van-ellipsis{
  color: white;
} */
</style>