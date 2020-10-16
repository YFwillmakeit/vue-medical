<!--
 * @Author: happy
 * @Date: 2020-09-24 13:32:37
 * @LastEditTime: 2020-09-25 16:20:33
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
    <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
    <template #content>
        <diagnosis v-if="active === 0"/>
        <check v-if="active === 1"/>
        <fazuo v-if="active === 2"/>
        <yaowu v-if="active === 3"/>
        <special v-if="active === 4"/>
    </template>
</van-tree-select>
  </div>
</template>
<script>
import diagnosis from '../../components/doctor/diagnosis';
import check from '../../components/doctor/check';
import fazuo from '../../components/doctor/fazuopinglv';
import yaowu from '../../components/doctor/yaowu';
import special from '../../components/doctor/special'
export default {
    components:{
        diagnosis,
        check,
        fazuo,
        yaowu,
        special
    },
     data() {
    return {
      active: 0,
      items: [{ text: '诊断' }, { text: '辅助检查' },
      { text: '发作频率' }, { text: '药物治疗' },{ text: '特殊治疗' }],
    };
  },
      
};
</script>

<style scoped>

</style>