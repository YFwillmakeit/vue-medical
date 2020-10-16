<template>
  <div>
     <div class="UserListInput ">
        <div id="user">
           <el-form :inline="true" :model="formInline" class="demo-form-inline" >
         <el-form-item label="患者姓名">
            <el-input v-model="formInline.user" placeholder="请输入" ref="username"></el-input>
         </el-form-item>
         <el-form-item label="患者性别">
            <el-select v-model="formInline.sex" placeholder="全部" ref="usersex">
               <el-option label="男" value="男"></el-option>
               <el-option label="女" value="女"></el-option>
            </el-select>
         </el-form-item>
         <el-form-item label="病历填写程度">
            <el-select v-model="formInline.integrity" placeholder="全部" ref="userintegrity">
               <el-option label="已填写" value="已填写"></el-option>
               <el-option label="未填写" value="未填写"></el-option>
            </el-select>
         </el-form-item>
         <el-form-item label="上次就诊时间">
                  <el-col :span="11">
                     <el-form-item prop="date1">
                     <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" ref="usertime"></el-date-picker>
                     </el-form-item>
                  </el-col>
         </el-form-item>
         <el-form-item>
            <el-button @click="resetForm">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
         </el-form-item>
         </el-form>
        </div>
     </div>
     <!--患者列表-->
     <div class="UserListTable">
        <div class="textuser">患者列表（共{{tableData.length }}条记录）
           <div class="btnRight">
              <!-- <el-button type="text">导出</el-button> -->
              <el-button type="primary" @click="dialogFormVisible = true">新增患者</el-button>
                <!--新增医院模态框-->
              <el-dialog class="addHospital" title="新增患者" :visible.sync="dialogFormVisible">
                  <el-form ref="addUser" class="dialog" :model="addUser" >
                      <el-form-item label="">
                        <el-input v-model="addUser.phone"  placeholder="患者电话" autocomplete="off"></el-input>
                     </el-form-item>
                     <el-form-item label="">
                        <el-input v-model="addUser.name" width="100%" placeholder="患者姓名" autocomplete="off"></el-input>
                     </el-form-item>
                     <el-form-item label="">
                        <el-select v-model="addUser.sex" placeholder="患者性别">
                           <el-option label="男" value="1"></el-option>
                           <el-option label="女" value="0"></el-option>
                        </el-select>
                     </el-form-item>
                     <el-form-item label="">
                        <el-input v-model="addUser.disease_year" placeholder="患者病龄" autocomplete="off"></el-input>
                     </el-form-item>
                     <el-form-item label="">
                        <el-input v-model="addUser.address" width="100%" placeholder="现居住地" autocomplete="off"></el-input>
                     </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                     <el-button @click="dialogFormVisible = false">取 消</el-button>
                     <el-button type="primary" @click="addPatien">确 定</el-button>
                  </div>
               </el-dialog>
           </div>
        </div>
         <el-table
           :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            border
            style="width: 95%">
            <el-table-column
               prop="name"
               label="患者姓名"
               width="120">
            </el-table-column>
            <el-table-column
               prop="sex"
               label="患者性别"
               width="100">
            </el-table-column>
            <el-table-column
               prop="address"
               label="现居住地">
            </el-table-column>
            <el-table-column
               prop="record.time"
               label="上次就诊时间"
               width="150">
            </el-table-column>
            <el-table-column
               prop="schedule"
               label="病历填写程度"
                width="120">
            </el-table-column>
            <el-table-column
               prop="doctor.name"
               label="绑定的医生"
                width="120">
            </el-table-column>
            <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small" ref="checkUser">查看</el-button>
        <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
         <el-button type="text" size="small" @click="changeD(scope.row)">更换医生</el-button>
         <el-button type="text" size="small" @click="delUser(scope.row)">删除</el-button>
         <!--点击编辑的弹出框-->
         <el-dialog class="addHospital" :append-to-body="true"  title="编辑" :visible.sync="editdialogFormVisible">
                  <el-form ref="editUser" class="dialog" :model="editUser" >
                      <el-form-item label="">
                        <el-input v-model="editUser.phone"  :disabled="true" placeholder="患者电话" autocomplete="off"></el-input>
                     </el-form-item>
                     <el-form-item label="">
                        <el-input v-model="editUser.name" width="100%" placeholder="患者姓名" autocomplete="off"></el-input>
                     </el-form-item>
                     <el-form-item label="">
                        <el-select v-model="editUser.sex" placeholder="患者性别">
                           <el-option label="男" value="1"></el-option>
                           <el-option label="女" value="0"></el-option>
                        </el-select>
                     </el-form-item>
                     <el-form-item label="">
                        <el-input v-model="editUser.disease_year" placeholder="患者病龄" autocomplete="off"></el-input>
                     </el-form-item>
                     <el-form-item label="">
                        <el-input v-model="editUser.address" width="100%" placeholder="现居住地" autocomplete="off"></el-input>
                     </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                     <el-button @click="editdialogFormVisible = false">取 消</el-button>
                     <el-button type="primary" @click="editdept(scope.row)">保 存</el-button>
                  </div>
         </el-dialog>
         <!--点击更换医生的弹出框-->
         <el-dialog class="addHospital" :append-to-body="true"  title="更换医生" :visible.sync="changeDoctordialog">
                  <el-form ref="changeDoctor" class="dialog" :model="changeDoctor" >
                      <el-form-item label="">
                         <el-select name="province" id="province" class="classify" v-on:change="indexSelect01" v-model="indexId" ref="changeHistoryName">
                           <el-option value="选择医院"  placeholder="选择医院">选择医院</el-option>
                           <el-option :value="item.name" v-for="(item) in select01" :key="item.id">{{item.name}}</el-option> 
                           </el-select>
                     </el-form-item>
                     <el-form-item label="">
                        <el-select name="city" id="city" class="classify mt10" v-model="indexId2" ref="changeDoctorName">
                           <el-option value="选择医生">选择医生</el-option>
                           <!--:key="k.id"  xi修改为:key="k"  {{k}}修改为{{k}} -->
                           <el-option :value="k.name" v-for="(k) in select02" :key="k.id" ref="k.id">{{k.name}}</el-option>
                        </el-select>
                     </el-form-item> 
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                     <el-button @click="changeDoctordialog = false">取 消</el-button>
                     <el-button type="primary" @click="changeSave">保 存</el-button>
                  </div>
               </el-dialog>
      </template>
    </el-table-column>
         </el-table>
         <div class="block">
            <el-pagination
               background
               @current-change="handleCurrentChange"
               :page-size="1"
               layout=" prev, pager, next"
               :total="tableData.length/pagesize">
            </el-pagination>
         </div>
     </div>
  </div>
