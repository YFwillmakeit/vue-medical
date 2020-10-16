<!--  -->
<template>
  <div>
    <van-sticky>
      <van-nav-bar
        title="参与探讨"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <div v-for="item in list" :key="item">
      <div class="caption">
        <div class="meettitle">{{ list[0].theme }}</div>
        <span class="meetdata1">会议持续时间：{{ list[0].durations }}</span>
        <span class="meetdata2">会议时间：{{ list[0].starttime }}</span>
      </div>

      <!-- 表格内容开始 -->
      <van-cell-group>
        <van-cell title="收费" v-model="list[0].money" />
        <!-- <van-cell title="参加人姓名" v-model="list[0].dname" /> -->
        <p class="paymoney">选择支付方式</p>

        <van-checkbox-group v-model="result">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in checkbox"
              clickable
              :key="item"
              :title="`${item}`"
              @click="toggle(index)"
            >
              <template #right-icon>
                <van-checkbox :name="item" ref="checkboxes" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </van-cell-group>
    </div>
    <!-- 表格内容结束 -->

    <!-- 确认开始 -->
    <van-row>
      <van-col span="12">
        <van-button type="default" class="onebutton"
          >{{ list[0].money }}/免费</van-button
        >
      </van-col>
      <van-col span="12">
        <van-button type="primary" @click="sure(list[0])">确认</van-button>
      </van-col>
    </van-row>
    <!-- 确认参与结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: ["人民币支付"],
      result: [],
      myid: "",
      restMoney: "",
      list: [
        {
          theme: "",
          starttime: "",
          money: "",
          durations: "",
          dname: "",
        },
      ],
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push('case-study');
    },
    toggle(index) {
      console.log(index);
      this.$refs.checkboxes[index].toggle();
    },
    sure: function (id) {
      // 接口
      this.$axios
        .post(
          this.$api.xwq.join,
          JSON.stringify({ joinDoctorId: "5", discussId: this.myid })
        )
        .then((res) => {
          console.log(this.myid);
          console.log(res);
          // this.list=res.data.data
          console.log("我报名参加了");
          this.$router.push({
            name: "studysure",
            params: {
              id: id,
            },
          });
        })
        .catch((error) => {
          console.log(error);
          console.log("我参加失败了");
        });
     
    },
  },

  computed: {},
  mounted: function () {
    console.log(this.$router.history.current.params);
    let item = this.$router.history.current.params;
    this.$set(this.list, 0, item.id);
    this.myid = item.id.id;
    console.log(item.id.id);

    // setTimeout(()=>{
    // for(let i=0;i<this.list.length;i++){
    //   let time=new Date(this.list[i].starttime);
    //   let year=time.getFullYear();
    //   let month=time.getMonth()+1;
    //   let day=time.getDate();
    //   let str=year+'年'+month+'月'+day+'日';
    //   this.list[i].starttime=str
    // }
    // },200);

    //自己名字
    // this.$axios
    //         .post("http://172.16.6.115:8080/interm/doctor/findById",JSON.stringify({id:6}))//JSON.stringify({id: 1,})
    //         .then((data) => {
    //           this.list[0].dname=data.data.data.dname
    //           console.log('获取到参与人姓名了');
    //           console.log(this.list[0].dname)

    //         })
    //         .catch((err) => {
    //           console.log(err);
    //           console.log('获取姓名失败了');
    //         });
    //  this.$set(this.list[0],'myname',data.data.data.dname)
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
div /deep/ .van-nav-bar .van-icon {
  color: white;
}
div /deep/ .van-nav-bar__text {
  color: white;
}
div /deep/ .van-ellipsis {
  color: white;
}
.van-button {
  width: 50%;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
}
.onebutton {
  left: 0;
}
.caption {
  padding: 10px 10px 5px 10px;
  color: rgb(150, 151, 153);
  border-bottom: 15px solid rgb(242, 242, 242);
}
.van-cell-group {
  margin: 20px 0;
  /* padding:30px; */
  color: rgb(150, 151, 153);
}
.van-cell-group .van-cell {
  margin-top: 15px;
  padding-left: 16px;
  color: rgb(150, 151, 153);
  border-bottom: 2px solid rgb(242, 242, 242);
  padding-bottom: 7px;
  padding-right: 10px;
}
.meetdata1,
.meetdata2 {
  font-size: 14px;
}
.meettitle {
  margin-bottom: 20px;
}
.meetdata2 {
  margin-left: 50px;
  text-align: right;
}
.paymoney {
  background-color: rgb(242, 242, 242);
  padding: 16px;
}
</style>