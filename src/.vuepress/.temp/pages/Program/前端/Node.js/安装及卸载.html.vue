<template><div><p>安装的时候记得添加到环境变量 <code v-pre>Add to PATH</code></p>
<p>配置
创建两个空目录 <code v-pre>node_cache</code>、<code v-pre>node_global</code></p>
<p>打开CMD 运行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">"nodejs根目录<span class="token entity" title="\n">\n</span>ode_global"</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">"nodejs根目录<span class="token entity" title="\n">\n</span>ode_cache"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在【系统变量】下新建【NODE_PATH】，输入【D:\Program Files\nodejs\node_global\node_modules】(改成你自己的nodeJS的安装目录)</p>
<p>删除原来【用户变量】下的npm运行地址
将【用户变量】下的【Path】修改为【D:\Program Files\nodejs\node_global】(改成你自己的nodeJS的安装目录)</p>
<p>安装淘宝镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cnpm <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关于卸载，相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_46145812/article/details/122766563" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_46145812/article/details/122766563<ExternalLinkIcon/></a></li>
</ul>
</div></template>


