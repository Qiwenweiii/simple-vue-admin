import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      children: [
        {
          path: "",
          component: () => import("@/views/sysMng/Main.vue"),
          name: "系统介绍",
        },
        {
          path: "/user",
          component: () => import("@/views/sysMng/User.vue"),
          name: "用户管理",
        },
        {
          path: "/menu",
          component: () => import("@/views/sysMng/Menu.vue"),
          name: "菜单管理",
        },
        {
          path: "/agencies",
          component: () => import("@/views/sysMng/Agencies.vue"),
          name: "机构管理",
        },
        {
          path: "/role",
          component: () => import("@/views/sysMng/Role.vue"),
          name: "角色管理",
        },
        {
          path: "/log",
          component: () => import("@/views/sysMng/Log.vue"),
          name: "日志管理",
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

// 导航守卫
router.beforeEach((to, from) => {
  // 进入任意页面时获取信息
  let user = sessionStorage.getItem("user");

  if (to.path === "/login") {
    // 如果即将进入的页面是登陆页面
    if (user) {
      // user 存在则代表已经登陆过，直接跳转首页
      return { name: "Home" };
    }
  } else {
    // 如果进入的是任意非登录页面
    if (!user) {
      // 如果用户信息不存在，则进入登录页面
      return { name: "Login" };
    }
  }
});

export default router;
