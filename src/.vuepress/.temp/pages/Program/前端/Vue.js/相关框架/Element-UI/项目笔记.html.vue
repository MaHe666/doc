<template><div><h2 id="el-button" tabindex="-1"><a class="header-anchor" href="#el-button" aria-hidden="true">#</a> el-button</h2>
<h3 id="el-button-使用禁止和取消禁止" tabindex="-1"><a class="header-anchor" href="#el-button-使用禁止和取消禁止" aria-hidden="true">#</a> el-button 使用禁止和取消禁止</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_25430563/article/details/88909739" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_25430563/article/details/88909739<ExternalLinkIcon/></a></li>
</ul>
<h3 id="vue中button标签样式和功能禁用的写法" tabindex="-1"><a class="header-anchor" href="#vue中button标签样式和功能禁用的写法" aria-hidden="true">#</a> vue中button标签样式和功能禁用的写法</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://www.jb51.net/article/243073.htm" target="_blank" rel="noopener noreferrer">https://www.jb51.net/article/243073.htm<ExternalLinkIcon/></a></li>
</ul>
<h2 id="el-col" tabindex="-1"><a class="header-anchor" href="#el-col" aria-hidden="true">#</a> el-col</h2>
<h3 id="把页面分为等份" tabindex="-1"><a class="header-anchor" href="#把页面分为等份" aria-hidden="true">#</a> 把页面分为等份</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://www.jianshu.com/p/4a17b3c992cf" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/4a17b3c992cf<ExternalLinkIcon/></a></li>
</ul>
<h2 id="el-form" tabindex="-1"><a class="header-anchor" href="#el-form" aria-hidden="true">#</a> el-form</h2>
<h3 id="el-input-number" tabindex="-1"><a class="header-anchor" href="#el-input-number" aria-hidden="true">#</a> el-input-number</h3>
<h4 id="el-input-为-number-如何控制不允许输入负号" tabindex="-1"><a class="header-anchor" href="#el-input-为-number-如何控制不允许输入负号" aria-hidden="true">#</a> el-input 为 number 如何控制不允许输入负号</h4>
<p>相关博客：</p>
<ul>
<li><a href="http://t.zoukankan.com/guangzhou11-p-12765485.html" target="_blank" rel="noopener noreferrer">http://t.zoukankan.com/guangzhou11-p-12765485.html<ExternalLinkIcon/></a></li>
</ul>
<h4 id="el-input-number-修改默认值为空" tabindex="-1"><a class="header-anchor" href="#el-input-number-修改默认值为空" aria-hidden="true">#</a> el-input-number 修改默认值为空</h4>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/m0_46404694/article/details/117019938" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_46404694/article/details/117019938<ExternalLinkIcon/></a></li>
</ul>
<h3 id="label怎么设置宽度" tabindex="-1"><a class="header-anchor" href="#label怎么设置宽度" aria-hidden="true">#</a> label怎么设置宽度</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_38916157/article/details/103063500" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_38916157/article/details/103063500<ExternalLinkIcon/></a></li>
</ul>
<h3 id="el-input" tabindex="-1"><a class="header-anchor" href="#el-input" aria-hidden="true">#</a> el-input</h3>
<h4 id="el-input-的-type-为-number-时的长度限制" tabindex="-1"><a class="header-anchor" href="#el-input-的-type-为-number-时的长度限制" aria-hidden="true">#</a> el-input 的 type 为 number 时的长度限制</h4>
<p>input事件解决限制长度的问题，<code v-pre>onKeypress</code> 解决可以输入字母e的问题</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
	<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>
	<span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.number<span class="token punctuation">"</span></span>
	<span class="token attr-name">@input.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeNum<span class="token punctuation">"</span></span>
	<span class="token attr-name">onKeypress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>return(/[\d]/.test(String.fromCharCode(event.keyCode)))<span class="token punctuation">"</span></span> 
	<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">changeNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//6是限制的长度</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span>number<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span>number<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="el-input-输入框-点击事件" tabindex="-1"><a class="header-anchor" href="#el-input-输入框-点击事件" aria-hidden="true">#</a> el-input 输入框 点击事件</h4>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/ximaiyao1984/article/details/118301632" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/ximaiyao1984/article/details/118301632<ExternalLinkIcon/></a></li>
