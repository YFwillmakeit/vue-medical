<!--  -->
<template>
  <div>
    <van-sticky>
      <van-nav-bar
        title="我发起的探讨"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="study_list"
          v-for="item in list"
          :key="item"
          @click="mydetails(item)"
        >
        <!-- <template slot-scope="scope"> -->

        
          <van-swipe-cell :before-close="beforeClose" @open="test(item)">
            <div class="title">{{ item.theme }}</div>
            <div class="content">{{ item.des }}</div>
            <div class="mcw"><span>参会主持：</span>{{ item.ddname }}</div>
            <div class="data"><span>时间：</span>{{ item.starttime }}</div>
            <div class="state">
              <span>状态：</span
              ><span>{{
                item.STATUS == 0 ? "待审核" : item.STATUS == 1 ? "驳回" : "通过"
              }}</span>
            </div>
            <!-- <div class="state">{{item.state}}</div> -->
            <div class="yesorno">{{ item.yesorno }}</div>
            <template #right>
              <van-button square type="danger" text="删除" />
            </template>
          </van-swipe-cell>
<!-- </template> -->

        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "第三期学术会议",
          content: "详情内容哈哈哈",
          mcw: "秋小秋",
          data: "2020-8-9",
          yesorno: "已结束",
          state: "免费",
          patient: "小狗", //患者
          money: "20000人民币", //费用
          time: "120分钟", //持续时间
          guests: "组长", //邀请嘉宾
          myname: "我自己", //参加人姓名
          joinname: "小白,小红", //所有参加人姓名
        },
      ],
      myid:"",
      loading: true,
      finished: true,
      refreshing: true,
    };
  },

  methods: {
    // open(id){
    //   console.log(id)
    // },
    onClickLeft() {
      this.$router.go(-1);
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }

        // for (let i = 0; i < 3; i++) {
        //   this.list.push(this.list.length + 1);
        // }
        this.loading = false;

        // if (this.list.length >= 3) {
        this.finished = true;
        // }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    mydetails: function (id) {
      //点击查看详情
      this.myid=id.id
      console.log(id.id);
      this.$router.push({
        name: "mystudydetails",
        params: {
          id: id,
        },
      });
    },
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？",
            })
            .then(() => {
              console.log(this.myid)
              this.$axios
                .post("http://172.16.6.132:8080/interm/discuss/deleteById", JSON.stringify({id:this.myid}))
                .then((res) => {
                  console.log(res)
                  var result = res.data;
                  if (result.code === "200") {
                    // this.$alert(result.msg);
                    this.shuaxin();
                  } else {
                    this.$alert(result.msg);
                  }
                })
                .catch(() => {
                  this.$alert("请求出错");
                });

              instance.close();
            });
          break;
      }
    },
    test() {
      console.log(arguments);
      this.myid=arguments[0].id
      console.log(this.myid)
    },
    shuaxin(){
       this.$axios
      .post("http://172.16.6.132:8080/interm/discuss/doctorpage?doctorId=1")
      .then((res) => {
        this.list = res.data.data;
        console.log("获取到我的病例探讨了");
        console.log(this.list);
      })
      .catch((error) => {
        console.log(error);
        console.log("获取我发起的病例探讨失败了");
      });

    setTimeout(() => {
      for (let i = 0; i < this.list.length; i++) {
        let time = new Date(this.list[i].starttime);
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let str = year + "年" + month + "月" + day + "日";
        this.list[i].starttime = str;
      }
    }, 1000);
    }
  },

  mounted: function () {
   this.shuaxin();
  },

  components: {},
};
</script>
<style  scoped>
.van-nav-bar {
  background-color: rgba(0, 199, 126);
}
div /deep/ .van-nav-bar .van-icon {
  color: white;
}
div /deep/ .van-nav-bar__text {
  color: white;
}
div /deep/ .van-ellipsis {
  color: white;
}
.study_list {
  padding: 20px 5px 15px 15px;
  font-size: 14px;
  border-top: 3px solid rgb(222, 222, 222);
  border-bottom: 3px solid rgb(222, 222, 222);
  color: black;
}

.content {
  color: rgb(222, 222, 222);
}
.yesorno {
  padding-left: 300px;
  font-size: 16px;
}
.title {
  font-size: 16px;
}
</style>