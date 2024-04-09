import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,f as a}from"./app-Dlafj2da.js";const i={},c=a(`<p>如下六条语句，逐行运行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2

<span class="token comment"># 添加镜像</span>
<span class="token function">sudo</span> yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动docker服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

systemctl start <span class="token function">docker</span>

systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[c];function l(d,o){return n(),e("div",null,t)}const p=s(i,[["render",l],["__file","Docker安装.html.vue"]]);export{p as default};
