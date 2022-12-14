import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/overview",
      component: () => import("@/pages/Overview"),
      name: "overview",
    },
    {
      path: "/article/:title?",
      component: () => import("@/pages/Article"),
      name: "article",
      meta: { hidden: true },
    },
    {
      path: "/search/:keywords?",
      component: () => import("@/pages/Search"),
      name: "search",
      meta: { hidden: true },
    },
    {
      path: "/messageboard",
      component: () => import("@/pages/MessageBoard"),
      name: "city",
    },
    {
      path: "/home",
      component: () => import("@/pages/Home"),
      name: "home",
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // console.log(savedPosition);
    return { top: 0 };
  },
});
export default router;
