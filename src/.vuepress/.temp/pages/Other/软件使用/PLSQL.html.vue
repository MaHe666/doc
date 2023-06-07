<template><div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3>
<blockquote>
<p>NLS_LANG = SIMPLIFIED CHINESE_CHINA.ZHS16GBK</p>
<p>TNS_ADMIN = instantclient_xx_x 下 tnsnames.ora 文件所在的文件夹路径</p>
</blockquote>
<p>注意<code v-pre>instantclient</code>文件夹下是否有<code v-pre>tnsnames.ora</code>文件，如果没有，则需要手动创建以及配置</p>
<p>除了<code v-pre>tnsnames.ora</code>文件之外还有<code v-pre>sqlnet.ora</code>文件需要创建以及配置</p>
<p>instantclient 下载地址：<a href="https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html" target="_blank" rel="noopener noreferrer">https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html<ExternalLinkIcon/></a></p>
<h3 id="tnsnames-ora-文件模板" tabindex="-1"><a class="header-anchor" href="#tnsnames-ora-文件模板" aria-hidden="true">#</a> tnsnames.ora 文件模板</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>数据库名 =
  (DESCRIPTION =
    (ADDRESS_LIST = 
      (ADDRESS = (PROTOCOL = TCP)(HOST = 数据库ip)(PORT = 数据库端口))
    )
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = 数据库名)
    )
  )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sqlnet-ora-文件模板" tabindex="-1"><a class="header-anchor" href="#sqlnet-ora-文件模板" aria-hidden="true">#</a> sqlnet.ora 文件模板</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SQLNET.AUTHENTICATION_SERVICES= (NONE)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="远程访问" tabindex="-1"><a class="header-anchor" href="#远程访问" aria-hidden="true">#</a> 远程访问</h2>
<p>相关博客：</p>
<ul>
<li><a href="http://t.zoukankan.com/jjkang-p-7821839.html" target="_blank" rel="noopener noreferrer">http://t.zoukankan.com/jjkang-p-7821839.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>


