import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'    //默认文件

// 刘茂
//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/farme',
    name: 'Farme',
    component: () => import(/* webpackChunkName: "about" */ '../views/Farme.vue'),
    children: [
      {
        path: '/farme',
        name: 'Usermap',
        component: () => import(/* webpackChunkName: "about" */ '../views/Usermap.vue')
      },
      {
        path: '/userlist',
        name: 'Userlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/Userlist.vue')
      },
      {
        path: '/diagnosis',
        name: 'Diagnosis',
        component: () => import(/* webpackChunkName: "about" */ '../views/Diagnosis.vue')
      },
      {
        path: '/hostoryManage',
        name: 'HostoryManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/HostoryManage.vue')
      },
      {
        path: '/doctorManage',
        name: 'DoctorManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/DoctorManage.vue')
      },
      {
        path: '/medical_history',
        name: 'Medical_history',
        component: () => import(/* webpackChunkName: "about" */ '../views/Medical_history.vue')
      },
      {
        path: '/dealManage',
        name: 'DealManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/DealManage.vue')
      },
      {
        path: '/bannerManage',
        name: 'BannerManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/BannerManage.vue')
      },
      {
        path: '/userlist',
        name: 'Userlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/Userlist.vue')
      },
      {
        path: '/queryBingLi',
        name: 'QueryBingLi',
        component: () => import(/* webpackChunkName: "about" */ '../views/QueryBingLi.vue')
      },
      {
        path: '/selectClinicalActivities',
        name: 'SelectClinicalActivities',
        component: () => import(/* webpackChunkName: "about" */ '../views/SelectClinicalActivities.vue')
      },
      {
        path: '/selectCaseHistory',
        name: 'SelectCaseHistory',
        component: () => import(/* webpackChunkName: "about" */ '../views/SelectCaseHistory.vue')
      },
      {
        path: '/rechargeManage',
        name: 'RechargeManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/RechargeManage.vue')
      },
      {
        path: '/checkHos',
        name: 'CheckHos',
        component: () => import(/* webpackChunkName: "about" */ '../views/CheckHos.vue')
      },
      {
        path: '/checkDoc',
        name: 'CheckDoc',
        component: () => import(/* webpackChunkName: "about" */ '../views/CheckDoc.vue')
      }
      // {
      //   path: '/jzjj',
      //   name: 'JZJJ',
      //   component:()=>import(/*webpackChunkName:"about"*/'../views/JZJJ.vue')
      // }
    ]

  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path === "/login"){
     next();
  }else{
    if(window.localStorage.getItem('token') !== null){
      next();
    }else{
      router.replace("/login");
    }
    
  }
})

export default router
