<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '100%', height: '300px' }"></div>

    <div id="myEcharts2" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>
<script>
// 导入echarts
import * as echarts from "echarts";

import { onMounted, onBeforeUnmount } from "vue";
import { reqGetTagsList, reqGetAuthorsList } from "@/api";

export default {
  name: "TestTcharts",
  setup(props) {
    onMounted(() => {
      init();
    });

    function init() {
      reqGetTagsList().then((res) => {
        initChart("myEcharts", "各标签文章总数", res.data.tagsList, "dark");
      });
      reqGetAuthorsList().then((res) => {
        initChart("myEcharts2", "各作者文章总数", res.data.authorsList);
      });
    }

    // 基础配置一下Echarts
    // @id:dom节点id
    // @text:标题
    // @data:数据[{name1,value1},{name2,value2}...]
    // @style:样式风格（dark深色模式
    function initChart(id, text, data, style) {
      // console.log(document.getElementById(id));
      // console.log(data);
      const myEcharts = document.getElementById(id);
      // console.log(myEcharts);
      let chart = echarts.init(myEcharts, style);
      // 把配置和数据放这里
      chart.setOption({
        title: {
          text,
          // subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "auto",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data,
          },
        ],
      });
      // window.onresize = function () {
      //   //自适应大小
      //   chart.resize();
      // };
      window.addEventListener("resize", function () {
        chart.resize();
      });
    }

    onBeforeUnmount(() => {
      // 第一次进入该页面是正常渲染的，但是在这个页面跳出来，在进入的话依然是调用的echarts初始化的图标，导致页面渲染不成功，即不渲染图标
      // 原因是：
      // 由于容器上已经有 echarts_instance ，还是上次的，所以Echarts是不会重新初始化的，需要手动将DOM上的 echarts_instance 属性移除， 再次进行初始化， 然后setOptio
      // 即在离开给页面的时候清空一下echarts_instance属性
      // 写法
      // document.getElementById('xxx').removeAttribute('_echarts_instance_');
      document
        .getElementById("myEcharts")
        .removeAttribute("_echarts_instance_");
      document
        .getElementById("myEcharts2")
        .removeAttribute("_echarts_instance_");
    });
  },
};
</script>
<style scoped>
.echarts-box {
  display: flex;
  flex-wrap: wrap;
  /* display: inline-block; */
  /* max-width: 600px; */
  /* width: 100%; */
  /* margin:50px auto; */
  /* height: 1000px; */
  /* overflow: hidden; */
}
</style>
