export const data = JSON.parse("{\"key\":\"v-10ab59ee\",\"path\":\"/Program/%E6%95%B0%E6%8D%AE%E5%BA%93/NoSQL/Redis/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E5%8F%8A%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4/Redis%E6%8C%81%E4%B9%85%E5%8C%96.html\",\"title\":\"Redis持久化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis持久化\",\"order\":20,\"description\":\"RDB 在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是行话讲Snapshot快照，它恢复时是将快照文件直接读到内存里。 Redis会单独创建（fork）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何IO操作的。这就确保了极高的性能。如果需要进行...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mahe666.github.io/testdoc/Program/%E6%95%B0%E6%8D%AE%E5%BA%93/NoSQL/Redis/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E5%8F%8A%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4/Redis%E6%8C%81%E4%B9%85%E5%8C%96.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mahe666\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis持久化\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"RDB 在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是行话讲Snapshot快照，它恢复时是将快照文件直接读到内存里。 Redis会单独创建（fork）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何IO操作的。这就确保了极高的性能。如果需要进行...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mahe666\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Redis持久化\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mahe666\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"RDB\",\"slug\":\"rdb\",\"link\":\"#rdb\",\"children\":[]},{\"level\":2,\"title\":\"AOF\",\"slug\":\"aof\",\"link\":\"#aof\",\"children\":[]},{\"level\":2,\"title\":\"扩展\",\"slug\":\"扩展\",\"link\":\"#扩展\",\"children\":[]}],\"filePathRelative\":\"Program/数据库/NoSQL/Redis/基础知识及基本命令/Redis持久化.md\",\"autoDesc\":true}")

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
