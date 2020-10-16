export default {
    //诊疗活动
    DiagnosisSure: '/interm/activity/noPass', //诊疗活动确认驳回
    getDiagnosisLIst: '/interm/activity/findAll' , //诊疗活动渲染页面
    DiagnosisPass: '/interm/activity/pass', //通过接口
    search: '/interm/activity/findFuzz', //查询
    selectDiagno: '/interm/activity/findSign', //诊疗查看

    //病历活动管理
    sure: '/interm/discuss/reject',  //确认驳回
    getMedicalLIst: '/interm/discuss/page', //渲染页面
    pass: '/interm/discuss/pass' ,//通过
    medicalsearch: '/interm/discuss/like', //查询
    selectCaseHistory: '/interm/discuss/findBMDocotr',// 病历查看

    //交易信息管理
    getDealList: '/interm/deal/findAll',  //渲染页面
    dealSearch: '/interm/deal/findByFuzz' ,//查询

    // 充值记录
    getRechargeList: '/interm/recharge/findByLike' //渲染页面  查询


}