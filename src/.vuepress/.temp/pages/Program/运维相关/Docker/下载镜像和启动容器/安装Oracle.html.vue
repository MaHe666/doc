<template><div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> oracle11g <span class="token parameter variable">-p</span> <span class="token number">11521</span>:1521 registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>11521端口的目的是为了防止本地禁用1521tcp端口</p>
<p>安装及相关配置博客：<a href="https://summerking1.github.io/pages/6bc345/" target="_blank" rel="noopener noreferrer">https://summerking1.github.io/pages/6bc345/<ExternalLinkIcon/></a></p>
</div></template>


