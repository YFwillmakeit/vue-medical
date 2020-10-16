<!--
 * @Author: happy
 * @Date: 2020-10-09 18:13:39
 * @LastEditTime: 2020-10-10 18:51:27
 * @LastEditors: happy
 * @Description: 新增就诊记录
-->
<template>
    <div>
        <van-nav-bar
      title="新增就诊"
      left-text="返回"
      id="myhead"
      left-arrow
      @click-left="$router.back()"
    />
        <van-cell-group>
  <van-field v-model="value" label="就诊医院" placeholder="请输入就诊医院" />
  <van-field v-model="value2" label="就诊医生" placeholder="请输入就诊医生" />
  <van-cell title="选择就诊日期" :value="date" @click="show = true" />
<van-calendar v-model="show" @confirm="onConfirm" :min-date="minDate" />
<!-- <van-cell is-link title="选择药物" @click="show2 = true" /> -->
<!-- <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" /> -->
</van-cell-group>
<van-field
  v-model="message"
  rows="2"
  autosize
  label="记录就诊"
  type="textarea"
  maxlength="100"
  placeholder="请输入记录"
  show-word-limit
/>
<van-button type="primary" block @click="save">保存</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            minDate: new Date(2010, 0, 1),
            value:'',
            value2:'',
            date: '',
            show:false,
            show2: false,
            message:'',
            actions: [{ name: '药物1' }, { name: '药物2' }, { name: '药物3' }],
        }
    },
    methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      console.log((new Date(this.date)).getTime())
    },
    onSelect(item) {
      this.show2 = false;
      this.$toast(item.name);
    },
    save(){
        let patient =this.$store.state.currentPatientDetail.id;
        let obj = {
             patientId:patient, 
             doctorId:1, 
             time:(new Date(this.date)).getTime(), 
             hospital:1, 
             chronicler:1,
             desc:this.message
        }; 
    this.$axios//新增就诊记录
      .post("http://172.16.6.140:8080/interm2_war/record/visit",JSON.stringify(obj))
      .then((res) => {     
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
      this.$router.back()
    }
  },
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
  background-color: rgba(0, 199, 126);
}
</style>