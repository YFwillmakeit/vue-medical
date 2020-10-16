<!--
 * @Author: happy
 * @Date: 2020-09-26 19:06:44
 * @LastEditTime: 2020-09-27 18:40:57
 * @LastEditors: happy
 * @Description: 就诊记录药物治疗
-->
<template>
  <div>
		<div class="contents" v-for="item in contentlist" :key="item.medicine_des">
			<div class="div1">
				<span>第{{item.weeks}}周</span>
				<span class="times">{{ new Date(item.time).getFullYear() }}.{{ new Date(item.time).getMonth()+1 }}.{{ new Date(item.time).getDate() }}</span>
			</div>
			<p>{{ item.medicine_des }}</p>
  </div>
	</div>
</template>

<script>
export default {
  name: "yaowu",
  data() {
    return {
      contentlist: [],
    };
  },
  methods: {
    onSelect(item) {
      this.show = false;
      if (item.name != "无药物治疗") {
        this.yaowu.push(item);
      }
    },
    onChange(value) {
      this.actions.value = value;
    },
    therapy() {
      this.$axios
        .post(
          this.$api.xzh.yaowu,
          JSON.stringify({
            patientId: 2,
          })
        ) //JSON.stringify({id: 1,})
        .then((data) => {
          console.log(data.data.data);
          this.contentlist = data.data.data;
          console.log(this.contentlist);
        });
    },
  },
  mounted() {
    // console.log("112233", this.$route.params);
    // this.auxiliary = this.$route.params.accessory;
    // console.log("1111122222", this.auxiliary);
    this.therapy();
  },
};
</script>

<style scoped>
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
.van-slider {
  margin-top: 30px;
}
.contents{
	height: 80px;
	border-bottom: 1px solid gray;
	padding: 0 0 0 30px;
}
.times{
	margin: 15px 0 12px 110px;
	display: inline-block;
}
</style>
