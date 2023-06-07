<template><div><p>JDK多版本安装及管理，相关博客：</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/442291304" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/442291304<ExternalLinkIcon/></a></li>
</ul>
<p>如果卸载jdk，不要忘记清除环境变量</p>
<h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2>
<p><code v-pre>JAVA_HOME</code>：jdk根目录</p>
<p><code v-pre>CLASSPATH</code>：%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar;.</p>
<p><code v-pre>Path</code>：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin</p>
<p><strong>注意</strong>：windows10以上版本添加Path环境变量时，需要以;为分隔符，单独新建</p>
<p>测试是否成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="认识java" tabindex="-1"><a class="header-anchor" href="#认识java" aria-hidden="true">#</a> 认识Java</h2>
</div></template>


