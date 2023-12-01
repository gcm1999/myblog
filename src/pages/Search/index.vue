<template>
  <div class="search">
    <!-- {{articleList}} -->

    <ul v-infinite-scroll="load" class="infinite-list">
      <li v-show="!articleList.length">搜索结果为空</li>
      <li
        v-for="(article, index) in articleList"
        :key="article.id"
        class="infinite-list-item"
      >
        <div class="title">
          <router-link :to="article.url">{{ article.title }}</router-link>
        </div>
        <div class="info">
          <i class="glyphicon glyphicon-user"></i>
          <span>{{ article.author }}</span>
          <i class="glyphicon glyphicon-time"></i>
          <span>{{ timeHandler(article.time) }}</span>
          <i class="glyphicon glyphicon-tag hidden-xs"></i>
          <span class="hidden-xs">{{ article.tag }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { timeHandler } from "@/utils";

import { reqGetArticleListByKeywordByPage } from "@/api/index";

import { ref, reactive, watch } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

watch(route, (o, n) => {
  console.log({...articleParams});
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

<style scoped lang="stylus">
.search {
  // max-width: 1440px;
  margin: auto;
}
.infinite-list {
  min-height: 960px;
  // padding: 0;
  // margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction:column;
  // height: 50px;
  background: #eee;
  margin: 33px;
  padding:10px
  color: var(--el-color-primary);
}
.title{
  font-size:20px
}
.info span{
  margin-right:10px;
  color #999
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
