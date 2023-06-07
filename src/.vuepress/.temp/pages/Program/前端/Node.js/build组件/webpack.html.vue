<template><div><p>webpack官网：<a href="https://www.webpackjs.com/" target="_blank" rel="noopener noreferrer">https://www.webpackjs.com/<ExternalLinkIcon/></a></p>
<p>一个打包工具，主要作用就是打包、压缩、合并及按序加载</p>
<p>可以把webpack的作用理解为把JavaScript代码都打包成ES5的规范，以达到所有浏览器都能使用的效果</p>
<p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack <span class="token parameter variable">-g</span>
<span class="token function">npm</span> <span class="token function">install</span> webpack-cli <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试安装是否成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>webpack <span class="token parameter variable">-v</span>
webpack-cli <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>创建 <code v-pre>webpack.config.js</code> 配置文件</p>
<p><code v-pre>entry</code>：入口文件， 指定Web Pack用哪个文件作为项目的入口</p>
<p><code v-pre>output</code>：输出， 指定WebPack把处理完成的文件放置到指定路径</p>
<p><code v-pre>module</code>：模块， 用于处理各种类型的文件</p>
<p><code v-pre>plugins</code>：插件， 如：热更新、代码重用等</p>
<p><code v-pre>resolve</code>：设置路径指向</p>
<p><code v-pre>watch</code>：监听， 用于设置文件改动后直接打包</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">""</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">loaders</span><span class="token operator">:</span><span class="token punctuation">[</span>
			<span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token punctuation">;</span>\loade<span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


