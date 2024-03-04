import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as t,c as l,d as n,e as s,a as i,f as o}from"./app-C3cpgYMU.js";const c={},r={href:"https://juejin.cn/post/7181267667465502776",target:"_blank",rel:"noopener noreferrer"},d=o(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="确保有如下全局依赖" tabindex="-1"><a class="header-anchor" href="#确保有如下全局依赖"><span>确保有如下全局依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> rollup <span class="token parameter variable">-g</span>

<span class="token function">npm</span> <span class="token function">install</span> typescript <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进入项目文件夹-初始化项目" tabindex="-1"><a class="header-anchor" href="#进入项目文件夹-初始化项目"><span>进入项目文件夹，初始化项目</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 初始化项目</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>

<span class="token comment"># 初始化ts配置文件 tsconfig.json</span>
tsc <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖"><span>添加依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> rollup <span class="token parameter variable">-D</span>

<span class="token function">npm</span> <span class="token function">install</span> typescript <span class="token parameter variable">-D</span>

<span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-typescript2 <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理配置文件" tabindex="-1"><a class="header-anchor" href="#处理配置文件"><span>处理配置文件</span></a></h3><p><code>rollup.config.js</code>，也可以开启<code>sourcemap</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> ts <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.ts&#39;</span><span class="token punctuation">,</span> <span class="token comment">//入口</span>

  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//出口</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//以script方式引入</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">//插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//ts插件让rollup读取ts文件</span>
    <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 <code>tsconfig.json</code> 中 <code>&quot;module&quot;: &quot;es6&quot;</code></p><p>只需要构建的话，在 <code>package.json</code> 中添加 <code>&quot;build&quot;: &quot;rollup -c&quot;</code></p><p>还需要运行的话，在 <code>package.json</code> 中添加 <code>&quot;dev&quot;: &quot;rollup -c -w&quot;</code></p><h2 id="配置代码压缩" tabindex="-1"><a class="header-anchor" href="#配置代码压缩"><span>配置代码压缩</span></a></h2><p>添加依赖</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-terser <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>处理rollup配置文件</p><p><code>rollup.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> ts <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> terser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-terser&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.ts&#39;</span><span class="token punctuation">,</span> <span class="token comment">//入口</span>

    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//出口</span>
        <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//以script方式引入</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//ts插件让rollup读取ts文件</span>
        <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">terser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//代码压缩</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function u(v,k){const a=p("ExternalLinkIcon");return t(),l("div",null,[n("p",null,[s("相关博客："),n("a",r,[s("https://juejin.cn/post/7181267667465502776"),i(a)])]),d])}const h=e(c,[["render",u],["__file","rollup集成typescript.html.vue"]]);export{h as default};
