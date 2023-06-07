<template><div><h2 id="项目开发笔记" tabindex="-1"><a class="header-anchor" href="#项目开发笔记" aria-hidden="true">#</a> 项目开发笔记</h2>
<h3 id="vuetreeselect" tabindex="-1"><a class="header-anchor" href="#vuetreeselect" aria-hidden="true">#</a> VueTreeselect</h3>
<p>官方网站：<a href="https://vue-treeselect.js.org" target="_blank" rel="noopener noreferrer">https://vue-treeselect.js.org<ExternalLinkIcon/></a></p>
<p>相关博客：</p>
<ul>
<li><a href="https://www.cnblogs.com/javahr/articles/13607024.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/javahr/articles/13607024.html<ExternalLinkIcon/></a></li>
</ul>
<h4 id="禁用或只读" tabindex="-1"><a class="header-anchor" href="#禁用或只读" aria-hidden="true">#</a> 禁用或只读</h4>
<p>加上 <code v-pre>:disabled='true'</code> 就好</p>
<p>双引号内可以添加作为标志位的变量名</p>
<h4 id="vuetreeselect显示unknown解决方法" tabindex="-1"><a class="header-anchor" href="#vuetreeselect显示unknown解决方法" aria-hidden="true">#</a> VueTreeselect显示unknown解决方法</h4>
<p>treeselect 绑定的值需要与options输出的id相对应，若是空值，请不要给空字符串，0，等，因为会出现unknown，并且当选择了值以后，会出现选中的值后面会拼上unknown。</p>
<p>解决办法就是把v-modle绑定的值设为null，必须是null，不能是‘null’，初始化的时候才不会出现unknown。</p>
<h4 id="选项为空时-用中文提示" tabindex="-1"><a class="header-anchor" href="#选项为空时-用中文提示" aria-hidden="true">#</a> 选项为空时 用中文提示</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>treeselect</span>
	<span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxxx<span class="token punctuation">"</span></span>
	<span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> 
	<span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxxx<span class="token punctuation">"</span></span>
	<span class="token attr-name">:show-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
	<span class="token attr-name">:disable-branch-nodes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
	<span class="token attr-name">:searchable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
	<span class="token attr-name">clearValueText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清除<span class="token punctuation">"</span></span>
	<span class="token attr-name">noOptionsText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>暂无数据<span class="token punctuation">"</span></span>
	<span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请选择<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue-treeselect-warning-invalid-node-id" tabindex="-1"><a class="header-anchor" href="#vue-treeselect-warning-invalid-node-id" aria-hidden="true">#</a> [vue-treeselect warning] invalid node id</h4>
<p>树节点的id不要留空</p>
<h4 id="vue-treeselect使用常见问题汇总及解决办法" tabindex="-1"><a class="header-anchor" href="#vue-treeselect使用常见问题汇总及解决办法" aria-hidden="true">#</a> Vue Treeselect使用常见问题汇总及解决办法</h4>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/m0_67392010/article/details/123367976" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_67392010/article/details/123367976<ExternalLinkIcon/></a></li>
</ul>
<h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h4>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_60035188/article/details/124936953" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_60035188/article/details/124936953<ExternalLinkIcon/></a></li>
</ul>
<h3 id="style-动态样式" tabindex="-1"><a class="header-anchor" href="#style-动态样式" aria-hidden="true">#</a> :style 动态样式</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> 布尔表达式 ? ' background-color : #fff; color : #000 ' : '' <span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="通过base64编码下载图片" tabindex="-1"><a class="header-anchor" href="#通过base64编码下载图片" aria-hidden="true">#</a> 通过base64编码下载图片</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/m0_60067716/article/details/124628308" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_60067716/article/details/124628308<ExternalLinkIcon/></a></li>
</ul>
<h2 id="项目错误笔记" tabindex="-1"><a class="header-anchor" href="#项目错误笔记" aria-hidden="true">#</a> 项目错误笔记</h2>
<h3 id="avoid-mutating-a-prop-directly-since-the-value-will" tabindex="-1"><a class="header-anchor" href="#avoid-mutating-a-prop-directly-since-the-value-will" aria-hidden="true">#</a> Avoid mutating a prop directly since the value will</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_45890764/article/details/117434292" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_45890764/article/details/117434292<ExternalLinkIcon/></a></li>
</ul>
<h3 id="are-you-meant-to-dynamically-load-options" tabindex="-1"><a class="header-anchor" href="#are-you-meant-to-dynamically-load-options" aria-hidden="true">#</a> Are you meant to dynamically load options</h3>
<p>vue date中修改对应loadOptions参数不为空即可</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
      		<span class="token comment">//修改前</span>
			<span class="token literal-property property">deptOptions</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
			<span class="token comment">//修改后</span>
			<span class="token literal-property property">deptOptions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-available-either-pre-compile-the-templates-into-render-functions-or-use-the-compiler-included-build" tabindex="-1"><a class="header-anchor" href="#you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-available-either-pre-compile-the-templates-into-render-functions-or-use-the-compiler-included-build" aria-hidden="true">#</a> You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.</h3>
<p>报错内容：</p>
<blockquote>
<p>你正在使用’仅有运行时环境’的Vue构建版本，该版本中template编译器不可用。要么预编译模板，使其变为render函数，或者使用’包含编译器’的Vue构建版本。</p>
</blockquote>
<Tabs id="124" :data='[{"id":"方案1"},{"id":"方案2"}]'>
<template #title0="{ value, isActive }">方案1</template>
<template #title1="{ value, isActive }">方案2</template>
<template #tab0="{ value, isActive }">
<p>将<code v-pre>main.js</code>中的</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更改为</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue/dist/vue.js'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<ol>
<li>在项目根目录创建 <code v-pre>vue.config.js</code> 文件，编写如下代码</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">runtimeCompiler</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>重新运行项目</li>
</ol>
</template>
</Tabs>
<h2 id="项目搭建笔记" tabindex="-1"><a class="header-anchor" href="#项目搭建笔记" aria-hidden="true">#</a> 项目搭建笔记</h2>
<h3 id="创建vue项目" tabindex="-1"><a class="header-anchor" href="#创建vue项目" aria-hidden="true">#</a> 创建Vue项目</h3>
<p>快捷创建vue项目，在命令行输入</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vue create 项目名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意使用vue的哪个版本进行构建（Vue2还是Vue3）</p>
<h3 id="借鉴若依框架" tabindex="-1"><a class="header-anchor" href="#借鉴若依框架" aria-hidden="true">#</a> 借鉴若依框架</h3>
<p>借鉴若依框架时需要注意环境的问题</p>
<p>注意项目中以 <code v-pre>.env</code> 开头的配置文件中的内容，以及启动时生效的配置文件</p>
<p><code v-pre>vue.config.js</code> 在进行端口号、代理的后端地址的设置的时候，很多时候都是从配置文件中拿到的值，这里需要注意</p>
</div></template>


