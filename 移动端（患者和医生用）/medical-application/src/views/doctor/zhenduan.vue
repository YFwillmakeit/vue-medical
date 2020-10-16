<!--
 * @Author: happy
 * @Date: 2020-09-26 20:15:21
 * @LastEditTime: 2020-09-26 20:16:46
 * @LastEditors: happy
 * @Description: 就诊记录诊断
-->
<template>
  <div id="app">
<van-field
  v-model="sms"
  center
  clearable
  label="诊断"
  readonly
>
  <template #button>
    <van-switch v-model="checked" />
  </template>
</van-field>

    <van-form @submit="onSubmit">
      <!-- 诊断内容描述 -->
      <van-row class="money">
        <van-col span="11">诊断内容</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item v-model="valuemoney1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
        <van-field
          class="contentlist"
          v-model="money"
          name="诊断内容描述"
          placeholder="诊断内容描述"
        />
      </van-row>
    </van-form>
  </div>
</template>
<script>
export default {
data() {
    return {
      checked: false,
      valuemoney1: 2,
      option1: [
        { text: "是", value: 0 },
        { text: "否", value: 1 },
        { text: "不详", value: 2 },
      ],
    };
  }, 
  methods: {
    diagnosiscontent(){
       this.$router.push({ path:'/diagnosis2'})
    }
  },
};
</script>

<style scoped>

</style>