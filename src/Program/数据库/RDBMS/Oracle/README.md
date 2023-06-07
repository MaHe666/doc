---
title: Oracle
icon: Oracle
---

## 基础语法

### 小数类型

小数，使用number类型

### insert

相关博客：

- <https://blog.csdn.net/weixin_36204061/article/details/116325689>

### 限制查询条数

相关博客：

- <https://wenku.baidu.com/view/1dc843b068ec0975f46527d3240c844769eaa0e1.html>

**注意**：这个用法在和order by排序搭配使用时需要留意是先排序还是先限制

## 内置函数

### 截取字符串

```sql
substr(字段名,start,end)
```

字符起始从1开始；

闭区间，两边都包含，例如substr(字段名,1,4)，字符串长度就是4

### 强制转换

```sql
cast(字段名 as integer)
```

以上是将字段强制转换为integer类型

在处理流水号的时候可以将固定的字符前缀去掉后使用如上方式排序

## 存储过程

存储函数相当于自定义函数，例如 `count()`

使用之前需要先执行存储函数，然后查看存储函数的状态（是否有错误）

没错误的话就可以使用了

### blob类型转base64格式clob类型

```sql
CREATE OR REPLACE FUNCTION base64encode(p_blob IN BLOB)
   RETURN  CLOB
IS
   l_clob CLOB;
   l_step PLS_INTEGER := 12000; 
BEGIN
   FOR  i  IN  0 .. TRUNC((DBMS_LOB.getlength(p_blob) - 1 )/l_step) LOOP
	   l_clob := l_clob || UTL_RAW.cast_to_varchar2(UTL_ENCODE.base64_encode(DBMS_LOB.substr(p_blob, l_step, i * l_step + 1)));
   END  LOOP;
   RETURN  l_clob;
END base64encode;
```

这个存储函数返回的就是base64格式的clob类型

使用的时候不要忘记判断一下blob是否为空

