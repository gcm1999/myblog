<template>
  <div class="main">
    <div class="banner">
      <h1>欢迎来到F6博客</h1>
      <p>世界既不黑也不白，而是一道精致的灰</p>
      <!-- <img class="visible-xs" src="@/assets/images/banner.jpeg" alt="" /> -->
      <!-- <div class="circle hidden-xs"></div> -->
      <div class="triangle hidden-xs"></div>
      <ul class="donghua">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="contents">
      <div class="slider">
        <img src="@/assets/images/kamier.webp" alt="" />
        <div class="info">
          <h2>郭晨明</h2>
          <span>F6博客</span><i></i><span>郭晨明的个人站点</span>
        </div>
        <!-- <TagsCollapse></TagsCollapse> -->
      </div>
      <div class="con">
        <div
          class="article"
          v-for="(article, index) in articleList"
          :key="article.id"
          @click="toArticle(article.url)"
        >
          <div class="title">
            <!-- <a href="#">{{ article.title }}</a> -->
            <router-link :to="article.url">{{ article.title }}</router-link>
          </div>
          <i class="glyphicon glyphicon-user"></i
          ><span>{{ article.author }}</span>
          <i class="glyphicon glyphicon-time"></i
          ><span>{{ timeHandler(article.time) }}</span>
          <i class="glyphicon glyphicon-tag hidden-xs"></i
          ><span class="hidden-xs">{{ article.tag }}</span>
        </div>
        <!-- 分页器 -->
      </div>
      <Pagination
        :pageNo="articleParams.pageNo"
        :pageSize="articleParams.pageSize"
        :total="total"
        :continues="3"
        @currentPage="currentPage"
      ></Pagination>
    </div>
  </div>
</template>
<script>
import { reqGetArticleListByPage } from "@/api/index";
import { ref, reactive, toRefs, onMounted } from "vue";
import Pagination from "@/components/Pagination.vue";
import { timeHandler } from "@/utils";
import TagsCollapse from "./TagsCollapse/index.vue";
import router from "@/router";
export default {
  name: "",
  setup() {
    const data = reactive({
      articleList: [],
      articleParams: {
        pageNo: 1,
        pageSize: 10,
      },
      total: 0,
    });

    // onMounted(() => {
    getArticleList();
    // });

    function getArticleList(cb) {
      reqGetArticleListByPage(data.articleParams).then((res) => {
        data.articleList = res.data.articleList;
        data.total = res.data.total;
        cb && cb();
      });
    }

    function currentPage(pageNo) {
      data.articleParams.pageNo = pageNo;
      getArticleList(() => scrollTo(0, 0));
    }

    function toArticle(url) {
      // alert(title);
      router.push(url);
    }

    return { ...toRefs(data), currentPage, timeHandler, toArticle };
  },
  components: { Pagination, TagsCollapse },
};
</script>
<style scoped lang="stylus">
.main
  background-color #eeeeee
  .contents
    max-width 1440px
    margin 0 auto
    overflow hidden
    // min-height 865px
    .slider
      width 300px
      // background-color white
      margin-top 10px
      text-align center
      float right
      img
        width 200px
        height 200px
        border-radius 50%
      .info
        h2
          // font: bold 32px "微软雅黑";
          font-size:32px;
          margin 10px 0 20px
          // color: rgb(76,183,196);
          color: #000;
          text-shadow: 1px 1px rgba(76,183,196,0.3), 2px 2px rgba(76,183,196,0.3),
          3px 3px rgba(76,183,196,0.3), 4px 4px rgba(76,183,196,0.3);
          // 5px 5px rgba(76,183,196,0.3), 6px 6px rgba(76,183,196,0.3);
          /* text-shadow: h-shadow v-shadow blur color
                          x轴阴影位置 y轴距离 阴影大小 颜色 */
        span
          font-size 16px
          padding 5px
        i
          border-left 1px solid #000
    .con
      // margin-right 300px
      // background-color skyblue
      overflow hidden
      cursor pointer
      min-height 835px
      .article:hover a
        // color rgb(76,183,196)
        // border-bottom 2px solid rgb(76,183,196)
        border-bottom 2px solid #000
      .article
        background-color white
        padding 10px
        margin 10px
        .title
          a
            font-size 20px
            padding 0 8px
        i
          color #999
          padding 8px 5px 5px 8px
        span
          color #999
          font-size 14px
          padding-right 18px
  .banner
    height 360px
    background-color #eaeaea
    background url("@/assets/images/banner.webp") no-repeat
    background-size 100% 100%
    position relative
    overflow hidden
    h1
      font-size 36px
      margin 20px 0 10px
      text-align center
    p
      text-align center
      font-size 22px
    img
      width 100%
    .circle
      position absolute
      width 100px
      height 100px
      display inline-block
      border-radius 50%
      background-color: #999;
      animation circleMove 10s linear infinite;
    .triangle
      width 0
      height 0
      border-top 141px solid white
      border-bottom 100px solid transparent
      border-left 100px solid transparent
      border-right 100px solid transparent
      animation triMove 18s linear infinite
    .donghua
      position absolute
      bottom 0
      left 0
      height 50px
      width 360px
      display flex
      overflow hidden
      margin 0
      align-items flex-end
      li
        height 100%
        width 10px
        background-color #000
        margin-left 10px
        flex-shrink 0
        animation: loading 6s linear infinite;
      li:nth-of-type(2)
        animation-delay -5s
      li:nth-of-type(3)
        animation-delay -4s
      li:nth-of-type(4)
        animation-delay -3s
      li:nth-of-type(5)
        animation-delay -2s
      li:nth-of-type(6)
        animation-delay -1s
      li:nth-of-type(7)
        animation-delay -6s
      li:nth-of-type(8)
        animation-delay -5s
      li:nth-of-type(9)
        animation-delay -4s
      li:nth-of-type(10)
        animation-delay -3s
      li:nth-of-type(11)
        animation-delay -2s
      li:nth-of-type(12)
        animation-delay -1s
      li:nth-of-type(13)
        animation-delay -6s
      li:nth-of-type(14)
        animation-delay -5s
      li:nth-of-type(15)
        animation-delay -4s
      li:nth-of-type(16)
        animation-delay -3s
      li:nth-of-type(17)
        animation-delay -2s
      li:nth-of-type(18)
        animation-delay -1s

@keyframes triMove
  100%
    transform rotate(360deg)
// @keyframes circleMove
@keyframes loading
  50%
    height 0
  100%
    height 100%
@media screen and (max-width: 760px)
  p
    font-size 12px!important
  .con
    margin 0
  .slider
    width 0!important
    overflow hidden
</style>