</ul>
<h3 id="el-select" tabindex="-1"><a class="header-anchor" href="#el-select" aria-hidden="true">#</a> el-select</h3>
<h4 id="el-select的value为item时的选中问题" tabindex="-1"><a class="header-anchor" href="#el-select的value为item时的选中问题" aria-hidden="true">#</a> el-select的value为item时的选中问题</h4>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_32332433/article/details/119639705" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_32332433/article/details/119639705<ExternalLinkIcon/></a></li>
</ul>
<h3 id="表单自动验证问题的解决" tabindex="-1"><a class="header-anchor" href="#表单自动验证问题的解决" aria-hidden="true">#</a> 表单自动验证问题的解决</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://www.dandelioncloud.cn/article/details/1460607600978116609" target="_blank" rel="noopener noreferrer">https://www.dandelioncloud.cn/article/details/1460607600978116609<ExternalLinkIcon/></a></li>
</ul>
<p>好用但是个馊主意：<code v-pre>在表单 赋值操作前 移除校验规则,使 this.formRules = {},form 赋值后再加上 校验规则</code></p>
<h2 id="el-table" tabindex="-1"><a class="header-anchor" href="#el-table" aria-hidden="true">#</a> el-table</h2>
<h3 id="行点击事件" tabindex="-1"><a class="header-anchor" href="#行点击事件" aria-hidden="true">#</a> 行点击事件</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://wenku.baidu.com/view/9a251426bdd5b9f3f90f76c66137ee06eff94e37.html" target="_blank" rel="noopener noreferrer">https://wenku.baidu.com/view/9a251426bdd5b9f3f90f76c66137ee06eff94e37.html<ExternalLinkIcon/></a></li>
</ul>
<h3 id="点击行-改变颜色" tabindex="-1"><a class="header-anchor" href="#点击行-改变颜色" aria-hidden="true">#</a> 点击行 改变颜色</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://wenku.baidu.com/view/3623cbffae51f01dc281e53a580216fc700a533a.html" target="_blank" rel="noopener noreferrer">https://wenku.baidu.com/view/3623cbffae51f01dc281e53a580216fc700a533a.html<ExternalLinkIcon/></a></li>
</ul>
<p>如果 <code v-pre>!important</code> 没生效
则在样式名前加上 <code v-pre>::deep</code></p>
<h3 id="默认选中第一行" tabindex="-1"><a class="header-anchor" href="#默认选中第一行" aria-hidden="true">#</a> 默认选中第一行</h3>
<p>相关博客：</p>
<ul>
<li>
<p><a href="https://www.codeleading.com/article/99581378039/" target="_blank" rel="noopener noreferrer">https://www.codeleading.com/article/99581378039/<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/weixin_49913387/article/details/111868789" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_49913387/article/details/111868789<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="可编辑表格" tabindex="-1"><a class="header-anchor" href="#可编辑表格" aria-hidden="true">#</a> 可编辑表格</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/Suzerk/article/details/120396650" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/Suzerk/article/details/120396650<ExternalLinkIcon/></a></li>
</ul>
<h3 id="鼠标悬浮样式" tabindex="-1"><a class="header-anchor" href="#鼠标悬浮样式" aria-hidden="true">#</a> 鼠标悬浮样式</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_45818024/article/details/114065381" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_45818024/article/details/114065381<ExternalLinkIcon/></a></li>
</ul>
<h2 id="el-tree" tabindex="-1"><a class="header-anchor" href="#el-tree" aria-hidden="true">#</a> el-tree</h2>
<h3 id="当前选中项高亮显示" tabindex="-1"><a class="header-anchor" href="#当前选中项高亮显示" aria-hidden="true">#</a> 当前选中项高亮显示</h3>
<p>给 <code v-pre>&lt;el-tree&gt;</code> 标签加上 <code v-pre>highlight-current</code> 属性</p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="element-表格-formatter-格式化的用法" tabindex="-1"><a class="header-anchor" href="#element-表格-formatter-格式化的用法" aria-hidden="true">#</a> element 表格 formatter 格式化的用法</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_21631111/article/details/106687014" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_21631111/article/details/106687014<ExternalLinkIcon/></a></li>
</ul>
<h3 id="关于el-select组件设置默认值的实现" tabindex="-1"><a class="header-anchor" href="#关于el-select组件设置默认值的实现" aria-hidden="true">#</a> 关于el-select组件设置默认值的实现</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qwerewf/article/details/108117364" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qwerewf/article/details/108117364<ExternalLinkIcon/></a></li>
</ul>
<h3 id="watch监听对象中某个属性" tabindex="-1"><a class="header-anchor" href="#watch监听对象中某个属性" aria-hidden="true">#</a> watch监听对象中某个属性</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_21631111/article/details/106687014" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_21631111/article/details/106687014<ExternalLinkIcon/></a></li>
</ul>
<h3 id="身份证号校验-根据身份证号获取年龄以及出生日期" tabindex="-1"><a class="header-anchor" href="#身份证号校验-根据身份证号获取年龄以及出生日期" aria-hidden="true">#</a> 身份证号校验，根据身份证号获取年龄以及出生日期</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_56404022/article/details/122230209" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_56404022/article/details/122230209<ExternalLinkIcon/></a></li>
</ul>
</div></template>


