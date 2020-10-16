<template>
  <div>
    <van-form>
      <!-- 是否手术 -->
      <van-row class="money">
        <van-col span="11">是否手术</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.operation"
              :options="option1"
            />
          </van-dropdown-menu>
        </van-col>
        <van-field v-model="$store.state.contentList.operation_des" placeholder="请输入" />
      </van-row>
      <!-- 甲强==激素治疗 -->
      <van-row class="money">
        <van-col span="11">甲强==激素治疗</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.jqjs"
              :options="option2"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 免疫治疗 -->
      <van-row class="money">
        <van-col span="11">免疫治疗</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.immune"
              :options="option3"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 生酮饮食 -->
      <van-row class="money">
        <van-col span="11">生酮饮食</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.stys"
              :options="option3"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 其它 -->
      <van-row class="money">
        <van-col span="11">其它</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentList.other"
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
  name: "tszl",
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
      option4: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option5: [
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
