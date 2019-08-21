import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入精选的子路由
import Chosen from './chose/index'
import store from "../store/store";

Vue.use(VueRouter)

/* webpackChunkName: "about" */  //在懒加载import内可以重命名懒加载 可忽略
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("../views/homes/homes"),
      children: [
        {
          path: "",
          component: () => import("../views/homes/home/index"),
          meta: {
            requireLogin: true
          }
        },
        {
          path: "chosen",
          component: () => import("../views/homes/chosen/index"),
          meta: {
            requireLogin: true
          },
          children: Chosen
        },
        {
          path: "/life",
          component: () => import("../views/homes/life/index/index"),
          // children:[
          //   {
          //     path:"TuijianDetail",
          //     component:() => import("../views/homes/life/TuijianMore/TuijianDetail"),
          //   }
          // ],
          meta: {
            requireLogin: true
          }
        },
        {
          path: "/life/FujinDetail",
          component: () => import("../views/homes/life/FujinMore/FujinDetail"),
          meta: {
            requireLogin: true
          }
        },

        {
          path: "my",
          component: () => import("../views/homes/my/index"),
          meta: {
            requireLogin: true
          },
          children: [
            {
              path: "setting",
              component: () => import("../views/homes/my/chidren/setting.vue"),
              meta: {
                requireLogin: true
              }
            }
          ]
        }
      ]
    },
    {
      path: "/login", //登录页
      component: () => import("../views/login/index")
    },
    {
      path: "/goodshop", //home > 查看更多 好点-深圳
      component: () => import("../views/homes/home/goodshop"),
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/togo", //home > 分类 > 想去的地方 > 全部想去的用户
      component: () => import("../components/wanttogo/"),
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/eatbar", //home > 分类 > 餐吧
      component: () => import("../views/homes/home/eatbar"),
      meta: {
        requireLogin: true
      }
    },

    {
      path: "*",
      redirect: "home"
    }
  ]
});
// 全局守卫设置
      router.beforeEach((to,from,next) => {
        if(to.meta.requireLogin){
          if ( localStorage.getItem('token') ) {
            next();
          } else {

            next({
              path: "/login",
              query: {
                redirect: to.fullPath
              }
            });
          }
        }else{
          next()
        };

        if(to.fullPath == "/login"){
          if(localStorage.getItem("token")){
            next({
              path:from.fullPath
            });
          };
        }else{
          next()
        }


      })

export default router;
