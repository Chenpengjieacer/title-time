module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "111.231.168.232:3000",
        changeOrigin: true
      }
    }
  },

  // lintOnSave: true,
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-pxtorem")({
  //           rootValue: 16,
  //           selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
  //           propList: ["*"]
  //         })
  //       ]
  //     }
  //   }
  // }
        //上线时 px 转化 rem 配置
};
