/* 账户信息的余额明细 */
<template>
  <div class="detailed">
    <van-nav-bar
      title="余额明细"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <van-cell-group>
      <van-cell
        v-for="detail in detail"
        v-bind:key="detail.id"
        v-bind:title="detail.type"
        v-bind:value="detail.money"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Detailed",
  data() {
    return {
      detail: [
        {
          type: "诊疗活动报名",
          money: 200
        }
      ]
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    /* ===========请求数据======== */
    getDetail() {
      this.$axios
        .post(
          this.$api.patient.outDetail,
          JSON.stringify({ phone: this.$store.state.patient.phone })
        )
        .then(response => {
          console.log(this.$store.state.patient.phone);
          var result = response.data;
          if (result.code === "200") {
            console.log(result.data);
            this.detail = [];
            for (var i = 0; i < result.data.length; i++) {
              this.detail.push({
                type: result.data[i].NAME,
                money: result.data[i].money
              });
              /* this.detail[i].type = result.data[i].NAME;
              this.detail[i].money = result.data[i].money; */
            }
          } else {
            console.log(result.msg);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },
    /* ===========请求结束======== */
    onClickLeft() {
      this.$router.push("/mine/account");
    }
  }
};
</script>

<style></style>
