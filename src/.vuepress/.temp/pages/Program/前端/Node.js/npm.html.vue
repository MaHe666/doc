<template><div><p>NPM（node package manager）是随同node.js一起安装的包管理工具，能解决前端代码部署上的很多问题，常见的使用场景有以下几种：</p>
<ol>
<li>允许用户从NPM服务器下载别人编写的第三方包到本地使用。</li>
<li>允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。</li>
<li>允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。</li>
</ol>
<p>实际上，npm就是前端的Maven。</p>
<p>从node官网下载并安装node，安装步骤很简单，只要一路next就可以了。 安装完成后，打开命令行工具输入命令node -v，如下图，如果出现对应版本号，就说明安装成功了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看node版本</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment"># 查看npm版本</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm地址：<a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">https://www.npmjs.com<ExternalLinkIcon/></a></p>
<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<ul>
<li>
<p>-S 是 --save 的简写，将包保存到dependency节点下</p>
</li>
<li>
<p>-D是 --save-dev 的简写，将包保存到devDenpendency节点下</p>
</li>
</ul>
<p>dependency节点下的包，是从开发到上线都会用到的包</p>
<p>devDenpendency节点下，是指在开发时会用到的包</p>
</div></template>


