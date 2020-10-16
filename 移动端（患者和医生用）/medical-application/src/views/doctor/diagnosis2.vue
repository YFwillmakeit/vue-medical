<!--
 * @Author: happy
 * @Date: 2020-09-24 16:50:34
 * @LastEditTime: 2020-10-01 17:42:01
 * @LastEditors: happy
 * @Description: 诊断
-->
<template>
  <div>
      <van-nav-bar
      id="myhead"
      title="诊断"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <section>
        <van-tabs v-model="active" animated>
  <van-tab title='发作类型'>
<type />
  </van-tab>
  <van-tab title='综合症'>
<syndrome />
  </van-tab>
</van-tabs>
    </section>
  </div>
</template>

<script>
import syndrome from '../../components/doctor/syndrome'
import type from '../../components/doctor/type'
export default {
  components:{
    type,
    syndrome
  },
  data() {
      return {
        active: ''
      }
  },
  methods: {
    onClickLeft() {
      this.$router.replace(`/patientinfo/${'nowillness'}`);
    },
    onClickRight(){
      this.$router.push({ path:'/patientinfo2'})
    }
  }
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