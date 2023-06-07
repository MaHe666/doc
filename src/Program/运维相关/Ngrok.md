---
title: Ngrok
---

内网穿透，可以让别人远程访问你的本地项目

相关博客：<https://blog.csdn.net/liunianqingshi/article/details/108049441>

国际版官网：<https://ngrok.com/>

文档：<https://ngrok.com/docs>

国内版官网：<https://www.ngrok.cc/>

哔哩哔哩教程：<https://www.bilibili.com/video/BV17K4y187A2?spm_id_from=333.999.0.0>

## 用法

cmd运行

```bash
ngrok authtoken 官网的授权码
```

如果没有配置环境变量，需要进到文件夹内才能运行

查看帮助

```bash
ngrok help
```

开启8080端口

```bash
ngrok http 8080
```

这是二级域名的方式，只会取代 `localhost:8080/`

