<template>
  <div>
    <label for="name">付款方姓名：</label><el-input id="name" v-model="name" placeholder="请输入内容"></el-input>
    <label for="name">交易流水号：</label><el-input id="name" v-model="dealNumber" placeholder="请输入内容"></el-input>
    <div id="btn">
        <el-button @click="reset" class="btn">重置</el-button>
        <el-button @click="search" class="btn" type="primary">查询</el-button>
    </div>
    <h3>交易列表（共{{tableData.length }}条记录）</h3>
    <!-- 表格 -->
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        border
        style="width: 100%">
        <el-table-column
        prop="fName"
        label="付款方"
        width="150">
        </el-table-column>
        <el-table-column
        prop="sName"
        label="收款方"
        width="150">
        </el-table-column>
        <el-table-column
        prop="NAME"
        label="交易类型"
        width="150">
        </el-table-column>
        <el-table-column
        prop="money"
        label="金额"
        width="150">
        </el-table-column>
        <el-table-column
        prop="dealTime"
        label="交易时间"
        :formatter="DateFormatterTime"
        width="150">
        </el-table-column>
        <el-table-column
        prop="dealNumber"
        label="交易流水号">
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
      pageSize: 3,
      dialogFormVisible: false,
      formLabelWidth: false,
      currentPage: 1,
      name: '',//付款方姓名
      dealNumber: '',//交易流水号
      tableData: [],
      form: {}
    }
  },
  created: function () {
    this.getDealList()
  },
  methods: {
    DateFormatterTime: function (row) {
      return new Date(row.dealTime).toLocaleDateString()
    },
    // 分页
    handleSizeChange: function (size) {
      this.pageSize = size
      // console.log(this.pageSize)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage)
    },
    // 获取所有数据 
    getDealList () {
      //http://172.16.6.135:8080/interm/deal/findAll
      this.$axios.post(this.$api.lm.getDealList)
      .then((response) => {
        // console.log(response);
        const result = response.data
        if (result.code == 200) {
          this.tableData = result.data
        }
      })
    },
    // 查询
    search () {
      //http://172.16.6.135:8080/interm/deal/findByFuzz
      this.$axios.post(this.$api.lm.dealSearch,{ name: this.name, dealNumber: this.dealNumber })
      .then((response) => {
        const result = response.data
        if (result.code == 200) {
          this.tableData = result.data
        }
      })
    },
    // 重置
    reset () {
      this.name = ''
      this.dealNumber = ''
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
}
.block{
    display: inline-block;
}
#btn{
    display: inline-block;
    margin: 0 20px;
}
h3{
    display: flex;
    justify-content: space-between;
}
.el-pagination{
  margin-top: 40px;
  text-align: center;
}
</style>
