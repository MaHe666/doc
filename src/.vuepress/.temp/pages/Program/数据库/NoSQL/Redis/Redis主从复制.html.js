export const data = JSON.parse("{\"key\":\"v-67d362bf\",\"path\":\"/Program/%E6%95%B0%E6%8D%AE%E5%BA%93/NoSQL/Redis/Redis%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6.html\",\"title\":\"Redis主从复制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis主从复制\",\"order\":70,\"description\":\"概念 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。\\r前者称为主节点（master/leader），后者称为从节点（slave/follower）。; \\r数据的复制是单向的，只能由主节点到从节点。; \\rMaster以写为主，Slave以读为主。; 默认情况下，每台Redis服务器都是主节点；且一个主节点可以有多个从节点（或没...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mahe666.github.io/doc/Program/%E6%95%B0%E6%8D%AE%E5%BA%93/NoSQL/Redis/Redis%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mahe666\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis主从复制\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概念 主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。\\r前者称为主节点（master/leader），后者称为从节点（slave/follower）。; \\r数据的复制是单向的，只能由主节点到从节点。; \\rMaster以写为主，Slave以读为主。; 默认情况下，每台Redis服务器都是主节点；且一个主节点可以有多个从节点（或没...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mahe666\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Redis主从复制\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mahe666\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"环境配置\",\"slug\":\"环境配置\",\"link\":\"#环境配置\",\"children\":[{\"level\":3,\"title\":\"配置主机\",\"slug\":\"配置主机\",\"link\":\"#配置主机\",\"children\":[]},{\"level\":3,\"title\":\"在主机中查看\",\"slug\":\"在主机中查看\",\"link\":\"#在主机中查看\",\"children\":[]}]},{\"level\":2,\"title\":\"master宕机时手动选择新master\",\"slug\":\"master宕机时手动选择新master\",\"link\":\"#master宕机时手动选择新master\",\"children\":[{\"level\":3,\"title\":\"宕机后手动配置主机\",\"slug\":\"宕机后手动配置主机\",\"link\":\"#宕机后手动配置主机\",\"children\":[]},{\"level\":3,\"title\":\"哨兵模式（重点）\",\"slug\":\"哨兵模式-重点\",\"link\":\"#哨兵模式-重点\",\"children\":[]}]}],\"filePathRelative\":\"Program/数据库/NoSQL/Redis/Redis主从复制.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
