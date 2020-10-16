<template>
  <div>
    <van-form >
      <!-- 诊断内容描述 -->
      <van-row class="money">
        <van-col span="11">诊断内容</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.diagnosis"
              :options="option"
            />
          </van-dropdown-menu>
        </van-col>
          <van-field v-model="$store.state.contentList.diagnosis_des" placeholder="请输入" />
      </van-row>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "jzjllist",
  data() {
    return {
      option: [
        { text: "是", value: 1 },
        { text: "否", value: 0 },
        { text: "不详", value: 2 },
      ]
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 15) {
          this.finished = true;
        }
      }, 1000);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
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
</style>
