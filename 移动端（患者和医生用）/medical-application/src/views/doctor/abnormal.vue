<!--
 * @Author: happy
 * @Date: 2020-09-25 13:15:32
 * @LastEditTime: 2020-09-25 14:15:49
 * @LastEditors: happy
 * @Description: 脑电图异常
-->
<template>
  <div>
      <van-sticky>
      <van-nav-bar
      id="myhead"
      title="脑电图异常选项"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </van-sticky>
            <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
  <template #content>
      <seizure v-if="active === 0"/>
      <bg v-if="active === 1"/>
      <other v-if="active === 2"/>
  </template>
</van-tree-select>
  </div>
</template>

<script>
import seizure from '../../components/doctor/seizureabnormal';
import bg from '../../components/doctor/bg';
import other from '../../components/doctor/others'
export default {
data() {
    return {
      active: 0,
      items: [{ text: '发作异常' }, { text: '背景活动异常' },
      { text: '其他' }],
    };
  },
  components:{
      seizure,
      bg,
      other
  },
   methods: {
        onClickLeft() {
      this.$router.go(-1);
    },
    },
}
</script>

<style scoped>
#myhead /deep/.van-nav-bar .van-icon {
  color: white;
}
#myhead /deep/.van-nav-bar__text {
  color: white;
}
#myhead /deep/.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
</style>