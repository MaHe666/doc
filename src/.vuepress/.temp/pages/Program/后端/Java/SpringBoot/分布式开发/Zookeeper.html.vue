<template><div><p>Dubbo官方文档推荐我们使用Zookeeper</p>
<p>ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，是Hadoop和Hbase的重要组件。</p>
<p>它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。</p>
<p>官网：<a href="https://zookeeper.apache.org/" target="_blank" rel="noopener noreferrer">https://zookeeper.apache.org/<ExternalLinkIcon/></a></p>
<p><strong>默认端口2181，同时千万不要占用2888和3888端口</strong></p>
<h2 id="下载和安装" tabindex="-1"><a class="header-anchor" href="#下载和安装" aria-hidden="true">#</a> 下载和安装</h2>
<ol>
<li>
<p>解压从官网下载的 <code v-pre>tar.gz</code> 压缩包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 带后缀的文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是Windows系统，需要使用 <code v-pre>Windows PowerShell</code> 解压</p>
</li>
<li>
<p>进入解压后文件的bin目录，使用管理员模式运行 <code v-pre>zkServer.cmd</code></p>
</li>
<li>
<p>编辑 <code v-pre>zkServer.cmd</code> 文件，在 <code v-pre>endlocal</code> 指令上面加一句 <code v-pre>pause</code>，这样报错的时候就不会闪退了</p>
<p>进入到Zookeeper下的conf文件夹，将 <code v-pre>zoo_sample.cfg</code> 复制一份，重命名为 <code v-pre>zoo.cfg</code>，这个文件就是Zookeeper的配置文件</p>
<blockquote>
<p>可能的错误：</p>
<p>错误：找不到或无法加载主类 org.apache.zookeeper.server.quorum.QuorumPeerMain</p>
<p>解决：下载对应版本的bin压缩文件，将该包下的lib目录拷贝到之前的Zookeeper文件夹中</p>
</blockquote>
</li>
<li>
<p>需要注意配置文件中的两个选项</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#临时数据存储的目录（可写相对路径）
dataDir=../tmp/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#zookeeper的端口号
clientPort=2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>千万不要占用2888端口和3888端口</strong></p>
</li>
</ol>
<p>Zookeeper是临时节点，不会像Eureka那样进行保存</p>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>
<p>使用bin目录下的 <code v-pre>zkCli.cmd</code> 进行访问测试</p>
<p>使用 <code v-pre>ls /</code> 指令查看节点</p>
<p>创建名为 <code v-pre>mahe666</code> ，值为 <code v-pre>123</code> 的节点</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>create <span class="token parameter variable">-e</span> /mahe666 <span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取名为 <code v-pre>mahe666</code> 的节点</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>get /mahe666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次使用 <code v-pre>ls /</code> 指令查看节点</p>
</div></template>


