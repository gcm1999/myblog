<template>
  <!-- 
    <div class="article">
    <h1>
      {{ articleDetail.title }}
    </h1>
    <div class="content" v-html="articleDetail.context"></div>
  </div> 
-->
  <div class="common-layout article">
    <el-container>
      <el-aside class="slider" width="200px">slider</el-aside>
      <el-container>
        <el-main class="main">
          <h1>
            {{ articleDetail.title }}
          </h1>
          <!-- <div
            class="content"
            v-html="articleDetail.context"
          ></div> -->
          <md-editor v-model="articleDetail.context" :previewOnly="true" />
        </el-main>

        <!-- <el-footer class="footer">
        </el-footer> -->
      </el-container>
    </el-container>
  </div>
  <Comment class="comment"></Comment>
</template>
<script>
// import {
//   Check,
//   Delete,
//   Edit,
//   Message,
//   Search,
//   Star,
// } from "@element-plus/icons-vue";

// 读取md文件
// import demo from "@/assets/readMe.md"
// console.log(demo);

import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import { useRoute } from "vue-router";
import { reqGetArticleDetail } from "@/api/index";
import { toRefs, reactive, ref } from "vue";
import Comment from "./Comment/index.vue";
export default {
  name: "Article",
  setup() {
    const data = reactive({
      articleDetail: {},
    });
    // const text = ref("```js\nlet a = 11\n```");
    const route = useRoute();
    // console.log(route.params.title);
    // onMounted(() => {
    reqGetArticleDetail(route.params.title).then((res) => {
      // console.log(res);
      data.articleDetail = res.data.articleDetail[0];
    });
    // });
    return {
      // Check,
      // Delete,
      // Edit,
      // Message,
      // Search,
      // Star,
      // demo,
      ...toRefs(data),
      // text
    };
  },
  components: { Comment, MdEditor },
};
</script>
<style scoped>

.footer {
  background-color: skyblue;
}

.article h1 {
  text-align: center;
  /* margin: 20px 0; */
}

.slider {
  background-color: pink;
}

@media screen and (max-width: 760px) {
  .slider {
    width: 0;
  }
}
</style>
