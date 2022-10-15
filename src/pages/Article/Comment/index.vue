<template>
  <!-- 评论区 -->
  <div class="comment-box">
    <el-input
      v-model="content"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="说点啥"
      @keyup.enter="saveMsg"
    />
    <el-button @click="clearMsg">重置</el-button>
    <el-button @click="saveMsg" type="primary">提交</el-button>
  </div>

  <el-timeline class="timeline">
    <el-timeline-item
      v-for="(comment, index) in commentList"
      :key="comment.id"
      :timestamp="timeHandler(comment.time)"
    >
      {{ comment.content }}
    </el-timeline-item>
  </el-timeline>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { reqGetCommentList, reqSetComment } from "@/api";
import { timeHandler } from "@/utils";

const route = useRoute();

const content = ref("");
const commentList = ref({});

function getCommentList() {
  reqGetCommentList(route.params.title).then((res) => {
    console.log(res);
    if (res.code === 200) {
      commentList.value = res.data.commentList;
    }
  });
}

getCommentList();

function saveMsg() {
  if (!content.value.trim()) {
    alert("打点字再提交吧");
    return;
  }
  const data = { title: route.params.title, content: content.value };
  // alert(content.value);
  reqSetComment(data)
    .then((res) => {
      if (res.code === 201) {
        alert("添加成功");
        getCommentList();
      }
    })
    .catch((rej) => {
      console.log(rej);
    });
  clearMsg();
}
function clearMsg() {
  content.value = "";
}
</script>
<style scoped>
.comment-box {
  margin: 20px;
}
.timeline {
  margin: 20px;
}
</style>
