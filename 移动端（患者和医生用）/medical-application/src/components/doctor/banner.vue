<!--  -->
<template>
  <div>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../../assets/img1.jpg"/></van-swipe-item>
  <van-swipe-item><img src="../../assets/img2.jpg"/></van-swipe-item>
  <van-swipe-item><img src="../../assets/img3.jpg"/></van-swipe-item>
  <van-swipe-item><img src="../../assets/img5.jpg"/></van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

  methods: {

  },

  computed: {

  },

  components: {

  },

}
</script>
<style  scoped>
/* *{
  margin: 0;
  padding: 0;
} */
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0;
    /* line-height: 150px; */
    text-align: center;
    background-color: #39a9ed;
    
  }
  .my-swipe img{
      height:200px;
      width:100%;
      overflow: hidden;
  }
  .my-swipe{
      overflow: hidden;
  }

</style>