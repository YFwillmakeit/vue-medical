<!-- 分组 -->
<template>
  <div>
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="` ${item}`"
      @click="toggle(index)"
    >
      <template #right-icon>
        <van-checkbox :name="item" ref="checkboxes" />
      </template>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>



  </div>
</template>

<script>

export default {
  data () {
    return {
       list: ['项目组', '四组','三组'],
      result: [],
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    
  },

  computed: {

  },

  components: {

  },

}
</script>
<style  scoped>
</style>