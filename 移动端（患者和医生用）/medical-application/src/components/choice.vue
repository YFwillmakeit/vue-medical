/* 记录不良反应 */
<template>
  <div class="choice">
    <van-nav-bar
      title="选择药物"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-field v-model="value" label="搜索" placeholder="请输入药名" />
    </van-cell-group>
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          clickable
          :key="item"
          :title="`${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox :name="item" ref="checkboxes" shape="square" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <van-button type="primary">提交</van-button>
  </div>
</template>

<script>
export default {
  name: "Choice",
  data() {
    return {
      list: [
        "无药物治疗",
        "德巴金缓释片",
        "丙戊酸钠片",
        "得理多",
        "奥卡西平口服液",
        "苯妥英钠/大仑丁(PHT）"
      ],
      result: [],
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style>
.van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar__text {
  color: white;
}
.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgb(0, 199, 126);
}
</style>
