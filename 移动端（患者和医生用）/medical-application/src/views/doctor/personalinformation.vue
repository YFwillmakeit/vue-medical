<!--
 * @Author: happy
 * @Date: 2020-09-24 16:29:51
 * @LastEditTime: 2020-10-11 16:48:23
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
      <van-nav-bar
      id="myhead"
      title="基本信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
      <div class="headimg"><img src="../../assets/miao.jpg" class="headimg" alt=""></div>
      <div class="list">
          <p>姓名：{{infolist.name}}</p>
          <p>年龄: {{infolist.age}}</p>
          <p>性别: {{infolist.sex}}</p>
          <p>电话：{{infolist.phone}}</p>
          <p>地址：{{infolist.address}}</p>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        infolist:{      
        }
    }
},
mounted(){
  console.log(this.$store.state.notice)
this.infolist=this.$store.state.notice   //取出当前患者个人信息
},
 methods: {
        onClickLeft() {
      this.$router.go(-1);
    },
 }
}
</script>

<style scoped>
.list{
    border-bottom: 1px gray solid;
    margin: 20px 10px;
}
.headimg{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 10px auto;
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
.list p{
  margin: 20px 0;
}
</style>