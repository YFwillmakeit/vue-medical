<template>
  <div>
      <el-page-header @back="goBack">
      </el-page-header>
      <div id="top">
          <h2>病历探讨信息</h2>
          <span>探讨主题：{{ caseStudy.theme }}</span>
      </div>
      <div id="content">
          <div id="section1">
              <span>主治医生：{{ caseStudy.dname }}</span>
              <!-- <span>参会医生：rtyrhdfghdghdg324546456345</span> -->
          </div>
          <div id="section2">
              <span>探讨开始时间：{{ new Date(caseStudy.starttime).toLocaleDateString() }}</span>
              <span>探讨持续时间：{{ caseStudy.durations }}分钟</span>
              <span>报名时间：{{ new Date(caseStudy.began).toLocaleDateString() }}</span>
          </div>
          <div id="section3">
              <span>费用类型：{{ caseStudy.money_type == 0 ? '收费' : '免费' }}</span>
              <span>探讨费用：{{ caseStudy.money }}</span>
              <span>患者信息：{{ caseStudy.pname }}</span>
          </div>
        <div id="section4">
            <span>探讨说明：</span>
            <el-input 
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            maxlength="30"
            v-model="textarea">
          </el-input>
        </div>
      </div>
      <h3>病历探讨报名信息（共{{tableData.length }}条记录）</h3>
       <!-- 表格 -->
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        border
        style="width: 100%">
        <el-table-column
        prop="name"
        label="姓名">
        </el-table-column>
        <el-table-column
        prop="sex"
        label="性别">
        </el-table-column>
        <el-table-column
        prop="position"
        label="职称">
        </el-table-column>
        <el-table-column
        prop="btime"
        :formatter="DateFormatterState"
        label="报名时间">
        </el-table-column>
        <!-- <el-table-column
        prop="address"
        label="参与讨论"
        width="300">
        </el-table-column> -->
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
  name: 'SelectCaseHistory',
  data: function () {
    return {
      pageSize: 3, //分页
      currentPage: 1, //分页
      tableData: [], //初始渲染页面信息
      caseStudy: [], //病历探讨信息
      textarea: '',
      form: {}
    }
  },
  created () {
    this.getSelect()
  },
  methods: {
    DateFormatterState: function (row) {
      return new Date(row.btime).toLocaleDateString()
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
      this.$router.push('Medical_history')
    },
    getSelect: function () {
      // console.log(this.$route.params.id);
      //http://172.16.6.132:8080/interm/discuss/findById
      this.$axios.post(this.$api.lm.selectCaseHistory, { discussId:this.$route.params.id })
      .then((response) => {
        const result = response.data
        // console.log(response);
        if (result.code == 200) {
          this.caseStudy = result.data
          this.tableData = result.data.doctorlist
          this.textarea = result.data.des
          // console.log(this.tableData);
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
/* h2{
    text-align: center;
} */
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
}
#section4 span{
  width: 90px;
}
textarea{
    width: 88%;
    border-left: 1px solid;
    height: 50px;
}
/* #textarea{
  width: 88%;
} */
.el-pagination{
  margin-top: 40px;
}
.el-pagination{
  margin-top: 40px;
  text-align: center;
}
</style>
