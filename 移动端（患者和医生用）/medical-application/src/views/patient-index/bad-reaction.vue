/* 记录不良反应 */
<template>
  <div id="badReaction">
    <van-nav-bar
      class="head"
      title="不良反应"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft()"
    />
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          clickable
          :key="item"
          :title="item"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox :name="item" ref="checkboxes" shape="square" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <van-row>
      <van-col offset="19" span="5">
        <van-button type="primary" @click="sure()">提交</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "vant";
Vue.use(Checkbox).use(CheckboxGroup);

export default {
  name: "BadReaction",
  data() {
    return {
      newList: {
        patient_id: this.$store.state.patient.id,
        bwc: 0,
        lethargy: 0,
        bedizzy: 0,
        Tiredness: 0,
        nandv: 0,
        skin: 0,
        discomfort: 0
      },
      list: [
        "无不良反应",
        "镇静嗜睡（犯困、总是想睡觉）",
        "头痛眩晕",
        "疲劳乏力(浑身没劲)",
        "恶心呕吐",
        "皮肤过敏（扶摇初期出现大量皮肤红斑、水泡、丘疹）",
        "烦躁易怒（心情烦躁、容易生气、发怒、打人等）",
        "其他不适"
      ],
      // 存放选择的内容
      result: []
    };
  },
  methods: {
    /* ============请求数据=========== */
    sure() {
      this.changeValue();
      console.log("aa__" + JSON.stringify(this.newList));
      this.$axios
        .post(
          this.$api.patient.badReac,
          JSON.stringify({ fanyin: this.newList })
        )
        .then(response => {
          var result = response.data;
          if (result.code === "200") {
            console.log(result);
            this.$router.push("/patientIndex");
          } else {
            console.log(result);
          }
        })
        .catch(err => {
          console.log(err);
          console.log("服务器请求失败");
        });
      this.newList = {
        bwc: 0,
        lethargy: 0,
        bedizzy: 0,
        Tiredness: 0,
        nandv: 0,
        skin: 0,
        discomfort: 0
      };
      console.log(this.newList);
    },
    /* ============请求结束=========== */
    // 改变对应的值
    changeValue() {
      for (var j = 0; j < this.result.length; j++) {
        if (this.result[j] == "镇静嗜睡（犯困、总是想睡觉）") {
          this.newList.bwc = 1;
        }
        if (this.result[j] == "头痛眩晕") {
          this.newList.lethargy = 1;
        }
        if (this.result[j] == "疲劳乏力(浑身没劲)") {
          this.newList.bedizzy = 1;
        }
        if (this.result[j] == "恶心呕吐") {
          this.newList.Tiredness = 1;
        }
        if (
          this.result[j] == "皮肤过敏（扶摇初期出现大量皮肤红斑、水泡、丘疹）"
        ) {
          this.newList.nandv = 1;
        }
        if (this.result[j] == "烦躁易怒（心情烦躁、容易生气、发怒、打人等）") {
          this.newList.skin = 1;
        }
        if (this.result[j] == "其他不适") {
          this.newList.discomfort = 1;
        }
      }
      console.log(this.newList);
    },
    onClickLeft() {
      this.$router.push("/patientIndex");
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style scope>
.van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar__text {
  color: white;
}
.van-ellipsis {
  color: white;
}
.van-nav-bar {
  background-color: rgb(0, 199, 126);
}
.van-button--normal {
  margin-top: 10px;
  margin-left: 2px;
}
</style>
