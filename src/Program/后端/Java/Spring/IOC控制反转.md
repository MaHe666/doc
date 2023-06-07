---
title: IOC控制反转
order: 10
---

控制反转IoC （Inversion of Control），是一种设计思想，**DI（依赖注入）是实现IOC的一种方法**

没有IoC的程序中，我们使用面向对象编程，对象的创建与对象间的依赖关系完全硬编码在程序中，对象的创建由程序自己控制

控制反转后将对象的创建转移给第三方，配置之后，想使用对象直接获取就可以，不需要再创建了

个人认为所谓控制反转就是，获得依赖对象的方式反转了

IoC是Spring框架的核心内容，使用多种方式完美的实现了IoC，可以使用xml配置，也可以使用注解

## 配置文件声明`支持注解注册bean`

```xml
<context:annotation-config/>
```

除了使用上述方法开启全局配置之外，还可以单独声明支持某一个包下的注解

```xml
<context:component-scan base-package="com.mahe666"/>
```

## @Autowired 和 @Resource

@Autowired注解是通过bean的类型来进行的注入的

在复杂情况下如果不能满足使用需求的话，可以使用@Qualifier注解通过bean的名称完成注入

```java
@Autowired
@Qualifier(value = "dog222")
private Dog dog;
```

@Resource注解本身就能完成上面两个注解的功能，区别在于：@Resource先判断bean名称，再判断bean的类型

复杂情况下可按照如下方式：

```java
@Resource(name = "dog222")
private Dog dog;
```

### 特殊情况

在实际情况中可能需要根据执行的具体业务来选择bean的情况

这时可以选择接收所有 `具有共同父类` 或 `实现共同接口` 的bean，再根据业务，通过bean名称进行选择

```java
@Autowired
Map<String, 基类或接口的名字> map;
```

这个map的key就是实现类的名字，然后就可以通过map对象去get类的对象了

## @Value

给bean的属性注入值，就不需要在xml里面写了

```java
@Value("马赫666")
private String name;
```

## 通过Map接收所有实现类

相关博客：<https://blog.csdn.net/qq_42567801/article/details/124047293>

