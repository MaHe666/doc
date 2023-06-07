<template><div><p>内网穿透，可以让别人远程访问你的本地项目</p>
<p>相关博客：<a href="https://blog.csdn.net/liunianqingshi/article/details/108049441" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liunianqingshi/article/details/108049441<ExternalLinkIcon/></a></p>
<p>国际版官网：<a href="https://ngrok.com/" target="_blank" rel="noopener noreferrer">https://ngrok.com/<ExternalLinkIcon/></a></p>
<p>文档：<a href="https://ngrok.com/docs" target="_blank" rel="noopener noreferrer">https://ngrok.com/docs<ExternalLinkIcon/></a></p>
<p>国内版官网：<a href="https://www.ngrok.cc/" target="_blank" rel="noopener noreferrer">https://www.ngrok.cc/<ExternalLinkIcon/></a></p>
<p>哔哩哔哩教程：<a href="https://www.bilibili.com/video/BV17K4y187A2?spm_id_from=333.999.0.0" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV17K4y187A2?spm_id_from=333.999.0.0<ExternalLinkIcon/></a></p>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<p>cmd运行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ngrok authtoken 官网的授权码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有配置环境变量，需要进到文件夹内才能运行</p>
<p>查看帮助</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ngrok <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启8080端口</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ngrok http <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是二级域名的方式，只会取代 <code v-pre>localhost:8080/</code></p>
</div></template>


