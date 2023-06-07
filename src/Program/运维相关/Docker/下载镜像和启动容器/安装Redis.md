---
title: 安装Redis
order: 10
---

redis配置文件下载地址：<http://download.redis.io/redis-stable/redis.conf>

```bash
docker pull redis
```

```bash
docker run -p 16379:6379 --name redis -v D:/dockerFiles/redis/conf/redis.conf -v -d redis redis-server
```

16379端口的目的是为了防止本地禁用6379tcp端口

