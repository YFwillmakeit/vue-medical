<!--
 * @Author: happy
 * @Date: 2020-09-23 15:02:15
 * @LastEditTime: 2020-10-11 15:45:11
 * @LastEditors: happy
 * @Description: 
-->
<template>
<div>
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title='我的患者' name="1">
    <div v-for="item in 4" :key="item" :title="item" class="list" @click="patientdetail(item)">
       <img src="../../assets/miao.jpg" alt="" class="headimg" />  
          <p class="name">姓名: 患者 年龄: 18 性别: 男<br />关联日期：2020-09-23</p>
  <hr>
    </div>
  </van-collapse-item>
  <van-collapse-item title="特别关注" name="2">
     <div v-for="item in 5" :key="item" :title="item" class="list" @click="patientdetail(item)">
       <img src="../../assets/miao.jpg" alt="" class="headimg" />
          <p class="name">姓名: 患者 年龄: 18 性别: 男<br />关联日期：2020-09-23</p>
    <hr>
    </div>
  </van-collapse-item>
  <van-collapse-item title="癫痫病友交流组" name="3">
     <div v-for="item in 6" :key="item" :title="item" class="list" @click="patientdetail(item)">
       <img src="../../assets/miao.jpg" alt="" class="headimg" />  
          <p class="name">姓名: 患者 年龄: 18 性别: 男<br />关联日期：2020-09-23</p>
     <hr>
    </div>
  </van-collapse-item>
</van-collapse>
  </div>
</template>

<script>

export default {
  data() {
    return {
       activeName: '1',
      list2:[],//所有关注的患者
      list:[],
      group:[],//组名
      
    }
  },
  mounted(){
    //doctorId需要在登录成功获取
  //     this.$axios//医生关注患者接口
  //     .post(this.$api.gkx.notice,JSON.stringify({doctorId:1}))
  //     .then((res) => {
  //       this.list2=res.data.data
  //       console.log("接口测试成功");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("接口测试失败");
  //     });
  //     setTimeout(()=>{
  //       for(let i=0;i<this.list2.length;i++){
  //         this.list.push(this.list2[i].patient)
  //       }
  // console.log(this.list2)
  //     },200);
  },
  methods: {
     toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  }
};
</script>

<style scoped>
.list {
  position: relative;
  height: 80px;
  width: 100%;
}
.headimg {
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  left: .5rem;
  margin: 20px 15px;
  vertical-align: top;
}
.name{
  padding-left: 100px;
  display: inline-block;
   margin: 20px 0;
}
</style>