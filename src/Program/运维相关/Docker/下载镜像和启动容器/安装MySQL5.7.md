---
title: 安装MySQL5.7
order: 40
---

相关博客：<https://zhuanlan.zhihu.com/p/372062996>

将容器卷到物理机，需要新建内容：

> data 文件夹
>
> conf.d 文件夹
>
> my.cnf 配置文件

```bash
docker pull mysql:5.7
```

```bash
docker run --privileged=true -dp 13306:3306 -v D:/myDockerFiles/mysql5.7/data/:/var/lib/mysql -v D:/myDockerFiles/mysql5.7/conf.d:/etc/mysql/conf.d -v D:/myDockerFiles/mysql5.7/my.cnf:/etc/mysql/my.cnf -e MYSQL_ROOT_PASSWORD=root --name mysql5.7 mysql:5.7
```

配置文件内容

```
[mysqld]
user=mysql
character-set-server=utf8
default_authentication_plugin=mysql_native_password
secure_file_priv=/var/lib/mysql
expire_logs_days=7
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
max_connections=1000
secure_file_priv=/var/lib/mysql

[client]
default-character-set=utf8

[mysql]
default-character-set=utf8
```

进到mysql命令行过程：

1. 查看正在运行的容器

   ```bash
   docker ps -a
   ```

2. 看到containerId之后，进入容器

   ```bash
   docker exec -it containerId bash
   ```

3. 进入mysql

   ```bash
   mysql -uroot -proot
   ```

   

