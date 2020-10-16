<template>
<div>

  <!--筛选功能-->

<el-form :inline="true"  class="demo-form-inline" :model="selectDocForm">
  <el-form-item label="医生名称" >
    <el-input  placeholder="医生名称" v-model='selectDocForm.Name' autocomplete="off"></el-input>
  </el-form-item>
<!--  <el-form-item label="医生性别">
    <el-select  placeholder="全部">
      <el-option label="男" value="shanghai"></el-option>
      <el-option label="女" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->
      <el-form-item label="所属医院">
         <el-select v-model="editDocForm.belongto" placeholder="所属医院" ref='aaa'>
              <el-option :value="item.name" v-for="(item) in select01" :key="item.id" >{{item.name}}</el-option>
         </el-select>    
     </el-form-item>
  <el-form-item>
    <el-button @click="reset">重置</el-button>
    <el-button type="primary" @click='selectDoc'>查询</el-button>
  </el-form-item>
</el-form>
   
     
  <!--新增医生功能-->
      <!-- <el-button type="primary" @click='addDocBtn'>新增医生</el-button> -->
  <!--显示医生表格-->
     <h3>医生列表（共{{DocTab.length }}条记录）<el-button type="primary" @click='addDocBtn'>新增医生</el-button></h3>
     <el-table
    :data="DocTab.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="80">
    </el-table-column>
    <el-table-column
      prop="dname"
      label="医生姓名">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="80">
    </el-table-column>
    <el-table-column
      prop="hname"
      label="所属医院">
    </el-table-column>
   <el-table-column
      prop="own"
      label="拥有患者"
      width="80">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号">
    </el-table-column>
    <el-table-column
      prop="position"
      label="职称"
      width="130">
    </el-table-column>
    <el-table-column
      prop="work_year"
      label="从医年限"
      width="130">
    </el-table-column>
    <el-table-column
      label="操作"
      width="137">
      <template slot-scope='scope'>
        <el-button @click="checkDoc(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click='editDoc(scope.row)'>编辑</el-button>
        <el-button type="text" size="small" @click='delDoc(scope.row)'>删除</el-button>
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
      :total="DocTab.length/pagesize">
    </el-pagination>
  </div>
  
  <!--新增医生模态框-->
  <el-dialog title="新增医生" :visible.sync="addDocFormVisible" >
    <el-form :rules="add" :model='addDocForm' ref="addDocForm" :inline="true" :label-position="labelPosition" label-width="80px">
