---
title: JDK安装及配置
order: 10
---

需要jdk的rpm包，没有的话去官网下载

地址：<https://www.oracle.com/java/technologies/downloads/>

## 检测是否存在jdk

查看jdk版本

```bash
java -version	
```

查看已经安装的jdk，如果是openjdk，则需要删掉

```bash
rpm -qa|grep jdk
```

如果有openjdk，则需要删掉，删掉后安装需要的jdk

强制卸载删除命令

```bash
rpm -e --nodeps XXXXXXXX
```

## 安装jdk

```bash
rpm -ivh jdk-XXXXX
```

安装后查看是否安装成功

```bash
java -verison
```

注：rpm方式安装jdk不需要配置环境变量！！！

