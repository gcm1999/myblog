<template>
  <div class="md-editor clearFix">
    <el-row :gutter="10">
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
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <el-input v-model="user" placeholder="请输入用户名">
          <template #prepend>user</template>
        </el-input>
        <!-- <el-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
      /> -->
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-input v-model="title" placeholder="请输入文章标题">
          <template #prepend>title</template>
        </el-input>
      </el-col>
    </el-row>

    <md-editor v-model="text" @onHtmlChanged="saveHtml" />

    <el-button type="primary" class="submitBtn" @click="setArticle">提交</el-button>
  </div>
</template>
<script setup>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { reqSetArticle } from "@/api";
import { ref } from "vue";

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
];

function saveHtml(h) {
  // console.log(h);
  context.value = h;
}

function setArticle() {
  if (!title.value.trim()) {
    alert("请输入文章标题");
  } else if (!user.value.trim()) {
    alert("请输入用户名");
  } else if (!tag.value.trim()) {
    alert("请选择文章标签");
  } else if (!text.value.trim()) {
    alert("文章内容不能为空");
  } else {
    const data = {
      title: title.value,
      user: user.value,
      tag: tag.value,
      context: context.value,
    };
    // console.log(data);
    reqSetArticle(data)
      .then((res) => {
        console.log(res);
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
