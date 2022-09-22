import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/article/:title?",
      component: () => import("@/pages/Article"),
      name: "article",
    },
    {
      path: "/search/:keywords?",
      component: () => import("@/pages/Search"),
      name: "search",
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
