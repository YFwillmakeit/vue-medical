<!--
 * @Author: happy
 * @Date: 2020-09-24 09:20:40
 * @LastEditTime: 2020-10-10 09:44:07
 * @LastEditors: happy
 * @Description: 患者详情
-->
<template>
  <div>

    
    <van-sticky>
      <van-nav-bar
      title="患者详情"
      left-text="返回"
      id="myhead"
      left-arrow
      @click-left="$router.replace(`/allpatient/${'allpatientlist'}`)"
    />
    </van-sticky>
    <nav>
      <img src="../../assets/miao.jpg" alt="" class="headimg" />
      <p>
        {{ $store.state.currentPatientDetail.name }} | {{ $store.state.currentPatientDetail.age }} | 性别<br />
        关联日期：2020-09-23<br />
      </p>
      <van-button type="default" @click="$router.push(`/patientinfo/${'basicinfo'}`)" id="patientbtn">查看个人信息</van-button>
      <van-divider />
    </nav>
    <section>
      <van-tabs v-model="active" animated>
        <van-tab title='就诊记录' name="medicalrecords">
          <medicalrecords />
        </van-tab>
        <van-tab title='发作记录' name="seizurerecord">
          <seizurerecord />
        </van-tab>
        <van-tab title='不良反应' name="adversereactions">
          <adversereactions />
        </van-tab>
        <van-tab title='病情日志' name="notes">
          <notes />
        </van-tab>
        <van-tab title='药物治疗' name="medication">
          <medication />
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import medicalrecords from "../../components/doctor/medicalrecords";
import seizurerecord from "../../components/doctor/seizurerecord";
import adversereactions from '../../components/doctor/adversereactions';
import notes from '../../components/doctor/notes';
import medication from '../../components/doctor/medication'
export default {
  data() {
    return {
      active: '',
      
    }
  },
  components: {
      medicalrecords,
      seizurerecord,
      adversereactions,
      notes,
      medication
  },
  methods: {
    onClickLeft() {

    },
    patientinfo(){

    }
  }
}
</script>
<style scoped>
.headimg {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 20px 20px;
}
nav p {
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
}
.van-divider {
  border-color: gray;
}
#myhead /deep/.van-nav-bar .van-icon {
  color: white;
}
#myhead /deep/.van-nav-bar__text {
  color: white;
}
#myhead /deep/.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
#patientbtn{
    height: 27px;
    border: 1px gray solid;
}
</style>