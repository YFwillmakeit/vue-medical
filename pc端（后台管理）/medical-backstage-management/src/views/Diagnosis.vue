<template>
  <div>
    <label for="name">诊疗名称：</label><el-input id="name" clearable v-model="tName" placeholder="请输入内容"></el-input>
    <label for="doctor">诊疗医生：</label><el-input id="doctor" clearable v-model="doctorName" placeholder="请输入内容"></el-input>
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
    </div> -->
    <!-- <label for="state">活动状态：</label><el-input id="state" v-model="input" placeholder="请输入内容"></el-input> -->
    <el-button @click="reset" class="btn">重置</el-button>
    <el-button class="btn" @click="search" type="primary">查询</el-button>
    <h3>活动列表（共{{tableData.length }}条记录）</h3>
    <!-- table表格 -->
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        border
        style="width: 100%">
        <el-table-column
        prop="tName"
        label="诊疗名称">
        </el-table-column>
        <el-table-column
        prop="peoples"
        label="参加人数"
        width="100">
        </el-table-column>
        <el-table-column
        prop="a_time"
        label="活动时间"
        :formatter="DateFormatterState"
        width="200">
        </el-table-column>
        <!-- <el-table-columna
        prop="e_time"
        label="报名结束时间"
        :formatter="DateFormatterEnd"
        width="150">
        </el-table-column> -->
        <el-table-column
        prop="money"
        label="活动金额"
        width="120">
        </el-table-column>
        <el-table-column
        prop="doctorNmae"
        label="诊疗医生"
        width="150">
        </el-table-column>
        <el-table-column
        prop="pass"
        label="审核状态"
        width="150">
        <template slot-scope="scope">
          <span >{{scope.row.pass == null ? '已通过' : scope.row.pass == 1 ? '已驳回' : '未审核' }}</span>
        </template>
        </el-table-column>
        <!-- <el-table-column
        prop="zip"
        label="取消时间"
        width="120">
        </el-table-column> -->
        <!-- <el-table-column
        prop="zip"
        label="结束时间"
        width="120">
        </el-table-column> -->
        <!-- <el-table-column
        prop="passDes"
        label="驳回理由"
        width="120">
        <template slot-scope="scope">{{ scope.row.price }}{{ scope.row.artNo }}</template>
        </el-table-column> -->
        <el-table-column
        label="操作">
        <template slot-scope="scope">
          <!-- scope.row.pass == '未审核' ? '通过' : scope.row.pass == '未审核' ? '驳回' : scope.row.pass == '' -->
            <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>  
            <el-button type="text" @click="pass(scope.row.id)"  size="small">{{ scope.row.pass == null ? '' : scope.row.pass == 1 ? '' : '通过' }}</el-button>
            <el-button type="text" @click="reject(scope.row.id)" size="small">{{ scope.row.pass == null ? '驳回' : scope.row.pass == 1 ? '' : '驳回' }}</el-button>
        </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[2, 5, 10, 20]"
      :page-size="pageSize"
      layout=" prev, pager, next"
      :total="tableData.length"
    >
    </el-pagination>
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
      pageSize: 3, // 页面显示条数
      currentPage: 1, //分页  第一页
      id: '',//驳回id
      tName: '', //诊疗名称
      doctorName: '', //医生名称
      dialogFormVisible: false, //模态框
      // value1: '',
      textarea: '', //驳回理由
      tableData: [],  //页面数据
      // form: {}
    }
  },
  created: function () {
    this.getDiagnosisLIst()
  },
  methods: {
    // 时间戳
    DateFormatterState: function (row) {
      return new Date(row.b_time).toLocaleDateString()
    },
    DateFormatterEnd: function (row) {
      return new Date(row.e_time).toLocaleDateString()
    },
    // 跳转页面
    handleClick (id) {
      this.$router.push({ name:'SelectClinicalActivities', params:{ id:id } })
    },
    // 分页
    handleSizeChange: function (size) {
      this.pageSize = size
    },
    // 分页
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
    },
    // 驳回
    reject: function (id) {
      this.dialogFormVisible = true
      this.id = id
      this.textarea = ''
    },
    // 驳回--确认
    sure: function () {
      this.dialogFormVisible = false
      this.tableData.reason = this.textarea    
      // http://172.16.6.135:8080/interm/activity/noPass
      this.$axios.post(this.$api.lm.DiagnosisSure,{id: this.id, passDes: this.textarea})
      .then((response) => {
        const result = response.data
        if (result.code == 200) {
          this.tableData = result.data
          this.getDiagnosisLIst()
        }
      })
    },
    // 渲染页面
    getDiagnosisLIst: function () {
      //http://172.16.6.135:8080/interm/activity/findAll
      this.$axios.post(this.$api.lm.getDiagnosisLIst)
      .then((response) => {
        const result = response.data
        // console.log(result);
        if (result.code == 200) {
          this.tableData = result.data
        }
      })
    },
    // 通过
    pass: function (id) {
      //http://172.16.6.135:8080/interm/activity/pass
      this.$axios.post(this.$api.lm.DiagnosisPass,{ id:id })
      .then((response) => {
        const result = response.data
        // console.log(result);
        if (result.code == 200) {
          this.getDiagnosisLIst()
        }
      })
    },
    //搜索
    search: function () {
      //http://172.16.6.135:8080/interm/activity/findFuzz
      this.$axios.post(this.$api.lm.search,{ ThemeName: this.tName, DoctorName: this.doctorName })
      .then((response) => {
        const result = response.data
        if (result.code == 200) {
          this.tableData = result.data
          // this.getDiagnosisLIst()

        }
      })
    },
    //重置
    reset: function () {
      this.tName = ''
      this.doctorName = ''
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
.el-table .el-button{
    left: 0px;
}
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
