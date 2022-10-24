<template>
  <div class="overview">
    <h1>Overview</h1>
    <TestEcharts></TestEcharts>
    <h1>发布文章</h1>
    <TestMdEditor></TestMdEditor>
  </div>
</template>
<script>
import TestEcharts from "./TestEcharts/index.vue";
import TestMdEditor from "./TestMdEditor/index.vue";

export default {
  name: "Overview",
  components: {
    TestEcharts,
    TestMdEditor,
  },
};
</script>
<style scoped>
.overview {
  min-height: 900px;
}
h1 {
  text-align: center;
  font-size: 36px;
  padding: 5px 0 10px;
  background-color: #eee;
}
</style>
