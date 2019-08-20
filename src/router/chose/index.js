export default [
  {
    path: "nearby/:id",
    props: true,
    component: () => import("../../views/homes/chosen/children/nearby.vue"),
    meta: {
      requireLogin: true
    }
  },
  {
    path: "copy/:id",
    props: true,
    component: () => import("../../views/homes/chosen/children/copy.vue"),
    meta: {
      requireLogin: true
    }
  }
];
