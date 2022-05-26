import { getLogin, getUserId, getUserMenu } from "@/network/login";
import cache from "@/util/cache";
import router from "@/router";
import { mapMenuToRouter } from "@/util/map-menu";

const login = {
  state() {
    return {
      token: "",
      userInfo: {},
      menuList: {},
    };
  },
  mutations: {
    changeToken(state, token) {
      state.token = token;
    },
    changeUserinfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    changeMenuList(state, menuList) {
      state.menuList = menuList;
      const routes = mapMenuToRouter(menuList);
      routes.forEach((route) => {
        console.log(route);
        router.addRoute("main", route);
      });
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async loginAction({ commit }, payLoad) {
      const result = await getLogin(payLoad);
      const { id, token } = result.data.data;
      commit("changeToken", token);
      cache.setCache("token", token);

      //用户登录数据
      const userRes = await getUserId(id);
      const userInfo = userRes.data.data;
      commit("changeUserinfo", userInfo);
      cache.setCache("userInfo", userInfo);

      //获取用户菜单
      const menuListRes = await getUserMenu(userInfo.role.id);
      const meunList = menuListRes.data.data;
      commit("changeMenuList", meunList);
      cache.setCache("menuList", meunList);

      await router.push("/main");
    },

    //初始化token
    localLogin({ commit }) {
      const token = cache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = cache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserinfo", userInfo);
      }
      const menuList = cache.getCache("menuList");
      if (menuList) {
        commit("changeMenuList", menuList);
      }
    },
  },
};

export default login;
