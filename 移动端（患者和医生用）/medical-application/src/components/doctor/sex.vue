<template>
  <div id="myChart" class="chart" :style="{width: '100%', height: '240px'}"></div>
</template>
 
<script>
import echarts from 'echarts'
export default {
  name: 'xwPassengerFlow',
  data() {
    return {
      xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'], // x轴数据，可根据需求
      yAxisData1: [120, 132, 101, 134, 90, 230, 210], // 数据1
      yAxisData2: [220, 182, 191, 234, 290, 330, 310], // 数据2
      yAxisData3: [150, 232, 201, 154, 190, 330, 410], // 数据3
      yAxisData4: [320, 332, 301, 334, 390, 330, 320], // 数据4
      yAxisData5: [820, 932, 901, 934, 1290, 1330, 1320], // 数据5
      
    }
  },
  mounted() {
    this.loadLine();
  },
  methods: {
    loadLine() {
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
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: this.yAxisData1 // y轴数据1
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: this.yAxisData2 // y轴数据2
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: this.yAxisData3 // y轴数据3
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: this.yAxisData4 // y轴数据5
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: this.yAxisData5 // y轴数据5
          }
        ]
      }
      this.myChartOne = echarts.init(document.getElementById('myChart'));
      this.myChartOne.setOption(option)
    },
  }
}
</script>