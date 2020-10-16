<!--
 * @Author: happy
 * @Date: 2020-09-22 15:06:10
 * @LastEditTime: 2020-09-23 10:14:51
 * @LastEditors: happy
 * @Description: 
-->
<template>
    <div>
        <router-view></router-view>
        <foot />
    </div>
</template>
<script>
import foot from '../../components/doctor/foot'
export default {
    components:{
        foot
    }
}
</script>