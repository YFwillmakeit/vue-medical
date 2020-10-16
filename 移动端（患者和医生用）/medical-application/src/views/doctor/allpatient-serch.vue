<!--
 * @Author: happy
 * @Date: 2020-09-23 16:39:05
 * @LastEditTime: 2020-10-11 14:25:29
 * @LastEditors: happy
 * @Description: 所有患者头部搜索
-->
<template>
  <div><van-sticky>
    <van-nav-bar
      title="所有患者"
      left-text="返回"
      id="myhead"
      left-arrow
      @click-left="$router.back()"
    />
    </van-sticky>
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div
      v-for="item in list"
      :key="item.name"
      :title="item.name"
      class="list"
      id="list"
      @click="patientdetail(item)"
    >
      <img src="../../assets/miao.jpg" alt="" class="headimg" />
      <p>
        姓名: {{ item.name }} | 年龄: {{ item.age }} | 性别: {{ item.sex
        }}<br />
        关联日期：2020-09-23<br />
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      list: [],
    };
  },
  methods: {
    onSearch() {
      this.$axios
      .post(this.$api.gkx.serch, {
        name: this.searchValue,
      })
      .then((response) => {
        console.log(response.data.data)
        this.list = response.data.data;
       
      })
      .catch(() => {});
    },
  },
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
  background-color: rgba(0, 199, 126);
}
.headimg{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 0 20px;
}
p{
  display: inline-block;
}
</style>