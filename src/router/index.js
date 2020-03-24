import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Index/Home.vue'),
    children: [
      {
        path: '/',
        name: 'pageIndex',
        component: () => import('../views/Index/components/PageIndex.vue'),
        children: [
          {
            path: '/:vendor',
            name: 'game',
            component: () => import('../views/Index/components/Game.vue')
          },
        ]
      },
      {
        path: "/discount/:category",
        name: "discount",
        component: () =>
          import("../views/Discount/index.vue"),
      },
      {
        path: "/customer",
        name: 'customer',
        component: () => import("../views/Customer/index.vue")
      },
      {
        path: "/myCenter",
        name: 'myCenter',
        component: () => import("../views/MyCenter/index.vue")
      },

    ],
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router;
