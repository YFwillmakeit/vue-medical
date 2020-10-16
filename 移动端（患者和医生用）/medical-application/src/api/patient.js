export default {
  /* ==========主页面============= */
  // 轮播图===写死
  lunbo: "", // 别人给我的地址的最后

  // 发作次数---------------王元
  fzNum: "/interm/episodes/insert",

  // 用药提醒---------------王元
  useYao: "/interm/current/findById2",

  // 关注的医生############################熊二
  conDoctor: "/interm/attentionpController/findByPatientId",

  // 诊疗活动++++++++++++++++++++++伍炳清
  activity: "/interm/activity/findByDoctorIds",

  // 报名诊疗活动(扣钱)###################熊二    //  待定
  regActivity: "/interm/activity/addP",

  // 报名诊疗活动+++++++++++++++++++伍炳清
  bmActivity: "interm/activity/addP",

  // 不良反应---------------王元
  badReac: "/interm/complete/insert",

  /* ==========我的============= */
  // 患者信息#############################熊二
  user: "/interm/patient/findById",

  // 个人信息
  peoInfor: "/interm/patient/update",

  // 余额#################################熊二
  money: "/interm/patient/findById",

  // 充值金额##############################熊二
  recharge: "/interm/patient/addAcount",

  // 余额明细
  // 支出
  outDetail: "/interm/deal/findByPhone",

  // 所有医生的接口*******************************杨天可
  allDoctor: "interm/doctor/limit",

  // 关注医生
  cDoctor: "interm/attentionpController/findByPatientIdAll",

  // 医生详细信息*********************************杨天可
  doctorInfor: "/interm/doctor/findDoc",

  // 关注一个医生###########################熊二
  follDoctor: "/interm/attentionpController/add",

  // 取消关注###############################熊二
  follConDoctor: "/interm/attentionpController/deleteAttention",

  // 全部日志###############################熊二
  allJour: "/interm//diseaselog/findByPatientIdAll",

  // 新增日志###############################熊二
  newJour: "/interm//diseaselog/add",

  // 修改密码
  newPwd: "/interm/user/updatePassword"
};
