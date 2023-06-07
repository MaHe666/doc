---
title: SpringBoot
dir:
    order: 80
    link: true
    text: SpringBoot
---

SpringBoot官网：<https://spring.io/projects/spring-boot>

需要按照版本号去找对应的文档

Springboot集成了部份依赖，版本号由父工程管理

```xml
<!--启动器-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>

<!--web启动器-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!--单元测试启动器-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>

<!--热部署-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
</dependency>
```

## 自定义banner图

网址：<https://www.bootschool.net/ascii>

直接把 banner.txt文件 放到resources文件夹下就好

