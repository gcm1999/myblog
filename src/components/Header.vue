<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Brand" class="brand" src="@/assets/images/brand.png" />
        </a>
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">F6博客</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#"
              >首页
              <!-- <span class="sr-only">(current)</span> -->
            </a>
          </li>
          <li><a href="#">知识点</a></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >学习项目 <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li>
                <a href="http://www.gcm.cool/sph" target="_blank">尚品汇</a>
              </li>
              <li>
                <a href="http://www.gcm.cool/travel" target="_blank">去哪网</a>
              </li>
              <li>
                <a href="http://www.gcm.cool/albx" target="_blank">阿里百秀</a>
              </li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <div class="navbar-form navbar-left">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="keywords"
              placeholder="输入关键字"
            />
          </div>
          <button
            type="submit"
            class="btn btn-default search-btn"
            @click="goSearch"
          >
            搜索
          </button>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <!-- <a href="#">留言板</a> -->
            <router-link to="/messageboard">留言板</router-link>
          </li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >更多 <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#">艾欧尼亚昂扬不灭</a></li>
              <li><a href="#">测烈</a></li>
              <li><a href="#">索利亚给同</a></li>
              <li role="separator" class="divider"></li>
              <li>
                <a
                  href="https://github.com/gcm1999"
                  class="link-new glyphicon glyphicon-new-window"
                  target="_blank"
                  >GitHub</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<script>
import { ref } from "vue";
import router from "@/router";
export default {
  name: "Header",
  setup() {
    let keywords = ref("");

    function goSearch() {
      router.push(`/search?${keywords.value}`);
      keywords.value = "";
    }

    return { keywords, goSearch };
  },
};
</script>
<style scoped lang="stylus">
.navbar
  margin-bottom 0
.search-btn
  outline 0!important
.brand
  height 100%
</style>
