const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // Vue 3 の Options API を有効にする
        __VUE_PROD_DEVTOOLS__: false, // 本番環境での Devtools を無効化
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // 問題のフラグを無効にする
      }),
    ],
  },
});
