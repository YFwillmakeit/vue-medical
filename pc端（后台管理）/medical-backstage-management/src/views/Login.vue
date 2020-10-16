<template>
 <div class="login_container">
   <div class="login_box">
     <!--头像区域-->
     <div class="logo_box">
       <img src="../assets/logo5.jpg" alt="">
     </div>
      <!--表单区域-->
      <el-form @keyup.enter.native='userLogin' ref="loginFormRef" :model="loginFrom" :rules="loginFormRules" class="login_form">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginFrom.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input v-model="loginFrom.password"  type="password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!--按钮区域-->
        <el-form-item class="btns">
          <el-button type="primary"   @click="userLogin">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Login',
  // mounted(){
  //   this.userLogin()
  // },
  data () {
    return {
      //这是登录表单的数据绑定对象
      loginFrom:{
        username: '',
        password: ''
      },
      //表单的验证规则
      loginFormRules: {
        //用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        //密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //点击重置按钮，重置登录表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields();
    },
    userLogin () {
      // this.$router.push('/farme')
      //http://172.16.6.135:8080/interm/static/login
     this.$axios.post(this.$api.user.login, { username: this.loginFrom.username, password: this.loginFrom.password })
        .then((data) => {
          if (data.data.code == '200') {
            window.localStorage.setItem('token',data.data.token)
            this.$router.replace('/farme')
          } else {
            this.$alert(data.data.msg)
          }
        }).catch((err) => {
          console.log(err)
          this.$message.error('请求出错，请联系管理员')
        })
      }
    }
  }
  

</script>

<style scoped>

.login_container{
  /* background-color: #2b4b6b; */
  height: 100%;
  background-image: url('../assets/111.jpg');
  background-repeat:repeat-x;
  width: 100%;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: rgba(255,255,255,0.3);

  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.logo_box{
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
    background-color: rgba(255,255,255,0.5);

}
.logo_box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
  .btns{
    display: flex;
    justify-content: flex-end;
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    
  }
</style>
