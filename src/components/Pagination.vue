<template>
  <div class="pagination">
    <!-- <h1>{{ startAndEnd }}</h1> -->
    <button :disabled="pageNo == 1" @click="$emit('currentPage', pageNo - 1)">
      上一页
    </button>
    <button
      class="hidden-xs"
      v-if="startAndEnd.start > 1"
      @click="$emit('currentPage', 1)"
    >
      1
    </button>
    <button class="hidden-xs" v-if="startAndEnd.start > 2">.....</button>

    <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
    <button
      v-for="page in startAndEnd.end"
      :key="page"
      v-show="page >= startAndEnd.start"
      :class="{ active: pageNo == page }"
      @click="$emit('currentPage', page)"
    >
      {{ page }}
    </button>

    <button v-if="startAndEnd.end < totalPage - 1" class="hidden-xs">
      ......
    </button>
    <button
      v-if="startAndEnd.end < totalPage"
      class="hidden-xs"
      @click="$emit('currentPage', totalPage)"
    >
      {{ totalPage }}
    </button>

    <button
      :disabled="pageNo == totalPage"
      @click="$emit('currentPage', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  setup(props) {},
  data() {
    return {
      // show: true,
    };
  },
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndEnd() {
      const { pageNo, continues, totalPage } = this;
      let start = 0,
        end = 0,
        num = Math.ceil(continues / 2);
      // console.log(continues);
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else if (pageNo - num < 0) {
        start = 1;
        end = continues;
      } else if (pageNo + num > totalPage) {
        start = totalPage - continues + 1;
        end = totalPage;
      } else {
        start = pageNo - num;
        end = pageNo + num;
      }
      // console.log(start);
      // console.log(end);
      return { start, end };
    },
  },
};
</script>
<style scoped>
.pagination {
  text-align: center;
}
.pagination button {
  margin: 0 5px;
  background-color: #fff;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;
  border:1px solid #666

}
.pagination button[disabled] {
  color: #c0c4cc;
  cursor: not-allowed;
}
.pagination .active {
  cursor: not-allowed;
  background-color: #666;
  color: #fff;
}
</style>