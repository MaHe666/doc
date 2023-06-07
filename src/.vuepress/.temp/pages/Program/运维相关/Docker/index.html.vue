<template><div><p>官网：<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">https://www.docker.com/<ExternalLinkIcon/></a></p>
<p>官方文档：<a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/get-started/<ExternalLinkIcon/></a></p>
<p>教程博客：<a href="https://blog.csdn.net/m0_49960764/article/details/124292208" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_49960764/article/details/124292208<ExternalLinkIcon/></a></p>
<p>关于Docker镜像加速：<a href="https://www.runoob.com/docker/docker-mirror-acceleration.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/docker/docker-mirror-acceleration.html<ExternalLinkIcon/></a></p>
<p>菜鸟教程：<a href="https://www.runoob.com/docker/docker-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/docker/docker-tutorial.html<ExternalLinkIcon/></a></p>
<p>Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。</p>
<p>Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。</p>
<p>容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>获取docker desktop：<a href="https://docs.docker.com/get-docker/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/get-docker/<ExternalLinkIcon/></a></p>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<p>windows安装docker desktop：<a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/desktop/install/windows-install/<ExternalLinkIcon/></a></p>
<p>Windows安装docker时使用WSL2，不然会和Vmware起冲突</p>
<h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> CentOS</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2

<span class="token comment"># 添加镜像</span>
<span class="token function">sudo</span> yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动docker服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

systemctl start <span class="token function">docker</span>

systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker命令" tabindex="-1"><a class="header-anchor" href="#docker命令" aria-hidden="true">#</a> docker命令</h2>
<p>菜鸟教程：<a href="https://www.runoob.com/docker/docker-command-manual.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/docker/docker-command-manual.html<ExternalLinkIcon/></a></p>
</div></template>


