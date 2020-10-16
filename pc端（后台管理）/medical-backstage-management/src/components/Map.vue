<template>
    <div :id="box_id" style="width: 100%;height: 100%">

    </div>
</template>

<script>
    import echarts from "echarts";
    import 'echarts/map/js/world.js'
    import 'echarts/map/js/china.js' // 引入中国地图数据
    import "echarts/extension/bmap/bmap";
    export default {
        name: "Map",
        data(){
            return{
                box_id:"container",
                echartsdata:"",
                center_point: [102.897509, 30.738321],
                zoom:8,
                roam:true,
                iconsize:15,
                icon_color:"#e27228",
                data:[
                    {
                        lat: 31.132889,
                        lng: 104.36794427,
                        name: "德阳市",
                        value: "患病人数：6",

                    },
                    {
                        lat: 30.655822,
                        lng: 104.071534,
                        name: "成都市",
                        value: "患病人数：8",

                    }, {
                        lat: 29.63,
                        lng: 106.51,
                        name: "重庆市",
                        value: "患病人数：7",

                    }, {
                        lat: 24.84,
                        lng: 101.71,
                        name: "云南",
                        value: "患病人数：12",

                    },
                ],
            }
        },
        methods:{
            baiduMap() {
                var dom = document.getElementById("container");
                var myChart = echarts.init(dom);
                var option = null;
                var data=this.data

                var convertData = function (data,type) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        res.push(
                            {
                                name:data[i].name,
                                value0:data[i].value,
                                value:[data[i].lng,data[i].lat,type],
                            },
                        )
                    }
                    return res;
                };


                option = {
                    tooltip: {
                        show:true,
                        trigger: 'item',
                        formatter: (params)=>{
                            var res = params.name+'<br/>';
                            var myseries = option.series
                            for (var i = 0; i < myseries.length; i++) {
                                for(var j=0;j<myseries[i].data.length;j++){
                                    if(myseries[i].data[j].name==params.name){
                                        res+=
                                            ""+ '  '+myseries[i].data[j].value0+'</br>'
                                    }
                                }
                            }
                            return res;
                        }
                    },

                    bmap: {
                        center: this.center_point,
                        zoom:this.zoom,
                        roam: this.roam,
                    },
                    series: [
                        {
                            name: 'name',
                            type: 'scatter',
                            stack: 'name',
                            coordinateSystem: 'bmap',
                            data:convertData(data,1),
                            symbolSize: this.iconsize,
                            encode: {
                                value: 2
                            },
                            itemStyle: {
                                color: this.icon_color,
                                background:this.icon_color
                            },

                        },



                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
                window.onresize = function () {
                    myChart.resize();
                }

            },
        },
        mounted() {
            this.baiduMap()
        }
    }
</script>

<style scoped>

</style>