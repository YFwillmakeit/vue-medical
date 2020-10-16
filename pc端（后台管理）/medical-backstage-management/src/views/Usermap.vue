<template>
  <div class="firstdiv">
    <Map></Map>
  </div>
</template>

<script>
  import Map from "@/components/Map"
export default {
  name: "Usermap",
  data () {
      return {}
  },
  components:{
    Map,
  }
}
</script>

<style scoped lang="less">
.firstdiv{
    background: #2b4b6b;
    width: 100%;
    height: 100%;
}

</style>