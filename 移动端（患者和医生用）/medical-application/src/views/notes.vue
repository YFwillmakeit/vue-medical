<template>
  <div>
    <div span="6" class="home">
      <div>
        <van-nav-bar
          class="medicals"
          title="病历本"
          right-text="记录就诊"
          @click-right="onClickLeft"
        />
      </div>
      <div>
        <van-image round width="4rem" height="4rem" avatar />
        <ul sapn="18">
          <p style="margin:0px">{{ contentlist.NAME }}</p>
          <p style="margin:5px 0px">{{ contentlist.stage }}</p>
        </ul>
        <van-row style="padding: 8px 0 0 20px;">
          <van-col span="6">性别:{{ contentlist.sex }}</van-col>
          <van-col span="6">年龄:{{ contentlist.age }}</van-col>
          <van-col span="6">城市:{{ contentlist.address }}</van-col>
        </van-row>
        <van-row style="padding: 5px 0 0 20px;">
          <van-col span="16">确诊医院:{{contentlist.hospitalname}}</van-col>
        </van-row>
        <van-row style="padding: 5px 0 10px 20px;">
          <van-col span="16"
          >确诊时间:{{ year + "年" + month + "月" + day + "日" }}</van-col
          >
        </van-row>
        <div class="xzhxzh">
          <div>
            <van-nav-bar
              class="complete"
              right-text="查看完整病历"
              @click-right="complete"
            />
            <van-nav-bar
              class="complete"
              right-text="查看完整症状"
              @click-right="symptoms"
            />
            <van-nav-bar
              class="complete"
              right-text="查看完整频次"
              @click-right="frequency"
            />
          </div>
          <symday></symday>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import symday from "./sym-day.vue";
export default {
  name: "notes",
  components: {
    symday
  },
  data() {
    return {
      year: "",
      month: "",
      day: "",
      contentlist: [],
      listcontent: "",
      active: 0,
    };
  },
  methods: {
    complete() {
      this.$router.push("/home");
    },
    symptoms() {
      this.$router.push("/symptom");
    },
    frequency() {
      this.$router.push("/EpiNum");
    },
    onClickLeft() {
      this.$router.push("/recordvisit");
    },
    content() {
      let str = JSON.stringify({ patientId: 2 });
      this.$axios
        .post(
          this.$api.xzh.jzjllist,
          JSON.stringify({
            patientId: 2,
          })
        ) 
        .then((data) => {
          this.contentlist = data.data.data[0];
          this.listcontent = new Date(this.contentlist.time);
          // 年
          this.year = this.listcontent.getFullYear();
          // 月
          this.month = this.listcontent.getMonth() + 1;
          // 日
          this.day = this.listcontent.getDate();
        })
    },
  },
  mounted() {
    this.content();
  },
};
</script>
<style scoped>
.van-nav-bar .van-icon {
  color: white;
}
.complete /deep/ .van-nav-bar__text {
  color: white;
}
.medicals /deep/ .van-nav-bar__text {
  color: white;
}
.van-nav-bar__text {
  color: white;
}
.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
.van-ellipsis {
  color: black;
}
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
.symwe {
  position: absolute;
}
.symwecontent {
  position: relative;
}
.complete {
  width: 123px;
  display: inline-block;
  color: white;
}
</style>
