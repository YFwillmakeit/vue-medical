export default {
    gethospitallist:'/interm/hospital/page?currentpage=1&limit=5',//获得医院列表接口
	selectHos:'/interm/hospital/like',
	addHos:'/interm/hospital/addhospital',
	editHos:'/interm/hospital/updatehospital',
	delHos:'/interm/hospital/delete',
	showDepartment:'/interm/department/limit',
	addDepartment:'/interm/department/insert',
	editDepartment:'/interm/department/update',
	showBLTT:'/interm/discuss/doctorpage',
	showZLHD:'/interm/activity/findByDoctorId',
	showJYJL:'/interm/deal/findByPhone',
	checkAct:'/interm/activity/findByTime',//通过时间查找活动
	editBLTT:'/interm/discuss/updateDiscuss',
	addZLHD:'/interm/activity/add',
	hosname:'/interm/hospital/name',//获取医院名称的下拉框
	departmentName:'/interm/department/find',//获取部门名称下拉框
	getDocList:'/interm/doctor/limit',
	selectDoc:'/interm/doctor/find',
	selectDoc1:'/interm/doctor/findlike',  //刘茂  10-11
	editDoc:'/interm/doctor/update',
	delDoc:'/interm/doctor/delete',
	addDoc:'/interm/doctor/add'
}