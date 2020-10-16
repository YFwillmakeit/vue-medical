<template>
  <div>
    <label for="name">用户名：</label><el-input id="name" v-model="name" placeholder="请输入内容"></el-input>
    <label for="name">手机号：</label><el-input id="name" v-model="phone" placeholder="请输入内容"></el-input>
    <div id="btn">
        <el-button class="btn" @click="reset">重置</el-button>
        <el-button class="btn" @click="search" type="primary">查询</el-button>
    </div>
    <h3>充值列表（共{{tableData.length }}条记录）</h3>
    <!-- 表格 -->
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        border
        style="width: 100%">
        <el-table-column
        prop="name"
        label="用户名"
        width="200">
        </el-table-column>
        <el-table-column
        prop="duty"
        label="职位"
        width="200">
        <template slot-scope="scope">
          {{scope.row.duty == 0 ? '医生' : '患者' }}
        </template>
        </el-table-column>
        <el-table-column
        prop="time"
        label="充值时间"
        :formatter="DateFormatterState"
        width="200">
        </el-table-column>
        <el-table-column
        prop="acount"
        label="充值金额"
        width="200">
        </el-table-column>
        <el-table-column
        prop="phone"
        label="手机号">
        </el-table-column>
        <!-- <el-table-column
        prop="zip"
        label="操作">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">发布</el-button>
            <el-button type="text" size="small">删除</el-button>
        </template>
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
    <!-- 模态框 -->
    <el-dialog title="详情" :visible.sync="dialogFormVisible">
        <el-form :model="form" label-width="80px">
            <el-form-item>
                <label for="">内容类型：</label><el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <label for="">展示端：</label><el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <label for="">活动内容：</label><el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'RechargeManage',
  data: function () {
    return {
      pageSize: 3,
      dialogFormVisible: false,
      formLabelWidth: false,
      currentPage: 1,
      name: '',//用户名
      phone: '',//电话号
      tableData: [],
      form: {}
    }
  },
  created: function () {
    this.getRechargeList()
  },
  methods: {
    //时间戳
    DateFormatterState: function (row) {
      return new Date(row.time).toLocaleDateString()
    },
    handleClick () {
      this.dialogFormVisible = true
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
    // 添加
    add: function () {
      this.dialogFormVisible = true
    },
    // 获取所有数据 
    getRechargeList () {
      //http://172.16.6.141:8080/recharge/findByLike
      this.$axios.post(this.$api.lm.getRechargeList,{name: this.name, phone: this.phone})
      .then((response) => {
        const result = response.data
        // console.log(response);
        if (result.code == 200) {
          this.tableData = result.data
          // console.log(this.tableData);
        }
      })
    },
    //搜索
    search: function () {
      //http://172.16.6.141:8080/recharge/findByLike
      this.$axios.post(this.$api.lm.getRechargeList,{ name: this.name, phone: this.phone })
      .then((response) => {
        const result = response.data
        // console.log(response);
        if (result.code == 200) {
          this.tableData = result.data
          // this.getDealList()
        }
      })
    },
    //重置
    reset: function () {
      this.name = ''
      this.phone = ''
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
.el-table .cell{
    text-align: center;
  }
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
