<!--
 * @Author: happy
 * @Date: 2020-09-25 14:26:28
 * @LastEditTime: 2020-09-25 14:38:58
 * @LastEditors: happy
 * @Description: 核磁/CT
-->
<template>
  <div><van-sticky>
      <van-nav-bar
      id="myhead"
      title="核磁/CT异常选项"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </van-sticky>
       <van-radio-group v-model="one" direction="horizontal">
    颞叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
 <van-radio-group v-model="two" direction="horizontal">
    顶叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
 <van-radio-group v-model="three" direction="horizontal">
    额叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
 <van-radio-group v-model="four" direction="horizontal">
    枕叶<div class="jiange"></div>
  <van-radio name="1">左</van-radio>
  <van-radio name="2">右</van-radio>
</van-radio-group>
 <hr>
  </div>
</template>

<script>
export default {
data() {
    return {
      result: [],
       one: '1',
       two: '1',
       three: '1',
       four: '1',
    };
  },
  watch: {//监听选择情况
    result:function(){
      for(let i in this.result){
        if(this.result[i]=='a'){
          // this.$router.push({ path:'/guomin'})
        }
      }
    }
  },
  methods: {
        onClickLeft() {
      this.$router.go(-1);
    },
}
};
</script>

<style scoped>
.van-checkbox,.van-radio-group{
  height: 60px;
}
.jiange{
  width: 40%;
  display: inline-block;
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
  background-color: rgba(0, 199, 126);
}
</style>