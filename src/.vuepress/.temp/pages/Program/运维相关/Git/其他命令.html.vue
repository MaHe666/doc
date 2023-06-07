<template><div><h2 id="设置git不使用ssl安全连接" tabindex="-1"><a class="header-anchor" href="#设置git不使用ssl安全连接" aria-hidden="true">#</a> 设置git不使用SSL安全连接</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token string">"false"</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.sslVerify <span class="token string">"false"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置允许上传的最大大小" tabindex="-1"><a class="header-anchor" href="#设置允许上传的最大大小" aria-hidden="true">#</a> 设置允许上传的最大大小</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--local</span> http.postBuffer <span class="token number">1073741824</span>

<span class="token function">git</span> config <span class="token parameter variable">--local</span> https.postBuffer <span class="token number">1073741824</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并两次commit内容" tabindex="-1"><a class="header-anchor" href="#合并两次commit内容" aria-hidden="true">#</a> 合并两次commit内容</h2>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/w605283073/article/details/127857298" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/w605283073/article/details/127857298<ExternalLinkIcon/></a></li>
</ul>
<h2 id="合并两个分支和两个仓库" tabindex="-1"><a class="header-anchor" href="#合并两个分支和两个仓库" aria-hidden="true">#</a> 合并两个分支和两个仓库</h2>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/fdyputi/article/details/128558134" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/fdyputi/article/details/128558134<ExternalLinkIcon/></a></li>
</ul>
<h2 id="查看commit详情" tabindex="-1"><a class="header-anchor" href="#查看commit详情" aria-hidden="true">#</a> 查看commit详情</h2>
<p>查看所有的commit记录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看提交的详情</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看某次commit中对某个文件的修改</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> show commit的id 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="本地分支误删恢复" tabindex="-1"><a class="header-anchor" href="#本地分支误删恢复" aria-hidden="true">#</a> 本地分支误删恢复</h2>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/nanyeya/article/details/128837190" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/nanyeya/article/details/128837190<ExternalLinkIcon/></a></li>
</ul>
</div></template>