</template>

<script>
import { province } from '../assets/json/prov'
import '../assets/css/Userlist.css'

export default {
   created () {
    this.provincearr = province
  },
   name: "Userlist",
   data () {
      return {
         queryTepId:'',  //点击查看时当前的患者id
         thisChangeDocId:'',//当前患者的更改医生的id
         thisEditId:'',   //编辑当前ID
         teplist:[],     // 获取data里面的临时数组存数据
         thisUser:'',    //点击查看时当前患者的信息
         thisBingLi:'',   //点击查看时当前患者的病历记录
         editdialogFormVisible: false,   //编辑的弹框的显示/隐藏
         dialogFormVisible : false,  //新增患者的弹框显示/隐藏
         changeDoctordialog:false,   //更换医生的弹框显示/隐藏
         total: 0,   //总数据量
         pagesize: 3,   //每页10条
         currentPage: 1,   //第一页、
         //-------更换医生的下拉框二级联动----------------------------------
         select01: [],   //获取的一级数组数据
         select02: [],   //获取的二级数组数据
         indexId:'选择医院',//定义分类一的默认值
         indexId2:'选择医生',
         indexNum:0,//定义一级菜单的下标
         //------二级联动结束---------------------------------------
         /*定义空数组装信息*/
          info:[],
         /*定义变量装查询输入的字符串*/
          search:'',
         //搜索框的数据
         formInline: {
          user: '',
          region: '',
          date1: '',
          integrity:'',
          sex:'',
          address:''
        },
         tableData:[],    //患者列表的数据
         //新增患者的表单数据,
         form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
         },
         //新增患者的弹出框表单
         addUser: {
            phone:'',
            name:'',
            sex:'',
            diseaseYear:'',
            address:''
         },
         editUser: {
            phone:'',
            name:'',
            sex:'',
            disease_year:'',
            address:''
         },
         changeDoctor:{
            doctor:'',
            history:''
         }
      }
   },
   watch:{
      thisEditId(){
         console.log("改变的时候")
      },

   },
   mounted () {
       this.getdeptlist()
      //更换医生的二级下拉框的请求   参数医院id
      this.$axios.post(this.$api.user.changeDoc)
      .then((res) => {
         // console.log(res)
         for (var i = 0; i < res.data.data.length; i++) {
              this.select01.push(res.data.data[i]);
            }
         this.indexSelect01();
         // console.log(this.select01);
      })
      .catch((error) => {
         console.log(error)
      });
   },
   methods: {
      //时间转化时间戳的函数
      dataChange(date){
          if(this.mark==0){
                  let date1 = new Date(date[0])
                  let date2 = new Date(date[1])
                  this.current_begin_time = date1.getTime() / 1000;
                  this.current_end_time = date2.getTime() / 1000;
              }else if(this.mark==1){
                  this.current_end_time='';
                  this.current_begin_time='';
              }
      },
      //渲染表格   患者列表接口   已测
      getdeptlist () {
         this.$axios.post(this.$api.user.getdeptlist).then((response) => {
         var result = response.data
         // console.log(result.data)
         if (result.code === "200") {
            this.tableData = result.data
            for(let i=0;i< this.tableData.length;i++){
                this.tableData[i].sex=this.tableData[i].sex==0?'女':'男'
            }
         }
         }).catch(() => {})
      },
      //分页功能
      handleCurrentChange(val) {
         this.currentPage=val
      },
      //重置按钮
      resetForm() {
         this.formInline.user=''
         this.formInline.region=''
         this.formInline.sex=''
         this.formInline.date1='' 
         this.formInline.integrity=''
      },
      //查询按钮
      onSubmit(){
         console.log("开始查询了")
         var username=this.$refs.username.value
         if(username==''){
            username=null
         }
         let usersex=(this.$refs.usersex.value)
         if(usersex==''){
            usersex=null
         }else if(usersex=='女'){
            usersex=0
         }else{
            usersex=1
         }
         var userintegrity=this.$refs.userintegrity.value
         if(userintegrity==''){
            userintegrity=null
         }
          var usertime=this.$refs.usertime.value
          var time=Date.parse(usertime)
         this.$axios.post(this.$api.user.onSubmit,{name:username,sex:usersex,schedule:userintegrity,rTime:time})
         .then((response) => {
         // console.log(response.data.data)
         this.tableData=response.data.data
         for(var i=0;i<this.tableData.length;i++){
            // this.tableData[i].sex=1?"男":"女"
            if(this.tableData[i].sex==0){
               this.tableData[i].sex='女'
            }else{
               this.tableData[i].sex='男'
            }
         }
         }).catch(() => {})

      },
//===================================点击查看病历的所有请求=================================================
     //查看病历
      handleClick () {
         // console.log("病历："+JSON.stringify(arguments[0]))
         // this.$store.dispatch("setUserInfo",JSON.stringify(arguments[0]));   //大佬写的全局存储
         // console.log("userinfo: "+this.thisUser)
         // // this.$router.push({ path:'/queryBingLi'})
         this.$axios.post(this.$api.user.handleClick, JSON.stringify({ patientId:arguments[0].id }))
        .then((data) => {
          if (data.data.code === '200') {
             this.teplist.push(data.data.data[0])
             this.$store.dispatch('changeTeplist',this.teplist)
             this.queryTepId=arguments[0].id
            //  console.log(this.$store.state.teplist)
            this.$router.push({ path:'/queryBingLi',params:{
            patientId:this.queryTepId
            },name:'QueryBingLi'})
          } else {
             console.log(data.data.mes)
          }
        }).catch(() => {})
            
      },
//========================================END===============================================================
      //新增患者接口    已测
      addPatien() {
         this.dialogFormVisible = false
         console.log("添加ok")
         // console.log(this.addUser.phone)
         // console.log(this.addUser.name)
         // console.log(this.addUser.disease_year)
         // console.log(this.addUser.sex)
         // console.log(this.addUser.address)
         this.$axios.post(this.$api.user.addPatien, { phone: this.addUser.phone+'',name: this.addUser.name+'' ,diseaseYear: this.addUser.disease_year+'',sex:this.addUser.sex,address:this.addUser.address})
         .then((res) => {
            console.log(res)
            var result = res.data
            if (result.msg === '添加成功') {
               this.getdeptlist()   //添加成功后渲染列表
            } 
            else {
               this.$alert(result.msg)
            }
            this.dialogTableVisible = false
            this.getdeptlist()
         }).catch(() => {
            this.$alert('请求出错')
         })
         this.addUser.phone=''
         this.addUser.name=''
         this.addUser.disease_year=''
         this.addUser.sex=''
         this.addUser.address=''
      },
      //患者的编辑   
      edit(obj){
         this.editdialogFormVisible=true
         this.editUser.name=obj.name
         this.editUser.phone=obj.phone
         this.editUser.sex=obj.sex
         this.editUser.disease_year=obj.disease_year
         this.editUser.address=obj.address
         console.log(arguments[0].id)
         this.thisEditId=arguments[0].id
      },
      //患者编辑框的确认接口  已测
      editdept() {
         this.editdialogFormVisible= false
         console.log("点编辑了")
         // console.log(this.thisEditId)
         // console.log(this.editUser.name)
         // console.log(this.editUser.phone)
         // console.log(this.editUser.sex)
         // console.log(this.editUser.disease_year)
         // console.log(this.editUser.address)
         this.$axios.post(this.$api.user.editdept, {
         id:this.thisEditId,
         name: this.editUser.name,
         phone: this.editUser.phone+'',
         sex: this.editUser.sex=='男'?'1':'0',
         diseaseYear: this.editUser.disease_year,
         address: this.editUser.address
         }).then((res) => {
         var result = res.data
         if (result.code === '200') {
            this.$alert(result.msg)
            this.getdeptlist()
         } else {
            this.$alert(result.msg)
         }
         }).catch(() => {
         this.$alert('请求出错')
         })
      },
      //患者的删除接口
      delUser () {
         this.$axios.post(this.$api.user.delUser, {
         patientId: arguments[0].id
         }).then((res) => {
         var result = res.data
         if (result.code === '200') {
            this.$alert(result.msg)
            this.getdeptlist()
         } else {
            this.$alert(result.msg)
         }
         }).catch(() => {
         this.$alert('请求出错')
         })
      },
      //点击更换医生接口
      changeD() {
         this.changeDoctordialog=true
         this.thisChangeDocId=arguments[0].id
      },
      //修改更换医生的保存事件
      changeSave() {
         console.log("更换医生保存了")
         this.changeDoctordialog = false
         var changeDoctor=this.$refs.changeDoctorName.value
         var changeHistoryName=this.$refs.changeHistoryName.value
         console.log(changeHistoryName)
         for(var j=0;j<this.select01.length;j++){
            if(this.select01[j].name==changeHistoryName){
               var changeHistoryId=this.select01[j].id
            }
         }
         console.log(changeHistoryId)
         for(var i=0;i<this.select02.length;i++){
            if(this.select02[i].name==changeDoctor){
               var changeDoctorId=this.select02[i].id
            }
         }
            console.log(this.thisChangeDocId)
            console.log(changeDoctorId)

         this.$axios.post(this.$api.user.changeSave,({ "patientId":this.thisChangeDocId,"doctorId":changeDoctorId,"hospitalId":changeHistoryId}))   //参数是该患者的id和要换的医生的名字
        .then((data) => {
         if (data.data.code == '200') {
            console.log()
            console.log("更换医生成功")
            this.getdeptlist()
          } else {
             console.log(data.data.mes)
          } 
        }).catch(() => {});
      },
      //二级联动方法
      indexSelect01(){
        let i = 0,j=0;
        this.select02 = [];
        for (i = 0;i<this.select01.length;i++) {
          if (this.select01[i].name == this.indexId){
            this.indexNum = i;
            for(j = 0;j<this.select01[i].doctors.length;j++){
               this.select02.push(this.select01[i].doctors[j])
            }
            break
          }
        }
      }
   },
//   渲染表格
//   created: function () {
//     this.getdeptlist()
//   }
}
</script>
<style>
.addHospital .el-dialog__body{
    width: 65%;
    margin-left: 50%;
    transform: translate(-50%);
 }
  .UserListTable .el-dialog{
      width: 40%;
   }
  .addHospital .el-select{
      width: 100%;
   }
</style>
<style>
.el-pagination {
    text-align: center;
    margin-top: 40px;
 }
</style>
<style scoped>
.textuser{
   font-size: 1.2em;
   font-weight:900
}
.el-cell{
   text-align: center;
}
.UserListTable{
    margin-left: 10px;
    position: relative;
}
.btnRight{
    position: absolute;
    top: -20px;
    right: 5%;
 }
 .textuser{
    margin-bottom: 10px;
 }
 #user .el-input{
    width: 150px;
 }
 #user .el-select{
    width: 150px;
 }
 #user{
    text-align: center;
 }
 


</style>