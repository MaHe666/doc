---
title: 安装Oracle
order: 20
---

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
```

```bash
docker run -d --name oracle11g -p 11521:1521 registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
```

11521端口的目的是为了防止本地禁用1521tcp端口

安装及相关配置博客：<https://summerking1.github.io/pages/6bc345/>