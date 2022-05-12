import { request } from "@/network/axios";

export function getLogin(data) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function getUserId(id) {
  return request({
    url: "/users/" + id,
    method: "get",
  });
}
export function getUserMenu(id) {
  return request({
    url: "/role/" + id + "/menu",
    method: "get",
  });
}
