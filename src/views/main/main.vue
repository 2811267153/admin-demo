<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <nav-menu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header />
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import navMenu from "@/components/nav-menu";
import navHeader from "@/components/nav-header";

export default {
  name: "HomeView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    navMenu,
    // eslint-disable-next-line vue/no-unused-components
    navHeader,
  },
};
</script>

<style>
.common-layout {
  display: flex;
  height: 100%;
  background-color: #ccc;
}
.page-header {
  background-color: #fff;
}
</style>
