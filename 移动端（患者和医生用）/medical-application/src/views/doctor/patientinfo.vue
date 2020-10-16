<!--
 * @Author: happy
 * @Date: 2020-09-24 13:19:23
 * @LastEditTime: 2020-10-11 16:54:44
 * @LastEditors: happy
 * @Description: 患者个人信息页
-->
<template>
  <div>
    <van-sticky>
      <van-nav-bar
        id="myhead"
        title="个人信息"
        left-text="返回"
        right-text="保存"
        left-arrow
        @click-left="$router.replace('/patientdetail')"
        @click-right="onClickRight"
      />
    </van-sticky>
    <div id="head_content">
      <img src="../../assets/miao.jpg" alt="" class="headimg" />
      <span v-if="isGuanzhu" class="is_guanzhu"
        >关注<van-icon name="plus" @click="guanzhu"
      /></span>
      <span v-else class="is_guanzhu">已关注<van-icon name="success" /></span>
    </div>
    <section>
      <van-tabs v-model="active" animated>
        <van-tab title="基本信息" name="basicinfo">
          <basicinfo />
        </van-tab>
        <!-- <van-tab title="现病史" name="nowillness">
          <nowillness/> -->
        <!-- </van-tab> -->
        <van-tab title="既往史" name="agoillness">
          <agoillness />
        </van-tab>
        <van-tab title="家族史" name="familyillness">
          <familyillness />
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import basicinfo from "../../components/doctor/basicinfo";
// import nowillness from '../../components/doctor/nowillness';
import agoillness from "../../components/doctor/agoillness";
import familyillness from "../../components/doctor/familyillness";
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
import "vant/lib/icon/local.css";
export default {
  components: {
    basicinfo,
    // nowillness,
    agoillness,
    familyillness,
  },
  data() {
    return {
      test1: 1,
      active: 0,
      isGuanzhu: true, // 是否关注
    };
  },
  methods: {
    onClickRight() {
      console.log(this.$store.state.family);
      this.$axios //患者修改既往史和家族史信息接口
        .post(this.$api.gkx.family,JSON.stringify(this.$store.state.family))
        .then((res) => {
          this.$toast('修改成功');
          console.log(res);
          console.log("接口测试成功");
        })
        .catch((error) => {
          console.log(error);
          console.log("接口测试失败");
        });
    },
    guanzhu() {
      // =========* 发起请求
      // this.$axios()
      this.isGuanzhu = false;
      let id =this.$store.state.currentPatientDetail.id;
      this.$axios //医生添加关注患者接口
        .post(this.$api.gkx.addnotice,JSON.stringify({ patientId:id }))
        .then((res) => {
          console.log(res);
          console.log("接口测试成功");
        })
        .catch((error) => {
          console.log(error);
          console.log("接口测试失败");
        });
    },
  },
  mounted() {
    let id =this.$store.state.currentPatientDetail.id;
    this.active = this.$route.params.activeName;
    this.$axios //患者所有信息接口
      .post(this.$api.gkx.msg,JSON.stringify({patientId:id})
      )
      .then((res) => {
        console.log(res);
        console.log("接口测试成功");
      })
      .catch((error) => {
        console.log(error);
        console.log("接口测试失败");
      });
  },
};
</script>

<style scoped>
section {
  margin-top: 20px;
}
#myhead /deep/.van-nav-bar .van-icon {
  color: white;
}
#myhead /deep/.van-nav-bar__text {
  color: white;
}
#myhead /deep/.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgba(0, 199, 126, 1);
}
#head_content {
  position: relative;
}
.is_guanzhu {
  position: absolute;
  left: 14rem;
  top: 0.8rem;
  font-size: 1rem;
  color: rgba(0, 199, 126, 1);
}
img {
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px auto;
}
</style>