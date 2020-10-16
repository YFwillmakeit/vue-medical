<template>
  <div>
    <ul>
      <div class="medicaldisplay">
        <li @click="medical" class="medical">第一次就诊</li>
        <li>
          {{
            year +
              "年" +
              month +
              "月" +
              day +
              "日" 
          }}
        </li>
      </div>
      <div class="medicaldisplay namedisplay">
        <li>就诊医生:{{ listcontent.docname }}</li>
        <li>{{ listcontent.hospitalname }}</li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "jzjllist",
  data() {
    return {
      year: "",
      month: "",
      day: "",
      hours: "",
      minutes: "",
      seconds: "",
      listcontent: [],
      timecontent: "",
    };
  },
  methods: {
    medical() {
      this.$router.push("/about");
    },
  },
  mounted() {
    let str = JSON.stringify({ patientId: 2 });
    // console.log(str + "类型" + typeof str);
    this.$axios
      .post(
          this.$api.xzh.jzjllist,
        JSON.stringify({
          patientId: 2,
        })
      )
      .then((data) => {
        this.listcontent = data.data.data[0];
        this.timecontent = new Date(this.listcontent.time);
        // 年
        this.year = this.timecontent.getFullYear();
        // 月
        this.month = this.timecontent.getMonth() + 1;
        // 日
        this.day = this.timecontent.getDate();
      })
      .catch((err) => {
        // console.log("333");
        // console.log(arguments);
        // console.log(err);
      });
  },
};
</script>

<style scoped>
.medicaldisplay {
  display: inline-block;
  padding: 15px 10px 0 12px;
}
li {
  padding: 5px;
}
.medical {
  font-size: 18px;
  color: rgba(0, 204, 153);
}
ul {
  border-bottom: 1px solid rgba(10, 10, 10, 0.2);
}
</style>
