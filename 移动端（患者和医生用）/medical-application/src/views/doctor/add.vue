<!--  -->
<template>
  <div>
    <van-sticky>
    <van-nav-bar
      id="myheard"
      title="添加诊疗活动"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </van-sticky>
    <van-form >
      <!-- 选择时间 -->
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="value"
        label="选择时间"
        placeholder="选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="datetime"
          @confirm="onConfirm"
          @cancel="showPicker = false"
          :min-date='minDate'
          :max-date='maxDate'
        />
      </van-popup>

      <!-- 选择时间结束 -->

<!-- 报名开始时间 -->
<van-field
  readonly
  clickable
  name="calendar"
  :value="value11"
  label="报名开始时间"
  placeholder="报名开始时间"
  @click="showCalendar = true"
/>
<van-calendar v-model="showCalendar" @confirm="stateConfirm" />

<!-- 报名结束时间 -->
<van-field
  readonly
  clickable
  name="calendar"
  :value="value22"
  label="报名结束时间"
  placeholder="报名结束时间"
  @click="timeend = true"
/>
<van-calendar v-model="timeend" @confirm="endConfirm" />









      <!-- 选择地点 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value2.name"
        label="诊疗地点"
        placeholder="请选择地点"
        @click="showPicker2 = true"
      />
      <van-popup v-model="showPicker2" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          value-key='name'
          @confirm="place"
          @cancel="showPicker2 = false"
        />
      </van-popup>
      <!-- 诊疗人数 -->
      <van-field
        v-model="people"
        name="诊疗人数"
        label="诊疗人数"
        placeholder="请输入诊疗人数"
      />
      <!-- 提醒人数 -->
      <!-- <div class="remind">
        <span>提醒人群</span>
        <span class="remindpeople" @click="remindpeople">请选择提醒人群</span>
      </div> -->
      <!-- 费用 -->
      <van-field
        v-model="money"
        name="费用"
        label="费用"
        placeholder="请输入诊疗费用"
      />
    </van-form>
    <!-- 这里是确认添加 -->
    <van-row>
      <van-col span="12">
        <van-button type="primary" @click="yesadd">确认添加</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      remind:{
      'doctorId':'',
      'aTime':'',
      'bTime':'',    
      'eTime':'',
      'dId':'',
      'people':'',
      'money':'',
      'tId':'1'
      },
      value11: '',
       value22:"",
      showCalendar: false,  //日历时间设置
      timeend:false,    //日历结束
      people:"",
      money:"",
      value: "",
      showPicker: false,
      value2: "",
      columns: [
        // {
        //   title:"门诊1号楼",
        //   id:1
        // },
        // {
        //   title:'门诊2号楼',
        //   id:2
        // }
      ],
      showPicker2: false,
      minDate:new Date(2020, 9, 10),
      maxDate:new Date(2020, 11, 30),
    };
  },
  created(){
    console.log(1)
  },
 mounted:function(){
   this.$axios
        .post(this.$api.xwq.add1,JSON.stringify({"doctorId":"3"}))//JSON.stringify({id: 1,})
        .then((data) => {
          this.columns=data.data.data
          console.log('获取到医院信息了');
          console.log(this.columns)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取失败了');
        });
 
  },
  methods: {

 stateConfirm(date) {
      this.value11 = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
      this.showCalendar = false;
      
    },  //选择日历开始
    
     endConfirm(date) {
      this.value22 =  `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
      this.timeend = false;
    },  //结束日历开始

    onClickLeft() {
      this.$router.go(-1);
    },
    onConfirm(time) {
      this.value = this.$utils.formatDate(time, "yyyy-MM-dd hh:mm:ss");
      // this.value = time;
      this.showPicker = false;
    },
    place(value2) {  //医院
      this.value2 = value2;
      this.showPicker2 = false;
    },
  
    yesadd:function(){    //点击提交的时候
    console.log(this.value)
    console.log(this.value11)
    console.log(this.value22)
    let timevalue=new Date(this.value).getTime()

    let timevaluestate=new Date().getTime(this.value11)
    let timevalueend=new Date().getTime(this.value22)
console.log(timevalue)
console.log(timevaluestate)
console.log(timevaluestate)

    this.remind={
      'doctorId':'3',
      'aTime':timevalue,
      'bTime':timevaluestate,    
      'eTime':timevalueend,
      'dId':this.value2.id,
      'people':this.people,
      'money':this.money,
      'tId':'1'
    };
      console.log("要传给后台的数据")
      console.log(this.remind)
         //提交诊疗活动  接口已测成功
      this.$axios
        .post(this.$api.xwq.add2,this.remind)//JSON.stringify({id: 1,})
        .then((data) => {
          if(data.data.code=='200' || data.msg=='添加成功'){
            this.$toast.success('添加成功');
             this.$router.push({
        path:'/activity'
      })
          }else{
            this.$toast.fail('添加失败');
          }
          console.log('提交成功');
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取失败了');
        });

    console.log(this.$router.history.current.params.data.data.data)

     
     
    },

    //选择提醒人群
      remindpeople: function () {
      this.$store.dispatch('changeremind',this.remind)
    // console.log('呜呜呜呜')
    // console.log(this.$store.state.remind)
        // console.log(this.remind)
      this.$router.push({
        path: "/remindpeople",
        params:{
           remind:this.remind
        }
      });
    },
  },

  

  components: {},
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
/deep/ .van-nav-bar .van-icon {
  color: white;
}
#myheard /deep/ .van-nav-bar__text {
  color: white;
}
#myheard /deep/ .van-ellipsis {
  color: white;
}
.van-button {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
}
.van-cell {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgb(100,101,102);
  padding:5px 20px;
}
.remind{
  padding: 15px 20px;
  color: rgb(100,101,102);
  font-size: 14px;
  border-bottom: 1px solid rgb(100,101,102);

}
.remindpeople{
  padding-left: 43px;
  color: rgb(150,151,153);

}
</style>