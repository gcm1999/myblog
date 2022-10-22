<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '100%', height: '300px' }"></div>

    <div id="myEcharts2" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>
<script>
// 导入echarts
import * as echarts from "echarts";

import { onMounted } from "vue";
import { reqGetTagsList, reqGetAuthorsList } from "@/api";

export default {
  name: "TestTcharts",
  setup(props) {
    /// 声明定义一下echart
    let echart = echarts;

    onMounted(() => {
      reqGetTagsList().then((res) => {
        initChart("myEcharts", "各标签文章总数", res.data.tagsList, "dark");
      });
      reqGetAuthorsList().then((res) => {
        initChart("myEcharts2", "各作者文章总数", res.data.authorsList);
      });
    });

    // onUnmounted(() => {
    //   echart.dispose;
    // });

    // 基础配置一下Echarts
    // @id:dom节点id
    // @text:标题
    // @data:数据
    // @style:样式风格（dark深色模式
    function initChart(id, text, data, style) {
      let chart = echart.init(document.getElementById(id), style);
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

    return { initChart };
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
