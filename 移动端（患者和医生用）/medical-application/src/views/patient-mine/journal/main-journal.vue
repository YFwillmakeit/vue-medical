/* 显示写过的日志 */
<template>
  <div id="mainJournal">
    <van-nav-bar
      id="only"
      title="病情日志"
      left-text="返回"
      right-text="记录日志"
      left-arrow
      @click-left="onClickLeft()"
      @click-right="log()"
    />
    <table>
      <tbody>
        <tr
          class="tr"
          v-for="item in allJournal"
          v-bind:key="item.id"
          @click="detJour(item)"
        >
          <p>时间：{{ item.recordTime }}</p>
          <div class="van-ellipsis">{{ item.des }}</div>
          <div>{{ item.purl }}</div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MainJournal",
  data() {
    return {
      // vuex的数据
      allJournal: [],
      // 已经有的日志（时间、内容）
      vuexAllJournal: this.$store.state.journal
    };
  },
  mounted() {
    this.getJournal();
  },
  methods: {
    /* ===========请求数据=========== */
    // 获取日志
    getJournal() {
      this.$axios
        .post(
          this.$api.patient.allJour,
          JSON.stringify({ patientId: this.$store.state.patient.id })
        )
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            this.$store.state.journal = result.data;
            this.allJournal = result.data;
            console.log(this.allJournal);
            // console.log(result.data);
          } else {
            console.log(result.message);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
          // this.$message.error('服务器请求失败')
        });
    },
    /* ===========请求结束=========== */
    onClickLeft() {
      this.$router.push("/mine");
    },
    log() {
      this.$router.push("/mine/journal/newJournal");
    },
    // 跳转到详细日志
    detJour(value) {
      this.$router.push({
        path: "/mine/journal/detJour",
        name: "DetailedJour",
        // 要传过去的数据
        params: {
          detJour: value
        }
      });
    }
  }
};
</script>

<style scoped>
#only > .van-ellipsis {
  color: rgb(255, 255, 255);
}
.van-ellipsis {
  color: rgb(0, 0, 0);
}
.tr > p {
  margin-left: 10px;
}
.tr > .van-ellipsis {
  margin: 15px;
}
</style>
