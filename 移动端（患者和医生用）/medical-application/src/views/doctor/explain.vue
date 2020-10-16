
<template>
  <div class="explain">
    <van-nav-bar id='myhead'
      title="充值说明"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <div class='shuoming'>
      <h4>
        充值时间： 
      </h4>
        <span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本商品24小时系统自动充值，无任何时间限制(运营商系统/地区维护除外)；</span>
     
      <h4>
        到账时间：
        </h4>
        <span>非充值高峰期到账时间为1到10分钟不等（若运营商系统正常时，到账时间几乎是即时到账）。如遇到月初月末高峰期会有延迟，详细到账时间请您自行拨打运营商电话或者登陆运营商官方网站查询；
     </span>
      <h4>
        充值方式：</h4>
        <span>用户点击页面上 充值
        根据提示填写你想要充值的金额，成功付款后，系统自动完成充值（充值中/充值成功的订单是无法撤销退款的）。
      </span>
      <h4>
        温馨提示：</h4>
        <span>由于月初月末，订单交易量比较大，运营商充值系统繁忙偶尔存在延迟到账或者充值失败的情况，请您直接联系我们，我们将在第一时间为您处理。卖家系统显示充值成功而买家又提出没有收到的客户，请买家必须提供手机密码查询，卖家会在最短的时间内提交运营商核实，确认未到帐后将立即退款，此后买家可自行修改查询密码。如果认为自己手机密码包含重大个人隐私，不能提供者，请不要购买。
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explain",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.explain > div:nth-child(2) {
  margin: 10px 10px;
}
*{
  margin:0;
  padding:0;
}
.van-nav-bar{
  background-color: rgba(0,199,126);
}
#myhead /deep/ .van-icon-arrow-left::before{
  color: white;
}
#myhead /deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
h4{
  margin-top: 20px ;
}
.shuoming{
  height: 100%;
  line-height: 25px;
}
</style>
