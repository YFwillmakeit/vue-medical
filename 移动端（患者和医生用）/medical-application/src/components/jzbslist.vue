<template>
  <div>
    <van-form>
      <!-- 家族病 -->
      <van-row class="money">
        <van-col span="8">家族病</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.Familialdis"
              :options="option1"
            />
          </van-dropdown-menu>
        </van-col>
        <van-field v-model="$store.state.contentlist2.Familialdis_name" placeholder="请输入" />
      </van-row>
      <!-- 是否结婚 -->
      <van-row class="money">
        <van-col span="8">是否结婚</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.marry"
              :options="option2"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 是否生育 -->
      <van-row class="money">
        <van-col span="8">是否生育</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.birth"
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
  name: "jzjllist",
  data() {
    return {
      option1: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option2: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option3: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
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
}
.money /deep/ .van-dropdown-menu {
  /* text-align: left; */
  float: left;
  padding-left: 30px;
}
.contentlist {
  padding: 0px;
}
.van-row {
  border-bottom: 1px solid rgba(10, 10, 10, 0.4);
}
</style>
