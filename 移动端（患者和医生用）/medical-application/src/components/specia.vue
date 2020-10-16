<!--
 * @Author: happy
 * @Date: 2020-09-26 19:07:20
 * @LastEditTime: 2020-09-27 10:03:23
 * @LastEditors: happy
 * @Description: 就诊记录特殊治疗
-->
<template>
  <div id="test">
    <van-row class="money">
      <van-col span="11">是否手术</van-col>
      <van-col span="6" offset="10">
        <van-col class="yess">{{ contentlist.operation }}</van-col>
      </van-col>
    </van-row>
    <van-row class="money">
      <van-col span="11">甲强==激素治疗</van-col>
      <van-col span="6" offset="10">
        <van-col class="yess">{{
          (contentlist.jqjs)
        }}</van-col>
      </van-col>
    </van-row>
    <van-row class="money">
      <van-col span="11">免疫治疗</van-col>
      <van-col span="6" offset="10">
        <van-col class="yess">{{
          (contentlist.immune)
        }}</van-col>
      </van-col>
    </van-row>
    <van-row class="money">
      <van-col span="11">生酮饮食</van-col>
      <van-col span="6" offset="10">
        <van-col class="yess">{{
          (contentlist.stys)
        }}</van-col>
      </van-col>
    </van-row>
    <van-row class="money moneys">
      <van-col span="11">其它</van-col>
      <van-col span="6" offset="10">
        <van-col class="yess">{{
          (contentlist.other)
        }}</van-col>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "specia",
  data() {
    return {
      contentlist: {},
    };
  },
  methods: {
    onSelect(item) {
      this.show = false;
      if (item.name == "是") {
        this.$router.push({ path: "/shoushu" });
      }
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onConfirm2(value) {
      this.value2 = value;
      this.showPicker2 = false;
    },
    onConfirm3(value) {
      this.value3 = value;
      this.showPicker3 = false;
    },
    treatment() {
      this.$axios
        .post(
          this.$api.xzh.treatment,
          JSON.stringify({
            patientId: 2,
          })
        )
        .then((data) => {
          (this.contentlist = data.data.data), console.log(data);
        });
    },
  },
  mounted() {
    this.treatment();
  },
};
</script>

<style scoped>
#test /deep/.van-ellipsis {
  color: black;
}
.van-col > div{
	display: inline-block;
}
.money{
	position: relative;
	margin-top: 10px;
	margin-left: 30px;
}
.yess{
	position: absolute;
	top: 0;
	right: 20px;

}
#test{
	border-bottom: 1px solid gray;
}
.moneys{
	padding-bottom: 20px;
}
</style>
