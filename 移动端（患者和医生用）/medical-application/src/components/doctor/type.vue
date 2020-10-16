<!--
 * @Author: happy
 * @Date: 2020-09-24 17:45:55
 * @LastEditTime: 2020-09-25 13:53:49
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
       <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
  <template #content>
      <juzhao v-if="active === 0"/>
      <!-- <diagnosis v-if="active === 0"/>
      <check v-if="active === 1"/> -->
  </template>
</van-tree-select>
  </div>
</template>

<script>
import juzhao from '../../components/doctor/juzhao'
export default {
    components:{
        juzhao
    },
     data() {
    return {
      active: 0,
      items: [{ text: '局灶性' }, { text: '全面性' },
      { text: '发作类型不稳定' }, { text: '是否为癫痫性发作' }],
    };
  },
}
</script>

<style scoped>

</style>