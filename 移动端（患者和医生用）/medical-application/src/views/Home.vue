<template>
  <div span="6" class="Home">
    <div>
      <van-nav-bar
        title="完整病历"
        right-text="确认修改"
        left-arrow
        @click-right="onpresent"
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <van-image round width="4rem" height="4rem" avatar />
      <ul sapn="18">
        <p style="margin:0px">{{ listcontent.NAME }}</p>
        <p style="margin:5px 0px">{{ listcontent.stage }}</p>
      </ul>
      <van-row style="padding: 8px 0 0 20px;">
        <van-col span="6">性别:{{ listcontent.sex }}</van-col>
        <van-col span="6">年龄:{{ listcontent.age }}</van-col>
        <van-col span="6">城市:{{ listcontent.address }}</van-col>
      </van-row>
      <van-row style="padding: 5px 0 0 20px;">
        <van-col span="16">确诊医院:{{ listcontent.hospitalname }}</van-col>
      </van-row>
      <van-row style="padding: 5px 0 10px 20px;">
        <van-col span="16">病龄:{{ listcontent.disease_year }}</van-col>
      </van-row>
      <div class="activecontent">
        <van-tabs v-model="active">
          <van-tab title="就诊记录"><jzjllist></jzjllist></van-tab>
          <van-tab title="现病史"><xbslist></xbslist></van-tab>
          <van-tab title="既往病史"><jwbslist></jwbslist></van-tab>
          <van-tab title="家族病史"><jzbslist></jzbslist></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import jzjllist from "../components/jzjllist.vue";
import xbslist from "../components/xbslist.vue";
import jwbslist from "../components/jwbslist.vue";
import jzbslist from "../components/jzbslist.vue";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "Home",
  components: {
    jzjllist,
    xbslist,
    jwbslist,
    jzbslist,
  },
  data() {
    return {
      active: 0,
      listcontent: [],
    };
  },
  methods: {
    onpresent() {
      // console.log(this.$store.state.contentList);
      // console.log(this.$store.state.contentlist2);
      this.$axios
        .post(
          this.$api.xzh.home,
          JSON.stringify({
            contentList: this.$store.state.contentList,
            contentList2: this.$store.state.contentlist2,
          })
        )
				.then((data) => {});
				
				Toast.success({
        message: '修改成功',
        duration: 1000
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$axios
      .post(
        this.$api.xzh.jzjllist,
        JSON.stringify({
          patientId: 2,
        })
      )
      .then((data) => {
        this.listcontent = data.data.data[0];
      });
  },
};
</script>
<style scoped>
.home {
  height: 200px;
  position: relative;
}
.van-image {
  margin-top: 15px;
  margin-left: 15px;
  border: 2px solid rgba(10, 10, 10, 0.2);
}
ul {
  display: inline-block;
  top: 72px;
  left: 100px;
  position: absolute;
}
div > p {
  float: left;
}
.van-row {
  height: 30px;
}
.activecontent {
  border-top: 2px solid rgba(10, 10, 10, 0.2);
}
.van-tabs__wrap {
  border-bottom: 1px solid rgba(10, 10, 10, 0.2);
}
.van-tabs__content {
  padding-top: 1px;
}
.van-tabs__wrap {
  border-bottom: 1px solid red;
}
</style>
