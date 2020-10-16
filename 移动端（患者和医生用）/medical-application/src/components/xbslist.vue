<template>
  <div class="list">
    <van-tree-select
      height="90vw"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <zdnr v-if="active === 0"></zdnr>
				<fzjc v-if="active === 1"></fzjc>
				<fzpc v-if="active === 2"></fzpc>
				<ywzl v-if="active === 3"></ywzl>
				<tszl v-if="active === 4"></tszl>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import zdnr from "./zdnr.vue";
import fzjc from "./fzjc.vue";
import fzpc from "./fzpc.vue";
import ywzl from "./ywzl.vue";
import tszl from "./tszl.vue";

export default {
  name: "xbslist",
  data() {
    return {
      activeKey: 0,
      active: 0,
      items: [
        { text: "诊疗" },
        { text: "辅助检查" },
        { text: "发作频次" },
        { text: "药物治疗" },
        { text: "特殊治疗" },
      ],
    };
  },
  components: {
    zdnr,
		fzjc,
		fzpc,
		ywzl,
		tszl
  },
};
</script>

<style scoped>
.van-tree-select {
  width: 355px;
}
.van-tree-select__content {
  width: 320px;
}
.van-sidebar-item {
  padding-left: 18px;
}
.list{
	padding-top: 1px;
}
</style>
