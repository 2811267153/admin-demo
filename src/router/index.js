import { createRouter, createWebHashHistory } from "vue-router";
import login from "@/views/login";
import cache from "@/util/cache";
import main from "@/views/main/main";
import notFond from "@/views/not-fond";
import list from "@/views/main/story/list/list";
import department from "@/views/main/system/department/department";
import user from "@/views/main/system/user/user";
import menu from "@/views/main/system/menu/menu";
import role from "@/views/main/system/role/role";
import overview from "@/views/main/analysis/dashboard/overview";
import dashboard from "@/views/main/analysis/overview/dashboard";
import category from "@/views/main/product/category/category";
import goods from "@/views/main/product/goods/goods";
import chat from "@/views/main/story/chat/chat";
import { firstMenu } from "@/util/map-menu";

const routes = [
  {
    path: "/",
    redirect: "main",
  },
  {
    path: "/main",
    component: main,
    children: [
      {
        path: "/main/story/list",
        component: list,
        meta: [{ title: "data" }],
      },
      {
        path: "/main/system/department",
        component: department,
      },
      {
        path: "/main/system/user",
        component: user,
      },
      {
        path: "/main/system/menu",
        component: menu,
      },
      {
        path: "/main/system/role",
        component: role,
      },
      {
        path: "/main/analysis/overview",
        component: overview,
      },
      {
        path: "/main/analysis/dashboard",
        component: dashboard,
      },
      {
        path: "/main/product/category",
        component: category,
      },
      {
        path: "/main/product/goods",
        component: goods,
      },
      {
        path: "/main/story/chat",
        component: chat,
        meta: [{ title: "chat111" }],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/:pathMath(.*)",
    component: notFond,
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

  //判断 现在 所处的位置
  if (to.path === "/main") {
    return firstMenu.url;
  }
});

export default router;
