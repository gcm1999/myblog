<template>
  <!-- <h1>Overview</h1>
  <TestEcharts></TestEcharts> -->
  <div class="overview">
    <TestMdEditor></TestMdEditor>
  </div>
</template>
<script>
// import TestEcharts from './TestEcharts/index.vue';
import TestMdEditor from "./TestMdEditor/index.vue";

export default {
  name: "Overview",
  components: {
    // TestEcharts,
    TestMdEditor,
  },
};
</script>
<style scoped>
  .overview{
    min-height: 900px;
  }
</style>
