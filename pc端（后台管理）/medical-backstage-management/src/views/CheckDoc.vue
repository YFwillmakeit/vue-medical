<template>
<div>

		<el-page-header @back="goBack" content=""><!--返回-->
		</el-page-header>
     <h3 style="text-align: center;margin-bottom: 30px">医生信息</h3>
<el-row :gutter="20">
      <el-col :span="6">
            医生姓名：{{doctor.dname}} 
      </el-col>
      <el-col :span="6">
            性别：{{doctor.sex}} 
      </el-col>
      <el-col :span="6">
           从业年限：{{doctor.work_year}}
      </el-col>
      <el-col :span="6">
           所属医院： {{doctor.hname}} 
      </el-col>
</el-row>
<el-row :gutter="20">
       <el-col :span="6">
            职称：{{doctor.position}}
       </el-col>
       <el-col :span="6">
            科室：{{doctor.dename}}
       </el-col>
       <el-col :span="6">
           手机号：{{doctor.phone}}
       </el-col>
</el-row>
<!--卡片部分-->
     <el-tabs type="border-card">
<!--病例探讨卡片-->
         <el-tab-pane label="病例探讨">
   <!--病例探讨表格-->
               <el-table
                 :data="BLTT.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                 border
                 style="width: 100%">
                 <el-table-column
                   prop="theme"
                   label="探讨名称">
                 </el-table-column>
                 <el-table-column
                   prop="Num"
                   label="参会人数">
                 </el-table-column>
                 <el-table-column
                   prop="starttime"
                   label="探讨时间"
                   :formatter="DateFormatterState">
                 </el-table-column>
                 <el-table-column
                   prop="money"
                   label="探讨金额">
                 </el-table-column>
                 <el-table-column
                   prop="ddname"
                   label="主持人">
                 </el-table-column>

                 <el-table-column
                   label="操作">
                   <template slot-scope='scope'>
                     <!-- <el-button @click="checkInfo(scope.row)" type="text" size="small">查看</el-button> -->
                     <el-button type="text" size="small" @click='editChatBtn(scope.row)'>编辑</el-button>
                   </template>
                 </el-table-column>
               </el-table>
                <div class="block">
                   <el-pagination
                     background
                     @current-change="handleCurrentChange"
                     :page-size="1"
                     layout=" prev, pager, next"
                     :total="BLTT.length/pagesize">
                   </el-pagination>
                 </div>
   <!--病例探讨中的编辑操作-->
          <el-dialog title="编辑探讨信息" :visible.sync="editChatFormVisible">
            <el-form :model='editChatForm'>
              <el-form-item label="探讨名称" >
                <el-input  autocomplete="off" v-model='editChatForm.name'></el-input>
              </el-form-item>
              <el-form-item label="参会人数">
                <el-input  autocomplete="off" v-model='editChatForm.count' disabled></el-input>
              </el-form-item>
                   <el-form-item label="探讨时间">
                     <el-col :span="11">
                       <el-date-picker type="date" placeholder="选择日期" v-model="editChatForm.time" style="width: 100%;"></el-date-picker>
                     </el-col>
                   </el-form-item>
              <el-form-item label="探讨金额">
                <el-input  autocomplete="off" v-model='editChatForm.money'></el-input>
              </el-form-item>
              <el-form-item label="主持人">
                <el-input  autocomplete="off" v-model='editChatForm.master'></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="editChatFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="editChatSub">确 定</el-button>
            </div>
          </el-dialog>
   <!--病例探讨中的查看操作，弹出一个信息框-->
         
         <el-dialog
           title="详情"
           :visible.sync="infoVisible"
           width="30%"
			>
           <p>探讨主题：{{this.BLTT.theme}}</p>
           <p>参会医生：</p>
			<p>探讨时间：</p>
			<p>探讨患者信息：</p>
         </el-dialog>
		</el-tab-pane>
<!--诊疗活动卡片-->
         <el-tab-pane label="诊疗活动">
    <!--通过日期筛选诊疗活动-->
                   <el-form ref="form"  label-width="80px" v-model="selectActForm">
                   <el-form-item label="活动时间">
                     <el-col :span="11">
                       <el-date-picker type="date" placeholder="选择日期" v-model="selectActForm.date" style="width: 100%;"></el-date-picker>
                     </el-col>
					<el-button type="primary" @click='checkAct'>查找</el-button>
                   </el-form-item>
                   </el-form>
    <!--诊疗活动表格-->
					<el-button type="primary" @click='addActive'>新增诊疗活动</el-button>
                      <el-table
                        :data="ZLHD.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        border
                        style="width: 100%">
						<el-table-column
						prop="tName"
						label="诊疗名称"
						>
						</el-table-column>
                        <el-table-column
                          prop="a_time"
                          label="诊疗时间"
						:formatter="DateFormatterState1"
                         >
                        </el-table-column>
                        <el-table-column
                          prop="dName"
                          label="诊疗地点"
                         >
                        </el-table-column>
                        <el-table-column
                          prop="people"
                          label="诊疗人数"
                         >
                        </el-table-column>
						<el-table-column
						prop="money"
						label="费用"
						>
						</el-table-column>
