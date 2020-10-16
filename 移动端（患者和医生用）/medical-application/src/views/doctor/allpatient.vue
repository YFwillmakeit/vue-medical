<!--
 * @Author: happy
 * @Date: 2020-09-23 08:49:15
 * @LastEditTime: 2020-10-01 17:41:42
 * @LastEditors: happy
 * @Description: 所有患者
-->
<template>
  <div>
    <van-sticky>
      <van-nav-bar
        title="所有患者"
        id="myhead"
        left-text="返回"
        left-arrow
        @click-left="$router.replace('/patient')"
        right-text="搜索"
        @click-right="$router.push('/allpatient-serch')"
      />
    </van-sticky>
    <van-tabs v-model="activeName">
      <van-tab title="全部" name="allpatientlist" replace>
        <allpatientlist />
      </van-tab>
      <van-tab title="分组" name="group">
        <group />
        <van-button id="add_new_group" type="primary" @click="$router.push('/newgroup')">新增分组</van-button>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import group from "../../components/doctor/group";
import allpatientlist from "../../components/doctor/allpatientlist";
export default {
  data() {
    return {
      activeName: 'allpatientlist'
    }
  },
  components: {
    allpatientlist,
    group,
  },
  methods: {
    onClickLeft() {

    },
    onClickRight() {

    },
    addNewGroup() {

    }
  },
  mounted() {
    this.activeName = this.$route.params.activeName;
  }
};
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
    background-color: rgba(0, 199, 126,1);
  }
  .header {
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
  }
  .header:first-child {
    border-right: solid;
  }
  #add_new_group {
    margin-top: 2rem;
    margin-left: 9rem;
     width: 100px;
    height: 50px;
    border-radius:10px;
  }
</style>