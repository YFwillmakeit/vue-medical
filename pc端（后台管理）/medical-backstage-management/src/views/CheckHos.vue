<template>
 <div class="doctInfo">
     
    
             <div class="reback">
                     <el-row type="flex" justify="start">
                         <el-col :span="4">
                            <!-- <el-button type="default" class="rebackButtom" @click="reback">
                                 返回
                             </el-button> --><el-page-header @back="reback" content="">
</el-page-header>
                         </el-col>
                     </el-row>
                 </div>
                <div class="doctInfoTitleDiv" >
                    <h3 style="text-align: center;margin-bottom: 30px">基本信息</h3>
                    <el-row  style="margin-bottom: 30px;padding-left:300px ;">
                        <el-col :span="12">
                            医院名称：{{hospital.name}}
                        </el-col>
                        <el-col :span="12" >
                            医院等级：{{hospital.grade}}
                        </el-col>
                        <el-col :span="12" >
                            医院别称：{{hospital.alias}}
                        </el-col>
                        <el-col :span="12">
                            医院性质：{{hospital.nature}}
                        </el-col>
                        <el-col :span="12">
                            联系电话：{{hospital.phone}}
                        </el-col>
                        <el-col :span="12">
                            服务热线：{{hospital.hotline}}
                        </el-col>
                        <el-col :span="12">
                            医院联系人：{{hospital.linkman}}
                        </el-col>
                       
                    </el-row>
                </div>
                <hr>
    <!--添加部门科室-->
                <el-button type="primary" @click='addDepartment'>新增部门科室</el-button>
				<h3 style="text-align: center;margin-bottom: 30px">科室信息</h3>
	<!--科室信息展示表格-->
             <el-table
                :data="CheckHosTab"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="name"
                  label="部门科室"
                  >
                </el-table-column>
<!--                <el-table-column
                  prop="docname"
                  label="科室成员"
                  >
                </el-table-column> -->
				<el-table-column
                  prop="higher"
                  label="上级"
                 >
				</el-table-column>
                <el-table-column
                  prop="doctorId"
                  label="负责人工号"
                 >
                </el-table-column>
                <el-table-column
                  prop="phone"
                  label="联系方式"
                  >
                </el-table-column>
                <el-table-column
                  prop="created"
                  label="创建时间"
                  :formatter="DateFormatterState"
                  >
                </el-table-column>
                <el-table-column
                  label="操作"
                 >
                  <template slot-scope='scope'>
                    <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
 <!--新增部门科室模态框-->
              <el-dialog title="新增部门科室" :visible.sync="addDepartmentVisible">
                <el-form :model='newDepartment'>
                  <el-form-item label="科室名称">
                    <el-input  autocomplete="off" v-model='newDepartment.DepartmentName'></el-input>
                  </el-form-item>
                  <el-form-item label="负责人工号">
                    <el-input  autocomplete="off" v-model='newDepartment.Leader'></el-input>
                  </el-form-item>
                  <el-form-item label="联系方式">
                    <el-input  autocomplete="off" v-model='newDepartment.tel'></el-input>
                  </el-form-item>
                  <el-form-item label="上级">
                    <el-input  autocomplete="off" v-model='newDepartment.higher'></el-input>
                  </el-form-item>
                  <el-form-item label="创建时间">
                    <el-col :span="11">
                      <el-date-picker type="date" placeholder="选择日期" v-model="newDepartment.date" style="width: 100%;"></el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="addDepartmentVisible = false">取 消</el-button>
                  <el-button type="primary" @click="addSub">确 定</el-button>
                </div>
              </el-dialog>

 <!--编辑部门科室模态框-->
              <el-dialog title="编辑部门科室" :visible.sync="editDepartmentVisible">
                <el-form :model='editDepartment'>
                  <el-form-item label="科室名称">
                    <el-input  autocomplete="off" v-model='editDepartment.DepartmentName'></el-input>
                  </el-form-item>
                  <el-form-item label="部门成员">
                    <el-input  autocomplete="off" v-model='editDepartment.docname' disabled></el-input>
                  </el-form-item>
                  <el-form-item label="负责人工号">
                    <el-input  autocomplete="off" v-model='editDepartment.Leader'></el-input>
                  </el-form-item>
                  <el-form-item label="联系方式">
                    <el-input  autocomplete="off" v-model='editDepartment.tel'></el-input>
                  </el-form-item>
                  <el-form-item label="上级">
                    <el-input  autocomplete="off" v-model='editDepartment.higher' disabled></el-input>
                  </el-form-item>
                  <el-form-item label="创建时间">
                    <el-col :span="11">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editDepartment.date" style="width: 100%;"></el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="editDepartmentVisible = false">取 消</el-button>
                  <el-button type="primary" @click="editSub">确 定</el-button>
                </div>
              </el-dialog>

    </div>    
