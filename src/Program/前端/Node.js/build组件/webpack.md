---
title: webpack
order: 10
icon: webpack
---

webpack官网：<https://www.webpackjs.com/>

一个打包工具，主要作用就是打包、压缩、合并及按序加载

可以把webpack的作用理解为把JavaScript代码都打包成ES5的规范，以达到所有浏览器都能使用的效果

安装

```bash
npm install webpack -g
npm install webpack-cli -g
```

测试安装是否成功

```bash
webpack -v
webpack-cli -v
```

## 配置

创建 `webpack.config.js` 配置文件

`entry`：入口文件， 指定Web Pack用哪个文件作为项目的入口

`output`：输出， 指定WebPack把处理完成的文件放置到指定路径

`module`：模块， 用于处理各种类型的文件

`plugins`：插件， 如：热更新、代码重用等

`resolve`：设置路径指向

`watch`：监听， 用于设置文件改动后直接打包

```javascript
module.exports = {
	entry:"",
	output:{
		path:"",
		filename:""
	},
	module:{
		loaders:[
			{test:/\.js$/,;\loade:""}
		]
	},
	plugins:{},
	resolve:{},
	watch:true
}
```


