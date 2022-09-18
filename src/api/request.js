// 封装axios

import axios from "axios";

// 引入进度条
import nprogress from "nprogress";
// console.log(nprogress);
// start:进度条开始 done:进度条结束
// 引入进度条样式
import "nprogress/nprogress.css";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
// 请求拦截器：再发送请求之前，请求拦截器可以检测到，可以在发送请求之前做一些事情
request.interceptors.request.use((config) => {
  // 进度条开始
  nprogress.start();
  // config:配置对象，对象里面有一个属性很重要，headers请求头
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 进度条结束
    nprogress.done();
    // console.log(res);
    return res.data;
  },
  (err) => {
    // return Promise.reject(new Error(err))
    return Promise.reject(new Error("failed"));
  }
);
export default request;
