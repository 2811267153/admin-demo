<template>
  <div class="list">
    <h2>{{ $route.meta[0].title }}</h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "list",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
