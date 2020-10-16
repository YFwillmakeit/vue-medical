<template>
  <div id="symWe">
    <div class="divSym" :style="{ width: '100%', height: '550px' }"></div>
  </div>
</template>

<script>
export default {
  name: "symWe",
  data() {
      return {
          days: ['11-01', '11-02', '11-03','11-04','11-05','11-06','11-07'],
        //   不良反应的次数
          num: [1, 2, 5, 1, 0, 6, 1]
      }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementsByClassName("divSym")[0]);
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: this.days
            },
                yAxis: {
                type: 'value'
                },
                series: [{
                data: this.num,
                type: 'line'
                }]
            });
    }
  }
}
</script>

<style>
</style>
