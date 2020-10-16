<template>
<div class="bigBox">
<!--筛选医院-->
<el-form :inline="true"  class="demo-form-inline" :model="selectHosForm">
  <el-form-item label="医院名称">
    <el-input  placeholder="医院名称" v-model='selectHosForm.hosName' autocomplete="off"></el-input>
  </el-form-item>
<!--  <el-form-item label="医院等级">
    <el-select  placeholder="医院等级" v-model="selectHosForm.hosLv">
      <el-option label="一级甲等" value="一级甲等"></el-option>
      <el-option label="二级乙等" value="二级乙等"></el-option>
    </el-select>
  </el-form-item> -->
  <el-form-item label="医院地址">
    <el-input  placeholder="医院地址" v-model='selectHosForm.address' autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="reset">重置</el-button>
    <el-button type="primary" @click='selectHos'>查询</el-button>
  </el-form-item>
</el-form>
   
     
      <!--添加功能-->
      
     <!--显示表格-->
     <h3>医院列表（共{{hospTab.length }}条记录）<el-button type="primary" @click='addHospitalBtn'>新增医院</el-button></h3>
     <el-table
    :data="hospTab.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="医院名"
      width="190">
    </el-table-column>
    <el-table-column
      prop="alias"
      label="别称"
      width="135">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="createdDate"
      label="创建时间"
      width="160">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="医院等级"
      width="100">
    </el-table-column>
    <el-table-column
      prop="doctor_count"
      label="医生人数"
      width="100">
    </el-table-column>
    <el-table-column
      label="操作"
      width="137">
      <template slot-scope='scope'>
        <el-button @click="checkHistory(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click='edit(scope.row)'>编辑</el-button>
		<el-button type="text" size="small" @click='del(scope.row)'>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--分页按钮-->
 <div class="block">
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :page-size="1"
      layout=" prev, pager, next"
      :total="hospTab.length/pagesize">
    </el-pagination>
  </div>
  
  <!--新增医院模态框-->
  <el-dialog id="addxin" title="新增医院" :visible.sync="addHosFormVisible" >
    <el-form :model='addHosForm' :inline="true" :label-position="labelPosition" label-width="100px">
      <el-form-item label="医院名" >
        <el-input  autocomplete="off" v-model='addHosForm.hosName'></el-input>
      </el-form-item>
      <el-form-item label="别称">
        <el-input  autocomplete="off" v-model='addHosForm.nickName'></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input  autocomplete="off" v-model='addHosForm.address'></el-input>
      </el-form-item>
      <el-form-item label="医院等级">
         <el-select v-model="addHosForm.hosLv" placeholder="请选择">
              <el-option label="一甲" value="一甲"></el-option>
              <el-option label="二甲" value="二甲"></el-option>
              <el-option label="三甲" value="三甲"></el-option>
              <el-option label="一乙" value="一乙"></el-option>
              <el-option label="二乙" value="二乙"></el-option>
              <el-option label="三乙" value="三乙"></el-option>
         </el-select>
      </el-form-item>
<!--      <el-form-item label="医院人数">
        <el-input  autocomplete="off" v-model='addHosForm.peopCount'></el-input>
      </el-form-item> -->
      <el-form-item label="联系电话">
        <el-input  autocomplete="off" v-model='addHosForm.tel'></el-input>
      </el-form-item>
      <el-form-item label="服务热线">
        <el-input  autocomplete="off" v-model='addHosForm.hotline'></el-input>
      </el-form-item>
      <el-form-item label="医院联系人">
        <el-input  autocomplete="off" v-model='addHosForm.master'></el-input>
      </el-form-item>
      <el-form-item label="医院性质">
         <el-select v-model="addHosForm.nature" placeholder="请选择">
              <el-option label="公立" value="公立"></el-option>
              <el-option label="私立" value="私立"></el-option>
         </el-select>
      </el-form-item>
       <el-form-item class="block">
          <span class="demonstration">创建时间</span>
          <el-date-picker
            v-model="addHosForm.createdDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addHosFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addSub">确 定</el-button>
    </div>
  </el-dialog>
 
 <!--编辑医院模态框-->
 <el-dialog title="编辑医院信息" :visible.sync="editHosFormVisible">
   <el-form :model='editHosForm' :inline="true" :label-position="labelPosition" label-width="100px">
     <el-form-item label="医院名" >
       <el-input  autocomplete="off" v-model='editHosForm.name'></el-input>
     </el-form-item>
     <el-form-item label="别称">
       <el-input  autocomplete="off" v-model='editHosForm.nickname'></el-input>
     </el-form-item>
     <el-form-item label="地址">
       <el-input  autocomplete="off" v-model='editHosForm.address'></el-input>
     </el-form-item>
      <el-form-item label="医院等级">
         <el-select v-model="editHosForm.lv" placeholder="请选择">
              <el-option label="一甲" value="一甲"></el-option>
              <el-option label="二甲" value="二甲"></el-option>
              <el-option label="三甲" value="三甲"></el-option>
              <el-option label="一乙" value="一乙"></el-option>
              <el-option label="二乙" value="二乙"></el-option>
              <el-option label="三乙" value="三乙"></el-option>
         </el-select>
      </el-form-item>
