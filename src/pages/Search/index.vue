<template>
  <div class="search">
    <!-- {{articleList}} -->

    <ul v-infinite-scroll="load" class="infinite-list">
      <li v-for="i in articleList" :key="i.id" class="infinite-list-item">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reqGetArticleListByKeywordByPage } from "@/api/index";

import { ref, reactive, watch } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();


watch(route, (o, n) => {
  // console.log({...articleParams});
  // console.log({ ...route.params });
  articleParams.keyword = route.params.keywords;
  articleList.value = [];
  getArticleList();
  // console.log("watch");
});

// console.log(route.params.keywords);

const articleParams = reactive({
  pageNo: 1,
  pageSize: 10,
  keyword: route.params.keywords,
});
const articleList = ref([]);

getArticleList();

const load = () => {
  // count.value += 2;
  articleParams.pageNo += 1;
  getArticleList();
};

function getArticleList() {
  reqGetArticleListByKeywordByPage({ ...articleParams }).then((res) => {
    articleList.value.push(...res.data.articleList);
    // console.log(articleList.value);
    // console.log({ ...articleParams });
  });
}
</script>

<style scoped>
.search {
  max-width: 1440px;
  margin: auto;
}
.infinite-list {
  height: 960px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #eee;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
