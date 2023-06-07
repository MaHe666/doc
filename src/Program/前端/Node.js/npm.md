---
title: npm
order: 20
---

NPM（node package manager）是随同node.js一起安装的包管理工具，能解决前端代码部署上的很多问题，常见的使用场景有以下几种：

1. 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
2. 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

实际上，npm就是前端的Maven。

从node官网下载并安装node，安装步骤很简单，只要一路next就可以了。 安装完成后，打开命令行工具输入命令node -v，如下图，如果出现对应版本号，就说明安装成功了。

```bash
# 查看node版本
node -v
# 查看npm版本
npm -v
```

npm地址：<https://www.npmjs.com>

## 参数

- -S 是 --save 的简写，将包保存到dependency节点下

- -D是 --save-dev 的简写，将包保存到devDenpendency节点下

dependency节点下的包，是从开发到上线都会用到的包

devDenpendency节点下，是指在开发时会用到的包