<template><div><p>官网最新版下载地址：<a href="https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer">https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads<ExternalLinkIcon/></a></p>
<p>其他版本可以在msdn下载：<a href="https://msdn.itellyou.cn/" target="_blank" rel="noopener noreferrer">https://msdn.itellyou.cn/<ExternalLinkIcon/></a></p>
<p>在服务器选项卡里面找自己想要的版本</p>
<p>安装相关博客：<a href="https://blog.csdn.net/weixin_47798714/article/details/124251211" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_47798714/article/details/124251211<ExternalLinkIcon/></a></p>
<p>如果自己电脑里有其他的数据库，建议自定义命名实例</p>
<h2 id="navicat远程连接" tabindex="-1"><a class="header-anchor" href="#navicat远程连接" aria-hidden="true">#</a> Navicat远程连接</h2>
<p>SqlServer安装完成后，打开配置管理器</p>
<p>在左侧找到网络配置项，找到实例的协议</p>
<p>然后启用TCP/IP</p>
<p>右键选择TCP/IP的属性</p>
<p>选择 IP地址 选项卡</p>
<p>拉到最下面，找到IPALL</p>
<p>配置TCP端口号为1433</p>
<p>回到navicat，新建连接选择SqlServer</p>
<p>验证选择SQL Server验证</p>
<p>用户名为sa</p>
<p>密码为安装时设置的密码</p>
<h2 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h2>
<p><code v-pre>Convert()</code>，相关博客：<a href="https://blog.csdn.net/qq_37528515/article/details/105647179" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_37528515/article/details/105647179<ExternalLinkIcon/></a></p>
</div></template>


