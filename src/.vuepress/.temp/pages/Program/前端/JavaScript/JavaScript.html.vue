<template><div><p>教程：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript<ExternalLinkIcon/></a></p>
<p>MDN文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference<ExternalLinkIcon/></a></p>
<p>JavaScript一门弱类型脚本语言，其源代码在发往客户端运行之前不需要经过编译，而是将文本格式的字符代码发送给浏览器，由浏览器解释运行。</p>
<p>原生JS开发，就是让我们按照【ECMAScript】标准的开发方式，简称ES，特点是所有浏览器都支持。</p>
<p>不同版本的标准，区别就是逐步增加新特性。</p>
<h1 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h1>
<h2 id="script标签" tabindex="-1"><a class="header-anchor" href="#script标签" aria-hidden="true">#</a> Script标签</h2>
<p>用来存放JavaScript代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个标签无论什么情况下都没有自闭合</p>
<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2>
<p>JavaScript中所有的属性名都是字符串，值是任意对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"马赫"</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">"21"</span><span class="token punctuation">,</span>
	<span class="token literal-property property">hobby</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'java'</span><span class="token punctuation">,</span><span class="token string">'web'</span><span class="token punctuation">,</span><span class="token string">'python'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对象的赋值</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"马赫666"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>对象属性的删除</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">delete</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>动态添加</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>person<span class="token punctuation">.</span>mahe666 <span class="token operator">=</span> <span class="token string">"mahe666"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>判断属性是否在对象中</strong>，返回true或false</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string">'属性名'</span> <span class="token keyword">in</span> 对象名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>判断一个属性是否是这个对象自身拥有的</strong>：hasOwnProperty()</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>person<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="严格检查模式" tabindex="-1"><a class="header-anchor" href="#严格检查模式" aria-hidden="true">#</a> 严格检查模式</h2>
<p>严格检查模式，预防JavaScript的随意性导致的问题</p>
<p><strong>必须写在JavaScript的第一行</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">//严格检查模式</span>
	<span class="token string">'use strict'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增强for循环" tabindex="-1"><a class="header-anchor" href="#增强for循环" aria-hidden="true">#</a> 增强for循环</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> 变量名 <span class="token keyword">in</span> 数组或列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//当前变量是下标</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> 变量名 <span class="token keyword">of</span> 数组或列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//当前变量是元素</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json字符串和js对象的转化" tabindex="-1"><a class="header-anchor" href="#json字符串和js对象的转化" aria-hidden="true">#</a> JSON字符串和JS对象的转化</h2>
<p>**对象转化为json字符串 **</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">'{"name":"mahe666","age":3,"sex":"男"}'</span>
<span class="token keyword">let</span> jsonUser <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">//user是对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>json字符串转化为对象参数为json字符串</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'{"name":"mahe666","age":3,"sex":"男"}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bom对象" tabindex="-1"><a class="header-anchor" href="#bom对象" aria-hidden="true">#</a> BOM对象</h2>
<p>BOM（Browser Object Model）是指浏览器对象模型，可以对浏览器窗口进行访问和操作。使用 BOM，开发者可以移动窗口、改变状态栏中的文本以及执行其他与页面内容不直接相关的动作。</p>
<p>使 JavaScript 有能力与浏览器&quot;对话&quot;。</p>
<h3 id="window对象" tabindex="-1"><a class="header-anchor" href="#window对象" aria-hidden="true">#</a> window对象</h3>
<p>window对象是客户端JavaScript最高层对象之一，由于window对象是其它大部分对象的共同祖先，在调用window对象的方法和属性时，可以省略window对象的引用。例如：<code v-pre>window.document.write()</code> 可以简写成：<code v-pre>document.write()</code>。</p>
<ul>
<li>
<p>所有浏览器都支持 <code v-pre>window</code> 对象。它表示浏览器窗口；</p>
</li>
<li>
<p>概念上讲：一个 <code v-pre>html文档</code> 对应一个 <code v-pre>window对象</code>；</p>
</li>
<li>
<p>功能上讲：控制浏览器窗口的；</p>
</li>
<li>
<p>使用上讲：window对象不需要创建对象，直接使用即可；</p>
</li>
<li>
<p>所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员；</p>
</li>
<li>
<p>全局变量是 window 对象的属性。全局函数是 window 对象的方法。</p>
</li>
</ul>
<h3 id="location对象" tabindex="-1"><a class="header-anchor" href="#location对象" aria-hidden="true">#</a> location对象</h3>
<p>Location 对象包含有关当前 URL 的信息。</p>
<p>Location 对象是 Window 对象的一个部分，可通过 <code v-pre>window.location</code> 属性来访问。</p>
<p>相关方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//重新加载页面，即刷新</span>

