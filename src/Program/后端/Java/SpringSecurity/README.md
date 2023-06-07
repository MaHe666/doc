---
title: SpringSecurity
dir:
    order: 90
    link: true
---

Spring Security是针对Spring项目的安全框架，也是Spring Boot底层安全模块默认的技术选型，他可以实现强大的Web安全控制，对于安全控制，我们仅需要引入spring-boot-starter-security模块，进行少量的配置，即可实现强大的安全管理!

Spring Security 是 Spring 家族中的一个安全管理框架。相比与另外一个安全框架Shiro，它提供了更丰富的功能，社区资源也比Shiro丰富。

官网：<https://spring.io/projects/spring-security>

文档：<https://docs.spring.io/spring-security/reference/index.html>

相关文章：https://blog.csdn.net/qq_42640067/article/details/113062222

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

## SpringSecurity的本质

SpringSecurity的本质就是一串过滤器链

可以通过Idea的debug查看过滤器链中的过滤器链及它们的顺序：

1. 获取主启动类 `SpringApplication.run()`  方法的返回值
2. 在这行语句下方输出返回值，并在这行打上debug断点
3. 运行到断点之后，点击 `Evaluate Expression (Alt + F8)` 
4. 输入 `run.getBean(DefaultSecurityFilterChain.class)` 点击Evaluate，过滤器链就展示出来了

## SecurityContextHolder

SecurityContextHolder 用来获取登录之后用户信息。

Spring Security 会将登录用户数据保存在 Session 中。

但是，为了使用方便，Spring Security在此基础上还做了一些改进，其中最主要的一个变化就是线程绑定。

当用户登录成功后，Spring Security 会将登录成功的用户信息保存到 SecurityContextHolder 中。

SecurityContextHolder 中的数据保存默认是通过ThreadLocal 来实现的，使用 ThreadLocal 创建的变量只能被当前线程访问，不能被其他线程访问和修改，也就是用户数据和请求线程绑定在一起。

当登录请求处理完毕后，Spring Security 会将 SecurityContextHolder 中的数据拿出来保存到 Session 中，同时将 SecurityContexHolder 中的数据清空。

以后每当有请求到来时，Spring Security 就会先从 Session 中取出用户登录数据，保存到 SecurityContextHolder 中，方便在该请求的后续处理过程中使用，同时在请求结束时将 SecurityContextHolder 中的数据拿出来保存到 Session 中，然后将 Security SecurityContextHolder 中的数据清空。这一策略非常方便用户在 Controller、Service 层以及任何代码中获取当前登录用户数据。

