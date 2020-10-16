<template>
  <div>
    <label for="name">探讨主题：</label><el-input id="name" v-model="theme" placeholder="请输入内容"></el-input>
    <label for="doctor">诊疗医生：</label><el-input id="doctor" v-model="doctor_name" placeholder="请输入内容"></el-input>
    <!-- <div class="block">
        <span class="demonstration">报名开始时间：</span>
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
    </div>
    <div class="block">
        <span class="demonstration">报名结束时间：</span>
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
    </div>
    <div class="block">
        <span class="demonstration">取消时间：</span>
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
    </div>
    <div class="block">
        <span class="demonstration">探讨开始时间：</span>
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
    </div> -->
    <!-- <label for="state">探讨状态：</label><el-input id="state" v-model="input" placeholder="请输入内容"></el-input> -->
    <el-button @click="reset" class="btn">重置</el-button>
    <el-button @click="search" class="btn" type="primary">查询</el-button>
    <h3>探讨列表（共{{tableData.length }}条记录）</h3>
    <!-- table表格 -->
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        border
        style="width: 100%">
        <el-table-column
        prop="theme"
        label="探讨主题">
        </el-table-column>
        <el-table-column
        prop="Num"
        label="参加人数"
        width="100">
        </el-table-column>
        <el-table-column
        prop="starttime"
        label="探讨开始时间"
        :formatter="DateFormatterState"
        width="200">
        </el-table-column>
        <!-- <el-table-column
        prop="starttime"
        label="报名开始时间"
        width="120">
        </el-table-column> -->
        <!-- <el-table-column
        prop="endtime"
        label="报名结束时间"
        width="300">
        </el-table-column> -->
        <el-table-column
        prop="money"
        label="参会金额"
        width="100">
        </el-table-column>
        <el-table-column
        prop="ddname"
        label="诊疗医生"
        width="150">
        </el-table-column>
        <el-table-column
        prop="STATUS"
        label="审核状态"
        width="100">
        <template slot-scope="scope">
          <span >{{scope.row.STATUS == 2 ? '已通过' : scope.row.STATUS == 1 ? '已驳回' : '未审核' }}</span>
        </template>
        </el-table-column>
        <!-- <el-table-column
        prop="canceltime"
        label="取消时间"
        width="120">
        </el-table-column> -->
        <!-- <el-table-column
        prop="over"
        label="结束时间"
        width="120">
        </el-table-column> -->
        <!-- <el-table-column
        prop="zip"
        label="取消理由"
        width="120">
        </el-table-column> -->
        <el-table-column
        label="操作"
        width="150">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
            <el-button type="text" @click="pass(scope.row.id)" :passStates="passStates == true ? 'hide' : 'show'" size="small">{{ scope.row.starttime > new Date().getTime() && scope.row.STATUS == 0 ? "通过" : "" }}</el-button>
            <el-button type="text" @click="reject(scope.row)" size="small">{{ scope.row.began > new Date().getTime() && scope.row.STATUS == "待审核" || scope.row.STATUS != 1 ? "驳回" : "" }}</el-button>
        </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div id="pagination">
      <el-pagination 
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[2, 4, 20, 40]"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="tableData.length"
    >
    </el-pagination>
    </div>
    <!-- 驳回 -->
    <el-dialog title="驳回理由" :visible.sync="dialogFormVisible">
        <el-form >
            <label for="">驳回理由：</label><textarea v-model="textarea" name="" id="" cols="30" rows="10"></textarea>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: '',
  data: function () {
    return {
      pageSize: 4,  //页面数据条数
      currentPage: 1,//第一页
      id: '', //查看详情id
      dialogFormVisible: false, //模态框
      textarea: '', //文本框
      theme: '', //探讨名称
      doctor_name: '', //诊疗医生
      tableData: [], //数据
      passStates: false
    }
  },
  created(){
    this.getMedicalLIst()
  },
  methods: {
    //时间戳转化
    formatDate(now) { 
      var year=now.getFullYear();  //取得4位数的年份
      var month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
      var date=now.getDate();      //返回日期月份中的天数（1到31）
      //var hour=now.getHours();     //返回日期中的小时数（0到23）
      //var minute=now.getMinutes(); //返回日期中的分钟数（0到59）
      //var second=now.getSeconds(); //返回日期中的秒数（0到59）
      return year+"/"+month+"/"+date   //+" "+hour+":"+minute+":"+second; 
    },
    //时间戳
    DateFormatterState: function (row) {
      return this.formatDate(new Date(row.starttime))
    },
    // 详情页面
    handleClick (id) {
      this.$router.push({ name:'SelectCaseHistory', params:{ id:id } })
    },
    // 分页
    handleSizeChange: function (size) {
      this.pageSize = size
      // console.log(this.pageSize)
    },
    // 分页
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage)
    },
    // 驳回
    reject: function (obj) {
      this.textarea = ''
      this.dialogFormVisible = true
      this.id = obj.id
    },
    // 确定驳回
    sure: function () {
      // console.log(this.textarea)
      this.dialogFormVisible = false
      //http://172.16.6.132:8080/interm/discuss/reject
      this.$axios.post(this.$api.lm.sure, 
       JSON.stringify({ id:this.id, canceldes: this.textarea }))
      .then((response) => {
        console.log(response);
        const result = response.data
        if (result.code == 200) {
          console.log(result);
          this.getMedicalLIst()
        }
      })
    },
    // 渲染页面
    getMedicalLIst () {
      //http://172.16.6.132:8080/interm/discuss/page
      this.$axios.post(this.$api.lm.getMedicalLIst)
      .then((response) => {
        const result = response.data
        // console.log(response);
        if (result.code == 200) {
          this.tableData = result.data
          // console.log(this.tableData);
        }
      })
    },
    // 通过
    pass: function (id) {
      // this.isDisabled = true
      //http://172.16.6.132:8080/interm/discuss/pass
      this.$axios.post(this.$api.lm.pass, 
       JSON.stringify({ id:id }))
      .then((response) => {
        const result = response.data
        if (result.code == 200) {
          this.getMedicalLIst()
        }
      })
    },
    //搜索
    search: function () {
      //http://172.16.6.132:8080/interm/discuss/like
      this.$axios.post(this.$api.lm.medicalsearch+'?theme='+this.theme+'&doctorname='+this.doctor_name)
      .then((response) => {
        // console.log(response);
        const result = response.data
        if (result.code == 200) {
          this.tableData = result.data
          // console.log(this.tableData);
        }
      })
    },
    //重置
    reset: function () {
      this.theme = ''
      this.doctor_name = ''
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
.el-input{
    width: 150px;
    margin-right: 20px;
    /* margin-top: 10px; */
}
.block{
    display: inline-block;
}
/* .el-table .el-button{
    left: 0px;
} */
.el-form{
  display: flex;
  justify-content: space-between;
}
textarea{
  width: 85%;
}
.el-pagination{
  margin-top: 40px;
  text-align: center;
}
.el-button--default{
  margin-left: 50px;
}
</style>
