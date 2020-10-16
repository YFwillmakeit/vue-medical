<!--
 * @Author: happy
 * @Date: 2020-09-23 18:35:32
 * @LastEditTime: 2020-10-01 17:40:51
 * @LastEditors: happy
 * @Description: 新增分组添加组员
-->
<template>
  <div>
      <van-nav-bar title="选择患者" left-text="返回"  id="myhead" left-arrow @click-left="$router.back()" />
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item.name"
            @click="toggle(index)"
          >
            <div class="list">
              <!-- <span class="time">2020-09-23</span> -->
              <img src="../../assets/miao.jpg" alt="miao" class="headimg" />
              <p class="o_name">
                <span class='name'>姓名：{{ item.name }}</span>
                </p>
              <p class="o_msg">
                <span class='age'>年龄：{{ item.age }}</span> 
                <span class='sex'>性别：{{ item.gender }}</span>
                <span class='bing'>病名：{{ item.patientType }}</span></p>
                <!-- <hr/> -->
            </div>
            <template #right-icon>
              <van-checkbox :name="item" ref="checkboxes" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
      <div id="done">
        <van-button type="primary" id="btndone" @click="selectFinish">完成</van-button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        list: [
          {src:'', name:'张三',age:21,gender:'男',patientType: '心脏病'},
          {src:'', name:'李四',age:21,gender:'男',patientType: '心脏病'},
          {src:'', name:'王五',age:21,gender:'男',patientType: '心脏病'}],
        result: [],
      };
  },
 methods: {
   onClickLeft() {

   },
   toggle(index) {
     this.$refs.checkboxes[index].toggle();
   },
   selectFinish() {
     this.$store.state.selectMember = this.result;
     this.$router.back();
   }
 }
}
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


.list {
  position: relative;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  /* line-height: 25px; */
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
</style>