<!--     <el-form-item label="医院人数">
       <el-input  autocomplete="off" v-model='editHosForm.count'></el-input>
     </el-form-item> -->
     <el-form-item label="联系电话">
       <el-input  autocomplete="off" v-model='editHosForm.tel'></el-input>
     </el-form-item>
     <el-form-item label="服务热线">
       <el-input  autocomplete="off" v-model='editHosForm.hotline'></el-input>
     </el-form-item>
     <el-form-item label="医院联系人">
       <el-input  autocomplete="off" v-model='editHosForm.master'></el-input>
     </el-form-item>
      <el-form-item label="医院性质">
         <el-select v-model="editHosForm.nature" placeholder="请选择">
              <el-option label="公立" value="公立"></el-option>
              <el-option label="私立" value="私立"></el-option>
         </el-select>
      </el-form-item>
     <el-form-item class="block">
        <span class="demonstration">创建时间</span>
        <el-date-picker
          v-model="editHosForm.createdDate"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer" >
     <el-button @click="editHosFormVisible = false">取 消</el-button>
     <el-button type="primary" @click="editSub">确 定</el-button>
   </div>
 </el-dialog>
</div>
</template>

<script>
export default {
name:'hospitalManage',
mounted() {
	this.getHosList();
},
data() {
        return {
		labelPosition:'left',
          hospTab: [],//医院表
          addHosForm:{//添加医院表
              hosName:'',
              nickName:'',
              address:'',
              hosLv:'',
              // peopCount:'',
              createdDate:'',
              tel:'',
              hotline:'',
              master:'',
              nature:''
          },
          selectHosForm:{//查询医院表
              hosName:'',
              address:'',
              hosLv:''
          },
          editHosForm:{
              id:'',
              name:'',
              nickname:'',
              address:'',
              lv:'',
              // count:'',
              createdDate:'',
              tel:'',
              hotline:'',
              master:'',
              nature:''
		},
           total: 0, //总数据量
           pagesize: 3, //每页10条
          currentPage: 1, //第一页
          addHosFormVisible: false,//添加医院模态框默认不显示
          editHosFormVisible:false//编辑医院模态框默认不显示
         }
        },
  methods:{
        getHosList: function () {//获得医院列表
          this.$axios.get(this.$api.manager.gethospitallist).then((response) => {
			// console.log(response)
            var result = response.data
            if (result.code === '200') {
				// console.log( response.data.data)
              this.hospTab = result.data
            } else {
              this.$alert(result.message)
            }
          }).catch(() => {
        
          })
        },
		selectHos:function(){//查询医院功能
			this.$axios.post(this.$api.manager.selectHos+"?name="+this.selectHosForm.hosName+'&address='+this.selectHosForm.address+'&grade='+this.selectHosForm.hosLv
			// JSON.stringify({
			// name:this.selectHosForm.hosName,
			// address:this.selectHosForm.address,
			// grade:this.selectHosForm.hosLv
			// })
			).then((response) => {
			// console.log(response)
			var result = response.data
			if (result.code === '200') {
				// console.log(name)
				// console.log( response.data.data)
				this.hospTab = result.data
			} else {
				this.$alert(result.message)
			}
			}).catch(() => {
			})
		},
 //分页按钮功能
         handleCurrentChange(val) {
          this.currentPage=val
          //  console.log(`当前页: ${val}`);
         },
        addHospitalBtn:function(){
        //点击弹出模态框
        this.addHosFormVisible=true
		
		},
        addSub:function(){//新增医院模态框确定按钮
            this.addHosFormVisible=false
		this.$axios.post(this.$api.manager.addHos,
				JSON.stringify({
				name: this.addHosForm.hosName,
				alias: this.addHosForm.nickName,
				address: this.addHosForm.address,
				grade: this.addHosForm.hosLv,
				createdDate:this.addHosForm.createdDate,
				phone:this.addHosForm.tel,
				hotline:this.addHosForm.hotline,
				linkman:this.addHosForm.master,
				nature:this.addHosForm.nature,
				})
		).then((response) => {
					// console.log(response.data.data)
		var result = response.data
		if (result.code === '200') {
						// console.log( response.data.data)
			this.DocTab = result.data
			this.getHosList()
			} else {
			this.$alert(result.message)
			}
		}).catch(() => {
		
		})
		},
		checkHistory:function(hospital){
			this.$router.push({
				path:'/checkHos',
				name:'CheckHos',
				params:{
					hospital:hospital
				}
				})
		},
		edit:function(obj){//点击打开编辑模态框展示信息
			// console.log(obj)
			this.editHosFormVisible=true
			this.editHosForm.id=obj.id
			this.editHosForm.name=obj.name
			this.editHosForm.nickname=obj.alias
			this.editHosForm.address=obj.address
			this.editHosForm.lv=obj.grade
			// this.editHosForm.count=obj.doctor_count
			this.editHosForm.createdDate=obj.createdDate
			this.editHosForm.tel=obj.createdDate
			this.editHosForm.hotline=obj.hotline
			this.editHosForm.master=obj.linkman
			this.editHosForm.nature=obj.nature
		},
		editSub:function(){//编辑医院模态框确定按钮
			this.editHosFormVisible=false
			this.$axios.post(this.$api.manager.editHos,
			JSON.stringify({
				id:this.editHosForm.id,
				name:this.editHosForm.name,
				alias:this.editHosForm.nickname,
				address:this.editHosForm.address,
				grade:this.editHosForm.lv,
				doctor_count:this.editHosForm.count,
				createDate:this.editHosForm.createdDate,
				phone:this.editHosForm.tel,
				hotline:this.editHosForm.hotline,
				linkman:this.editHosForm.master,
				nature:this.editHosForm.nature,
			})).then((response) => {
			// console.log(this.obj)
			var result = response.data
			if (result.code === '200') {
				// console.log(name)
				// console.log( response.data.data)
				this.DocTab = result.data
				this.getHosList()
				this.$alert('修改成功')
			} else {
				this.$alert(response.data.msg)
			}
			}).catch(() => {
			})
    },
    reset () {
      this.selectHosForm.hosName = ''
      this.selectHosForm.address = ''
    },
		del:function(obj){//删除医院操作
			// console.log(obj.id)
			this.$axios.post(this.$api.manager.delHos,
			JSON.stringify(
			{id:obj.id}
			)
			).then((response) => {
				var result = response.data
						// console.log(response.data.msg);
			if (result.code === '200') {
			this.DocTab = result.data
			this.getHosList()
			this.$alert(response.data.msg)
			} else {
			this.$alert(response.data.msg)
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
.el-form--label-left .el-form-item__label{
  text-align: right;
}
.el-date-editor.el-input{
  width: 202px;
}
.demonstration{
  display: inline-block;
  margin-left: 30px;
  margin-right: 15px;
}
</style>
<style scoped>
#bigBox{
background-color: white!important
}
.el-form--inline{
  left: 0px;
}
/*  */
#addxin .el-form-item__label {
  text-align: right;
}
/*  */
.el-form-item__content{
  margin: 100px;
}
  .el-pagination{
  margin-top: 40px;
  text-align: center;
}
h3{
  display: flex;
  justify-content: space-between;
}
.el-select{
  width: 202px;
}
.el-input__icon{
  width: 40px;
}
</style>
