import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/home.vue"),
        },
        {
          path: "/identifikator",
          name: "Identifikator",
          component: () => import("../views/identifikator.vue"),
        },
        {
          path: "/politika",
          name: "Politika",
          component: () => import("../views/politika.vue"),
        },
        {
          path: "/politikaInfo",
          name: "PolitikaInfo",
          component: () => import("../views/politikaInfo.vue"),
        },
      ],
    },
    // {
    //    path: '/about',
    //    name: 'about',
    //    // route level code-splitting
    //    // this generates a separate chunk (About.[hash].js) for this route
    //    // which is lazy-loaded when the route is visited.
    //    component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
