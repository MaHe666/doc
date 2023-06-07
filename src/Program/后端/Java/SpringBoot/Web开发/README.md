---
title: Web开发
dir:
    order: 30
    link: true
---

## 注入内置对象

不需要在方法上加 `HttpServletRequest httpServletRequest`

可以提取出来成为一个属性

```
private final HttpServletRequest httpServletRequest;
```

## 前后端交互，日期格式问题

在实体类对应属性上加

```java
@DateTimeFormat(pattern = "yyyy-MM-dd")
```
