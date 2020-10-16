<template>
  <div>
    <header>
      <span id="left_arrow" @click="$router.replace('/login')"><</span>
      <span>忘 记 密 码</span>
    </header>
    <div id="forget_password_inputs">
      <mt-field label=""
                placeholder="请输入手机号"
                type="tel"
                :state="phoneState"
                id="forget_password_phone"
                @blur.native.capture="testPhone"
                v-model.trim="forgetPasswordPhone">
      </mt-field>
      <mt-field label="" placeholder="请输入验证码" type="tel" id="forget_password_verification" v-model="forgetPasswordVerification">
        <span id="send_verification" v-if="isShow" @click="sendVerification">发送验证码</span>
        <span id="count_down" v-else>{{ count }}秒</span>
      </mt-field>
      <mt-field label=""
                placeholder="请设置新密码（6至16位）"
                type="password"
                :state="passwordState"
                id="forget_password_password"
                @blur.native.capture="testPassword"
                v-model.trim="forgetPasswordPassword">
      </mt-field>
    </div>
    <mt-button type="default" size="large" id="reset" @click="reset">确 认</mt-button>
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
    name: "forget-password",
    data() {
      return {
        chooseValue: '请选择您的身份',
        isShow: true,
        count: 60,
        phoneState: '',
        passwordState: '',
        forgetPasswordPhone: '',
        forgetPasswordPassword: '',
        forgetPasswordVerification: '',
        yzm: ''
      }
    },
    methods: {
      // 发送验证码
      sendVerification() {
        if(/^1[3456789]\d{9}$/.test(this.forgetPasswordPhone)){
          this.$axios.post(this.$api.login.yzm,{
            phone: this.forgetPasswordPhone
          }).then(response =>{
            this.yzm = response.data.data.yzm;
            Toast({
              message: response.data.data.yzm,
              position: 'middle',
              duration: 5000
            });
          });

          this.isShow = false;
          let timer = setInterval(()=>{
            if(this.count > 0){
              this.count--
            }else {
              this.count = 60;
              this.isShow = true;
              clearInterval(timer);
            }
          },1000)
        }else{
          Toast({
            message: '手机号有误',
            position: 'middle',
            duration: 1500
          });
        }


      },
      // 校验手机号
      testPhone() {
        if(/^1[3456789]\d{9}$/.test(this.forgetPasswordPhone)){
          this.phoneState = 'success';
        }else{
          this.phoneState = 'error';
        }
      },
      // 校验密码
      testPassword() {
        if(/^[a-zA-Z0-9]{6,16}$/.test(this.forgetPasswordPassword)){
          this.passwordState = 'success';
        }else{
          this.passwordState = 'error';
        }
      },
      reset() {
        if(this.phoneState === 'success' && this.passwordState === 'success' && this.forgetPasswordVerification === this.yzm){
          // console.log(this.forgetPasswordPhone,this.forgetPasswordPassword);
          // axios请求
          this.$axios.post(this.$api.login.forgetPassword,{
            phone: this.forgetPasswordPhone,
            yzm: this.forgetPasswordVerification,
            newPassword: this.forgetPasswordPassword
          }).then(response =>{
            if(response.data.code === '200'){
              Toast({
                message: '新密码设置成功',
                position: 'middle',
                duration: 1500
              });
              this.$router.replace('/login')
            }else{
              Toast({
                message: '未知错误，请重试',
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
  header {
    height: 3rem;
    line-height: 3rem;
    background: rgb(0,199,126);;
    text-align: center;
    font-size: 1.5rem;
  }
  #left_arrow {
    position: absolute;
    left: 1rem;
    top: 0;
    font-size: 1.5rem;
  }
  #forget_password_inputs {
    margin-top: 10rem;
  }
  #forget_password_phone {
    border-bottom: 1px solid #d8d8d8;
  }
  #forget_password_password {
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
  }
  #reset {
    height: 4rem;
    width: 60%;
    margin: 4rem auto 0 auto;
    border-radius: 2rem;
    border: 0;
    background: #00C77E;
    color: black;
  }
</style>