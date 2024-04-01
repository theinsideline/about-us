const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {},
  pages: {
    index: {
      title: "About us",
      entry: "src/main.ts",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import 'vue3-carousel/dist/carousel.css';
        @import "@theinsideline/common/style.css";
        @import "@theinsideline/common/scss/main.scss";
          `,
      },
    },
  },
});
