<!--
 * @Author: happy
 * @Date: 2020-09-22 16:12:38
 * @LastEditTime: 2020-09-22 19:01:00
 * @LastEditors: happy
 * @Description: 
-->
<template>
    <div>
        <van-cell is-link @click="showPopup">{{ select }}</van-cell>
        <van-popup v-model="show" id="province">
            <van-area title="选择地区" :area-list="areaList" value="110101"  @cancel='cancel' @confirm='confirm' columns-num='1'/>
        </van-popup>
    </div>
</template>
<script>
export default {
     data() {
        return {
            select:'选择地区',
            show: false,
            areaList:{
            province_list:{
        110000: '北京市',
        120000: '天津市',
        130000: '河北省',
        140000: '山西省',
        150000: '内蒙古自治区',
        210000: '辽宁省',
        220000: '吉林省',
        230000: '黑龙江省',
        310000: '上海市',
        320000: '江苏省',
        330000: '浙江省',
        340000: '安徽省',
        350000: '福建省',
        360000: '江西省',
        370000: '山东省',
        410000: '河南省',
        420000: '湖北省',
        430000: '湖南省',
        440000: '广东省',
        450000: '广西壮族自治区',
        460000: '海南省',
        500000: '重庆市',
        510000: '四川省',
        520000: '贵州省',
        530000: '云南省',
        540000: '西藏自治区',
        610000: '陕西省',
        620000: '甘肃省',
        630000: '青海省',
        640000: '宁夏回族自治区',
        650000: '新疆维吾尔自治区',
        710000: '台湾省',
        810000: '香港特别行政区',
        820000: '澳门特别行政区',
        900000: '海外',
      },
        }
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    cancel(){
        this.show = false;
    },
    confirm(picker){
        this.show = false;
        this.select = picker[0].name;
    }
  },
   
};
</script>
<style scoped>
    #province{
      width: 100%;
    }
</style>