<!--                        <el-table-column
                          label="操作"
                          width="100">
                          <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                          </template>
                        </el-table-column> -->
                      </el-table>
                       <div class="block">
                          <el-pagination
                            background
                            @current-change="handleCurrentChange"
                            :page-size="1"
                            layout=" prev, pager, next"
                            :total="ZLHD.length/pagesize">
                          </el-pagination>
                        </div>
			<!--新增诊疗活动模态框-->
                <el-dialog title="新增诊疗活动" :visible.sync="addActFormVisible">
                  <el-form :model='addActForm'>
					<el-form-item label="诊疗名称">
					<el-select v-model="addActForm.actName" placeholder="诊疗名称">
					<el-option label="手术1" value="1"></el-option>
					<el-option label="手术2" value="2"></el-option>
					<el-option label="手术3" value="3"></el-option>
					<el-option label="手术4" value="4"></el-option>
					<el-option label="手术5" value="5"></el-option>
				</el-select>    
				</el-form-item>
                   <el-form-item label="活动时间">
                     <el-col :span="11">
                       <el-date-picker type="date" placeholder="选择日期" v-model="addActForm.date" style="width: 100%;"></el-date-picker>
                     </el-col>
                   </el-form-item>
                   <el-form-item label="报名开始时间">
                     <el-col :span="11">
                       <el-date-picker type="date" placeholder="选择日期" v-model="addActForm.bTime" style="width: 100%;"></el-date-picker>
                     </el-col>
                   </el-form-item>
                   <el-form-item label="报名结束时间">
                     <el-col :span="11">
                       <el-date-picker type="date" placeholder="选择日期" v-model="addActForm.eTime" style="width: 100%;"></el-date-picker>
                     </el-col>
                   </el-form-item>
                    <el-form-item label="诊疗地点">
                      <el-input  autocomplete="off" v-model='addActForm.address'></el-input>
                    </el-form-item>
                    <el-form-item label="诊疗人数">
                      <el-input  autocomplete="off" v-model='addActForm.count'></el-input>
                    </el-form-item>
					<el-form-item label="费用">
					<el-input  autocomplete="off" v-model='addActForm.money'></el-input>
					</el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="addActFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="activeAdd">确 定</el-button>
                  </div>
                </el-dialog>
		</el-tab-pane>
<!--交易记录卡片-->
         <el-tab-pane label="交易记录">
      <!--交易记录表格-->
        <el-table
          :data="JYJL.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          border
          style="width: 100%">
          <el-table-column
            prop="dealTime"
            label="交易时间"
			:formatter="DateFormatterState2"
            >
          </el-table-column>
          <el-table-column
            prop="NAME"
            label="交易类型"
            >
          </el-table-column>
          <el-table-column
            prop="money"
            label="核桃币">
          </el-table-column>
          <el-table-column
            prop="dealNumber"
            label="流水号">
          </el-table-column>
        </el-table>
        <div class="block">
           <el-pagination
             background
             @current-change="handleCurrentChange"
             :page-size="1"
             layout=" prev, pager, next"
             :total="JYJL.length/pagesize">
           </el-pagination>
         </div>
         </el-tab-pane>
     </el-tabs>
	
</div>
</template>

