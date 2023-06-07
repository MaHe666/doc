<template><div><p>排查是否安装过wget</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">"wget"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果安装过了，就卸载</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum remove <span class="token function">wget</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>去网易CentOS7安装包镜像站下载wget安装包：<a href="http://mirrors.163.com/centos/7/os/x86_64/Packages/" target="_blank" rel="noopener noreferrer">http://mirrors.163.com/centos/7/os/x86_64/Packages/<ExternalLinkIcon/></a></p>
<p>安装wget</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> wget安装包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行如下命令，查看wget的版本信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原文地址：<a href="https://cloud.tencent.com/developer/article/2150638" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/2150638<ExternalLinkIcon/></a></p>
</div></template>


