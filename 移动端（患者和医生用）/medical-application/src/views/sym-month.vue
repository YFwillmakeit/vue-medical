<template>
  <div id="symMon">
    <div class="divSym" :style="{ width: '100%', height: '550px' }"></div>
  </div>
</template>

<script>
export default {
  name: "symMon",
  data() {
      return {
          days: [
            '11-01', '11-02', '11-03','11-04','11-05','11-06','11-07',
            '11-08', '11-09', '11-10','11-11','11-12','11-13','11-14',
            '11-15', '11-16', '11-17','11-18','11-19','11-20','11-21',
            '11-22', '11-23', '11-24','11-25','11-26','11-27','11-28',
            '11-29', '11-30'
          ],
        //   不良反应的次数
          num: [1, 2, 5, 1, 0, 6, 1,
          1, 2, 5, 1, 0, 6, 1,
          1, 2, 5, 1, 0, 6, 1,
          1, 2, 5, 1, 0, 6, 1,
          1, 2]
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
