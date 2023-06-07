---
title: Lombok
order: 20
---

```xml
<!--lombok-->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.12</version>
</dependency>
```

## 相关注解

`@Data`：生成get set方法

`@AllArgsConstructor`：生成有参构造

`@NoArgsConstructor`：生成无参构造

`@RequiredArgsConstructor`：标注在类上，可以使该类在使用注入bean的时候，不用写 `@Autowired` 注解

