<template>
  <div>
    <van-form>
      <!-- 脑电图 -->
      <van-row class="money">
        <van-col span="11">脑电图</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.eeg"
              :options="option1"
            />
          </van-dropdown-menu>
        </van-col>
        <van-field v-model="$store.state.contentList.eeg_des" placeholder="请输入" />
      </van-row>
      <!-- 核磁/CT -->
      <van-row class="money">
        <van-col span="11">核磁/CT</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.ct"
              :options="option2"
            />
          </van-dropdown-menu>
        </van-col>
        <van-field v-model="$store.state.contentList.ct_des" placeholder="请输入" />
      </van-row>
      <!-- 基因 -->
      <van-row class="money">
        <van-col span="11">基因</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.gene"
              :options="option3"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "fzjc",
  data() {
    return {
      option1: [
        { text: "异常", value: 0 },
        { text: "正常", value: 1 },
      ],
      option2: [
        { text: "异常", value: 0 },
        { text: "正常", value: 1 },
      ],
      option3: [
        { text: "阴性", value: 0 },
        { text: "阳性", value: 1 },
      ],
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
    content() {
      this.$router.push("/about");
      console.log("About");
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
  padding-left: 12px;
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
