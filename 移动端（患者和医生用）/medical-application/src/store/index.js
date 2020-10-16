import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	// 标志医生或者患者身份
		powerId: 0,
		// 标志某个人
		id: 0,
		// token
		token: '',
   // =============================
		/* 患者的信息 */
		patient: {
			acount: 1020,
			address: "成都",
			age: 20,
			complete: null,
			current: null,
			diseaseYear: 5,
			diseaselog: null,
			doctorId: 1,
			episodes: null,
			familyhistory: null,
			hospitalId: 1,
			id: 1,
			name: "测试1",
			password: "bY2M4YBealplLpyflvCG2w==",
			phone: "110111111",
			powerId: 1,
			recordId: null,
			salt: "a1dbc506-e653-4b91-af01-181f945e60da",
			schedule: null,
			sex: 1,
			stage: 2,
			url: "https://img.yzcdn.cn/vant/cat.jpeg",
			username: "admin1",
			weight: 60
		},
		/* 所有医生 */
		doctor: [
			{
				acount: 1000,
				department_id: "6",
				dname: "王元",
				hname: "成都市军医院",
				id: 1,
				own: 15,
				phone: "111"
			},
			{
				department_id: "7",
				dname: "王元15",
				hname: "成都市人民医院7",
				id: 5,
				own: 1
			},
			{
				id: 3,
				dname: "医科圣手",
				uri: "",
				position: "主任医师",
				year: 17,
				hname: "成都市第一医院",
				introd:
					"这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介这块是医生简介",
				type: false
			}
		],
		// 关注的医生
		conDoctor: [
			{
				doctorId: 6,
				patientId: 1,
				doctor: {
					acount: null,
					address: null,
					age: null,
					departmentId: null,
					des: "测试简介2",
					hospitalId: "8",
					id: 6,
					name: "杨天可",
					password: null,
					phone: "123456",
					position: "主治医生",
					powerId: null,
					qualification: null,
					salt: null,
					sex: "女",
					treatmentId: null,
					type: "主任",
					uri: null,
					workYear: 10
				},
				hospital: {
					address: null,
					alias: null,
					createdDate: null,
					// departments: Array(0),
					doctor_count: null,
					// doctors: Array(0),
					grade: null,
					hotline: null,
					id: null,
					linkman: null,
					name: null,
					nature: null,
					phone: null
				}
			},
			{
				doctorId: 8,
				patientId: 1,
				doctor: {
					acount: null,
					address: null,
					age: null,
					departmentId: null,
					des: "测试简介3",
					hospitalId: "15",
					id: 8,
					name: "王元1",
					password: null,
					phone: null,
					position: "测试3",
					powerId: null,
					qualification: null,
					salt: null,
					sex: null,
					treatmentId: null,
					type: null,
					uri: null,
					workYear: 12
				},
				hospital: {
					address: null,
					alias: null,
					createdDate: null,
					// departments: Array(0),
					doctor_count: null,
					// doctors: Array(0),
					grade: null,
					hotline: null,
					id: null,
					linkman: null,
					name: null,
					nature: null,
					phone: null
				}
			}
		],
		// 关注
		followDoctor: [
			{ id: 1, type: true },
			{ id: 2, type: false },
			{ id: 3, type: true },
			{ id: 4, type: true },
			{ id: 5, type: false },
			{ id: 4, type: true },
			{ id: 3, type: true },
			{ id: 1, type: true }
		],
		// 日志
		journal: [
			{
				des: "测试描述",
				id: 1,
				patientId: null,
				purl: null,
				recordTime: null
			},
			{
				des: "测试描述49",
				id: 2,
				patientId: null,
				purl: null,
				recordTime: null
			}
		],
		// 诊疗活动
		activity: [
			{
				a_time: 1600358400000,
				b_time: 1600185600000,
				dName: "成都市人民医院6",
				d_id: 2,
				des: "",
				doctorName: "王元18",
				doctor_id: 7,
				e_time: 1600358400000,
				id: 1,
				money: 200,
				passDes: "士大夫",
				people: 20,
				t_id: 1
			},
			{
				a_time: 1601049600000,
				b_time: 1601049600000,
				dName: "成都市人民医院6",
				d_id: 2,
				des: "63a4bf0e-3699-4141-9f7f-a072ca06eb4a",
				doctorName: "杨天可",
				doctor_id: 6,
				e_time: 1601049600000,
				id: 122,
				money: 200,
				passDes: "宪法相关法",
				people: 3,
				t_id: 5
			}
		],
		medicine: {
			count: 1,
			ct: "没毛病",
			ctDes: null,
			diagnosis: "是",
			diagnosisDes: null,
			eeg: "123456",
			eegDes: null,
			frequency: "周",
			gene: "ad",
			id: 1,
			immune: "是",
			jqjs: "是",
			medicine: "999感冒灵",
			medicineDes: null,
			onset: "2020/9/25 上午12:00:00",
			operation: "否",
			operationDes: null,
			other: "没",
			patientId: null,
			stys: "是"
		},
		did: [],
    contentList: {
      diagnosis: 0,
      diagnosis_des: "",
      eeg: 0,
      eeg_des: "",
      ct: 0,
      ct_des: "",
      gene: 0,
      count: "",
      frequency: "",
      medicine: 0,
      operation_des: "",
      operation: 0,
      jqjs: 0,
      immune: 0,
      stys: 0,
      other: 0,
    },
    contentlist2: {
			allergy:'',
			allergy_name:'',
			trauma:0,
			trauma_des:'',
			Chronic:0,
			Chronic_name:'',
			injury:0,
			infected:0,
			hemorrhage:0,
			convulsion:0,
			Familialdis:0,
			Familialdis_name:'',
			marry:0,
			birth:0,
		},

		// ==============医生==========================
		hzlist:[],
		doctorlist:[],
		// 分组时选择的患者成员
		selectMember: [],
		// 分组每组的组名和成员
		groupArr: [],
		// 当前患者信息
		now:{},//现病史修改的信息，就诊记录
		family:{},//既往史和家族史修改的信息
		currentPatientDetail: {},  //所有患者点击时的一个
		notice:{},             //关注患者的点击
		list:{},   //发起探讨
		obj:{},      //个人信息
		keep:{},      //保存信息
		remind:{},     //点击提交的时候的保存信息
		jiuzhen:{},      //就诊记录信息
		jiuzhen2:[],       //点击保存时修改的就诊记录信息
		zhenduan:[],       //诊断以及内容
		check:[],        //辅助检查
		ago:[],
		myday:[],
		myall:[],
	},
	getters: {
    // 所有医生
    getStateDoctor(state) {
      if (
        state.doctor !=
        [
          {
            id: 1,
            username: "医科圣手",
            uri: "",
            position: "主任医师",
            year: 17,
            hospital: "成都市第一医院"
          }
        ]
      )
        localStorage.setItem("allDoctor", JSON.stringify(state.doctor));
      return localStorage.getItem("allDoctor");
    },
    // 关注医生
    getStateConDoctor(state) {
      /* if(state.doctor != [
        {
          doctorId: null,
          patientId: null,
          doctor: {
            acount: null,
            address: null,
            age: null,
            departmentId: null,
            des: null,
            hospitalId: null,
            id: null,
            name: "医科圣手",
            passeord: null,
            phone: null,
            position: "主任医师",
            powerId: null,
            sex: null,
            treatmentId: null,
            type: null,
            uri: null,
            username: null,
            workYear: 17,
          }
        }
      ]) localStorage.setItem("conDoctor",JSON.stringify(state.doctor)); */
      state.conDoctor = localStorage.getItem("allDoctor");
      return localStorage.getItem("conDoctor");
    }
	},
	mutations: {
    // 定义一个方法
    /* getDoctor(state, newDoctor) {
      state.doctor = newDoctor;
    }, */
    // 关注医生
    getConDoctor(state, newConDoctor) {
      state.conDoctor = newConDoctor;
    }
  },
  actions: {
    getConDoctorFun(context, newConDoctor) {
      context.commit("getConDoctor", newConDoctor);
    }
  },
  modules: {},
});
