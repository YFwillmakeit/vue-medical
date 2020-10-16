<!--  -->
<template>
  <div>

<div >
      <div class="caption">
        <div class='meettitle'>{{result[0].theme}}</div>
        <span class="meetdata1">{{result[0].durations}}</span>
        <span class="meetdata2">{{result[0].starttime}}</span>
      </div>
      <p class='paymoney'>选择支付方式</p>
        <div class='rmb'>人民币支付<van-checkbox v-model="checked"></van-checkbox></div>
</div>
    <van-row>
   <van-col span="12">
     <van-button type="default" class="onebutton">{{result[0].money}}</van-button>
    </van-col>
  <van-col  span="12">
    <van-button type="primary" @click="yes">确认支付</van-button>
  </van-col>

</van-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checked: true,
      result: [],
    };
  },

  methods: {
     yes:function(){
      
      this.$store.state.list.doctorId=2
      console.log(this.$store.state.list)
       this.$axios
      .post('http://172.16.6.132:8080/interm/discuss/addDiscuss',JSON.stringify(this.$store.state.list))
      .then((res) => {
        // this.allhname = res.data.data;
        // this.patientname = [...res.data.data];
        console.log(res)
        // for (let i = 0; i < this.list.length; i++) {
        //   if (this.list[i].sex == 0) {
        //     this.list[i].sex = "女";
        //   } else {
        //     this.list[i].sex = "男";
        //   }
        // }
      })
      .catch((error) => {
        console.log(error);
      });
         this.$toast.success('支付成功，已发起病例探讨');
         this.$router.push({
             path:"/case-study"
         })
     }
    
  },

  mounted:function() {
    setTimeout(()=>{
          console.log(this.$store.state.list)
    },200)
   
    this.result.push(this.$store.state.list)  //获取到的vuex的数据
  },

  components: {

  },

}
</script>
<style  scoped>
*{
    margin:0;
    padding:0;
}
.van-nav-bar{
  background-color: rgba(0,199,126);
}
/deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
.caption {
  padding: 10px 10px 5px 10px;
  color: rgb(150, 151, 153);
}
.meetdata1,.meetdata2{
  font-size:14px;
}
.meettitle{
  margin-bottom:20px;
}
.meetdata2{
  margin-left:50px;
  text-align:right;
}
.van-checkbox {
    float:right;
    /* padding-right:30px; */
}
.paymoney{
  background-color:rgb(242,242,242);
  padding:15px 10px;
  font-size:15px;
  /* color: rgb(150, 151, 153); */
}
.rmb{
    margin:10px;
    color: rgb(150, 151, 153);
}
.van-button{
  width:50%;
  height:50px;
  position:fixed;
  bottom:0;
  right:0;
}
.onebutton {
  left: 0;
}
</style>