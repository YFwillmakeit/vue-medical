<template>
  <div>
      <!--返回按键-->
      <div>
        <el-page-header @back="goBack" size="small" content="">
        </el-page-header>
      </div>
      <!--患者详情-->
      <div  class="UserDetails">
        <h1>患者信息</h1>
          <p><span>患者姓名:{{ this.$store.state.teplist[0].name}}</span>
            <span>性别:{{this.$store.state.teplist[0].sex=1?'男':'女'}}</span>
            <span>患者年龄:{{this.$store.state.teplist[0].age}}年</span>
          </p>
          <p>
            <span>现居住地:{{this.$store.state.teplist[0].address}}</span>
            <span>手机号:{{this.$store.state.teplist[0].phone}}</span>
            <span>患者病龄:{{ this.$store.state.teplist[0].diseaseYear}}</span>
          </p>
      </div>
      <!--下面部分-->
      <el-row>
    <el-col :span="24">
      <el-tabs type="border-card">
        <el-tab-pane label="基本病历" width="150">
            <!--基本病历-->
            <div >
              <div class="Xbs">
                  <h4>现病史</h4>
                  <span>诊断:{{this.$store.state.teplist[0].current.diagnosis}}</span>
                  <span>诊断内容:{{this.$store.state.teplist[0].current.diagnosisDes}}</span>
              </div>
              <!--辅助检查-->
              <div class="hengx">
                <b>辅助检查</b>
                <p>
                  <span>脑电图:{{this.$store.state.teplist[0].current.eeg}}</span>
                    <span>异常内容:{{this.$store.state.teplist[0].current.eegDes}}</span></p>
                <p class="ct"><span>核磁/CT:{{this.$store.state.teplist[0].current.ct}}</span>
                    <span>基因:{{this.$store.state.teplist[0].current.gene}}</span>
                </p>
              </div>
              <!--发作频次-->
              <div class="hengx">
                    <b>发作频次</b>
                <p>
                    <span>发作次数:{{this.$store.state.teplist[0].current.count}}</span>
                    <span>发作频率:{{this.$store.state.teplist[0].current.frequency}}</span>
                </p>
              </div>
              <!--药物治疗-->
              <div class="hengx">
                <b>药物治疗</b>
                <p>
                  <span>是否药物治疗:{{this.$store.state.teplist[0].current.medicine}}</span>
                  <span>药物内容:{{this.$store.state.teplist[0].current.medicineDes}}</span>
                </p>
              </div>
              <div class="hengx">
                 <b>特殊治疗</b>
                <p>
                    <span>是否手术:{{this.$store.state.teplist[0].current.operation}}</span>
                    <span>手术治疗:{{this.$store.state.teplist[0].current.operationDes}}</span>
                </p>
                <p>
                    <span>甲强==激素治疗:{{this.$store.state.teplist[0].current.jqjs}}</span>
                    <span>免疫治疗:{{this.$store.state.teplist[0].current.immune}}</span>
                </p>
                <p>
                    <span>生酮饮食:{{this.$store.state.teplist[0].current.stys}}</span>
                    <span>其他:{{this.$store.state.teplist[0].current.other}}</span>
                </p>
              </div>
              <div class="hengx juz">
                <h4>既往史</h4>
                <p>
                    <span>是否有药物过敏:{{this.$store.state.teplist[0].familyhistory.allergy}}</span>
                    <span>过敏药物名称:{{this.$store.state.teplist[0].familyhistory.allergyName}}</span>
                </p>
                <p>
                    <span>是否有外伤史:{{this.$store.state.teplist[0].familyhistory.trauma}}</span>
                    <span>外伤史内容:{{this.$store.state.teplist[0].familyhistory.traumaDes}}</span>
                </p>
                <p>
                    <span>慢病史:{{this.$store.state.teplist[0].familyhistory.chronic}}</span>
                    <span>慢病史名称:{{this.$store.state.teplist[0].familyhistory.chronicName}}</span>
                </p>
                <p>
                    <span>产伤:{{this.$store.state.teplist[0].familyhistory.injury}}</span>
                    <span>感染:{{this.$store.state.teplist[0].familyhistory.infected}}无</span>
                </p>
                <p>
                    <span>出血:{{this.$store.state.teplist[0].familyhistory.hemorrhage}}</span>
                    <span>是否高热惊厥史:{{this.$store.state.teplist[0].familyhistory.convulsion}}</span>
                </p>
              </div>
               <div class="hengx juz">
                <h4>家族史</h4>
                <p>
                    <span>是否有家族病:{{this.$store.state.teplist[0].familyhistory.familialdis}}</span>
                    <span>家族病名称:{{this.$store.state.teplist[0].familyhistory.familialdisName}}</span>
                </p>
                <p>
                    <span>是否结婚:{{this.$store.state.teplist[0].familyhistory.marry}}</span>
                    <span>是否生育:{{this.$store.state.teplist[0].familyhistory.birth}}</span>
                </p>
              </div>
            </div>
            <div class="gobackBtn">
              <el-button @click="goBack">返回</el-button>
            </div>
        </el-tab-pane>
        <!--就诊记录-->
        <el-tab-pane label="就诊记录" >
            <el-table
            :data="JZData"
            border
            style="width: 100%">
            <el-table-column
              prop="time"
              label="就诊时间">
            </el-table-column>
            <el-table-column
              prop="hospitalname"
              label="就诊医院">
            </el-table-column>
            <el-table-column
              prop="NAME"
              label="就诊医生">
            </el-table-column>
            <!-- <el-table-column
              prop="chroniclerr"
              label="记录人">
            </el-table-column> -->
            <el-table-column
              fixed="right"
              label="操作">
              <template slot-scope="scope">
                <el-button  type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
                <!--查看的弹出框-->
                <el-dialog
                  class="jzljck"
                  :modal-append-to-body='false'
                  title="就诊记录详情"
                  :visible.sync="centerDialogVisible"
                  width="30%"
                  center>
                  <p>记录时间:{{new Date(JZXQ.time).toLocaleDateString()}}</p>
                  <p>所记录的内容:{{JZXQ.desc}}</p>
                  <p>记录医院:{{JZXQ.xqname}}</p>
                  <p>就诊医生:{{JZXQ.name}}</p>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                  </span>
                </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!--发作次数记录-->
        <el-tab-pane label="发作次数记录" >
          <div id="chart" style="width: 600px;height:400px;"></div>
        </el-tab-pane>
        <el-tab-pane label="不良反应">
          <div id="chart1">
            <adverseEffectCount ></adverseEffectCount>
          </div>
        </el-tab-pane>
        <el-tab-pane label="病情日志">
          <el-table
            :data="RizhiData"
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="recordTime"
              :formatter="DateFormatterState"
              label="记录时间">
            </el-table-column>
            <el-table-column
              prop="v_url"
              label="视频内容">
            </el-table-column>
            <el-table-column
              prop="purl"
              label="图片内容">
            </el-table-column>
            <el-table-column
              prop="des"
              label="文字内容">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="detJour(scope.row)" type="text" size="small">查看</el-button>
                <el-dialog
                  :modal-append-to-body='false'
                  title="病情日志详情"
                  :visible.sync="DialogVisible2"
                  width="30%"
                  center>
                  <p>文字内容:{{nowBQ.des}}</p>
                  <p>图片内容:{{nowBQ.purl}}</p>
                  <p>视频内容:{{nowBQ.purl}}</p>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="DialogVisible2 = false">确 定</el-button>
                  </span>
                </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
          </el-col>
