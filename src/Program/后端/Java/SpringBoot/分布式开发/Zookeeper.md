---
title: Zookeeper
order: 10
---

Dubbo官方文档推荐我们使用Zookeeper

ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，是Hadoop和Hbase的重要组件。

它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。

官网：<https://zookeeper.apache.org/>

**默认端口2181，同时千万不要占用2888和3888端口**

## 下载和安装

1. 解压从官网下载的 `tar.gz` 压缩包

   ```bash
   tar -zxvf 带后缀的文件名
   ```

   如果是Windows系统，需要使用 `Windows PowerShell` 解压

2. 进入解压后文件的bin目录，使用管理员模式运行 `zkServer.cmd`

3. 编辑 `zkServer.cmd` 文件，在 `endlocal` 指令上面加一句 `pause`，这样报错的时候就不会闪退了

   进入到Zookeeper下的conf文件夹，将 `zoo_sample.cfg` 复制一份，重命名为 `zoo.cfg`，这个文件就是Zookeeper的配置文件

   >可能的错误：
   >
   >错误：找不到或无法加载主类 org.apache.zookeeper.server.quorum.QuorumPeerMain
   >
   >解决：下载对应版本的bin压缩文件，将该包下的lib目录拷贝到之前的Zookeeper文件夹中

4. 需要注意配置文件中的两个选项

   ```
   #临时数据存储的目录（可写相对路径）
   dataDir=../tmp/zookeeper
   ```

   ```
   #zookeeper的端口号
   clientPort=2181
   ```

   **千万不要占用2888端口和3888端口**

Zookeeper是临时节点，不会像Eureka那样进行保存

## 测试

使用bin目录下的 `zkCli.cmd` 进行访问测试

使用 `ls /` 指令查看节点

创建名为 `mahe666` ，值为 `123` 的节点

```bash
create -e /mahe666 123
```

获取名为 `mahe666` 的节点

```
get /mahe666
```

再次使用 `ls /` 指令查看节点