</template>

<script>
export default {
	created() {
		this.getParams(),
		this.showCheckHosTab()
	},
    data() {
         return {
			hospital:[],
           CheckHosTab: [{//查看医院表
             date: '2016-05-02',
             name: '王小虎',
             province: '上海',
             city: '普陀区',
             address: '上海市普陀区金沙江路 1518 弄',
             zip: 200333
           }, {
             date: '2016-05-04',
             name: '王小虎',
             province: '上海',
             city: '普陀区',
             address: '上海市普陀区金沙江路 1517 弄',
             zip: 200333
           }, {
             date: '2016-05-01',
             name: '王小虎',
             province: '上海',
             city: '普陀区',
             address: '上海市普陀区金沙江路 1519 弄',
             zip: 200333
           }, {
             date: '2016-05-03',
             name: '王小虎',
             province: '上海',
             city: '普陀区',
             address: '上海市普陀区金沙江路 1516 弄',
             zip: 200333
           }],
           newDepartment:{//增加新部门表
				id:'',
               Leader:'',
               DepartmentName:'',
               master:'',
               tel:'',
               date:'',
               higher:''
           },
           editDepartment:{//编辑部门表
               id:'',
               Leader:'',
               DepartmentName:'',
               docname:'',
               tel:'',
               date:'',
               higher:''
           },
           addDepartmentVisible:false,//增加部门模态框默认不显示
           editDepartmentVisible:false//编辑部门模态框默认不显示
         }
       },
       methods:{
			getParams:function(){
				//获取点击查看操作带过来的参数放在当前组件的数据内
				this.hospital=this.$route.params.hospital;
				// console.log(this.hospital)
			},
			DateFormatterState:function(row){//时间戳转换方法
				return new Date(row.created).toLocaleDateString()
			},
			showCheckHosTab:function(){//渲染科室信息方法
				this.$axios.post(this.$api.manager.showDepartment,JSON.stringify({
					id:this.hospital.id
				})).then((response) => {
							// console.log(response)
				var result = response.data
				if (result.code === '200') {
								// console.log( response.data.data)
				this.CheckHosTab = result.data
				} else {
				this.$alert(response.msg)
				}
				}).catch(() => {
				
				})
			},
            addDepartment:function(){//增加部门框显示
            this.addDepartmentVisible=true
			},
			addSub:function(){//输入新的部门信息后保存
				this.addDepartmentVisible=false
				this.$axios.post(this.$api.manager.addDepartment,
				JSON.stringify({
					hosId:this.hospital.id,
					id:this.newDepartment.id,//部门id
					name:this.newDepartment.DepartmentName,
					doctorId:this.newDepartment.Leader,//负责人ID
					phone:this.newDepartment.tel,
					created:this.newDepartment.date,
					higher:this.newDepartment.higher
				})).then((response) => {
				console.log(this.obj)
				var result = response.data
				if (result.code === '200') {
					// console.log(response)
					// console.log( response.data.data)
					this.CheckHosTab = result.data
					this.$alert(response.data.msg)
				} else {
					this.$alert(response.msg)
				}
				}).catch(() => {
				})
			},
			edit:function(obj){//部门编辑模态框框显示并将要修改前的数据显示出来
				// console.log(obj)
				this.editDepartmentVisible=true
				this.editDepartment.id=obj.id
				this.editDepartment.DepartmentName=obj.name
				this.editDepartment.Leader=obj.doctorId
				this.editDepartment.tel=obj.phone
				this.editDepartment.date=obj.created
				this.editDepartment.docname=obj.docname
				this.editDepartment.higher=obj.higher
			},
			editSub:function(){//在部门编辑模态框中点击确定保存修改后的数据并关闭模态框
				this.editDepartmentVisible=false//关闭模态框
				this.$axios.post(this.$api.manager.editDepartment,
				JSON.stringify({
					hosId:this.hospital.id,
					id:this.editDepartment.id,//部门id
					name:this.editDepartment.DepartmentName,
					doctorId:this.editDepartment.Leader,
					phone:this.editDepartment.tel,
					created:this.editDepartment.date,
					docname:this.editDepartment.docname,//部门成员不能修改
					higher:this.editDepartment.higher
				})).then((response) => {
				// console.log(this.obj)
				var result = response.data
				if (result.code === '200') {
					// console.log(response)
					// console.log( response.data.data)
					this.CheckHosTab = result.data
					this.$alert(response.data.msg)
				} else {
					this.$alert(response.data.msg)
				}
				}).catch(() => {
				})
			},
			reback:function(){
				this.$router.push({ path:'/hostoryManage'})
			}
       }
  }
</script>
<style>
.el-table td, .el-table th{
  text-align: center !important
}
</style>
<style scoped>
.el-col-12{
margin-bottom: 30px;
}
</style>
