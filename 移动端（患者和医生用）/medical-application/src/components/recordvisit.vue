<template>
  <div id="recordVi">
    <van-nav-bar title="记录就诊" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <!-- 就诊医院 -->
      <van-row class="money">
        <van-col span="11">就诊医院</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-on:change="indexSelect01(value)"
              v-model="value"
              ref="valuemoney1"
              :options="this.select01"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <!-- 就诊医生 -->
      <van-row class="money">
        <van-col span="11" v-model="indexId2">就诊医生</van-col>
        <van-col span="6" offset="10">
          <van-dropdown-menu active-color="#1989fa" id="left">
            <van-dropdown-item
              v-model="valuemoney2"
              ref="valuemoney2"
              :options="this.select02"
            />
          </van-dropdown-menu>
        </van-col>
      </van-row>
      <van-cell title="就诊时间" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
      <van-cell title="选择药物" value="请选择" @click="choMedicine" />
      <p class="medical">拍照上传</p>
      <van-uploader :after-read="afterRead" />
      <!-- 探讨说明 -->
      <div class="explain">
        <P class="medical">文字记录</P>
        <textarea
          style="margin: 0px;width: 340px;height: 85px;"
          name="text"
          id="text"
          cols="30"
          rows="10"
          v-model="text"
        ></textarea>
        <!-- <type='textarea'   name='text' > -->
      </div>

      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          @click="afterRead"
          native-type="submit"
          min-data:
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  name: "recordvisit",
  data() {
    return {
      doctorlist: [],
      value: "1",
      date: "请选择时间",
      show: false,
      imgSrc: ["11"],
      valuemoney1: "",
      valuemoney2: "", //-------更换医生的下拉框二级联动----------------------------------
      select01: [], //获取的一级数组数据
      select02: [], //获取的二级数组数据
      indexId: "选择医院", //定义分类一的默认值
      indexId2: "选择医生",
      indexNum: 0, //定义一级菜单的下标
      option1: [
        // { text: "癫痫医院", value: 1 },
        // { text: "下雨天留客天留我不留", value: 2 },
        // { text: "罐头发明于1810", value: 3 },
        // { text: "开罐器发明于1858", value: 4 },
        // { text: "5", value: 5 },
        // { text: "6", value: 6 },
        // { text: "7", value: 7 },
        // { text: "8", value: 8 },
      ],
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    choMedicine() {
      this.$router.push("/choice");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    attendance() {
      console.log("axios");
      this.$axios
        .post("http://192.168.1.12:8080/interm/hospital/name")
        .then((res) => {
          for (let i = 0; i < res.data.data.length; i++) {
            console.log(res.data.data[i]);

            this.select01.push({ text: res.data.data[i].name, value: i + 1 });
            for (let j = 0; j < res.data.data[i].doctors.length; j++) {
              this.doctorlist.push({
                hospital: res.data.data[i].name,
                doctor: res.data.data[i].doctors[j].name,
              });
            }
            console.log(this.doctorlist);
          }

          for (let j = 0; j < this.select01.length; j++) {
            if (this.value == this.select01[j].value) {
              // this.indexNum=i
              console.log("jiojio");
              console.log(this.value);
            }
          }
          // this.indexSelect01();
          console.log(this.select01);
        })
        .catch((error) => {
          console.log(error);
        });
    }, //二级联动方法
    indexSelect01() {
      // let i = 0,
      //   j = 0;
      // this.select02 = [];
      // console.log(this.in)
      for (let i = 0; i < this.select01.length; i++) {
        if (this.select01[i].value == this.value) {
          for (let j = 0; j < this.doctorlist.length; j++) {
            if (this.select01[i].text == this.doctorlist[j].hospital) {
              this.select02.push({ text: this.doctorlist[j].doctor, value: j });
            }
          }
        }
      }
      console.log("打印doctor");
      console.log(this.select02);
    },
  },
  mounted() {
    // console.log("112233", this.$route.params);
    // this.auxiliary = this.$route.params.accessory;
    // console.log("1111122222", this.auxiliary);
    this.attendance();
  },
};
2;
</script>

<style>
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
.van-ellipsis {
  color: black;
}
.medical {
  color: #323233;
  font-size: 14px;
  padding: 12px 16px;
}
.wenzi {
  width: 90%;
  min-height: 60px;
  margin: 10px 16px;
  border: 1px solid black;
}
.explain {
  font-size: 15px;
  color: rgb(100, 101, 102);
  margin-left: 15px;
}
.money {
  padding-left: 16px;
  line-height: 48px;
  border: none;
  color: rgb(100, 101, 102);
  font-size: 14px;
}

.money /deep/ .van-dropdown-menu__bar {
  box-shadow: unset !important;
  background-color: none !important;
}
.money /deep/ .van-dropdown-menu {
  /* text-align: left; */
  float: left;
}
/* .van-row {
  border-bottom: 1px solid rgba(10, 10, 10, 0.4);
} */
.van-col {
  margin: 0;
}
</style>
