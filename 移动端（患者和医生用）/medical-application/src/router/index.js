import Vue from "vue";
import VueRouter from "vue-router";
import notes from "../views/notes.vue";
import PatientIndex from "../views/patient-index/index.vue";
import IndexBottom from "../views/patient-index/index-bottom.vue";
import login from '../views/login/login'
import forgetPassword from "../views/login/forget-password";
import rejester from "../views/login/rejester";
Vue.use(VueRouter);

const routes = [
	// ==============登录、注册、忘记密码
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/rejester',
		component: rejester
	},
	{
		path: '/forgetPassword',
		component: forgetPassword
	},

	// ================患者首页
	{
		path: "/patientIndex",
		name: "PatientIndex",
		component: PatientIndex,
		children: [
			{
				path: "/patientIndex",
				name: "IndexBottom",
				component: IndexBottom
			}
		]
	},
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/information",
    name: "information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/information.vue"),
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/symptom",
    name: "symptom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/symptom.vue"),
  },
  {
    path: "/notes",
    name: "notes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/notes.vue"),
  },
  {
    path: "/jzjllist",
    name: "jzjllist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/jzjllist.vue"),
  },
  {
    path: "/EpiNum",
    name: "EpiNum",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/epi-num.vue"),
  },
  {
    path: "/patientinfo",
    name: "patientinfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/help",
    name: "help",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/help.vue"),
  },
  {
    path: "/recordvisit",
    name: "recordvisit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/recordvisit.vue"),
  },
  {
    path: "/choice",
    name: "choice",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/choice.vue"),
	},
	{
			path: "/badReaction",
			name: "BadReaction",
			component: () => import("../views/patient-index/bad-reaction.vue")
		},
	{
			path: "/mine",
			name: "Mine",
			component: () => import("../views/patient-mine/mine.vue"),
			children: [
				// 主页面
				{
					path: "/mine",
					name: "MainPage",
					component: () => import("../views/patient-mine/main-page.vue")
				},
				// 消息
				{
					path: "/mine/infor",
					name: "Information",
					component: () => import("../views/patient-mine/information/my-information.vue")
				},
				// 日志
				{
					path: "/mine/journal",
					name: "Journal",
					component: () => import("../views/patient-mine/journal/journal.vue"),
					children: [
						{
							path: "/mine/journal",
							name: "MainJournal",
							component: () => import("../views/patient-mine/journal/main-journal.vue")
						},
						// 添加日志
						{
							path: "/mine/journal/newJournal",
							name: "NewJournal",
							component: () => import("../views/patient-mine/journal/new-journal.vue")
						},
						// 日志的详细信息
						{
							path: "/mine/journal/detJour",
							name: "DetailedJour",
							component: () => import("../views/patient-mine/journal/detailed-jour.vue")
						}
					]
				},
				// 我的医生
				{
					path: "/mine/doctor",
					name: "Doctor",
					component: () => import("../views/patient-mine/doctor/doctor.vue"),
					children: [
						{
							path: "/mine/doctor",
							name: "MyDoctor",
							component: () => import("../views/patient-mine/doctor/my-doctor.vue"),
							children: [
								// 全部医生
								{
									path: "/mine/doctor",
									name: "AllDoctor",
									component: () => import("../views/patient-mine/doctor/all-doctor.vue")
								},
								// 关注的医生
								{
									path: "/mine/doctor/conDoctor",
									name: "ConDoctor",
									component: () => import("../views/patient-mine/doctor/con-doctor.vue")
								}
							]
						},
						{
							path: "/mine/doctor/doctorInfor",
							name: "DoctorInfor",
							component: () => import("../views/patient-mine/doctor/doctor-infor.vue")
						}
					]
				},
				// 账户信息
				{
					path: "/mine/account",
					name: "Account",
					component: () => import("../views/patient-mine/account/account.vue"),
					children: [
						{
							path: "/mine/account",
							name: "MainAccount",
							component: () => import("../views/patient-mine/account/main-account.vue")
						},
						// 确认充值
						{
							path: "/mine/account/payment",
							name: "Payment",
							component: () => import("../views/patient-mine/account/payment.vue")
						},
						// 充值说明
						{
							path: "/mine/account/explain",
							name: "Explain",
							component: () => import("../views/patient-mine/account/explain.vue")
						},
						// 余额明细
						{
							path: "/mine/account/detailed",
							name: "Detailed",
							component: () => import("../views/patient-mine/account/detailed.vue")
						}
					]
				},
				// 设置
				{
					path: "/mine/set",
					name: "MainSet",
					component: () => import("../views/patient-mine/set/main-set.vue"),
					children: [
						{
							path: "/mine/set",
							name: "Set",
							component: () => import("../views/patient-mine/set/set.vue")
						},
						// 版本更新
						{
							path: "/mine/set/update",
							name: "SetUpdate",
							component: () => import("../views/patient-mine/set/set-update.vue")
						},
						// 修改密码
						{
							path: "/mine/set/password",
							name: "SetPassword",
							component: () => import("../views/patient-mine/set/set-password.vue")
						},
						// 消息设置
						{
							path: "/mine/set/information",
							name: "SetInformation",
							component: () => import("../views/patient-mine/set/set-information.vue")
						}
					]
				}
			]
		},

	// =========== 医生首页
	{
		path: '/main',
		name: 'main',
		component: () => import(/* webpackChunkName: "about" */ '../views/doctor/main.vue'),
		children: [{
			path: '',
			redirect: '/index'
		},
			{
				path: '/index',
				name: 'index',
				component: () => import(/* webpackChunkName: "about" */ '../views/doctor/index.vue'),
			},
			{
				path: '/patient',
				name: 'patient',
				component: () => import(/* webpackChunkName: "about" */ '../views/doctor/patient.vue'),
			},
			{
				path: '/message',
				name: 'message',
				component: () => import(/* webpackChunkName: "about" */ '../views/doctor/message.vue'),
			},
			{
				path: '/omine',
				name: 'omine',
				component: () => import(/* webpackChunkName: "about" */ '../views/doctor/omine.vue'),
			}
		]
	},
	{
		path: '/allpatient/:activeName',
		name: 'allpatient',
		component: () => import(/* webpackChunkName: "about" */ '../views/doctor/allpatient.vue'),
	},

	{
		path: '/case-study',   //这是病例探讨
		name: 'case-study',
		component: () => import('../views/doctor/case-study.vue')
	},
	{
		path: '/activity',  //这是诊疗活动
		name: 'activity',
		component: () => import('../views/doctor/activity.vue')
	},
	{
		path: '/myStudy',  //我的探讨
		name: 'myStudy',
		component: () => import('../views/doctor/my_study.vue')
	},
	{
		path: '/study_details',  //我的探讨
		name: 'study_details',
		component: () => import('../views/doctor/study_details.vue')
	},
	{
		path: '/allpatient-serch',  //我的探讨
		name: 'allpatient-serch',
		component: () => import('../views/doctor/allpatient-serch.vue')
	},
	{
		path: '/newgroup',  //我的探讨
		name: 'newgroup',
		component: () => import('../views/doctor/newgroup.vue')
	},
	{
		path: '/addmember',  //我的探讨
		name: 'addmember',
		component: () => import('../views/doctor/addmember.vue')
	},
	{
		path: '/patientdetail',  //我的探讨
		name: 'patientdetail',
		component: () => import('../views/doctor/patientdetail.vue')
	},
	{
		path: '/patientinfo/:activeName',  //我的探讨
		name: 'patientinfo',
		component: () => import('../views/doctor/patientinfo.vue'),
	},
	{
		path: '/noticepatient',  //我的探讨
		name: 'noticepatient',
		component: () => import('../views/doctor/noticepatient.vue'),
	},
	{
		path: '/personalinformation',  //我的探讨
		name: 'personalinformation',
		component: () => import('../views/doctor/personalinformation.vue'),
	},
	{
		path: '/guomin',  //我的探讨
		name: 'guomin',
		component: () => import('../views/doctor/guomin.vue'),
	},
	{
		path: '/abnormal',  //我的探讨
		name: 'abnormal',
		component: () => import('../views/doctor/abnormal.vue'),
	},
	{
		path: '/CT',  //我的探讨
		name: 'CT',
		component: () => import('../views/doctor/CT.vue'),
	},
	{
		path: '/shoushu',  //我的探讨
		name: 'shoushu',
		component: () => import('../views/doctor/shoushu.vue'),
	},
	{
		path: '/jiuzhen',  //
		name: 'jiuzhen',
		component: () => import('../views/doctor/jiuzhen.vue'),
		children:[
			{ path: '/zhenduan',  //
				name: 'zhenduan',
				component: () => import('../views/doctor/zhenduan.vue'),
			},
			{ path: '/help',  //
				name: 'help',
				component: () => import('../views/doctor/help.vue'),
			},
			{ path: '/yaowu2',  //
				name: 'yaowu2',
				component: () => import('../views/doctor/yaowu2.vue'),
			},
			{ path: '/special2',  //
				name: 'special2',
				component: () => import('../views/doctor/special2.vue'),
			},
		]
	},
	{ path: '/abnormal2',  //
		name: 'abnormal2',
		component: () => import('../views/doctor/abnormal2.vue'),
	},
	{
		path: '/my-study',  //我的探讨
		name: 'my-study',
		component: () => import('../views/doctor/my-study.vue')
	},
	{
		path: '/study-details',  //探讨详情
		name: 'study-details',
		component: () => import('../views/doctor/study-details.vue')
	},
	{
		path: '/join',  //参与讨论
		name: 'join',
		component: () => import('../views/doctor/join.vue')
	},
	{
		path: '/studysure',  //确认参与
		name: 'studysure',
		component: () => import('../views/doctor/studysure.vue')
	},
	{
		path:'/initiate',   //发起探讨  sureinitiate
		name:'initiate',
		component: () => import('../views/doctor/initiate.vue')
	},
	{
		path:'/sureinitiate',   //确认发起探讨  sureinitiate
		name:'sureinitiate',
		component: () => import('../views/doctor/sureinitiate.vue')
	},
	{
		path:'/add',   //添加  sureinitiate
		name:'add',
		component: () => import('../views/doctor/add.vue'),
		meta: {
			keepAlive: true // 需要缓存
		}
	},
	{
		path:'/remindpeople',   //选择人群
		name:'remindpeople',
		component: () => import('../views/doctor/remindpeople.vue')
	},
	{
		path:'/basicmsg',   //基本信息
		name:'basicmsg',
		component: () => import('../views/doctor/basicmsg.vue')
	},
	{
		path:'/set',   //设置
		name:'set',
		component: () => import('../views/doctor/set.vue')
	},
	{
		path:'/about',   //关于我们
		name:'about',
		component: () => import('../views/doctor/about.vue')
	},
	{
		path:'/accountmsg',   //选择人群
		name:'accountmsg',
		component: () => import('../views/doctor/accountmsg.vue')
	},
	{
		path:'/editmsg',   //编辑信息
		name:'editmsg',
		component: () => import('../views/doctor/editmsg.vue')
	},
	{
		path:'/balance',   //余额明细
		name:'balance',
		component: () => import('../views/doctor/balance.vue')
	},
	{
		path:'/explain',   //充值说明
		name:'explain',
		component: () => import('../views/doctor/explain.vue')
	},
	{
		path:'/information',   //消息设置
		name:'information',
		component: () => import('../views/doctor/information.vue')
	},
	{
		path:'/password',   //修改密码
		name:'password',
		component: () => import('../views/doctor/password.vue')
	},
	{
		path:'/update',   //版本更新
		name:'update',
		component: () => import('../views/doctor/update.vue')
	},
	{
		path:'/mystudydetails',   //版本更新
		name:'mystudydetails',
		component: () => import('../views/doctor/mystudydetails.vue')
	},
	{
		path:'/joindoctor',   //参会医生
		name:'joindoctor',
		component: () => import('../views/doctor/joindoctor.vue')
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
	 if (to.path === "/login"||to.path === "/rejester"||to.path === "/forgetPassword"){
		  next();
	 }else{
		 if(window.localStorage.getItem('token') !== null){
		 	next();
		 }else{
		 	router.replace('/login');
		 }
	 }
})

export default router;
