<!--
 * @Author: happy
 * @Date: 2020-09-23 17:58:02
 * @LastEditTime: 2020-09-24 14:44:24
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
    <van-nav-bar title="新增分组" left-text="返回" id="myhead" left-arrow @click-left="$router.replace(`/allpatient/${'group'}`)" />
    <van-cell-group>
      <!-- <p>新建组名：</p> -->
      <!-- <van-field v-model="groupName" placeholder="请输入组名" required /> -->


<van-field
        name="新建组名："
        label="新建组名："
        v-model="groupName"
        placeholder="请输入组名"
      />


    </van-cell-group>

    <div v-if="$store.state.selectMember">
      <div class="list" v-for="item in $store.state.selectMember" :key="item.name">
        <!-- <span class="time">2020-09-23</span> -->
        <img src="../../assets/miao.jpg" alt="miao" class="headimg" />
        <p class="o_name">
                <span class='name'>姓名：{{ item.name }}</span>
                </p>
              <p class="o_msg">
                <span class='age'>年龄：{{ item.age }}</span> 
                <span class='sex'>性别：{{ item.gender }}</span>
                <span class='bing'>病名：{{ item.patientType }}</span></p>
      </div>
    </div>

    <van-row id="btnicon">
      <van-col span="12"><van-button  type="warning" @click="$router.push('/addmember')">添加成员</van-button></van-col>
      <van-col span="12"><van-button  type="info" @click="clearMember">清空成员</van-button></van-col>
    </van-row>
    <div id="done">
      <van-button type="primary" id="btndone" @click="groupFinish">完成</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupName: ''
    }
  },
  methods: {
    clearMember() {
      this.$store.state.selectMember = [];
    },
    groupFinish() {
      const {groupArr,selectMember} = this.$store.state;
      let tempObj = {};
      if(this.groupName !== ''){
        tempObj.groupName = this.groupName;
        tempObj.selectMember = selectMember;
        groupArr.push(tempObj);
        this.$router.back();
      }
    }
  },

};
</script>

<style scoped>
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
  background-color: rgba(0, 199, 126,1);
}
#done {
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100%;
}
#btndone {
  display: inline-block;
  margin: 0 auto;
  /* width: 120px; */
  width:100%;
  height:50px;
  position:fixed;
  bottom:0;
  right:0;
  border-radius: 0;
}
#btnicon{
    text-align: center;
}


.list {
  position: relative;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  /* line-height: 25px; */
  margin-left:10px;
}
.headimg {
  position: absolute;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  left: .3rem;
  
  /* top: .5rem; */
}
.o_name {
  position: absolute;
  left: 4rem;
  /* top: .2rem; */
}
.o_msg {
  position: absolute;
  left: 4rem;
  top: 1.5rem;
}
.time {
  float: right;
  line-height: 60px;
  padding-right: 10px;
}
.van-checkbox{
  top:1.5rem;
}
.age{
  display: inline-block;
  width: 80px;
}
.sex{
  display: inline-block;
  width: 80px;
}
button{
    width: 100px;
    height: 50px;
    border-radius:10px;
    margin-top: 60px;
}
.van-field{
  margin-top:10px;
}

</style>