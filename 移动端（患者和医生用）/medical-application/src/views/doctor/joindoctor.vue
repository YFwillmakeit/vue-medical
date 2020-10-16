<!-- 分组 -->
<template>
  <div>
    <van-sticky>
      <van-nav-bar
        id="myheard"
        title="参会医生"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

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

    <van-row>
      <van-col span="12">
        <van-button type="primary" @click="sureinitiate">确认选择</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      result: [],
      alllist: [],
     
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    sureinitiate: function () {
      this.$toast.success("添加参会医生成功");
      this.$router.go(-1);
    },
  },

  mounted: function () {
    this.$axios
      .post(this.$api.xwq.joindoctor) //JSON.stringify({id: 1,})
      .then((data) => {
       let arr=[];
        this.alllist = data.data.data;
        for(let i=0;i<this.alllist.length;i++){
          let obj ={name:this.alllist[i].dname,
                    id:this.alllist[i].id}
                    arr.push(obj)
        }
        console.log(arr)
        this.$store.state.doctorlist=[...arr]
        console.log(this.$store.state.doctorlist)
        // console.log(this.all)
        console.log("获取到全部医生了");
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("获取个人信息失败了");
      });
    setTimeout(() => {
      for (let i = 0; i < this.alllist.length; i++) {
        this.list.push(this.alllist[i].dname);
      }
      console.log(this.list);
    }, 200);
  },

  watch: {
    result() {
      console.log(this.result);
      this.$store.state.list.joinDoctorId = this.result;
      console.log(this.$store.state.list);
    },
  },
};
</script>
<style  scoped>
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
/deep/ .van-nav-bar .van-icon {
  color: white;
}
#myheard /deep/ .van-nav-bar__text {
  color: white;
}
#myheard /deep/ .van-ellipsis {
  color: white;
}
.van-button {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>