import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,f as n}from"./app-CwvgiSUj.js";const i={},l=n(`<p>查看firewall服务状态</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开启、重启、关闭、防火墙服务" tabindex="-1"><a class="header-anchor" href="#开启、重启、关闭、防火墙服务"><span>开启、重启、关闭、防火墙服务</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#开启</span>
<span class="token function">service</span> firewalld start

<span class="token comment"># 重启</span>
<span class="token function">service</span> firewalld restart

<span class="token comment"># 关闭</span>
<span class="token function">service</span> firewalld stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看防火墙规则</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --list-all    <span class="token comment"># 查看全部信息</span>

firewall-cmd --list-ports  <span class="token comment"># 只看端口信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>	<span class="token comment"># 开启端口</span>

systemctl restart firewalld.service		<span class="token comment"># 重启防火墙</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>命令含义</strong></p><p>--zone #作用域</p><p>--add-port=80/tcp #添加端口，格式为：端口/通讯协议</p><p>--permanent #永久生效，没有此参数重启后失效</p><h2 id="发布项目" tabindex="-1"><a class="header-anchor" href="#发布项目"><span>发布项目</span></a></h2><p>如果是虚拟机测试，开启防火墙端口后就可以在宿主机访问了</p><p>如果是远程服务器的话，开启防火墙端口后还需要配置安全组</p>`,14),t=[l];function d(r,c){return e(),a("div",null,t)}const m=s(i,[["render",d],["__file","防火墙操作及发布项目.html.vue"]]);export{m as default};
