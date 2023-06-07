---
title: PLSQL
order: 50
---

## 配置

### 配置环境变量

> NLS_LANG = SIMPLIFIED CHINESE_CHINA.ZHS16GBK
>
> TNS_ADMIN = instantclient_xx_x 下 tnsnames.ora 文件所在的文件夹路径

注意`instantclient`文件夹下是否有`tnsnames.ora`文件，如果没有，则需要手动创建以及配置

除了`tnsnames.ora`文件之外还有`sqlnet.ora`文件需要创建以及配置

instantclient 下载地址：<https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html>

### tnsnames.ora 文件模板

```
数据库名 =
  (DESCRIPTION =
    (ADDRESS_LIST = 
      (ADDRESS = (PROTOCOL = TCP)(HOST = 数据库ip)(PORT = 数据库端口))
    )
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = 数据库名)
    )
  )
```

### sqlnet.ora 文件模板

```
SQLNET.AUTHENTICATION_SERVICES= (NONE)
```

## 远程访问

相关博客：

- <http://t.zoukankan.com/jjkang-p-7821839.html>

