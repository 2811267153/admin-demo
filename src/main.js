import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import store, { setupStore } from "./store";
const app = createApp(App);
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
setupStore();
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(store).use(router).mount("#app");
