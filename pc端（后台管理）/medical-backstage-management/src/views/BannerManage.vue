<template>
  <div>
    <label for="">内容类型：</label><el-select v-model="value" placeholder="请选择">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
  </el-select>
    <div id="btn">
        <el-button class="btn">重置</el-button>
        <el-button class="btn" type="primary">查询</el-button>
    </div>
    <div id="text">
      Banner列表（共{{tableData.length }}条记录）
      <el-button @click="add" class="btn" type="primary">新增</el-button>
    </div>
    <!-- <h4>Banner列表（共{{tableData.length }}条记录） <el-button @click="add" class="btn" type="primary">新增</el-button></h4> -->
    <!-- table表格 -->
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="date"
        label="Banner图"
        width="150">
        </el-table-column>
        <el-table-column
        prop="name"
        label="内容类型"
        width="120">
        </el-table-column>
        <el-table-column
        prop="province"
        label="位置"
        width="120">
        </el-table-column>
        <el-table-column
        prop="city"
        label="展示端"
        width="120">
        </el-table-column>
        <el-table-column
        prop="address"
        label="创建时间"
        width="300">
        </el-table-column>
        <el-table-column
        prop="zip"
        label="状态"
        width="120">
        </el-table-column>
        <el-table-column
        label="操作">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">发布</el-button>
            <el-button type="text" size="small">删除</el-button>
        </template>
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
    <!-- 添加模态框 -->
    <el-dialog title="新增Banner" :visible.sync="dialogFormVisible">
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
            <el-form-item>
              <label class="banner" for="">Banner图：</label>
            <el-upload
                class="avatar-uploader"
                action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    <!-- 编辑模态框 -->
    <el-dialog title="编辑" :visible.sync="dialogFormEditVisible">
        <el-form :model="form" label-width="80px">
            <el-form-item >
                <label for="">内容类型：</label><el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item >
                <label for="">展示端：</label><el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <label for="">活动内容：</label><el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  >
              <label class="banner" for="">Banner图：</label>
              <el-upload 
                  class="avatar-uploader"
                  action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
        </el-form> -->
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormEditVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormEditVisible = false">修 改</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: '',
  data: function () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      pageSize: 3,
      currentPage: 1,
      dialogFormVisible: false,
      imageUrl: '',
      dialogFormEditVisible: false,
      value: '',
      input: '',
      value1: '',
      options: [{
        value: '选项1',
        label: '病历探讨'
      }, {
        value: '选项2',
        label: 'H5活动'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      form: {}
    }
  },
  methods: {
    handleClick () {
      this.dialogFormEditVisible = true
    },
    handleSizeChange: function (size) {
      this.pageSize = size
      // console.log(this.pageSize)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    add: function () {
      this.dialogFormVisible = true
      this.imageUrl = ''
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
.el-table--border .cell{
    text-align: center !important
  }
.el-input{
  width: 500px;
}
.block{
    display: inline-block;
}
.el-table .el-button{
    left: 0px;
}
#btn{
    display: inline-block;
    margin-left: 50px;
}
#text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
}
/* 上传图片 */
  .avatar-uploader .el-upload {
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
    margin-right: -45px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  /* .el-form-item{
    display: flex;
    align-items: center;
    justify-content: center;
  } */
  /* .banner{
    margin-left: -55px;
  } */

  .el-pagination{
  margin-top: 40px;
  text-align: center;
}
</style>
