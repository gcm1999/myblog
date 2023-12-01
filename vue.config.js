const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      "/blogApi": {
        target: "http://localhost:3001",
        // pathRewrite: {},
        changeOrigin: true,
        ws: false,
      },
    },
  },
  publicPath: "/myblog",
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("md")
  //     .test(/.md$/)
  //     .use("html-loader")
  //     .loader("html-loader")
  //     .end()
  //     .use("markdown-loader")
  //     .loader("markdown-loader")
  //     .end();
  // },
});