<script>
 export default {
	mounted() {
		this.getParams(),
		this.showBLTT()//渲染病例探讨表
		this.showZLHD()//渲染诊疗活动表
		this.showJYJL()//渲染交易记录表
	},
    data() {
      return {
		doctor: [],
		editChatFormVisible:false,//编辑病例探讨框默认隐藏
		infoVisible:false,
		addActFormVisible:false,
		date:'',
		editChatForm:{//编辑探讨信息表
			name:'',
			count:'',
			time:'',
			money:'',
			master:'',
			chatId:''
		},
		selectActForm:{//查找活动表，通过输入的日期查询活动
			date:'',
		},
		addActForm:{//新增诊疗活动表
			actName:'',
			address:'',
			count:'',
			date:'',
			money:'',
			bTime:'',
			eTime:''
		},
		JYJL:[{ //交易记录表
			time:'2020-09-24',
			type:'',
			money:'',
			target:''
		}],
        BLTT: [{   //病例探讨表
          date: '2016-05-02',
          name: 'hhhh',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '123',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '6666',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '9999',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
        ZLHD:[],//诊疗活动数据表格
		rules: {
				date: [
				{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
				]
		},
        total: 0, //总数据量
         pagesize: 3, //每页10条
        currentPage: 1 //第一页
      }
    },
	methods: {
		getParams(){
			this.doctor=this.$route.params.doctor;
			// console.log(this.doctor)
		},
		DateFormatterState:function(row){
			return new Date(row.starttime).toLocaleDateString()
		},
		DateFormatterState1:function(row){
			return new Date(row.a_time).toLocaleDateString()
		},		
		DateFormatterState2:function(row){
			return new Date(row.dealTime).toLocaleDateString()
		},
		showBLTT:function(){
			this.$axios.post(this.$api.manager.showBLTT+'?doctorId='+this.doctor.id
			// JSON.stringify({
			// 	Id:this.doctor.id,
				
			// })
			).then((response) => {
						// console.log(response)
			var result = response.data
			if (result.code === '200') {
							// console.log( response.data.data)
			this.BLTT = result.data
			} else {
			this.$alert(result.message)
			}
			}).catch(() => {
			
			})
		},
		showZLHD:function(){
			this.$axios.post(this.$api.manager.showZLHD,
			JSON.stringify({
				doctorId:this.doctor.id
			})).then((response) => {
						// console.log(response)
			var result = response.data
			if (result.code === '200') {
							// console.log( response.data.data)
			this.ZLHD = result.data
			
			} else {
			this.$alert(result.data.msg)
			}
			}).catch(() => {
			
			})
		},
		showJYJL:function(){
			this.$axios.post(this.$api.manager.showJYJL,
			JSON.stringify({
				phone:this.doctor.phone
			})).then((response) => {
						// console.log(response)
			var result = response.data
			if (result.code === '200') {
							// console.log( response.data.data)
			this.JYJL = result.data
			
			} else {
			this.$alert(result.data.msg)
			}
			}).catch(() => {
			
			})
		},
		checkAct:function(){
			// console.log(Date.parse(this.selectActForm.date))
			this.$axios.post(this.$api.manager.checkAct,
			JSON.stringify({
				// aTime:new Date().getTime(this.selectActForm.date),
				aTime:Date.parse(this.selectActForm.date),
				doctorId:this.doctor.id
			})).then((response) => {
						// console.log(response)
			var result = response.data
			if (result.code === '200') {
							// console.log( response.data.data)
			this.ZLHD = result.data
			
			} else {
			this.$alert(result.data.msg)
			}
			}).catch(() => {
			
			})

		},
	editChatBtn:function(obj){//病例探讨编辑按钮,点击显示要编辑的信息
		this.editChatFormVisible=true
		this.editChatForm.name=obj.theme
		this.editChatForm.count=obj.durations
		this.editChatForm.time=obj.starttime
		this.editChatForm.money=obj.money
		this.editChatForm.master=obj.ddname
		this.editChatForm.chatId=obj.id
	},
	editChatSub:function(){//编辑病例探讨模态框确定按钮
		this.editChatFormVisible=false
		this.$axios.post(this.$api.manager.editBLTT,{
			id:this.editChatForm.chatId,
			dname:this.doctor.dname,
			theme:this.editChatForm.name,
			// count:this.editChatForm.count,
			starttime:new Date().getTime(this.editChatForm.time),
			money:this.editChatForm.money,
			doctor_name:this.editChatForm.master
		}).then((response) => {
					// console.log(response)
		var result = response.data
		if (result.code === '200') {
						// console.log( response.data.data)
		this.BLTT = result.data
		this.showBLTT()
		} else {
		this.$alert(result.message)
		}
		}).catch(() => {
		
		})
	},
	goBack:function(){
		this.$router.push({ path:'/doctorManage'})
	},
	// checkInfo:function(obj){//病例探讨查看操作
	// 	this.infoVisible=true
	// 	this.in
	// },
	handleCurrentChange(val) {
	this.currentPage=val
	// console.log(`当前页: ${val}`);
	},
	addActive:function(){//新增诊疗活动模态框按钮
		this.addActFormVisible=true
	},
	activeAdd:function(){//新增诊疗活动模态框确定按钮
		this.addActFormVisible=false
		this.$axios.post(this.$api.manager.addZLHD,
				JSON.stringify({
				doctorId:this.doctor.id,
				aTime: new Date().getTime(this.addActForm.date),
				dId: this.addActForm.address,
				people: this.addActForm.count,
				tId:this.addActForm.actName,
				money:this.addActForm.money,
				bTime:new Date().getTime(this.addActForm.bTime),
				eTime:new Date().getTime(this.addActForm.eTime)
				})
		).then((response) => {
					// console.log(response.data.data)
		var result = response.data
		if (result.code === '200') {
						// console.log( response)
						this.showZLHD()
			this.ZLHD = result.data
			} else {
			this.$alert(result.message)
			}
		}).catch(() => {
		
		})
	}
	}
  }
</script>
<style>
.el-table td, .el-table th{
  text-align: center !important
}
</style>
<style >
.el-tabs__nav {
	width:100%
}
.el-tabs__nav div{
	width:33%
}
.el-pagination{
  margin-top: 40px;
  text-align: center;
}
.el-col-6{
margin-bottom: 30px;
}
</style>