<!--头像上传-->
<!--    <el-upload
      class="avatar-uploader"
      action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
     头像上传
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload> -->
	<br/>
      <el-form-item label="姓名"  prop="Name">
        <el-input  autocomplete="off" v-model='addDocForm.Name'></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
         <el-select v-model="addDocForm.sex" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
         </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="tel">
        <el-input  autocomplete="off" v-model='addDocForm.tel'></el-input>
      </el-form-item>
      <el-form-item label="所属医院" prop="belongto">
         <el-select v-model="addDocForm.belongto" placeholder="所属医院" >
              <el-option :value="item.id" v-for="(item) in select01" :key="item.id" >{{item.name}}</el-option>
         </el-select>    
     </el-form-item>
      <el-form-item label="职称" prop="position">
         <el-select v-model="addDocForm.position" placeholder="职称">
              <el-option label="主任" value="主任"></el-option>
              <el-option label="主治医生" value="主治医生"></el-option>
              <el-option label="住院医师" value="住院医师"></el-option>
              <el-option label="护士" value="护士"></el-option>
              <el-option label="副主任医师" value="副主任医师"></el-option>

         </el-select>      
      </el-form-item>
      <el-form-item label="科室" prop="department">
        <el-select v-model="addDocForm.department" placeholder="科室">
              <el-option :value="item.id" v-for="(item) in select02" :key="item.id">{{item.name}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="从医年限" prop="time">
        <el-input  autocomplete="off" v-model='addDocForm.time'></el-input>
      </el-form-item>
      <el-form-item label="医生类型" prop="type">
         <el-select v-model="addDocForm.type" placeholder="请选择">
              <el-option label="内科医生" value="内科医生"></el-option>
              <el-option label="外科医生" value="外科医生"></el-option>
              <el-option label="儿科医生" value="儿科医生"></el-option>
              <el-option label="中医" value="中医"></el-option>

         </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addDocFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addDocSub">确 定</el-button>
    </div>
  </el-dialog>
  
  
  
 <!--编辑医生模态框-->
  <el-dialog title="编辑医生" :visible.sync="editDocFormVisible" >
    <el-form :model='editDocForm' :inline="true" :label-position="labelPosition" label-width="80px">
<!--头像上传-->
<!--    <el-upload
      class="avatar-uploader"
      action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
     头像上传
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload> -->
	<br/>
      <el-form-item label="姓名" >
        <el-input  autocomplete="off" v-model='editDocForm.Name'></el-input>
      </el-form-item>
      <el-form-item label="性别">
         <el-select v-model="editDocForm.sex" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
         </el-select>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input  autocomplete="off" v-model='editDocForm.tel'></el-input>
      </el-form-item>
      <el-form-item label="所属医院">
         <el-select v-model="editDocForm.belongto" placeholder="所属医院">
              <el-option :value="item.id" v-for="(item) in select01" :key="item.id">{{item.name}}</el-option>
         </el-select>    
     </el-form-item>
      <el-form-item label="职称" >
         <el-select v-model="editDocForm.position" placeholder="职称">
              <el-option label="主任" value="主任"></el-option>
              <el-option label="主治医生" value="主治医生"></el-option>
              <el-option label="住院医师" value="住院医师"></el-option>
              <el-option label="护士" value="护士"></el-option>
              <el-option label="副主任医师" value="副主任医师"></el-option>
         </el-select>      
      </el-form-item>
      <el-form-item label="科室" >
        <el-select v-model="editDocForm.department" placeholder="科室">
              <el-option :value="item.name" v-for="(item) in select02" :key="item.id">{{item.name}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="从医年限">
        <el-input  autocomplete="off" v-model='editDocForm.time'></el-input>
      </el-form-item>
      <el-form-item label="医生类型">
         <el-select v-model="editDocForm.type" placeholder="请选择">
              <el-option label="内科医生" value="内科医生"></el-option>
              <el-option label="外科医生" value="外科医生"></el-option>
              <el-option label="儿科医生" value="儿科医生"></el-option>
              <el-option label="中医" value="中医"></el-option>
         </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editDocFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="editDocSub">确 定</el-button>
    </div>
  </el-dialog>

     

</div>
</template>

<script>
export default {
name:'hospitalManage',
mounted() {
	//获取医院名称下拉框的请求
	this.$axios.post(this.$api.manager.hosname).then((response) => {
	// console.log(response)
	var result = response.data
	if(result.code==='200'){
		// console.log(result.data.length)
		for(var i=0;i<result.data.length;i++){
			this.select01.push(result.data[i])
		}
	} else {
		this.$alert(result.msg)
	}
	}).catch(() => {
	}),
	//获取医院科室下拉框内容的请求
	this.$axios.post(this.$api.manager.departmentName).then((response) => {
	// console.log(response)
	var result = response.data
	if(result.code==='200'){
		// console.log(result.data.length)
		for(var i=0;i<result.data.length;i++){
			this.select02.push(result.data[i])
		}
	} else {
		this.$alert(result.msg)
	}
	}).catch(() => {
	})
},

data() {
        return {
           add: {
          Name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],sex: [
            { required: true, message: '请选择性别', trigger: 'blur' }
          ],belongto: [
            { required: true, message: '请选择医院', trigger: 'blur' }
          ],type: [
            { required: true, message: '请选择医生类型', trigger: 'blur' },
          ],tel: [
            { required: true, message: '请输入电话', trigger: 'blur' },
            { min: 11, max: 11, message: '长度11 个字符', trigger: 'blur' }
          ],time: [
            { required: true, message: '请输入年限', trigger: 'blur' },
          ],department: [
            { required: true, message: '请选择科室', trigger: 'blur' },
          ],position: [
            { required: true, message: '请选择职称', trigger: 'blur' },
          ]
          },
          
          imageUrl: '',//头像上传路径
          labelPosition: 'right',
          DocTab: [],
          select01:[],//存放从数据库中获取的有哪些医院
          select02:[],//存放从数据库中获取的医院科室
          addDocForm:{//新增医生表
              Name:'',
              sex:'',
              belongto:'',
              type:'',
              tel:'',
              time:'',
              department:'',
              position:'',
          },
          editDocForm:{//编辑医生信息表
              id:'',
              Name:'',
              sex:'',
              belongto:'',
              type:'',
              tel:'',
              time:'',
              department:'',
              position:'',
              departmentId:''
          },
          selectDocForm:{
              Name:'',
              belongto:'',
              sex:''
          },
           total: 0, //总数据量
           pagesize: 3, //每页10条
          currentPage: 1, //第一页
          addDocFormVisible: false,//新增医生模态框默认不显示
          editDocFormVisible:false//编辑医生模态框默认不显示
         }
        },
		created(){
			this.getDocList();
		},
  methods:{
        getDocList: function () {
          this.$axios.post(this.$api.manager.getDocList).then((response) => {
			// console.log(response.data.data)
            var result = response.data
            if (result.code === '200') {
				// console.log( response.data.data)
              this.DocTab = result.data
            } else {
              this.$alert(result.message)
            }
          }).catch(() => {
        
          })
        },
		selectDoc:function(){//查询医生
			// console.log(this.selectDocForm.belongto)
			var bb=this.$refs.aaa.value
			// console.log(bb)
			const newPost = this.$axios.post(this.$api.manager.selectDoc1, 
			JSON.stringify({
				name:this.selectDocForm.Name,
				hname:bb,
			}));
			
			newPost.then((response) => {
			// console.log()
			var result = response.data
			if (result.code === '200') {
				console.log(response)
				// console.log(response.data.data)
				this.DocTab = result.data
				// console.log(this.DocTab)
				
			} else {
				this.$alert(response.data.msg)
			}
			}).catch(() => {
			})
		},
		editDoc:function(obj){//编辑医生信息按钮显示信息
			this.editDocFormVisible=true
			// console.log(obj)
			this.editDocForm.id=obj.id
			this.editDocForm.Name=obj.dname
			this.editDocForm.sex=obj.sex 
			this.editDocForm.tel=obj.phone
			this.editDocForm.belongto=obj.hname
			this.editDocForm.position=obj.position
			this.editDocForm.department=obj.dename
			this.editDocForm.time=obj.work_year
			this.editDocForm.type=obj.type
			this.editDocForm.departmentId=obj.department_id
		},
		editDocSub:function(){//编辑医生模态框确定按钮
			this.editDocFormVisible=false
			this.$axios.post(this.$api.manager.editDoc,
			JSON.stringify({
              id:this.editDocForm.id,
              name: this.editDocForm.Name,
              sex: this.editDocForm.sex,
              phone: this.editDocForm.tel,
              hname: this.editDocForm.belongto,
              position:this.editDocForm.position,//position为医生职位
              departmentId:this.editDocForm.departmentId,
              workYear:this.editDocForm.time,
              type:this.editDocForm.type,
			})).then((response) => {
			// console.log(this.obj)
			var result = response.data
			if (result.code === '200') {
				// console.log(response)
				// console.log( response.data.data)
				this.DocTab = result.data
				this.getDocList()
				this.$alert(result.msg)
			} else {
				this.$alert(result.msg)
			}
			}).catch(() => {
			})
		},
    delDoc:function(obj){//删除医生操作
			// console.log(obj.id)
			this.$axios.post(this.$api.manager.delDoc,
			JSON.stringify(
			{id:obj.id}
			)).then((response) => {
						// console.log(response.data.data)
			var result = response.data
			if (result.code === '200') {
							// console.log( response.data.data)
			this.DocTab = result.data
			this.getDocList()
			this.$alert(result.msg)
			} else {
			this.$alert(result.msg)
			}
			}).catch(() => {
			
			})
    },
    //重置
    reset () {
      this.selectDocForm.Name = ''
      this.editDocForm.belongto = ''
    },
		checkDoc:function(doctor){
			this.$router.push({ 
				path:'/checkDoc',
				name:'CheckDoc',
				params:{
					doctor:doctor
				}
				})
		},
 //分页按钮功能
         handleCurrentChange(val) {
          this.currentPage=val
          //  console.log(`当前页: ${val}`);
         },
        addDocBtn:function(){
        //点击弹出新增医生模态框
        this.addDocFormVisible=true
        this.addDocForm.Name = ''
        this.addDocForm.sex = ''
        this.addDocForm.belongto = ''
        this.addDocForm.type = ''
        this.addDocForm.tel = ''
        this.addDocForm.time = ''
        this.addDocForm.department = ''
        this.addDocForm.position = ''
		},
        addDocSub:function(){//新增医生模态框确定按钮
            this.addDocFormVisible=false;
			// var c=this.$refs.c.value;
			// for(var i=0;i<this.select01.length;i++){
			// 	if(this.select01[i].hospitalname==c){
			// 		var addDoctorId=this.select01[i].hospitalId
			// 	}
			// }
			this.$axios.post(this.$api.manager.addDoc,
			JSON.stringify({
              name: this.addDocForm.Name,
              sex: this.addDocForm.sex,
              phone: this.addDocForm.tel,
              position:this.addDocForm.position,//position为医生职位
              departmentId:this.addDocForm.department,
              workYear:this.addDocForm.time,
              type:this.addDocForm.type,
              hospitalId:this.addDocForm.belongto
			})).then((response) => {
			// console.log(this.obj)
			var result = response.data
			if (result.code === '200') {
				console.log(response)
				console.log( response.data.data)
				this.DocTab = result.data
				this.getDocList()
				this.$alert(result.msg)
			} else {
        console.log(1);
        this.$alert(result.msg)
        
			}
			}).catch(() => {
			})
		},
		
//头像长传方法
		handleAvatarSuccess(res, file) {
		this.imageUrl = URL.createObjectURL(file.raw);
		},
		beforeAvatarUpload(file) {
		const isJPG = file.type === 'image/jpeg';
		const isLt2M = file.size / 1024 / 1024 < 2;
		
		if (!isJPG) {
		this.$message.error('上传头像图片只能是 JPG 格式!');
		}
		if (!isLt2M) {
		this.$message.error('上传头像图片大小不能超过 2MB!');
		}
		return isJPG && isLt2M;
		}
//头像上传方法结束

  }
}
</script>
<style>
.el-table td, .el-table th{
  text-align: center !important
}
</style>
<style scoped>
 .avatar-uploader .el-upload {
	border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
	border: 1px dashed #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
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
</style>
