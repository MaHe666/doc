import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-1QH72W1w.js";const e={},p=t(`<ul><li><code>PageContext</code>：页面上下文，可以存东西</li><li><code>Request</code>：请求，可以存东西</li><li><code>Response</code>：响应</li><li><code>Application（ServletContext）</code>：最大的对象，可以存东西</li><li><code>Session</code>：会话，可以存东西</li><li><code>page</code>：页面</li><li><code>config</code>：ServletConfig</li><li><code>out</code>：输出</li><li><code>exception</code>：异常</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>pageContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mahe666 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//保存的数据在一个页面内有效</span>
request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mahe666 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//保存的数据在一次请求内有效，请求转发会携带这个参数</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mahe666 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//保存的数据在一次会话内有效，从打开浏览器，到关闭浏览器</span>
application<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mahe666 4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//保存的数据在服务器中有效，从打开服务器到关闭服务器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    &lt;%
        pageContext.setAttribute(&quot;name1&quot;,&quot;mahe666 1&quot;);  //保存的数据在一个页面内有效
        request.setAttribute(&quot;name2&quot;,&quot;mahe666 2&quot;);      //保存的数据在一次请求内有效，请求转发会携带这个参数
        session.setAttribute(&quot;name3&quot;,&quot;mahe666 3&quot;);      //保存的数据在一次会话内有效，从打开浏览器，到关闭浏览器
        application.setAttribute(&quot;name4&quot;,&quot;mahe666 4&quot;);  //保存的数据在服务器中有效，从打开服务器到关闭服务器
    %&gt;

    &lt;%
        //通过寻找的方式进行查询   findAttribute();
        //作用域由低到高		page -&gt; request -&gt; session -&gt; application
        String name1 = (String) pageContext.findAttribute(&quot;name1&quot;);
        String name2 = (String) pageContext.findAttribute(&quot;name2&quot;);
        String name3 = (String) pageContext.findAttribute(&quot;name3&quot;);
        String name4 = (String) pageContext.findAttribute(&quot;name4&quot;);
        String name5 = (String) pageContext.findAttribute(&quot;name5&quot;);	//如果在四个作用域内都没找到，则返回null
    %&gt;

    &lt;%--使用EL表达式进行输出--%&gt;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>取出的值为：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\${name1}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\${name2}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\${name3}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\${name4}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\${name5}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    &lt;%--建议使用EL表达式，否则的话可能获取不到数据，显示为null--%&gt;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>&lt;%=name5%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pagecontext对象" tabindex="-1"><a class="header-anchor" href="#pagecontext对象"><span>PageContext对象</span></a></h2><h3 id="存数据时设置作用域" tabindex="-1"><a class="header-anchor" href="#存数据时设置作用域"><span>存数据时设置作用域</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    &lt;%
        /*
            PAGE_SCOPE = 1;
            REQUEST_SCOPE = 2;
            SESSION_SCOPE = 3;
            APPLICATION_SCOPE = 4;
         */
    %&gt;

    &lt;%
        //pageContext.setAttribute();   方法有三个参数 K,V,作用域
        //作用域有上面四个类型
        pageContext.setAttribute(&quot;name&quot;,&quot;mahe666&quot;,PageContext.SESSION_SCOPE);
        //上面这个语句等价于
        session.setAttribute(&quot;name&quot;,&quot;mahe666&quot;);
        //但是不建议这么做
    %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面跳转" tabindex="-1"><a class="header-anchor" href="#页面跳转"><span>页面跳转</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    &lt;%
        pageContext.forward(&quot;/index.jsp&quot;);
    %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[p];function i(o,c){return s(),a("div",null,l)}const g=n(e,[["render",i],["__file","九大内置对象.html.vue"]]);export{g as default};
