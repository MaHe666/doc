export const data = JSON.parse("{\"key\":\"v-339e0c42\",\"path\":\"/Program/%E6%95%B0%E6%8D%AE%E5%BA%93/NoSQL/Redis/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E5%8F%8A%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E5%8F%8A%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4.html\",\"title\":\"基础知识及基本命令\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"基础知识及基本命令\",\"order\":30,\"description\":\"Redis默认有16个数据库 查看redis.conf文件，可以看到有个 databases 16 的属性 默认使用的是第0个，可以使用 select 命令进行切换 dbsize命令是查看大小 不同的数据库之间的内容不共享，比如把一个键值对放在了三号库里，在七号库是查不到的 查看当前库所有键值对的键 ```bash keys * ``` 清空当前库的所...\"},\"headers\":[{\"level\":2,\"title\":\"五大基本数据类型\",\"slug\":\"五大基本数据类型\",\"link\":\"#五大基本数据类型\",\"children\":[{\"level\":3,\"title\":\"String\",\"slug\":\"string\",\"link\":\"#string\",\"children\":[]},{\"level\":3,\"title\":\"List\",\"slug\":\"list\",\"link\":\"#list\",\"children\":[]},{\"level\":3,\"title\":\"Set\",\"slug\":\"set\",\"link\":\"#set\",\"children\":[]},{\"level\":3,\"title\":\"Hash\",\"slug\":\"hash\",\"link\":\"#hash\",\"children\":[]},{\"level\":3,\"title\":\"ZSet\",\"slug\":\"zset\",\"link\":\"#zset\",\"children\":[]}]},{\"level\":2,\"title\":\"三大特殊数据类型\",\"slug\":\"三大特殊数据类型\",\"link\":\"#三大特殊数据类型\",\"children\":[{\"level\":3,\"title\":\"Geospatial 地理位置\",\"slug\":\"geospatial-地理位置\",\"link\":\"#geospatial-地理位置\",\"children\":[]},{\"level\":3,\"title\":\"Hyperloglog 基数统计\",\"slug\":\"hyperloglog-基数统计\",\"link\":\"#hyperloglog-基数统计\",\"children\":[]},{\"level\":3,\"title\":\"Bitmap 位图场景\",\"slug\":\"bitmap-位图场景\",\"link\":\"#bitmap-位图场景\",\"children\":[]}]},{\"level\":2,\"title\":\"Redis事务\",\"slug\":\"redis事务\",\"link\":\"#redis事务\",\"children\":[]},{\"level\":2,\"title\":\"Redis乐观锁\",\"slug\":\"redis乐观锁\",\"link\":\"#redis乐观锁\",\"children\":[]}],\"filePathRelative\":\"Program/数据库/NoSQL/Redis/基础知识及基本命令/基础知识及基本命令.md\",\"autoDesc\":true}")

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
