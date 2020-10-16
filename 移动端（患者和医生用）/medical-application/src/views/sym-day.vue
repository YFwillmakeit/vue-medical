<template>
  <div id="symDay">
    <div class="divSym" :style="{ width: '100%', height: '550px' }"></div>
  </div>
</template>

<script>
export default {
  name: "SymDay",
  data() {
    return {
      hours: ['11-08', '11-09', '11-10','11-11','11-12'],
      days: ['疲劳乏力', '头痛眩晕', '镇静嗜睡',
        '皮肤过敏', '烦躁易怒', '恶心呕吐', '其他不适', "体重变化"],
        // x,y,大小
      data: [
        [0,0,5],[0,1,5],[0,2,5],[0,3,5],[0,4,5],[0,5,5],[0,6,5],[0,7,5],
        [1,0,5],[1,1,5],[1,2,5],[1,3,5],[1,4,5],[1,5,5],[1,6,5],[1,7,5],
        [2,0,5],[2,1,5],[2,2,5],[2,3,5],[2,4,5],[2,5,5],[2,6,5],[2,7,5],
        [3,0,5],[3,1,5],[3,2,5],[3,3,5],[3,4,5],[3,5,5],[3,6,5],[3,7,5],
        [4,0,5],[4,1,5],[4,2,5],[4,3,5],[4,4,5],[4,5,5],[4,6,5],[4,7,5]
      ],
    };
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
            legend: {
                data: ['Punch Card'],
                left: 'right'
            },
            tooltip: {
                position: 'top',
                formatter: function (params) {
                    return params.value[2] + ' commits in ' + this.hours[params.value[0]] + ' of ' + this.days[params.value[1]];
                }
            },
            grid: {
                left: 10,
                bottom: 10,
                right: 30,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: this.hours,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgb(0,0,0)',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: this.days,
                axisLine: {
                    show: false
                }
            },
            series: [{
                name: 'Punch Card',
                type: 'scatter',
                symbolSize: function (val) {
                    return val[2] * 2;
                },
                data: this.data,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }]
        });
    }
  }
};
</script>

<style></style>
