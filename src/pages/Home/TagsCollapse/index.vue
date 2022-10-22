<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" @change="handleChange">
      <el-collapse-item title="Consistency" name="1">
        <div>tag1</div>
        <div>tag2</div>
        <div>tag2</div>
        <div>tag2</div>
        <div>tag2</div>
        <div>tag2</div>
      </el-collapse-item>
      <el-collapse-item title="Consistency" name="2">
        <el-tag>Tag 1</el-tag>
        <el-tag class="ml-2" type="success">Tag 2</el-tag>
        <el-tag class="ml-2" type="info">Tag 3</el-tag>
        <el-tag class="ml-2" type="warning">Tag 4</el-tag>
        <el-tag class="ml-2" type="danger">Tag 5</el-tag>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeName = ref(["1"]);
const handleChange = (val) => {
  // console.log(val);
};
</script>
<style scoped></style>
