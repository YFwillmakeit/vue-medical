<!--  -->
<template>
  <div>
    <banner/>

<!-- 首页头像那里展示 -->
<van-row type="flex" justify="space-between">
  <van-col span="8" class="headImg">
      <van-image round width="3.5rem" height="3.5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      <!-- <img src="../assets/logo.png"> -->
      <p>{{this.all.dname}}</p>
  </van-col>

  <van-col span="8" class='change'>
      <div>{{this.alllist.length}}</div>
      <span>所有患者</span>
  </van-col>

  <van-col span="8" class='change1'>
      <div>{{this.noticelist.length}}</div>
      <span>关注患者</span>
      
  </van-col>
</van-row>

<!-- 这里是诊疗活动那个 -->


<van-row type="flex" justify="space-between">
  

  <van-col span="12">
      <van-button type="warning" to="case-study" @click='casestudy'>病例探讨</van-button>
  </van-col>
 
  <van-col span="12">
      <van-button type="info" to="activity" @click='activity'>诊疗活动</van-button>
  </van-col>

  
</van-row>




<maps />
<foot />
  </div>
</template>

<script>
import banner from "../../components/doctor/banner.vue";
import foot from '../../components/doctor/foot.vue';
import maps from '../../components/doctor/map.vue';

export default {
    
  data () {
    return {
      alllist:[],
      noticelist:[],
       all:[],
    };
  },

  methods: {

    // casestudy(){    //病例探讨
    //   // let str = JSON.stringify({id:1});
    //   // console.log(str+'类型'+typeof str);
    //   this.$axios
    //     .post("http://192.168.1.12:8080/interm//student/search",JSON.stringify({sname:1}))//JSON.stringify({id: 1,})
    //     .then((data) => {
    //       console.log("222");
    //       // this.$router.push("/patientinfo");
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log("333");
    //       console.log(arguments);
    //       console.log(err);
    //     });
    // },

    
    // ====================================================================
//     activity(){  //诊疗活动的接口
//  // let str = JSON.stringify({id:1});
//       // console.log(str+'类型'+typeof str);
//       this.$axios
//         .post("http://192.168.1.12:8080/interm/student/search",JSON.stringify({sname:1}))//JSON.stringify({id: 1,})
//         .then((data) => {
//           console.log("222");
//           // this.$router.push("/patientinfo");
//           console.log(data);
//         })
//         .catch((err) => {
//           console.log("333");
//           console.log(arguments);
//           console.log(err);
//         });
//     }
  },

mounted:function() { //所有关注患者接口
this.$axios.post(this.$api.xwq.indexguanzhu,JSON.stringify({doctorId:1}))
.then((res)=>{
  this.noticelist=res.data.data
  console.log('获取到关注患者了')
  console.log(this.noticelist)
// for(var i=0;i<res.data.data.length;i++){   
// this.alllist.push(res.data.data[i]);
// }
})
.catch((error)=>{
console.log(error)
});

// 所有患者
this.$axios.post(this.$api.xwq.initiatecase)
.then((res)=>{
  this.alllist=res.data.data
  console.log('查询到所有患者了')
// for(var i=0;i<res.data.data.length;i++){   
// this.alllist.push(res.data.data[i]);
// }
})
.catch((error)=>{
console.log(error)
});

this.$axios
        .post(this.$api.xwq.basicmsg,JSON.stringify({id:5}))//JSON.stringify({id: 1,})
        .then((data) => {
          this.all=data.data.data
          console.log('获取到个人信息了了');
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取个人信息失败了');
        });


},

  components: {
      banner,
      foot,
      maps,
  },

}
</script>
<style  scoped>
*{
    padding:0px;
    margin: 0px;
}
.van-col{
    margin:10px 0;
    /* padding-bottom: 20px; */
    line-height: 21px;
    height:100px;
    font-size:16px;
    text-align:center;
}
/* .van-col img{
    width:40px;
    height:40px;
} */
.van-col div{
    font-size:18px;
}
button{
    width: 120px;
    height: 60px;
    border-radius:10px;
}
.change,.change1{
height:70px;
padding-top:20px;
}
</style>