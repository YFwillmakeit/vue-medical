<!--
 * @Author: happy
 * @Date: 2020-09-26 19:07:20
 * @LastEditTime: 2020-09-27 10:03:23
 * @LastEditors: happy
 * @Description: 就诊记录特殊治疗
-->
<template>
  <div id="test">
    <van-cell is-link title="是否手术" @click="show = true" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    <van-field
      readonly
      clickable
      name="picker"
      :value="value"
      label="甲强--激素治疗"
      label-width="120px"
      @click="showPicker = true"
    />
    <van-popup
      v-model="showPicker"
      position="bottom"
      round="true"
      :style="{ height: '30%' }"
      lock-scroll="true"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <van-field
      readonly
      clickable
      name="picker2"
      :value="value2"
      label="免疫治疗"
      label-width="120px"
      @click="showPicker2 = true"
    />
    <van-popup
      v-model="showPicker2"
      position="bottom"
      round="true"
      :style="{ height: '30%' }"
    >
      <van-picker
        show-toolbar
        :columns="columns2"
        @confirm="onConfirm2"
        @cancel="showPicker2 = false"
      />
    </van-popup>
    <van-field
      readonly
      clickable
      name="picker3"
      :value="value3"
      label="生酮饮食"
      label-width="120px"
      @click="showPicker3 = true"
    />
    <van-popup
      v-model="showPicker3"
      position="bottom"
      round="true"
      :style="{ height: '30%' }"
    >
      <van-picker
        show-toolbar
        :columns="columns3"
        @confirm="onConfirm3"
        @cancel="showPicker3 = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value2: "",
      value3: "",
      show: false,
      show2: false,
      show3: false,
      actions: [{ name: "是" }, { name: "否" }],
      columns: ["是", "否"],
      columns2: ["是", "否"],
      columns3: ["是", "否"],
      showPicker: false,
      showPicker2: false,
      showPicker3: false,
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
  },
};
</script>

<style scoped>
#test /deep/.van-ellipsis {
  color: black;
}
</style>