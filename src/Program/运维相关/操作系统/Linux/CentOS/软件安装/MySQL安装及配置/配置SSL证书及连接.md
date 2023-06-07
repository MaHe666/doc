---
title: 配置SSL证书及连接
order: 10
---

相关文章：<https://blog.51cto.com/moerjinrong/2367282>

证书生成后，如果数据库中ssl没有生效，需要把如下语句加到配置文件，并重启mysql服务：

```
ssl-ca = /var/lib/mysql/ca.pem
ssl-cert = /var/lib/mysql/server-cert.pem
ssl-key = /var/lib/mysql/server-key.pem
```

Springboot连接，相关文章：<https://juejin.cn/s/spring%20boot%20connect%20mysql%20ssl>

## 生成客户端证书

进入到三个原始客户端文件所在的文件夹中：`ca.pem`、`client-key.pem`、`client-cert.pem`

生成文件：

```
keytool -importcert -alias Cacert -file ca.pem  -keystore truststoremysql -storepass 123456

openssl pkcs12 -export -in client-cert.pem -inkey client-key.pem -name "mysqlclient" -passout pass:123456 -out client-keystore.p12

keytool -importkeystore -srckeystore client-keystore.p12 -srcstoretype pkcs12 -srcstorepass 123456 -destkeystore keystoremysql -deststoretype JKS -deststorepass 123456
```

上述命令中的123456是密码，这个密码可以改变，但是必须保证全部一样

SpringBoot 配置文件中，jdbc的url参数
```
useSSL=true&verifyServerCertificate=true&requireSSL=true&clientCertificateKeyStoreUrl=file:所在文件夹路径/keystoremysql&clientCertificateKeyStorePassword=123456&trustCertificateKeyStoreUrl=file:所在文件夹路径/truststoremysql&trustCertificateKeyStorePassword=123456 
```

## 可能出现的问题

`SSL Peer Shut down Incorrectly`

```
看一下mysql驱动版本是否正确，5.7版本的mysql需要使用5.1.x版本的mysql-connector-java驱动
```

`no appropriate protocol (protocol is disabled or cipher suites are inappropriate)`


在linux系统中

使用命令 `find / -name java.security` 查找java.security文件

在文件中找到 `jdk.tls.disabledAlgorithms=` 

大概长这样

```bash
# Example:
#   jdk.tls.disabledAlgorithms=MD5, SSLv3, DSA, RSA keySize < 2048
jdk.tls.disabledAlgorithms=SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, \
    DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \
    include jdk.disabled.namedCurves
```

**解决方案**：删除其中的SSLv3，TLSv1，TLSv1.1