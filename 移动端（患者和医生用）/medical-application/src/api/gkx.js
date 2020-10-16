/*
 * @Author: happy
 * @Date: 2020-10-10 18:05:01
 * @LastEditTime: 2020-10-11 15:04:35
 * @LastEditors: happy
 * @Description: 
 */
export default {
    // agoillness
    jws:'/interm/familyhistory/findById' ,    //患者既往史接口      ====
    //allpatientlist
    syhz:'/interm/patient/findAll',           //所有患者接口             ====成功
    //diagnosis
    jzlj:'/interm/record/yszd',              //患者详情就诊记录诊断接口           ====成功
    // medicalrecords
    medicalrecords:'/interm/record/xq' ,        //请求所有就诊记录            ====成功
    //yaowu
    yaowu:'/interm/record/ysyw' ,                 ////药物治疗接口     
    //addjiuzhen
    addjiuzhen:'/interm/record/visit'  ,           //新增就诊记录   
    //now
    now:'/interm/current/findById2',         //现病史接口
    //jiuzhen
    jiuzhen:'/interm/current/update',                //现病史更新
    //family
    family:'/interm/familyhistory/update',           //家族史以及既往史更新
    //notice
    notice:'/interm/attention/findByDoctorIdAll',         //所有关注患者
    //serch
    serch:'/interm/patient/findByCondition',           //搜索患者
    //note
    note:'/interm/diseaselog/findByPatientIdAll',         //病情日志
    //basicinfo
    addnotice:'/interm/attention/add',               //医生添加关注患者
    //patient
    msg:'/interm/patient/findByIdAllMsg',          //获取患者基本信息
}
//this.$api.gkx.xxx