<span class="token comment">// 跳转到指定页面（可以返回上一个页面）</span>
location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">"URL"</span><span class="token punctuation">)</span>
location<span class="token punctuation">.</span>href<span class="token operator">=</span><span class="token string">"URL"</span>

<span class="token comment">// 跳转到指定页面（不可以返回上一个页面）</span>
location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"URL"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history对象" tabindex="-1"><a class="header-anchor" href="#history对象" aria-hidden="true">#</a> history对象</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//前进</span>
history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//后退</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>了解即可，不建议使用</strong></p>
<h3 id="navigator对象" tabindex="-1"><a class="header-anchor" href="#navigator对象" aria-hidden="true">#</a> navigator对象</h3>
<p>封装了浏览器的信息，该对象可以人为修改</p>
<p>通过 <code v-pre>window.navigator</code> 获取</p>
<h3 id="screen对象" tabindex="-1"><a class="header-anchor" href="#screen对象" aria-hidden="true">#</a> screen对象</h3>
<p>由浏览器决定提供屏幕对象，此对象一般通过当前浏览器窗口活动状态动态检测来得到。</p>
<p>通过 <code v-pre>window.screen</code> 获取</p>
<h3 id="document对象" tabindex="-1"><a class="header-anchor" href="#document对象" aria-hidden="true">#</a> document对象</h3>
<p>表示任何在浏览器中载入的网页，并作为网页内容的入口</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取cookie</span>
document<span class="token punctuation">.</span>cookie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom对象" tabindex="-1"><a class="header-anchor" href="#dom对象" aria-hidden="true">#</a> DOM对象</h2>
<p>DOM （Document Object Model）是指文档对象模型，通过它，可以访问HTML文档的所有元素。</p>
<p>DOM 是 W3C（万维网联盟）的标准。DOM 定义了访问 HTML 和 XML 文档的标准：</p>
<p>&quot;W3C 文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。&quot;</p>
<h3 id="获得dom节点" tabindex="-1"><a class="header-anchor" href="#获得dom节点" aria-hidden="true">#</a> 获得DOM节点</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span> <span class="token string">' h1'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span> <span class="token string">'p1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByclassName</span><span class="token punctuation">(</span> <span class="token string">'p2 '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> father <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span> <span class="token string">'father'</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token comment">//获取父节点下的所有子节点</span>
<span class="token keyword">var</span> childrens <span class="token operator">=</span> father<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是原生JavaScript的写法，可以使用JQuery简化该操作</p>
<h3 id="插入dom节点" tabindex="-1"><a class="header-anchor" href="#插入dom节点" aria-hidden="true">#</a> 插入DOM节点</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>se <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>JavaSE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ee <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>JavaEE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>me <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>JavaME<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">var</span> js <span class="token operator">=</span> document<span class="token punctuation">.</span> <span class="token function">getElementById</span><span class="token punctuation">(</span> <span class="token string">'js '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span> <span class="token string">' list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">appendchild</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 追加到后面</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2>
<p>MDN文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"Hello World!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h2>
<p>MDN文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number<ExternalLinkIcon/></a></p>
<p>TypeScript 与 JavaScript 类似，支持 Number 对象。
Number 对象是原始数值的包装对象。</p>
<p>let num = new Number(value);
注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。</p>
<p>调用Number属性代码示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"TypeScript Number 属性: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"最大值为: "</span> <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"最小值为: "</span> <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"负无穷大: "</span> <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">NEGATIVE_INFINITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"正无穷大: "</span> <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h2>
<p>MDN文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array<ExternalLinkIcon/></a></p>
<h2 id="md5加密" tabindex="-1"><a class="header-anchor" href="#md5加密" aria-hidden="true">#</a> MD5加密</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用法：将需要加密的值作为参数传入 <code v-pre>md5()</code> 函数</p>
<h2 id="var-let和const" tabindex="-1"><a class="header-anchor" href="#var-let和const" aria-hidden="true">#</a> var，let和const</h2>
<p><code v-pre>let</code>：ES6新增，用于声明变量，有块级作用域</p>
<p><code v-pre>var</code>：ES5中用于声明变量的关键字，存在各种问题（例如：红杏出墙~）</p>
<p>如果你的代码里还存在 var，那你的良心就大大的坏了！</p>
<Tabs id="244" :data='[{"title":"var存在的问题"},{"title":"let不会存在问题"}]'>
<template #tab0="{ title, value, isActive }">
<p><strong>1. 声明提升</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 此处会正常打印，但这是错误的（属于先上车后买票了！）</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
 <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"大帅比"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 变量覆盖</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token string">"小明"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token string">"小红"</span><span class="token punctuation">;</span>
