<template>
  <div class="nav-menu">
    <div class="logo"></div>
    <el-menu :default-active="defaultCurrentIndex">
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <!--          二级菜单 及下面的子菜单-->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="submit in item.children" :key="submit.id">
              <el-menu-item
                @click="handMenuClick(submit)"
                :index="submit.id + ''"
              >
                <i v-if="submit.icon" :class="submit.icon"></i>
                <span>{{ submit.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!--        一级菜单-->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { pathMapToMenu } from "@/util/map-menu";

export default {
  name: "navMenu",
  setup() {
    //menu
    const store = useStore();
    const userMenu = store.state.login.menuList;

    //router
    const router = useRouter();
    const route = useRoute();
    const currentPath = route.path;
    console.log(userMenu, currentPath);

    const menu = pathMapToMenu(userMenu, currentPath);
    const defaultCurrentIndex = ref(menu.id + "");
    const handMenuClick = (item) => {
      router.push({
        path: item.url ?? "/not-found",
      });
      console.log(router.options);
    };
    return {
      userMenu,
      defaultCurrentIndex,
      handMenuClick,
    };
  },
};
</script>

<style scoped>
.nav-menu {
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
}
</style>
