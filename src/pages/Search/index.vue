<template>
  <div class="search">
    <!-- {{articleList}} -->

    <ul v-infinite-scroll="load" class="infinite-list">
      <li v-for="i in articleList" :key="i" class="infinite-list-item">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reqGetArticleListByPage } from "@/api/index";

import { ref } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

console.log(route.params.keywords);

const articleParams = { pageNo: 1, pageSize: 10 };
const articleList = ref([]);

getArticleList();

const count = ref(0);
const load = () => {
  // count.value += 2;
  articleParams.pageNo += 1;
  getArticleList();
};

function getArticleList() {
  reqGetArticleListByPage(articleParams).then((res) => {
    articleList.value.push(...res.data.articleList);
    console.log(articleList.value);
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
