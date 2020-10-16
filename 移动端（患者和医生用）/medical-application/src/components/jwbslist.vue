<template>
  <div>
    <van-form>
      <!-- 过敏药物名称 -->
      <van-row class="money">
        <van-col span="8">是否有药物过敏</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.allergy"
              :options="option1"
            />
          </van-dropdown-menu>
        </van-col>
        <van-field v-model="$store.state.contentlist2.allergy_name" placeholder="请输入" />
      </van-row>
      <!-- 是否有外伤 -->
      <van-row class="money">
        <van-col span="8">是否有外伤史</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.trauma"
              :options="option2"
            />
          </van-dropdown-menu>
        </van-col>
        <van-field v-model="$store.state.contentlist2.trauma_des" placeholder="请输入" />
      </van-row>
      <!-- 慢病史 -->
      <van-row class="money">
        <van-col span="8">慢病史</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.Chronic"
              :options="option3"
            />
          </van-dropdown-menu>
        </van-col>
        <van-field v-model="$store.state.contentlist2.Chronic_name" placeholder="请输入" />
      </van-row>
      <!-- 产伤 -->
      <van-row class="money">
        <van-col span="8">产伤</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.injury"
              :options="option5"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 感染 -->
      <van-row class="money">
        <van-col span="8">感染</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu direction="up" active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.infected"
              :options="option6"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 出血 -->
      <van-row class="money">
        <van-col span="8">出血</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu direction="up" active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.hemorrhage"
              :options="option7"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 是否高热惊厥史 -->
      <van-row class="money">
        <van-col span="8">是否高热惊厥史</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu direction="up" active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="$store.state.contentlist2.convulsion"
              :options="option8"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!--  其它 -->
      <div></div>
      <van-row class="money">
        <van-col span="8"></van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left" direction="up">
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
      option5: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option6: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option7: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
      option8: [
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
