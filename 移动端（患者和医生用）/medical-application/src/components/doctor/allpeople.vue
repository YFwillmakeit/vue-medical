<!-- 全部患者 -->
<template>
  <div>
    <div class='line'>
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item"
            @click="toggle(index)"
          >
            <!-- 个人信息 -->
            <div class='left'>
              <img
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                class="headimg"
              />
              <p>姓名|<span>年龄</span>|<span>性别</span><br />关联日期：2020-09-23<br />发作类型</p>
              <hr>
            </div>
            <template #right-icon>
              <van-checkbox
                :name="item"
                ref="checkboxes"
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>

      <!-- 按钮 -->
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      allpeople: [],
      list: ["a", "b", "c"],
      result: [],
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  },

  mounted: function () {
    //所有患者接口
    this.$axios
      .post(
        "http://192.168.1.12:8080/interm/attention/findByDoctorIdAll",
        JSON.stringify({ doctorId: 4 })
      )
      .then((res) => {
        this.allpeople = res.data.data;
        console.log(this.allpeople);
        // for(var i=0;i<res.data.data.length;i++){
        // this.alllist.push(res.data.data[i]);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  components: {},
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
  border: none;
}
.rmb {
  margin: 10px;
  color: rgb(150, 151, 153);
}
.van-checkbox {
  float: right;
  /* padding-right:30px; */
}
.headimg {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 10px 20px;
  float: left;
}
.list p {
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
}
/* .left{
  float:left;
} */
.line .van-cell--clickable {
  border-bottom: 1px solid rgb(150, 151, 153);
  padding: 10px 10px 10px 0;
}
</style>