</el-row>
  </div>
</template>
<script src="echarts.min.js"></script>
<script>
  import '../assets/css/QueryBingLi.css'
  import adverseEffectCount from '../components/adverseEffectCount'
  import {formatDate} from '../assets/json/data';
export default {
  name: 'QueryBingLi',
  components:{
    adverseEffectCount
  },
  filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
  },
  data () {
    return {
      
      patientId: '',  //当前患者的id
      //就诊次数表 总
      JZData:[],
      RizhiData: [],
      JZXQ:{
        // name:'',
        // xqname:'',
        // desc:'',
        // time:''
      },
      //当前条的病情日志
      nowBQ:'',
      centerDialogVisible:false,
      DialogVisible2:false
      //所有信息
    }
  },
  methods: {
    //时间戳
    DateFormatterState: function (row) {
      return new Date(row.recordTime).toLocaleDateString()
    },
    goBack(){
      this.$router.push({ path:'/userlist'})
    },
    //就诊记录的查看接口
    handleClick () { 
      this.centerDialogVisible = true
      // console.log(arguments[0].id)  
      this.$axios.post(this.$api.user.handleClicks,({ id:arguments[0].id}))   //参数
      .then((data) => {
        if (data.data.code == '200') {
          // console.log(data.data.data)
          this.JZXQ=data.data.data[0]
          // console.log(this.JZXQ)
        } else {
          // console.log(data.data.mes)
        } 
      }).catch(() => {});
      //弹出框

    },
    //该患者的病情日志查看 接口
    detJour () {
      this.DialogVisible2=true
      this.nowBQ=arguments[0]
      // console.log(this.nowBQ)
      // console.log(arguments[0])
      // console.log(this.patientId)
      // this.$axios.post('',({ patientId:arguments[0].id,id:this.patientId}))   //参数
      // .then((data) => {
      //   if (data.data.code == '200') {
      //     console.log(data.data.data)
      //   } else {
      //     console.log(data.data.mes)
      //   } 
      //   }).catch(() => {});
      },
    //记录就诊次数的折线图
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('chart'))
      myChart.setOption({
        xAxis: {
            type: 'category',
            data: ['0-4次', '5-9次', '10-14次', '14次+']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [1, 3, 2, 1, 2, 2, 1],
            type: 'line'
        }]
      })
    },
    //记录不良反应的饼状图
    untowardEffect(){
      var data = genData(50)
      let myChart1 = this.$echarts.init(document.getElementById('chart1'))
      myChart1.setOption({
        title: {
            text: '患者不良反应',
            // subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: data.legendData,

            selected: data.selected
        },
        series: [
            {
                name: '症状',
                type: 'pie',
                radius: '55%',
                center: ['49%', '50%'],
                data: data.seriesData,
                emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      })
      
    //  function genData(count){}
    },
    zifu_chuan(obj,state) {
      var index=obj.lastIndexOf("\ ");  //这个是查找这个字符串当前位置
      if(state==0){
          obj=obj.substring(0,index);
      }else {
          obj=obj.substring(index+1,obj.length);
      }
      return obj;
    }
  },
  mounted:function(){// eslint-disable-line no-unused-vars
    //当前患者的查看
    this.patientId=this.$route.params.patientId;
    // console.log(this.patientId)
    //就诊记录的请求接口
     this.$axios.post(this.$api.user.jzjl, JSON.stringify({ patientId: this.patientId }))
        .then(res => {
          if (res.data.code === "200") {
            var a=[...res.data.data]
            // console.log(a)
            for(var i=0;i<a.length;i++){
              var b=new Date(a[i].time).toLocaleString()
              a[i].time=b.slice(0,b.indexOf(' '))

            }     
            this.JZData = a //把数据给JZDatas
              // console.log(this.JZData)

          } else {
            console.log(res.data.msg)
          }
        })
        .catch(() => {
          console.log("服务器请求失败")
        })
    //该患者的病情日志
    this.$axios.post(this.$api.user.bqrz, JSON.stringify({ patientId: this.patientId }))
        .then(res => {
          if (res.data.code === "200") {
            console.log(res.data.data)
            console.log(res.data.data)
            this.RizhiData = res.data.data;   //把数据给JZDatas
          } else {
            console.log(res.data.msg);
          }
        })
        .catch(() => {
          console.log("服务器请求失败");
        });
    //折线图的加载
    this.drawLine()
    //饼状图的加载
    this.untowardEffect()
  }
}
</script>
<style>
.el-table__fixed-right::before, .el-table__fixed::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    background-color: #EBEEF5;
    z-index: 4;
}
</style>
<style scoped>
.jzljck{
  z-index: 22;
}
element.style{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.chart{
  text-align: center;
  height: 400px;
  width: 100%;
}
h1,h4{
  text-align: center;
}
span{
  display: inline-block;
}
.UserDetails span{ 
  width: 33%;
  text-align: center;
}
.Xbs span{
  width: 49%;
  text-align: center;
}
.hengx{
  border-top:#eee 1px solid ;
  padding: 10px 5px;
}
.juz span{
  width: 49%;
  text-align: center;
}
.hengx span{
  width:49%;
  text-align: center;
}
.gobackBtn{
  text-align: center;
  height: 100px;
  line-height: 100px;
}
/* .ct span{
  width: 50%;
} */
.el-tab-pane #chart{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>