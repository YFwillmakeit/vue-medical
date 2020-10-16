<template>
  <div>
    <div id="logo_div">
      <div id="img_div">
        <img src="../../assets/logo.jpg"/>
      </div>
      <span>欢 迎 使 用</span>
    </div>
    <div id="login_inputs">
      <mt-field label=""
                placeholder="请输入手机号"
                type="tel"
                :state="loginPhoneState"
                id="login_phone"
                v-model.trim="loginPhone"
                @blur.native.capture="testPhone">
      </mt-field>
      <mt-field label=""
                placeholder="请输入密码"
                type="password"
                :state="loginPasswordState"
                id="login_password"
                v-model.trim="loginPassword"
                @blur.native.capture="testPassword">
      </mt-field>
    </div>
    <mt-button type="default" size="large" id="login" @click="login">登 录</mt-button>
    <div id="login_footer">
      <span id="to_rejester" @click="$router.push('/rejester')">立即注册</span>
      <span id="forget_password" @click="$router.push('/forgetPassword')">忘记密码？</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field } from 'mint-ui';
  import { Button } from 'mint-ui';
  import { Toast } from 'mint-ui';
  Vue.component(Button.name, Button);
  Vue.component(Field.name, Field);
  export default {
    name: "login",
    data() {
      return {
        loginPhoneState: '',
        loginPasswordState: '',
        loginPhone: '',
        loginPassword: ''
      }
    },
    mounted() {
      this.$store.state.powerId = 0;
      this.$store.state.id = 0;
    },
    methods: {
      // 校验手机号
      testPhone() {
        if(/^1[3456789]\d{9}$/.test(this.loginPhone)){
          this.loginPhoneState = 'success';
        }else{
          this.loginPhoneState = 'error';
        }
      },
      // 校验密码
      testPassword() {
        if(/^[a-zA-Z0-9]{6,16}$/.test(this.loginPassword)){
          this.loginPasswordState = 'success';
        }else{
          this.loginPasswordState = 'error';
        }
      },
      // 登录
      login() {
        if(this.loginPhoneState === 'success' && this.loginPasswordState === 'success'){
          // console.log(this.loginPhone,this.loginPassword);
          // axios请求
          this.$axios.post(this.$api.login.login,{
            phone: this.loginPhone,
            password: this.loginPassword
          }).then(response =>{
            console.log('登录返回:',response.data);
            if(response.data.code === '200'){
              // 保存token
              this.$store.state.token = response.data.token;
              window.localStorage.setItem('token',this.$store.state.token);

              // 提示框
              Toast({
                message: '登录成功',
                position: 'middle',
                duration: 1500
              });
              // 跳转首页
              // 2代表患者
              if(response.data.data.powerId === 2){
                this.$router.replace("/patientIndex");
                this.$store.state.powerId = 2;
                this.$store.state.id = response.data.data.id;
              }
              // 1代表医生
              if(response.data.data.powerId === 1){
                this.$router.replace("/main");
                this.$store.state.powerId = 1;
                this.$store.state.id = response.data.data.id;
              }
            }else{
              Toast({
                message: '账号或密码错误',
                position: 'middle',
                duration: 1500
              });
            }
          })
        }else{
          Toast({
            message: '信息不完整',
            position: 'middle',
            duration: 1500
          });
        }

      }
    }
  }
</script>

<style scoped>
  #logo_div {
    margin-top: 3rem;
    text-align: center;
    font-size: 2rem;
    color: rgb(0,199,126);
  }
  #img_div > img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
  #login_inputs {
    margin-top: 4rem;
  }
  #login_phone {
    /*border-top: 1px solid #d8d8d8;*/
  }
  #login_password {
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
  }
  #login {
    height: 4rem;
    width: 60%;
    margin: 4rem auto 0 auto;
    border-radius: 2rem;
    border: 0;
    background: #00C77E;
    color: black;
  }
  #login_footer {
    margin-top: 3rem;
    position: relative;
  }
  #to_rejester {
    position: absolute;
    left: .6rem;
  }
  #forget_password {
    position: absolute;
    right: .4rem;
  }

</style>