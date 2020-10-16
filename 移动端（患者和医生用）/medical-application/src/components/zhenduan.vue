<template>
  <div id="app">
    <van-row class="money">
      <van-col span="11">是否诊断</van-col>
      <van-col span="6" offset="10">
        <van-col class="yess">{{contentlist.diagnosis="1"?"否":"是"}}</van-col>
      </van-col>
			<div>{{contentlist.diagnosis_des}}</div>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "zhenduan",
  data() {
    return {
			contentlist:[],
		};
  },
  methods: {
    diagnosiscontent() {
      this.$router.push({ path: "/diagnosis2" });
    },
  },
  mounted() {
    let str = JSON.stringify({ patientId: 2 });
    this.$axios
      .post(
       this.$api.xzh.zhenduan,
        JSON.stringify({
          patientId: 2,
        })
      ) //JSON.stringify({id: 1,})
      .then((data) => {
        this.contentlist = data.data.data[0];
        this.listcontent = new Date(this.contentlist.time);
        // 年
        this.year = this.listcontent.getFullYear();
        // 月
        this.month = this.listcontent.getMonth() + 1;
        // 日
        this.day = this.listcontent.getDate();
        // console.log(data.data.data[0]);
      });
  },
};
</script>

<style scoped>
.money {
  padding-left: 16px;
  line-height: 48px;
  border: none;
  color: rgb(100, 101, 102);
  font-size: 14px;
}

.money /deep/ .van-dropdown-menu__bar {
  box-shadow: unset !important;
  background-color: none !important;
}
.money /deep/ .van-dropdown-menu {
  /* text-align: left; */
  float: left;
  padding-left: 68px;
}
.contentlist {
  padding: 0px;
}
.van-row {
  border-bottom: 1px solid rgba(10, 10, 10, 0.4);
}
.van-col {
  margin: 0;
}
.yess {
  padding-left: 150px;
}
</style>
