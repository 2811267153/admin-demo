import axios from "axios";
import cache from "@/util/cache";

export function request(config) {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 1500,
    withCredentials: true,
  });
  instance.interceptors.request.use(
    (config) => {
      // 如果有一个接口需要认证才能访问，就在这里统一设置
      const token = cache.getCache("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    () => {}
  );
  instance.interceptors.response.use(
    (config) => {
      if (config.data.code !== 200) {
        // jsCookie.remove("JSESSIONID");JSESSIONID
      }
      return config;
    }
    // (error) => {}
  );

  return instance(config);
}
