<template>
    <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>
<script>
// 导入echarts
import * as echarts from "echarts";

import { onMounted, onUnmounted } from "vue";

export default {
  name: "TestTcharts",
  setup() {
    /// 声明定义一下echart
    let echart = echarts;

    onMounted(() => {
      initChart();
    });

    // onUnmounted(() => {
    //   echart.dispose;
    // });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"), "dark");
      // 把配置和数据放这里
      chart.setOption({
        title: {
          text: "各标签文章总数",
          subtext: "Fake Data",
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
            data: [
              { value: 1048, name: "JavaScript" },
              { value: 735, name: "HTML" },
              { value: 580, name: "CSS" },
              { value: 484, name: "MySQL" },
              { value: 300, name: "LOL" },
            ],
          },
        ],
      });
      //   window.onresize = function () {
      //     //自适应大小
      //     chart.resize();
      //   };
    }

    return { initChart };
  },
};
</script>
<style scoped>
.echarts-box {
  /* display: inline-block; */
  max-width: 600px;
  /* margin: auto; */
  height: 1000px;
}
</style>
