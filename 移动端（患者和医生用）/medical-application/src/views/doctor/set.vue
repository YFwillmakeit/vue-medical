/* 设置 */
<template>
  <div class="set">
    <van-nav-bar id="myhead"
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <van-cell-group>
      <!-- <van-cell title="消息设置" value="&gt;" @click="setInfor()" /> -->
      <van-cell title="修改密码" value="&gt;" @click="changePwd()" />
      <van-cell title="版本更新" value="&gt;" @click="update()" />
    </van-cell-group>
    <div class='out'>
    <van-button type="default" @click='out'>退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Set",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 消息设置
    setInfor() {
      this.$router.push({
        path:"/information"
      });
    },
    // 修改密码
    changePwd() {
      this.$router.push({
        path:'/password'
      })
    },
    // 版本更新
    update() {
      this.$router.push({
        path:'/update'
      });
    },
    out(){
      this.$router.replace('/login');
      window.localStorage.removeItem('token');
    }
  }
};
</script>

<style scoped>
.van-nav-bar{
  background-color: rgba(0,199,126);
}
/deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
.out{
  margin-top:200px;
  text-align:center;
}
.van-button{
  width:150px;

}
</style>
