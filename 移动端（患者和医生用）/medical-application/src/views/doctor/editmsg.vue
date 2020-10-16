<!--  -->
<template>
  <div>

    <van-sticky>
<van-nav-bar
id='myhead'
  title="基本信息"
  left-text="返回"
  right-text="保存"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</van-sticky>

<!-- 按钮 -->
<form acction='' >
    <label for="name">姓名：</label>
    <input type="text" id='name' name='name'  v-model='result.dname' >
    <br/>
<label for="sex">性别：</label>
    <input type="text" id='sex' name='sex' v-model='result.sex'>
    <br/>

    <!-- 上传头像 -->
<!-- <van-field name="uploader" label="上传头像：">
  <template #input>
    <van-uploader v-model="uploader" :max-count="1"/>
  </template>
</van-field> -->


<!-- 最终头像 -->
<van-field name="uploader" label="上传头像：">
  <template #input>
<van-uploader  :before-read="beforeRead" :after-read="uploadFile" accept="image/*" multiple v-model='uploader' />
 

  </template>
</van-field> 

<!-- 医院 -->
<van-field
  readonly
  clickable
  label="医院："
  :value="value.name"
  :placeholder="result.hname"
  @click="showPicker = true"
/>
<van-popup v-model="showPicker" round position="bottom">
  <van-picker
    show-toolbar
    :columns="hname"
    value-key='name'
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>

<!-- 科室的 -->
<van-field
  readonly
  clickable
  label="科室："
  :value="value2.name"
  :placeholder='result.dename'
  @click="showsection = true"
/>
<van-popup v-model="showsection" round position="bottom"  >
  <van-picker
    show-toolbar
    value-key='name'
    :columns="dename"
    @cancel="showsection = false"
    @confirm="section"
  />
</van-popup>

<!-- 职称 -->
<van-field
  readonly
  clickable
  label="职称："
  :value="value3.title"
  :placeholder="result.position"
  @click="showjob = true"
/>
<van-popup v-model="showjob" round position="bottom"  >
  <van-picker
    show-toolbar
    :columns="position"
    value-key='title'
    @cancel="showjob = false"
    @confirm="job"
  />
</van-popup>
<!-- 上传执照 -->

<van-field name="myjob" label="上传执照：">
  <template #input>
    <van-uploader v-model="myjob" :before-read="beforemyjob" :after-read="uploadmyjob"/>
  </template>
</van-field>



</form>


  </div>
</template>

