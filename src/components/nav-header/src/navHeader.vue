<template>
  <div class="nav-header">
    <el-icon class="fold"><Expand /></el-icon>
  </div>
</template>

<script>
export default {
  name: "navHeader",
};
</script>

<style scoped>
.fold {
  font-size: 2rem;
  color: #000;
}

.nav-header {
  background-color: #fff;
  height: 40px;
}
</style>
