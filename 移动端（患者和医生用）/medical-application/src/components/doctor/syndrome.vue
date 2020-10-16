<!--
 * @Author: happy
 * @Date: 2020-09-24 18:23:23
 * @LastEditTime: 2020-09-24 18:48:12
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
       <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
  <template #content>
      <newchild v-if="active === 0"/>
  </template>
</van-tree-select>
  </div>
</template>

<script>
import newchild from '../../components/doctor/newchild'
export default {
    components:{
        newchild
    },
     data() {
    return {
      active: 0,
      items: [{ text: '新生期' }, { text: '婴幼儿期' },
      { text: '儿童期' }, { text: '青年期-成年' },{ text: '非年龄相关' }, { text: '外科相关' }],
    };
  },
}
</script>

<style scoped>
section div{
    height: 700px;
}
</style>