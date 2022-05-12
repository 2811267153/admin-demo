import { createStore } from "vuex";
import login from "./login/login";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});

export function setupStore() {
  store.dispatch("localLogin");
}

export default store;
