/* 新加一个日志 */
<template>
  <div class="newJournal">
    <van-nav-bar
      title="病情日志"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <van-field
      v-model="message"
      rows="5"
      maxHeight="150px"
      type="textarea"
      placeholder="请输入留言"
      show-word-limit
    />
    <img v-bind:src="follDoc.purl" alt="" />
    <van-uploader :after-read="afterRead" />
    <p>
      <van-button type="primary" @click="sure()">提交</van-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "NewJournal",
  data() {
    return {
      follDoc: {
        patientId: this.$store.state.patient.id,
        des: "这是第一条日志",
        purl: ""
      },
      message: "",
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true },
      ],
    };
  },
  methods: {
    /* ========提交数据========= */
    sure() {
      this.$axios
        .post(
          this.$api.patient.newJour,
          JSON.stringify({ des: this.message })
        )
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            console.log(this.message);
            console.log(result.msg);
          } else {
            console.log(this.message);
            console.log(result);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
    },
    /* ========提交结束========= */
    onClickLeft() {
      this.$router.push("/mine/journal");
    },
    // 选择文件
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.fileList = file;
      console.log(file);
    },
  }
};
</script>

<style scoped>
p{
  text-align: right;
  margin: 10px;
}
.van-uploader {
  margin: 10px;
}
.van-ellipsis {
  color: rgb(255, 255, 255);
}
button {
  float: right;
  margin-right: 16px !important;
}
</style>
