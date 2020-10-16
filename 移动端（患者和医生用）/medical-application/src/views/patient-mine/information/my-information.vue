<template>
  <div class="information">
    <van-nav-bar
      title="我的信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <div class="specific">
      <div class="headPort">
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        /><!-- v-bind:src="perCenter.url" -->
        <p>头像</p>
      </div>

      <!--显示信息-->
      <van-cell-group v-show="isMotify">
        <van-cell title="姓名" v-bind:value="perCenter.username" />
        <van-cell title="性别" v-bind:value="perCenter.sex" />
        <van-cell title="年龄" v-bind:value="perCenter.age" />
        <van-cell title="手机号" v-bind:value="perCenter.phone" />
        <van-cell title="现居住地" v-bind:value="perCenter.address" />
      </van-cell-group>

      <!--修改信息-->
      <van-cell-group v-show="!isMotify" id="modify_box">
        <van-field v-model="perCenter.username" label="姓名" placeholder="请输入姓名" />
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="男" @click="$store.state.patient.gender = '男'">男</van-radio>
              <van-radio name="女" @click="$store.state.patient.gender = '女'">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field v-model="perCenter.age" type="digit" maxlength="3" label="年龄" placeholder="请输入年龄"/>
        <van-field v-model="perCenter.phone" type="tel" label="手机号" readonly />
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="现居住地"
          placeholder="选择现居住地"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>

      </van-cell-group>

      <van-row class="btn_operate">
        <van-col offset="18" span="6">
          <van-button type="default" v-if="isMotify" @click="motifyInfo">修改信息</van-button>
          <van-button type="primary" v-else @click="saveInfo">保存信息</van-button>
        </van-col>
      </van-row>
      

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
  name: "Information",
  data() {
    return {
      // 存放用户的昵称、头像和手机号
      perCenter: this.$store.state.patient,
      isMotify: true,
      radio: this.$store.state.patient.gender,
      // 选择居住地
      value: this.$store.state.patient.address,
      columns: [
        '北京市',
        '天津市',
        '河北省',
        '山西省',
        '内蒙古自治区',
        '辽宁省',
        '吉林省',
        '黑龙江省',
        '上海市',
        '江苏省',
        '浙江省',
        '安徽省',
        '福建省',
        '江西省',
        '山东省',
        '河南省',
        '湖北省',
        '湖南省',
        '广东省',
        '广西壮族自治区',
        '海南省',
        '重庆市',
        '四川省',
        '贵州省',
        '云南省',
        '西藏自治区',
        '陕西省',
        '甘肃省',
        '青海省',
        '宁夏回族自治区',
        '新疆维吾尔自治区',
        '台湾省',
        '香港特别行政区',
        '澳门特别行政区',
        '海外'],
      showPicker: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.replace("/mine");
    },
    motifyInfo() {
      this.isMotify = !this.isMotify;

    },
    saveInfo() {
      Toast.success({
        message: '保存成功',
        duration: 1000
      });
      
      this.$axios
        .post(this.$api.patient.peoInfor, JSON.stringify(this.perCenter))
        .then(response => {
          console.log(this.perCenter)
          var result = response.data;
          if (result.code === "200") {
            this.$store.state.patient = this.perCenter;
            console.log(result.msg);
          } else {
            console.log(result);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
      this.isMotify = !this.isMotify;
    },
    onConfirm(value) {
      this.value = value;
      this.perCenter.address = value;
      this.showPicker = false;
    },
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>

<style scoped>
/* 信息模块（昵称、头像、手机号） */
.specific {
  background-color: rgb(241, 241, 241);
  overflow: hidden;
}
/* 头像 */
.headPort {
  height: 80px;
  line-height: 80px;
  font-size: 14px;
  padding: 10px 16px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #ebedf0;
  margin-bottom: 10px;
}
.specific .van-image--round {
  float: right;
}

.btn_operate {
  background-color: white;
}

#modify_box {
  position: relative;
}

#radio_gender {
  position: absolute;
  left: 7rem;
  top: 3.5rem;
}

.van-ellipsis {
  color: black !important;
}
/* 结束 */
</style>
