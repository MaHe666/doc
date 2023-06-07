<template><div><p>redis配置文件下载地址：<a href="http://download.redis.io/redis-stable/redis.conf" target="_blank" rel="noopener noreferrer">http://download.redis.io/redis-stable/redis.conf<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">16379</span>:6379 <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-v</span> D:/dockerFiles/redis/conf/redis.conf <span class="token parameter variable">-v</span> <span class="token parameter variable">-d</span> redis redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>16379端口的目的是为了防止本地禁用6379tcp端口</p>
</div></template>


