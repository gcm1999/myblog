<template>
  <div class="md-editor clearFix">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-input v-model="title" placeholder="请输入文章标题">
          <template #prepend>title</template>
        </el-input>
      </el-col>

      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <el-input
          class="hidden-xs-only"
          v-model="user"
          placeholder="请输入用户名"
          maxlength="10"
        >
          <template #prepend>user</template>
        </el-input>
        <el-input
          class="hidden-sm-and-up"
          v-model="user"
          placeholder="请输入用户名"
          maxlength="10"
        >
        </el-input>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <el-select
          class="select-box"
          v-model="tag"
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </el-col>
    </el-row>

    <md-editor v-model="text" />
    <input type="file" ref="inputFile" />

    <el-button type="primary" class="submitBtn" @click="setArticle"
      >提交</el-button
    >
  </div>
</template>
<script setup>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import { ElMessage } from "element-plus";

import "element-plus/theme-chalk/display.css";
import { reqSetArticle } from "@/api";
import { ref, onMounted } from "vue";

const inputFile = ref(null);
onMounted(() => {
  inputFile.value.addEventListener("change", function selectedFileChanged() {
    if (this.files.length === 0) {
      console.log("请选择文件！");
      return;
    }

    const reader = new FileReader();
    reader.onload = function fileReadCompleted() {
      // 当读取完成时，内容只在`reader.result`中
      // console.log(reader.result);
      text.value = reader.result;
    };
    reader.readAsText(this.files[0]);
  });
});

const text = ref("");

const tag = ref("");
const user = ref("");
const title = ref("");
const context = ref("");
const options = [
  {
    value: "JavaScript",
    label: "JavaScript",
  },
  {
    value: "HTML",
    label: "HTML",
  },
  {
    value: "CSS",
    label: "CSS",
  },
  {
    value: "MySQL",
    label: "MySQL",
  },
  {
    value: "LOL",
    label: "LOL",
  },
  {
    value: "java",
    label: "java",
  },
  {
    value: "其他",
    label: "其他",
  },
];

// function saveHtml(h) {
//   context.value = h;
// }

function setArticle() {
  if (!title.value.trim()) {
    // alert("请输入文章标题");
    ElMessage({
      message: "请输入文章标题",
      type: "warning",
    });
  } else if (!user.value.trim()) {
    // alert("请输入用户名");
    ElMessage({
      message: "请输入用户名",
      type: "warning",
    });
  } else if (!tag.value.trim()) {
    // alert("请选择文章标签");
    ElMessage({
      message: "请选择文章标签",
      type: "warning",
    });
  } else if (!text.value.trim()) {
    // alert("文章内容不能为空");
    ElMessage({
      message: "文章内容不能为空",
      type: "warning",
    });
  } else {
    const data = {
      title: title.value,
      user: user.value,
      tag: tag.value,
      context: text.value,
    };
    // console.log(data);
    reqSetArticle(data)
      .then((res) => {
        console.log(res);
        text.value = "";
        tag.value = "";
        user.value = "";
        title.value = "";
        context.value = "";
        // alert("提交成功！");
        ElMessage({
          message: "提交成功！",
          type: "success",
        });
      })
      .catch((rej) => {
        console.log(rej);
      });
  }
}
</script>

<!-- <script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref } from "vue";
export default {
  name: "",
  components: { MdEditor },
  setup() {
    const text = ref("hello");

    function saveHtml(h) {
      console.log(h);
    }
    return { text, saveHtml };
  },
};
</script> -->
<style scoped>
.select-box {
  width: 100%;
}
.submitBtn {
  float: right;
}
.md-editor {
  margin: 20px;
}
</style>
