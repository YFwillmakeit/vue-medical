
<template>
  <div>
    <div class="btnBox">
      <van-button
        type="primary"
        size="small"
        @click="goBack"
      >上一月</van-button>
      <van-button class='last' type="primary" size="small" @click="goNext">下一月</van-button>
    </div>
    <van-calendar color="#07c160"
      v-model="show"
      type="single"
      :formatter="Formatter"
      :poppable="false"
      :min-date="minDate"
      :max-date="maxDate"
      :show-subtitle="false"
      :show-confirm="false"
      @select='selectTime'
    />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      alltime:[],
      time:"",
      show: true,
      maxDate:new Date(),
      minDate:new Date(),
      mouth: 0,
      year: 0,
      days: 0,
      defaultDate: [],
      selectDate:'',
      list:[
        {
          aTime:"",
          people:"",
          dId:"",
        }
      ],
    };
  },
  created() {
    this.year = this.$utils.formatDate(new Date(), "yyyy");
    this.mouth = parseInt(this.$utils.formatDate(new Date(), "MM"));
    this.days = this.$utils.getMonthDay(this.year, this.mouth);
    var minmouth = this.$utils.formatDate(new Date(), "yyyy-MM") + "-01";
    var maxMouth =this.$utils.formatDate(new Date(), "yyyy-MM") + "-" + this.days;
    this.minDate = new Date(minmouth.replace(/-/g, "/"));
    this.maxDate = new Date(maxMouth.replace(/-/g, "/"));
    this.selectDate=new Date(this.$utils.formatDate(new Date(), "yyyy-MM").replace(/-/g, "/")).getTime().toString().substring(0,new Date(this.$utils.formatDate(new Date(), "yyyy-MM").replace(/-/g, "/")).getTime().toString().length-3)

    // 默认日期 根据后端返回
    // var a = new Date("2020/9/10");
    // var a1 = new Date("2020/9/17");
    // var a2 = new Date("2020/9/18");
    // var a3 = new Date("2020/9/22");
    // this.defaultDate = [a,a1,a2,a3];
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    add() {
      //添加
      this.$router.push({
        path: "/add",
      });
    },
    onConfirm(e) {
      console.log("点击确定", e);
    },
    goBack() {
      //返回上一个月
      if (this.mouth == 1) {
        return;
      }
      this.mouth = this.mouth - 1;
      console.log(parseInt(this.mouth))

      this.days = this.$utils.getMonthDay(this.year, this.mouth);
      this.minDate = new Date(
        this.minDate.setMonth(this.minDate.getMonth() - 1)
      );
 
      this.maxDate = new Date(this.year + "/" + this.mouth + "/" + this.days);
    },
    goNext() {
      //去下一个月
      if (this.mouth == 12) {
        return;
      }
      this.mouth = this.mouth + 1;
      this.days = this.$utils.getMonthDay(this.year, this.mouth);
      this.minDate = new Date(
        this.minDate.setMonth(this.minDate.getMonth() + 1)
      );
      this.maxDate=new Date(this.year + "/" + this.mouth + "/" + this.days);
     
    },
    Formatter(day) {
      console.log()
      for(let i=0;i<this.alltime.length;i++){
        let date = this.alltime[i].day;
        let month =this.alltime[i].month;
       let date1 = day.date.getDate();
      let month2 = day.date.getMonth() + 1;
        // console.log(date1)
        // console.log(month2)
        if(month == month2){  
          if(date==date1)   {
            day.bottomInfo = "有预约";
          } 
        }
        
      }
      // let date = day.date.getDate();
      // let month = day.date.getMonth() + 1;
      // if (month === this.month) {

        // if (date === 10 || date === 17 || date === 18 || date === 22) {
        //   day.bottomInfo = "有预约";
        // }
      // }
      return day;
    },
    selectTime(e){
     this.selectDate=e.getTime().toString().substring(0,e.getTime().toString().length-3)
     this.$emit("selectTime",{date:this.selectDate,time:this.alltime})
    }
  },

   mounted:function(){
    
      this.test="秋秋"
    let today=this.$utils.formatDate(new Date(), "yyyy-MM").replace(/-/g, "/")
    ///this.time是今天的时间
    this.time=new Date(today).getTime().toString().substring(0,new Date(today).getTime().toString().length-3)
    console.log(this.time)
    this.$axios     
        .post(this.$api.xwq.activitydata,{"doctorId":"3"})//JSON.stringify({id: 1,})
        .then((data) => {
          console.log(data.data.data)
          for(let i=0;i<data.data.data.length;i++){
            let month1 = (new Date(data.data.data[i].a_time)).getMonth() + 1;
            let day1 = (new Date(data.data.data[i].a_time)).getDate();
            let people1=data.data.data[i].people;
            let dName1=data.data.data[i].dName
           this.alltime.push({month:month1,day:day1,people:people1,dName:dName1})
          }
          console.log('获取活动成功了');
          console.log(this.alltime)
          this.$store.state.myday=this.alltime;
          
        })
        .catch((err) => {
          console.log(err);
          console.log('获取活动失败了');
        });

  
  },

  components: {},
};
</script>
<style  scoped>
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
/deep/ .van-nav-bar .van-icon {
  color: white;
}
div /deep/ .van-nav-bar__text {
  color: white;
}
div /deep/ .van-ellipsis {
  color: white;
}
.btnBox {
  width: 90%;
  margin:auto;
  /* display: flex; */
  align-items: center;
  position: absolute;
  top:50px;
  left:20px;
}
.last{
  float:right;
}
/deep/ .van-calendar__day{
  height:50px;
}

</style>