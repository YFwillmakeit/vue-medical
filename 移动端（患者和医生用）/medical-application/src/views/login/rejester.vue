<template>
  <div>
    <header>
      <span id="left_arrow" @click="$router.replace('/login')"><</span>
      <span>注 册</span>
    </header>
    <div id="rejester_inputs">
      <mt-button type="default" size="large" id="" @click="sheetVisible = true" id="choose_value">{{ chooseValue }}</mt-button>
      <mt-field label=""
                placeholder="请输入手机号"
                type="tel"
                :state="phoneState"
                id="rejester_phone"
                @blur.native.capture="testPhone"
                v-model.trim="registerPhone"
      ></mt-field>
      <mt-field label=""
                placeholder="请输入验证码"
                type="tel"
                id="rejester_verification"
                v-model="rejesterVerification">
        <span id="send_verification" v-if="isShow" @click="sendVerification">发送验证码</span>
        <span id="count_down" v-else>{{ count }}秒</span>
      </mt-field>
      <mt-field label=""
                placeholder="密码（6至16位）"
                type="password"
                :state="passwordState"
                id="rejester_password"
                @blur.native.capture="testPassword"
                v-model.trim="registerPassword"
      ></mt-field>
    </div>
    <mt-button type="default" size="large" id="register" @click="register">注 册</mt-button>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field } from 'mint-ui';
  import { Button } from 'mint-ui';
  import { Actionsheet } from 'mint-ui';
  import { Toast } from 'mint-ui';
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Button.name, Button);
  Vue.component(Field.name, Field);
  export default {
    name: "rejester",
    data() {
      let that = this;
      return {
        actions: [{
          name: '医生',
          method() {
            that.chooseValue = this.name;
          }
        },{
          name: '患者',
          method() {
            that.chooseValue = this.name;
          }
        }],
        sheetVisible: false,
        chooseValue: '点击选择您的身份',
        isShow: true,
        count: 60,
        registerPhone: '',
        registerPassword: '',
        phoneState: '',
        passwordState: '',
        rejesterVerification: '',
        yzm: ''
      }
    },
    methods: {
      // 发送验证码
      sendVerification() {
        if(/^1[3456789]\d{9}$/.test(this.registerPhone)){
          this.$axios.post(this.$api.login.yzm,{
            phone: this.registerPhone
          }).then(response =>{
            this.yzm = response.data.data.yzm;
            Toast({
              message: response.data.data.yzm,
              position: 'middle',
              duration: 5000
            });
          })

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
        if(/^1[3456789]\d{9}$/.test(this.registerPhone)){
          this.phoneState = 'success';
        }else{
          this.phoneState = 'error';
        }
      },
      // 校验密码
      testPassword() {
        if(/^[a-zA-Z0-9]{6,16}$/.test(this.registerPassword)){
          this.passwordState = 'success';
        }else{
          this.passwordState = 'error';
        }
      },
      register() {
        if(this.chooseValue !=='点击选择您的身份'&&this.phoneState === 'success'&&this.passwordState === 'success'&& this.rejesterVerification === this.yzm){
          // console.log(this.chooseValue,this.registerPhone,this.registerPassword);
          // 发起axios请求
          this.$axios.post(this.$api.login.rejester,{
            powerId:this.chooseValue === '医生'? 1: 2,
            phone: this.registerPhone,
            yzm: this.rejesterVerification,
            password: this.registerPassword
          }).then(response =>{
            if(response.data.code === '200') {
              // 弹出注册成功，跳转登录页面
              Toast({
                message: '注册成功',
                position: 'middle',
                duration: 1500
              });
              this.$router.replace('/login');
            }else{
              // 弹出注册失败，该账号已经存在
              Toast({
                message: '该号码已被注册',
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
    background: #00B7FF;
    text-align: center;
    font-size: 1.5rem;
    background: rgb(0,199,126);
  }
  #left_arrow {
    position: absolute;
    left: 1rem;
    top: 0;
    font-size: 1.5rem;
  }
  #rejester_inputs {
    margin-top: 10rem;
  }
  #send_verification {
    padding: 5px;
    border-radius: 2.5rem;
  }
  #count_down {
    padding: 5px;
    border-radius: .5rem;
  }
  #choose_value {
    border-bottom: 1px solid #d8d8d8;
    color: #000;
  }
  #rejester_phone {
    border-bottom: 1px solid #d8d8d8;
  }
  #rejester_password {
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
  }
  #register {
    height: 4rem;
    width: 60%;
    margin: 4rem auto 0 auto;
    border-radius: 2rem;
    border: 0;
    background: #00C77E;
    color: black;
  }

</style>