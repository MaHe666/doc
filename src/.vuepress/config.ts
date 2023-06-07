import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  // 这里设置的是git仓库名
  base: "/doc/",

  lang: 'zh-CN',

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mahe666",
      description: "马赫的个人知识库",
    },
  },

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        }
      },
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 999
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
