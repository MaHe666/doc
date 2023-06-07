---
title: SQL Server
icon: SQLServer
---

官网最新版下载地址：<https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads>

其他版本可以在msdn下载：<https://msdn.itellyou.cn/>

在服务器选项卡里面找自己想要的版本

安装相关博客：<https://blog.csdn.net/weixin_47798714/article/details/124251211>

如果自己电脑里有其他的数据库，建议自定义命名实例

## Navicat远程连接

SqlServer安装完成后，打开配置管理器

在左侧找到网络配置项，找到实例的协议

然后启用TCP/IP

右键选择TCP/IP的属性

选择 IP地址 选项卡

拉到最下面，找到IPALL

配置TCP端口号为1433

回到navicat，新建连接选择SqlServer

验证选择SQL Server验证

用户名为sa

密码为安装时设置的密码

## 内置函数

`Convert()`，相关博客：<https://blog.csdn.net/qq_37528515/article/details/105647179>


