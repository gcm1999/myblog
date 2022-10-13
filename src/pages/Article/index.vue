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
          <div class="content" v-html="articleDetail.context"></div>
        </el-main>

        <el-footer class="footer">
          <Comment></Comment>
        </el-footer>
      </el-container>
    </el-container>
  </div>
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

import { useRoute } from "vue-router";
import { reqGetArticleDetail } from "@/api/index";
import { onMounted, toRefs, reactive } from "vue";
import Comment from "./Comment/index.vue";
export default {
  name: "Article",
  setup() {
    const data = reactive({
      articleDetail: {},
    });
    const route = useRoute();
    // console.log(route.params.title);
    // onMounted(() => {
    reqGetArticleDetail(route.params.title).then((res) => {
      // console.log(res);
      data.articleDetail = res.data.articleDetail[0];
    });
    // });
    const RefData = toRefs(data);
    return {
      // Check,
      // Delete,
      // Edit,
      // Message,
      // Search,
      // Star,
      // demo,
      ...RefData,
    };
  },
  components: { Comment },
};
</script>
<style scoped>
.article {
  padding: 0 80px;
  min-height: 900px;
}
.article h1 {
  text-align: center;
  margin: 20px 0;
}
.content {
  /* text-indent: 2em; */
}

.slider {
  background-color: pink;
}
.main {
  min-height: 900px;

  background-color: aliceblue;
}
.footer {
  background-color: skyblue;
}

@media screen and (max-width: 760px) {
  .article {
    padding: 0 10px;
  }
  .slider {
    width: 0;
  }
}
</style>
