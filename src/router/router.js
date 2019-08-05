import Vue from 'vue'
import VueRouter from 'vue-router'

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
          }
        },
        {
          path: "life",
          component: () => import("../views/homes/life/index"),
          meta: {
            requireLogin: true
          }
        },
        {
          path: "my",
          component: () => import("../views/homes/my/index"),
          meta: {
            requireLogin: true
          }
        }
      ]
    },
    {
      path: "/login",
      component: () => import("../views/login/index")
    },

    {
      path: "*",
      redirect: "/"
    }
  ]
});
// 全局守卫设置
// router.beforeEach((to,from,next) => {
//   if(to.meta.requireLogin){
//     if (window.localStorage.getItem("userInfo")) {
//       next();
//     } else {
//       next({
//         path: "/login",
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     }
//   }else{
//     next()
//   }
// })

export default router;
