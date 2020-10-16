<template>
  <div>
      <el-page-header @back="goBack">
      </el-page-header>
       <!-- <div id="top">
          <h2>诊疗活动信息</h2>
          <span>探讨主题：{{  }}</span>
      </div>
      <div id="content">
          <div id="section1">
              <span>诊疗医生：{{  }}</span>
              <span>参会医生：rtyrhdfghdghdg324546456345</span>
          </div>
          <div id="section2">
            <span>诊疗医生：{{  }}</span>
              <span>活动时间：{{  }}</span>
              <span>探讨持续时间：{{  }}分钟</span>
              <span>活动金额：{{  }}</span>
          </div>
          <div id="section3">
              <span>费用类型：{{  }}</span>
              <span>探讨费用：{{  }}</span>
              <span>患者信息：{{ }}</span>
          </div>
        <div id="section4">
            <span>诊疗说明：</span>
            <el-input 
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            maxlength="30"
            v-model="textarea">
          </el-input>
        </div>
      </div> -->
      <h3>诊疗活动报名信息（共{{tableData.length }}条记录）</h3>
       <!-- 表格 -->
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="name"
        label="姓名"
        width="250">
        </el-table-column>
        <el-table-column
        label="性别"
        width="250">
        <template slot-scope="scope">
          <span>{{scope.row.sex === 1 ? '男' : '女'}}</span>
        </template>
        </el-table-column>
        <el-table-column
        prop="age"
        label="病龄"
        width="250">
        </el-table-column>
        <el-table-column
        prop="a_time"
        :formatter="DateFormatter"
        label="报名时间">
        </el-table-column>
    </el-table>
    <!-- 分页 -->
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
</template>

<script>
export default {
  name: '',
  data: function () {
    return {
      pageSize: 4,
      currentPage: 1,
      tableData: [],
      textarea: '',
      form: {}
    }
  },
  created(){
    this.getSelect()
  },
  methods: {
    DateFormatter: function (row) {
      return new Date(row.a_time).toLocaleDateString()
    },
    handleSizeChange: function (size) {
      this.pageSize = size
      // console.log(this.pageSize)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage)
    },
    goBack: function () {
      this.$router.push('Diagnosis')
    },
    getSelect: function () {
      // console.log(this.$route.params.id);
      //http://172.16.6.135:8080/interm/activity/findSign
      this.$axios.post(this.$api.lm.selectDiagno,{ aId:this.$route.params.id })
      .then((response) => {
        const result = response.data
        if (result.code == 200) {
          this.tableData = result.data
          // console.log(response);
        }
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
<style scoped>
#top{
    display: flex;
    justify-content: center;
    align-items: center;
}
#top span{
    margin-left: 20px;
}
#content{
    /* border: 1px solid red; */
    width: 100%;
    margin-left: 50%;
    transform: translate(-50%);
}
#content div{
    display: flex;
    justify-content:space-between;
    margin-top: 30px;
    /* width: 70%;
    border: 1px solid red;
    text-align: center; */
}
#section4 span{
  width: 90px;
}
textarea{
    width: 80%;
    border-left: 1px solid;
    height: 50px;
}
.el-pagination{
  margin-top: 40px;
  text-align: center;
}
</style>
