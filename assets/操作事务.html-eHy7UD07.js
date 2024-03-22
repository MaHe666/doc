import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-C3_r1bOQ.js";const e={},c=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 通知数据库开启事务，关闭自动提交</span>

conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 业务完毕，提交事务</span>

conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 事务回滚，一般写在catch里面，如果失败了则回滚（默认回滚，不写也没事）</span>

conn<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果关闭了事务自动提交</p><p>然后有任意两条sql语句需要执行，执行后手动提交事务</p><p>在这个时候，如果两条sql语句中第一条成功了，第二条失败了，那么第一条也会回滚</p><p>只有上面两条sql语句都成功了，才会提交事务</p></div>`,2),i=[c];function o(l,p){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","操作事务.html.vue"]]);export{r as default};
