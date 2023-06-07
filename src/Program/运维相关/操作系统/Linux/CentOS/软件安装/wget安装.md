---
title: wget安装
order: 20
---

排查是否安装过wget

```bash
rpm -qa|grep "wget"
```

如果安装过了，就卸载

```bash
yum remove wget
```

去网易CentOS7安装包镜像站下载wget安装包：<http://mirrors.163.com/centos/7/os/x86_64/Packages/>

安装wget

```bash
rpm -ivh wget安装包名
```

执行如下命令，查看wget的版本信息
```bash
wget -V
```

原文地址：<https://cloud.tencent.com/developer/article/2150638>