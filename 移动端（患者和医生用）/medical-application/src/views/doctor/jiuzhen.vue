<!--
 * @Author: happy
 * @Date: 2020-09-26 14:37:35
 * @LastEditTime: 2020-10-10 21:06:52
 * @LastEditors: happy
 * @Description: 就诊记录
-->
<template>
  <div>
      <van-sticky>
      <van-nav-bar
      title="就诊记录"
      left-text="返回"
      id="myhead"
      left-arrow
      right-text="保存"
      @click-left="$router.replace('/patientdetail')"
      @click-right='save'
    />
    </van-sticky>
    <nav>
      <img src="../../assets/miao.jpg" alt="" class="headimg" />
      <p>
        {{$store.state.currentPatientDetail.name}}|{{$store.state.currentPatientDetail.age}}|{{$store.state.currentPatientDetail.sex}}
      </p>
      <p>就诊时间：2020-09-20</p>
      <van-divider />
    </nav>
     <section>
        <van-tabs v-model="active" animated>
  <van-tab title='诊断' name="diagnosis" >
    <diagnosis/>
  </van-tab>
  <van-tab title='辅助检查' name="check">
    <check/>
  </van-tab>
  <van-tab title='药物治疗' name="yaowu">
    <!-- <router-view></router-view> -->
    <yaowu/>
  </van-tab>
  <van-tab title='特殊治疗' name="special">
    <special/>
  </van-tab>
</van-tabs>
    </section>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
  import special from '../../components/doctor/special'
  import diagnosis from '../../components/doctor/diagnosis'
  import check from '../../components/doctor/check'
  import yaowu from '../../components/doctor/yaowu'
export default {
    components:{
      special,
      diagnosis,
      check,
      yaowu
    }, 
    methods: {
      yaowu(){
        this.$router.push({path:'/yaowu2'})
      },
      save(){
        this.$router.replace('/patientdetail')
        console.log(this.$store.state.currentPatientDetail.id)
        this.$store.state.now.patientId=this.$store.state.currentPatientDetail.id
        //将就诊记录更新的值取出传给后台    
        this.$axios//现病史（就诊记录）更新
      .post(this.$api.gkx.jiuzhen,JSON.stringify(this.$store.state.now))
      .then((res) => {     
        console.log(res)    
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
      }
    },
    mounted(){
      let id =this.$store.state.currentPatientDetail.id;
      this.$axios//请求所有就诊记录
      .post(this.$api.gkx.now,JSON.stringify({patientId:id}))
      .then((res) => {     
        console.log(res)  
        this.$store.state.jiuzhen=res.data.data  
        console.log(this.$store.state.jiuzhen)
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
      setTimeout(()=>{
         let obj=this.$store.state.jiuzhen;
        for(let i in this.$store.state.jiuzhen){    
          if(obj[i]==null){
            obj[i]=0   
          }else if(obj[i]=='是'){
            obj[i]=1 
          }else if(obj[i]=='否'){
            obj[i]=0 
          }else if(obj[i]=='不详'){
            obj[i]=2 
          }
        }
      },200)
    }
}
</script>

<style scoped>
nav{
    text-align: center;
}
.headimg {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 10px 0 0 0;
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
</style>