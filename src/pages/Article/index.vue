<template>
  <div class="article">
    <h1>
      {{ articleDetail.title }}
    </h1>
    <div class="content" v-html="articleDetail.context"></div>
  </div>
</template>
<script>
// import router from "@/router";
import { useRoute } from "vue-router";
import { reqGetArticleDetail } from "@/api/index";
import { onMounted, toRefs, reactive } from "vue";
export default {
  name: "Article",
  setup() {
    const data = reactive({
      articleDetail: {},
    });

    const route = useRoute();
    // console.log(route.params.title);

    onMounted(() => {
      reqGetArticleDetail(route.params.title).then((res) => {
        // console.log(res);
        data.articleDetail = res.data.articleDetail[0];
      });
    });

    const RefData = toRefs(data);

    return { ...RefData };
  },
};
</script>
<style scoped>
.article {
  padding: 0 80px;
}
.article h1 {
  text-align: center;
  margin: 20px 0;
}
.content {
  text-indent: 2em !important;
}
@media screen and (max-width: 760px) {
  .article {
    padding: 0 10px;
  }
}
</style>