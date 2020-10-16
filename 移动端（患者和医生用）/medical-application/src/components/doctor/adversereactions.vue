<!--
 * @Author: happy
 * @Date: 2020-09-24 10:45:49
 * @LastEditTime: 2020-09-24 11:19:39
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
    <div id="reactChart" class="chart" :style="{width: '100%', height: '240px'}"></div>
    <div v-for="index in 6" :key="index" class="list">
        <hr>
        <p>2020年9月24日11:17:22|患者共有3中不良反应</p>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted() {
    let reactChart = echarts.init(document.getElementById('reactChart'));
    let option = {
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
      },
      // x轴数据
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['9-23', '9-24', '9-25', '9-26', '9-27', '9-28', '9-29']
      },
      // y轴数据
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '疲劳乏力',
          type: 'line',
          stack: '总量',
          data: [1, 1, 0, 1, 1, 0, 1]
        },
        {
          name: '头晕目眩',
          type: 'line',
          stack: '总量',
          data: [0, 1, 0, 1, 1, 0, 1]
        },
        {
          name: '阵痛',
          type: 'line',
          stack: '总量',
          data: [0, 1, 0, 1, 0, 0, 1]
        },
        {
          name: '皮肤过敏',
          type: 'line',
          stack: '总量',
          data: [0, 1, 1, 1, 1, 0, 1]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [0, 1, 0, 1, 1, 0, 1]
        }
      ]
    };
    reactChart.setOption(option);
  }
};
</script>

<style scoped>
.list{
    margin: 20px 10px;
}
</style>