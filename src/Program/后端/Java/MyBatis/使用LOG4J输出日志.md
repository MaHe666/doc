---
title: 使用LOG4J输出日志
order: 20
---

```xml
<!--log4j-->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency> 
```

**log4j.properties**

```
#配置根rooter
#设置日志级别为DEBUG，输出到console和file，这个名字是自定义的，下面的console和file的名字取决于这里
log4j.rootLogger = DEBUG,console,file

#控制台输出的相关设置
log4j.appender.console = org.apache.log4j.ConsoleAppender
log4j.appender.console.Target = System.out
log4j.appender.console.Threshold = DEBUG
log4j.appender.console.layout = org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern = [%p][%c]-%m%n

#文件输出的相关设置
log4j.appender.file = org.apache.log4j.RollingFileAppender
log4j.appender.file.File = ./log/log4j.log
log4j.appender.file.maxFileSize = 10MB
log4j.appender.file.Threshold = DEBUG
log4j.appender.file.layout = org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern = [%p][%d{yy-MM-dd}][%c]%m%n

#日志输出级别
#以下五个才会输出
log4j.logger.org.mybatis = DEBUG
log4j.logger.java.sql = DEBUG
log4j.logger.java.sql.Statement = DEBUG
log4j.logger.java.sql.ResultSet = DEBUG
log4j.logger.java.sql.PrepareStatement = DEBUG
```

剩下的配置需要看文档

下面是常规使用示例

```java
import org.apache.log4j.Logger;
import org.junit.Test;

public class Log4jTest {
    //Logger的包为  org.apache.log4j.Logger
    //提升作用域

    //括号里为当前类的Class对象
    static Logger logger = Logger.getLogger(Log4jTest.class);

    @Test
    public void log4jTest(){
        //三个级别
        
        //普通输出
        logger.info("info:进入了log4jTest方法");
        //debug输出
        logger.debug("debug:进入了log4jTest方法");
        //错误输出，一般放到捕获异常的catch语句中
        logger.error("error:进入了log4jTest方法");

    }
}
```

