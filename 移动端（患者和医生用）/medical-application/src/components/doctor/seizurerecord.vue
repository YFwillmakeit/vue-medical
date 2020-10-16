<!--
 * @Author: happy
 * @Date: 2020-09-24 10:31:50
 * @LastEditTime: 2020-09-24 10:40:56
 * @LastEditors: happy
 * @Description: 
-->
<template>
  <div>
    <div id="myChart" class="chart" :style="{width: '100%', height: '240px'}"></div>
    <div v-for="index in 6" :key="index" class="list">
      <hr>
      <p>2020年9月24日10:38:24 | 患者发作5次</p>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        xAxisData: ['9-23', '9-24', '9-25', '9-26', '9-27', '9-28', '9-29'], // x轴数据，可根据需求
        yAxisData1: [2, 5, 8, 2, 5, 3, 0], // 数据1
      }
    },
    mounted() {
      this.myChartOne = echarts.init(document.getElementById('myChart'));
      let option = {
        title: {
          text: '发作频次下降率'
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
            name: '发作频次',
            type: 'line',
            stack: '总量',
            data: this.yAxisData1 // y轴数据1
          }
        ]
      }
      this.myChartOne.setOption(option)
    },


  }
</script>

<style scoped>
.list{
    margin: 20px 10px;
}
.list p{
    line-height: 40px;
}
</style>