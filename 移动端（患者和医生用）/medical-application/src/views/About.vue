<template>
  <div span="6" class="home">
    <div>
      <div>
        <van-nav-bar title="完整病历" left-arrow @click-left="onClickLeft" />
      </div>
    </div>
    <div>
      <van-image round width="3rem" height="3rem" avatar />
      <div class="messagecontent">
        <ul class="message">
          <li>{{ contentlist.NAME }}</li>
          <span>|</span>
          <li>{{ contentlist.sex="1"?"女":"男" }}</li>
          <span>|</span>
          <li>{{ contentlist.age }}</li>
        </ul>
        <div class="basiccontent">
          <ul class="basic">
            <li>就诊时间:{{ year + "年" + month + "月" + day + "日" }}</li>
            <li class="clinic">
              就诊医院：{{ contentlist.hospitalname }}
            </li>
          </ul>
          <ul class="basic">
            <li class="clinic">
              就诊体重：{{ contentlist.weight }}KG
            </li>

            <li class="clinic">
              就诊医生：{{ contentlist.docname }}
            </li>
          </ul>
        </div>
      </div>
      <van-tabs v-model="active">
        <van-tab title="诊断"><zhenduan></zhenduan></van-tab>
        <van-tab title="辅助检查"><help></help></van-tab>
        <van-tab title="药物治疗"><yaowu></yaowu></van-tab>
        <van-tab title="特殊治疗"><specia></specia></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import zhenduan from "../components/zhenduan.vue";
import help from "../components/help.vue";
import yaowu from "../components/yaowu.vue";
import specia from "../components/specia.vue";
export default {
  name: "About",
  components: {
    zhenduan,
    help,
    yaowu,
    specia,
  },
  data() {
    return {
      year: "",
      month: "",
      day: "",
      active: 0,
      contentlist: [],
      listcontent: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    content() {
      let str = JSON.stringify({ patientId: 2 });
      this.$axios
        .post(
          this.$api.xzh.content,
          JSON.stringify({
            patientId: 2,
          })
        ) //JSON.stringify({id: 1,})
        .then((data) => {				
					this.contentlist = data.data.data[0];

          this.listcontent = new Date(this.contentlist.time);
          // 年
          this.year = this.listcontent.getFullYear();
          // 月
          this.month = this.listcontent.getMonth() + 1;
          // 日
          this.day = this.listcontent.getDate();
        });
    },
  },
  mounted() {
    this.content();
  },
};
</script>
<style scoped>
.home {
  height: 170px;
  position: relative;
}
.van-image {
  margin-top: 10px;
  margin-left: 160px;
  border: 2px solid rgba(10, 10, 10, 0.2);
}
.message > li,
span {
  float: left;
  text-align: center;
  margin: 0 auto;
}
.message {
  height: 30px;
  width: 135px;
  display: inline-block;
  line-height: 30px;
}
.messagecontent {
  width: 100%;
  height: 115px;
  text-align: center;
  border-bottom: 1px solid rgba(10, 10, 10, 0.2);
}
.message > span {
  padding: 0 5px 0 5px;
}
.basic {
  float: left;
  text-align: center;
  padding: 0 0 0 10px;
}
.basiccontent {
  width: 100%;
  height: 75px;
  display: inline-block;
  line-height: 37.5px;
}
.clinic {
  padding-right: 8px;
  text-align: left;
}
</style>
