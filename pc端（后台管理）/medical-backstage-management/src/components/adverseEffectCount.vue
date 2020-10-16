<template>
<!--不良反应饼状图-->
  <div id="AEC_chart" class="chart" :style="{width: '500px', height: '400px'}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "adverseEffectCount",
    mounted() {
      let AECChart = echarts.init(document.getElementById('AEC_chart'));
      let option = {
        title: {
          text: '患者不良反应',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: ['其他不适', '恶心呕吐', '烦躁易怒', '皮肤过敏', '疲劳乏力','头痛眩晕','镇痛嗜睡','体重变化']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['38%', '55%'],
            data: [
              {value: 2, name: '其他不适'},
              {value: 2, name: '恶心呕吐'},
              {value: 3, name: '烦躁易怒'},
              {value: 5, name: '皮肤过敏'},
              {value: 1, name: '疲劳乏力'},
              {value: 2, name: '头痛眩晕'},
              {value: 5, name: '镇痛嗜睡'},
              {value: 1, name: '体重变化'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      AECChart.setOption(option);
    }

  }
</script>

<style scoped>
#AEC_chart{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>