<span class="token comment">// 此处会打印小红，这也是错误的（属于套牌车，违法的啊，兄弟）</span>
<span class="token comment">// 同一个项目中，发生变量覆盖可能会导致数据丢失以及各种不可预知的bug，原则上来说：变量不能重名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 没有块级作用域</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// do something</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 此处会正常打印出 i 的值，这是错误的</span>
	<span class="token comment">// i是定义在循环体之内的，只能在循环体内打印，当前现象叫做红杏出墙！！！</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<p><strong>1. 不会存在声明提升</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 此处会报错（这里必须报错，原则上来说不能先上车后买票）</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
 <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"大帅比"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 不会有变量覆盖</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token keyword">let</span> demo <span class="token operator">=</span> <span class="token string">"小明"</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> demo <span class="token operator">=</span> <span class="token string">"小红"</span><span class="token punctuation">;</span>
 <span class="token comment">// 此处会报错（不能使用套牌车！）告诉你已经定义了此变量。避免了项目中存在变量覆盖的问题</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 有块级作用域</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// do something</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 此处会报错，无法打印，防止红杏出墙！！！</span>
	<span class="token comment">// i是定义在循环体之内的，循环体外当然无法打印 </span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="const常量" tabindex="-1"><a class="header-anchor" href="#const常量" aria-hidden="true">#</a> const常量</h3>
<p>const 声明一个只读的常量，一旦声明，常量的值就不能改变</p>
<p>一般用于全局变量</p>
<p>通常，常量名全部大写（请按照规则来，不要乱搞，容易出事情）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token string">"3.1415926"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2>
<p>解构赋值是对赋值运算符的扩展</p>
<p>针对数组或者对象进行模式匹配，然后对其中的变量进行赋值</p>
<p>代码简洁且易读，语义更加清晰明了，方便了复杂对象中数据字段获取（简而言之：用起来很爽！）</p>
<h3 id="用在数组上" tabindex="-1"><a class="header-anchor" href="#用在数组上" aria-hidden="true">#</a> 用在数组上</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// a = 1，b = 2，c = 3 相当于重新定义了变量a,b,c，取值也更加方便</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// ,是占位符</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">,</span> <span class="token string">"小花"</span><span class="token punctuation">,</span> <span class="token string">"小鱼"</span><span class="token punctuation">,</span> <span class="token string">"小猪"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">,</span>one<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span> <span class="token comment">// 这里会取到小鱼</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 解构整个数组</span>
<span class="token keyword">let</span> strArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 得到整个数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用在对象上" tabindex="-1"><a class="header-anchor" href="#用在对象上" aria-hidden="true">#</a> 用在对象上</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">className</span> <span class="token operator">:</span> <span class="token string">"mahe666"</span><span class="token punctuation">,</span>
   <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>className<span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span> <span class="token comment">// 得到mahe666</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>	<span class="token comment">// 得到18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展运算符-和-剩余运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符-和-剩余运算符" aria-hidden="true">#</a> 扩展运算符 和 剩余运算符</h3>
