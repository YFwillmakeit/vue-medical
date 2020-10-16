export default {
    //LOGIN
    login: '/interm/manager/login',     //登录接口       ====通过
    //USERLIST
    getdeptlist:'/interm/patient/findAll' ,  //获取患者列表        ====通过
    onSubmit:'/interm/patient/findByCondition' , //患者列表的查询接口    ====通过
    handleClick :'/interm/patient/findByIdAllMsg',      //查看病历       ====通过
    addPatien:'/interm/patient/addPatient'  ,      //新增患者             ====通过
    editdept:'/interm/patient/update'  ,        //患者列表编辑的的确定接口      ====通过
    delUser:'/interm/patient/deleteByPatientId',   //患者列表删除接口    ====通过
    changeSave:'/interm/patient/updateDoctor' ,      //患者列表的更换医生      ====
    changeDoc:'/interm/hospital/name' ,      //更换医生的二级下拉框的请求    ====
    //QueryBingLI
    handleClicks:'/interm/record/xq' ,      //具体的就诊记录的查看接口  
    jzjl:'/interm/record/czjz',                           //所有就诊记录的请求接口
    bqrz:'/interm/diseaselog/findByPatientIdAll'                  //该患者的病情日志
}