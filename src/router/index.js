import { createRouter, createWebHashHistory } from "vue-router";
import login from "@/views/login";
import cache from "@/util/cache";
import main from "@/views/main/main";

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/main",
    component: main,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: login,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to) => {
  {
    if (to.path !== "/login") {
      const token = cache.getCache("token");
      if (!token) {
        return "/login";
      }
    }
  }
  console.log(router.getRoutes());
});

export default router;
