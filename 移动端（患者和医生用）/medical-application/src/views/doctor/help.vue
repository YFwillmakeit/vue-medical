<!--
 * @Author: happy
 * @Date: 2020-09-26 19:05:48
 * @LastEditTime: 2020-09-27 09:20:29
 * @LastEditors: happy
 * @Description: 就诊记录里辅助检查
-->
<template>
  <div>
    <van-cell is-link title="脑电图" @click="show = true" />
<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
 <van-cell is-link title="核磁/CT" @click="show2 = true" />
<van-action-sheet v-model="show2" :actions="actions2" @select="onSelect2" />
   <van-cell is-link title="基因" @click="show3 = true" />
<van-action-sheet v-model="show3" :actions="actions3" @select="onSelect3" />
  </div>
</template>

<script>
export default {
   data() {
    return {
      show: false,
      show2:false,
      show3:false,
      actions: [{ name: '正常' }, { name: '界限性' }, { name: '异常' }],
      actions2: [{ name: '正常' }, { name: '异常' }],
      actions3: [{ name: '阴性' }, { name: '阳性' }],
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      if(item.name=='异常'){
        this.$router.push({ path:'/abnormal2'})
      }
    },
    onSelect2(item) {
      this.show2 = false;
      if(item.name=='异常'){
        this.$router.push({ path:'/CT'})
      }
    },
    onSelect3(item) {
      this.show3 = false;
      console.log(item.name)
    },
  },
}
</script>

<style scoped>

</style>