---
title: Docker
icon: Docker
---

官网：<https://www.docker.com/>

官方文档：<https://docs.docker.com/get-started/>

教程博客：<https://blog.csdn.net/m0_49960764/article/details/124292208>

关于Docker镜像加速：<https://www.runoob.com/docker/docker-mirror-acceleration.html>

菜鸟教程：<https://www.runoob.com/docker/docker-tutorial.html>


Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

## 安装

获取docker desktop：<https://docs.docker.com/get-docker/>

### Windows

windows安装docker desktop：<https://docs.docker.com/desktop/install/windows-install/>

Windows安装docker时使用WSL2，不然会和Vmware起冲突

### CentOS

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加镜像
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

sudo yum install docker-ce
```

启动docker服务

```bash
systemctl enable docker

systemctl start docker

systemctl restart docker
```

## docker命令

菜鸟教程：<https://www.runoob.com/docker/docker-command-manual.html>





