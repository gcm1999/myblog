<template>
  <h1>
    {{ $route.params.title }}
  </h1>
</template>
<script>
import router from "@/router";
export default {
  name: "Article",
  setup() {
    console.log(router);
  },
};
</script>
<style scoped></style>
