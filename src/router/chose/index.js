export default [
  {
    // 精选下的第一级子路由 附近好店
    path: "nearby/:id",
    props: true,
    component: () =>
      import("../../views/homes/chosen/children/nearby/nearby.vue")
  },
  //  {
  //     // 精选下的第一级子路由 倾听纸张的故事
  //     path: 'copy/:id',
  //     props: true,
  //     component: () => import("../../views/homes/chosen/children/copy/copy.vue")
  // },

  {
    path: "copy/:id",
    props: true,
    component: () => import("../../views/homes/chosen/children/copy/copy.vue"),
    meta: {
      requireLogin: true
    }
  }
];
