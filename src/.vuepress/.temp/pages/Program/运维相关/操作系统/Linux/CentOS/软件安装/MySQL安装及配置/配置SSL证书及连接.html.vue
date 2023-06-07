<template><div><p>相关文章：<a href="https://blog.51cto.com/moerjinrong/2367282" target="_blank" rel="noopener noreferrer">https://blog.51cto.com/moerjinrong/2367282<ExternalLinkIcon/></a></p>
<p>证书生成后，如果数据库中ssl没有生效，需要把如下语句加到配置文件，并重启mysql服务：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ssl-ca = /var/lib/mysql/ca.pem
ssl-cert = /var/lib/mysql/server-cert.pem
ssl-key = /var/lib/mysql/server-key.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Springboot连接，相关文章：<a href="https://juejin.cn/s/spring%20boot%20connect%20mysql%20ssl" target="_blank" rel="noopener noreferrer">https://juejin.cn/s/spring boot connect mysql ssl<ExternalLinkIcon/></a></p>
<h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2>
<p>进入到三个原始客户端文件所在的文件夹中：<code v-pre>ca.pem</code>、<code v-pre>client-key.pem</code>、<code v-pre>client-cert.pem</code></p>
<p>生成文件：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>keytool -importcert -alias Cacert -file ca.pem  -keystore truststoremysql -storepass 123456

openssl pkcs12 -export -in client-cert.pem -inkey client-key.pem -name "mysqlclient" -passout pass:123456 -out client-keystore.p12

keytool -importkeystore -srckeystore client-keystore.p12 -srcstoretype pkcs12 -srcstorepass 123456 -destkeystore keystoremysql -deststoretype JKS -deststorepass 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令中的123456是密码，这个密码可以改变，但是必须保证全部一样</p>
<p>SpringBoot 配置文件中，jdbc的url参数</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>useSSL=true&amp;verifyServerCertificate=true&amp;requireSSL=true&amp;clientCertificateKeyStoreUrl=file:所在文件夹路径/keystoremysql&amp;clientCertificateKeyStorePassword=123456&amp;trustCertificateKeyStoreUrl=file:所在文件夹路径/truststoremysql&amp;trustCertificateKeyStorePassword=123456 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="可能出现的问题" tabindex="-1"><a class="header-anchor" href="#可能出现的问题" aria-hidden="true">#</a> 可能出现的问题</h2>
<p><code v-pre>SSL Peer Shut down Incorrectly</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>看一下mysql驱动版本是否正确，5.7版本的mysql需要使用5.1.x版本的mysql-connector-java驱动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>no appropriate protocol (protocol is disabled or cipher suites are inappropriate)</code></p>
<p>在linux系统中</p>
<p>使用命令 <code v-pre>find / -name java.security</code> 查找java.security文件</p>
<p>在文件中找到 <code v-pre>jdk.tls.disabledAlgorithms=</code></p>
<p>大概长这样</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Example:</span>
<span class="token comment">#   jdk.tls.disabledAlgorithms=MD5, SSLv3, DSA, RSA keySize &lt; 2048</span>
<span class="token assign-left variable">jdk.tls.disabledAlgorithms</span><span class="token operator">=</span>SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, <span class="token punctuation">\</span>
    DH keySize <span class="token operator">&lt;</span> <span class="token number">1024</span>, EC keySize <span class="token operator">&lt;</span> <span class="token number">224</span>, 3DES_EDE_CBC, anon, NULL, <span class="token punctuation">\</span>
    include jdk.disabled.namedCurves
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决方案</strong>：删除其中的SSLv3，TLSv1，TLSv1.1</p>
</div></template>