<p>扩展运算符相当于把数组打开，而剩余运算符相当于组成数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token comment">// 输出结果为：1 2 3 4 5 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> arr
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment">// 输出结果为：[2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="普通字符串-与-模板字符串" tabindex="-1"><a class="header-anchor" href="#普通字符串-与-模板字符串" aria-hidden="true">#</a> 普通字符串 与 模板字符串</h2>
<h3 id="普通字符串" tabindex="-1"><a class="header-anchor" href="#普通字符串" aria-hidden="true">#</a> 普通字符串</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 普通字符串</span>
<span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">"hello"</span> <span class="token operator">+</span> <span class="token string">"小兄弟"</span><span class="token punctuation">;</span> 
<span class="token comment">// 如果想要换行</span>
<span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">"hello' \n '小兄弟"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h3>
<p>模板字符串相当于加强版的字符串，用反引号 ``</p>
<p>除了作为普通字符串，还可以用来定义多行字符串，可以在字符串中加入变量和表达式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">"穿堂而过的"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">"风"</span><span class="token punctuation">;</span>
<span class="token comment">// 模板字符串</span>
<span class="token keyword">let</span> newStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token comment">// 我是穿堂而过的风</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newStr<span class="token punctuation">)</span>

<span class="token comment">// 字符串中调用方法</span>
<span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"帅的不行！"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> string2<span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我真是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>string2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 我真是帅的不行！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h3>
<p>箭头函数是一种更加简洁的函数书写方式</p>
<p>箭头函数本身没有作用域（无this）</p>
<p>箭头函数的this指向上一层，上下文决定其this</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token parameter">num</span> <span class="token operator">=></span> num<span class="token punctuation">;</span>

<span class="token comment">//等价于</span>
<span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>带参数的写法</em></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
 <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="问题-箭头函数中this指向" tabindex="-1"><a class="header-anchor" href="#问题-箭头函数中this指向" aria-hidden="true">#</a> 问题：箭头函数中this指向</h4>
<p>箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象。在函数定义的时候就已经决定了</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
		<span class="token comment">// 定义时，this 绑定的是 fn3 中的 this 对象</span>
		<span class="token comment">// console.log(this.a);</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// fn3 的 this 对象为 {a: 10}，因为它指向全局: window.a</span>
<span class="token function">fn3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 改变this指向，此时 a = 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h4>
<p>当我们代码里存在这样的代码：let self = this;</p>
<p>需要新建变量去保存this的时候</p>
<p>示例如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token string-property property">'age'</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token string-property property">'sayHello'</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
Person1<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数参数的扩展" tabindex="-1"><a class="header-anchor" href="#函数参数的扩展" aria-hidden="true">#</a> 函数参数的扩展</h3>
<h4 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// num为默认参数，如果不传，则默认为10</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> num<span class="token operator">=</span><span class="token number">10</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 打印 1，10</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印 1，2 （此值会覆盖默认参数10）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递</p>
<h4 id="不定参数" tabindex="-1"><a class="header-anchor" href="#不定参数" aria-hidden="true">#</a> 不定参数</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 此处的values是不定的，且无论你传多少个</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>values</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 2</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态参数" tabindex="-1"><a class="header-anchor" href="#动态参数" aria-hidden="true">#</a> 动态参数</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">'HelloWorld'</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上函数并没有设置形参，但是当我们在调用方法时给了实参后（这里只检测了第一个实参），我们利用三目运算符检测</p>
</div></template>


