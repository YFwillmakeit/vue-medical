<template>
  <div class="farme_box">
      <el-container class="aside">
        <el-aside width="200px" >
            <div class="logoSize">
                <img src="../assets/logo5.jpg" alt=""><br>
                  <span>穆斯林癫痫</span>
            </div>
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#2D3E4E"
                    text-color="#fff"
                    active-text-color="#25AFF3" unique-opened>
                    <el-submenu index="1" >
                        <template slot="title">
                        <i class="el-icon-s-help"></i>
                        <span>患者管理</span>
                        </template>
                        <el-menu-item index="1-1" @click='patientmap'>患者地图</el-menu-item>
                        <el-menu-item index="1-2"  @click='patientlist'>患者列表</el-menu-item>
                    </el-submenu>
                     <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-s-help"></i>
                        <span>医院信息管理</span>
                        </template>
                        <el-menu-item index="2-1" @click='hostoryManage'>医院管理</el-menu-item>
                        <el-menu-item index="2-2" @click='doctorManage'>医生管理</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" @click='diagnosis'>
                        <i class="el-icon-s-help"></i>
                        <span slot="title">诊疗活动管理</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click='medical_history'>
                        <i class="el-icon-s-help"></i>
                        <span slot="title">病历活动管理</span>
                    </el-menu-item>
                    <el-menu-item index="5" @click='dealManage'>
                        <i class="el-icon-s-help"></i>
                        <span slot="title">交易信息统计</span>
                    </el-menu-item>
                    <el-menu-item index="6" @click='bannerManage'>
                        <i class="el-icon-s-help"></i>
                        <span slot="title">BANNER管理</span>
                    </el-menu-item>
                    <el-menu-item index="7" @click='rechargeManage'>
                        <i class="el-icon-s-help"></i>
                        <span slot="title">充值记录</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container>
          <el-header>
              <div class="headLeft">
                  <i class="el-icon-menu"></i>
                  后台管理系统
              </div>
              <div class="headRight">
                  <!-- <i class="el-icon-setting"></i>
                  <i class="el-icon-bell"></i> -->
                  <div class="tou0">
                  <img src="../assets/tou.jpg" class="tou" alt="">
                  <span >
                    admin
                  </span>
                  <el-button type="text"  @click="open" class="iconfont icon-tuichu"></el-button>
                  <el-button type="text"  @click="open" class="quit">退出</el-button>
                  </div>
                  
              </div>
          </el-header>
          <el-main>
              <router-view></router-view>
          </el-main>
          <el-footer>
              癫痫医护APP-版权所有 © 2020
          </el-footer>
        </el-container>
        </el-container>
  </div>
</template>

<script>
import '../assets/css/Farme.css'
import '../assets/css/iconfont/iconfont.css'
export default {
  name: "Farme",
  data () {
      return {}
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      patientmap(){
        this.$router.push({ path:'/farme'})
      },
      patientlist(){
        this.$router.push({ path:'/userlist'})
      },
      diagnosis (){
        this.$router.push({ path:'/diagnosis'})
      },
      hostoryManage () {
        this.$router.push({ path:'/hostoryManage'})
      },
      doctorManage () {
        this.$router.push({ path:'/doctorManage'})
      },
      medical_history() {
        this.$router.push({ path:'/medical_history'})
      },
      dealManage () {
        this.$router.push({ path:'/dealManage'})
      },
      bannerManage () {
        this.$router.push({ path:'/bannerManage'})
      },
      rechargeManage () {
        this.$router.push({ path:'/rechargeManage'})
      },
      open() {
        this.$confirm('是否退出登录？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.localStorage.removeItem('token')
          this.$router.push({ path:'/login'})
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      }
    }
}
</script>

<style scoped>
    .tou0{
      height: 60px;
      display: inline-block;
      line-height: 60px;
    }
    .tou{
      width: 35px;
      height: 35px;
      border-radius: 35px;
      margin:0 0px -10px 0
    }
    .quit{
      color:black;
      margin-left: -2px;
      /* font-size: 30px; */
    }
    .iconfont{
      font-size: 20px;
      color: black;
      margin-left: 30px;
      vertical-align: middle;
    }
    .aside{
        height: 657px; 
    }
    .el-header, .el-footer {
        background-color:#fff;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-header{
        border-bottom:1px solid lightgray ;
    }
    .el-footer{
        border-top:1px solid lightgray ;
        /* background-color: #2D3E4E; */
        /* color: white; */
        /* margin:0 20px; */
    }
    .el-aside {
    background-color: #2D3E4E;
    color: #333;
    text-align: center;
    line-height: 100px; 
    }
  .el-main {
    color: #333;
    padding: 20px;
  }
    body > .el-container {
    margin-bottom: 40px;
  }
  .tac{
      width: 200px;
      text-align: left;
  }
  .headLeft{
      text-align: left;
      float: left;
  }
  .headRight{
      text-align: right;
      padding-right: 15px;
  }
  .el-icon-bell{
      margin: 0 15px;
  }
  .logoSize{
      height: 150px;
      color: white;
      
      /* background-color: white; */
  }
  .logoSize img{
    height: 80px;
    width: 80px;
    border-radius: 80px;
    margin-top: 15px;
  }
  .logoSize span{
    position: relative;
    top: -70px;
    
  }
  ul{
    border: 0px;
  }
  </style>