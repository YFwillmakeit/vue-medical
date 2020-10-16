<!--
 * @Author: happy
 * @Date: 2020-09-23 14:20:37
 * @LastEditTime: 2020-09-23 21:37:50
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div id="myChart" class="chart" :style="{width: '100%', height: '240px'}"></div>
</template>
 
<script>
import echarts from 'echarts'
export default {
  name: 'xwPassengerFlow',
  data() {
    return {
      xAxisData: ['0-4次', '5-9次', '10-14次', '14次+'], // x轴数据，可根据需求
      yAxisData1: [3, 1, 5, 2, 4, 2, 1], // 数据1
    }
  },
  mounted() {
    this.loadLine();
  },
  methods: {
    loadLine() {
      let option = {
        title: {
          text: '发作频次的人数统计'
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
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xAxisData // x轴数据
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '发作人数',
            type: 'line',
            stack: '总量',
            data: this.yAxisData1 // y轴数据1
          }
        ]
      }
      this.myChartOne = echarts.init(document.getElementById('myChart'));
      this.myChartOne.setOption(option)
    },
  }
}
</script>
<style scoped>

</style>