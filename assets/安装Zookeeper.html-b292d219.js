import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as r,d as e,e as a,a as c,f as t}from"./app-154462d4.js";const d={},o={href:"https://zhuanlan.zhihu.com/p/372062996",target:"_blank",rel:"noopener noreferrer"},p=t(`<p>将容器卷到物理机，需要新建内容：</p><blockquote><p>data 文件夹</p><p>conf.d 文件夹</p><p>my.cnf 配置文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-dp</span> <span class="token number">13306</span>:3306 <span class="token parameter variable">-v</span> D:/myDockerFiles/mysql5.7/data/:/var/lib/mysql <span class="token parameter variable">-v</span> D:/myDockerFiles/mysql5.7/conf.d:/etc/mysql/conf.d <span class="token parameter variable">-v</span> D:/myDockerFiles/mysql5.7/my.cnf:/etc/mysql/my.cnf <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token parameter variable">--name</span> mysql5.7 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置文件内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
user=mysql
character-set-server=utf8
default_authentication_plugin=mysql_native_password
secure_file_priv=/var/lib/mysql
expire_logs_days=7
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
max_connections=1000
secure_file_priv=/var/lib/mysql

[client]
default-character-set=utf8

[mysql]
default-character-set=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进到mysql命令行过程：</p><ol><li><p>查看正在运行的容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>看到containerId之后，进入容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> containerId <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,8);function m(v,u){const s=l("ExternalLinkIcon");return i(),r("div",null,[e("p",null,[a("相关博客："),e("a",o,[a("https://zhuanlan.zhihu.com/p/372062996"),c(s)])]),p])}const h=n(d,[["render",m],["__file","安装Zookeeper.html.vue"]]);export{h as default};