<script>
// import { Toast } from 'vant';
export default {
  data () {
    return {
      uri:"",
      valuename:'',
      result:{
      },
      keep:{},
       uploader: [{ url: '' }],
       value: '',
        showPicker: false,
      hname: [],
      value2: '',
      showsection: false,
      dename:[],//科室
       value3: '',
       hname2:[], //医院
      showjob: false,
      
      position:[      //职称
        {
          title:'主任',
          id:1
        },
        {
          title:'主治医生',
          id:2
        },
        {
          title:'护士',
          id:3
        },
        {
          title:'住院医师',
          id:4
        },
        {
          title:'副主任医师',
          id:5
        }
      ],
       myjob: [{ url: ''}],//执照
    };
  },


  methods: {
    //头像
    beforeRead(file){
      console.log(file)
      this.uploader=[]
        if(this.uploader.length==1){
         this.uploader[0]=file
         console.log(this.uploader)
        }
          return true 
    },
    // 执照
    beforemyjob(file){
      this.myjob=[]
      if(this.myjob.length==1){
        this.myjob[0]=file
      }
          return true
    },
    // 头像接收
    uploadFile(file){
      let that=this;
      console.log("接受头像");
         var fd = new FormData()
    //    2、将需要传的参数append到formData对象中
         fd.append('file',file.file)
         console.log(file);
      this.$axios.post('/interm/upload', fd,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then(function(res){
        that.uri=res.data.fileName
          console.log(that.uri)
          console.log(res)
      }).catch(function(err){
          console.log(err)
          console.log('头像错误')
      })
    },

    //执照接收
    uploadmyjob(file){
      let that=this;
      console.log("执照");
         var fd = new FormData()
    //    2、将需要传的参数append到formData对象中
         fd.append('file',file.file)
         console.log(file.file);
      this.$axios.post('/interm/upload', fd,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then(function(res){
         that.qualification=res.data.fileName
          console.log(res)
          console.log(that.qualification)
      }).catch(function(err){
          console.log(err)
      })
    },



    onClickLeft() {
      this.$router.go(-1);
    },
   
    onClickRight() {
      let keep={
        "id":5,
        'dname':this.result.dname,
        'sex':this.result.sex,
        'hospitalId':this.value.id,
        'departmentId':this.value2.id,
        'position':this.value3.title,
        'uri':this.uri,
        'qualification':this.qualification,
      };
      console.log('我要保存数据了')
      console.log(keep)
      //点击保存的时候把数据传给后台
      this.$axios
        .post(this.$api.xwq.editmsgbaocun,keep)//JSON.stringify({id: 1,})
        .then((data) => {
          if(data.data.code=='200' || data.msg=='添加成功'){
            this.$toast.success('保存成功');
          }else{
            this.$toast.fail('保存失败');
          }
          console.log("我保存成功了");
          this.$router.push({
            path:'/basicmsg',
            params:{
              data:data,
            }
          });
          console.log(data);
        })
        .catch((err) => {
          console.log("保存失败");
          console.log(arguments);
          console.log(err);
        });
    },
     onConfirm(value) {   //医院
      this.value = value;
      this.showPicker = false;
      console.log('这是医院的id'+this.value.id)
    },
      section(value2) {   //科室
      this.value2 = value2;
      this.showsection = false;
      console.log(this.value2.id)
    },
      job(value3) {   //职称
      this.value3 = value3;
      this.showjob = false;
    },
  },

  mounted:function() {
    // this.result=this.$store.state.obj
    this.uploader[0].url=this.result.headimg
    this.myjob[0].url=this.result.statuimg

   this.$axios    //获取信息
        .post(this.$api.xwq.basicmsg,JSON.stringify({id:5}))//JSON.stringify({id: 1,})
        .then((data) => {
          this.result=data.data.data
          console.log('我点击编辑了');
          console.log(this.result)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取失败了');
        });

  // 获取医院接口已好
   this.$axios
        .post(this.$api.xwq.editmsgyiyuan,JSON.stringify({id:5}))//JSON.stringify({id: 1,})
        .then((data) => {
          this.hname=data.data.data
          console.log('获取到医院信息了');
          console.log(this.hname)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取失败了');
        });

//获取科室的接口  已好
 this.$axios
        .post(this.$api.xwq.editmsgkeshi,JSON.stringify({id:5}))//JSON.stringify({id: 1,})
        .then((data) => {
          this.dename=data.data.data
          console.log('获取到科室了');
          console.log(this.dename)
        })
        .catch((err) => {
          console.log(err);
          console.log('获取失败了');
        });
  },
  components: {
  },
}
</script>
<style  scoped>
*{
  margin:0;
  padding:0;
}
.van-nav-bar{
  background-color: rgba(0,199,126);
}
#myhead /deep/ .van-nav-bar .van-icon{
  color: white;
}
#myhead /deep/ .van-nav-bar__text{
  color: white;
}
#myhead /deep/ .van-ellipsis{
  color: white;
}
/deep/ .van-field__label {
    color: black;
    font-size:15px;
    line-height: 50px;
}
div /deep/.van-ellipsis{
  color:black;
}
label{
    font-size:15px;
    margin-right: 60px;
}
form{
    height: 100%;
    line-height: 50px;
    padding-left: 10px;
}
/deep/ .van-field__control{
    line-height: 50px;
}
input{
    height: 20px;
}
</style>