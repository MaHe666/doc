import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,f as i}from"./app-_JAIXX3j.js";const e={},l=i(`<p>下载地址：<a href="http://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">http://nginx.org/en/download.html</a></p><h2 id="安装及使用" tabindex="-1"><a class="header-anchor" href="#安装及使用"><span>安装及使用</span></a></h2><p>下载稳定版Nginx，解压，存放位置不要有中文目录</p><p>进到目录下运行 nginx.exe 就行</p><p>配置文件默认监听80端口</p><p>直接在浏览器运行localhost就能看到效果了</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 进入目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/nginx/sbin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 停止</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安全退出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quit</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 重新加载配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前后端分离项目部署" tabindex="-1"><a class="header-anchor" href="#前后端分离项目部署"><span>前后端分离项目部署</span></a></h2><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>#user  nobody;</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#error_log  logs/error.log;</span></span>
<span class="line"><span>#error_log  logs/error.log  notice;</span></span>
<span class="line"><span>#error_log  logs/error.log  info;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #access_log  logs/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #keepalive_timeout  0;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>    # 需要被监听的端口号，前提是此端口号没有被占用，否则在重启 Nginx 时会报错。访问前端需要访问这个端口</span></span>
<span class="line"><span>    listen       8080;</span></span>
<span class="line"><span>    # 服务名称，无所谓</span></span>
<span class="line"><span>    server_name  cors;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    root html/dist;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    client_max_body_size 20m; </span></span>
<span class="line"><span>    client_body_buffer_size 128k;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 根请求会指向的页面</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>      #index index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /api/ {</span></span>
<span class="line"><span>          # 后端的真实接口。如果项目有后缀，也需要加</span></span>
<span class="line"><span>          proxy_pass http://127.0.0.1:9090/;</span></span>
<span class="line"><span>          proxy_redirect off;</span></span>
<span class="line"><span>          proxy_set_header Host $host;</span></span>
<span class="line"><span>          proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>          proxy_set_header   Cookie $http_cookie;</span></span>
<span class="line"><span>          # for Ajax</span></span>
<span class="line"><span>          #fastcgi_param HTTP_X_REQUESTED_WITH $http_x_requested_with;</span></span>
<span class="line"><span>          proxy_set_header HTTP-X-REQUESTED-WITH $http_x_requested_with;</span></span>
<span class="line"><span>          proxy_set_header HTTP_X_REQUESTED_WITH $http_x_requested_with;</span></span>
<span class="line"><span>          proxy_set_header x-requested-with $http_x_requested_with;</span></span>
<span class="line"><span>          client_max_body_size 10m;</span></span>
<span class="line"><span>          client_body_buffer_size 128k;</span></span>
<span class="line"><span>          proxy_connect_timeout 90;</span></span>
<span class="line"><span>          proxy_send_timeout 90;</span></span>
<span class="line"><span>          proxy_read_timeout 90;</span></span>
<span class="line"><span>          proxy_buffer_size 128k;</span></span>
<span class="line"><span>          proxy_buffers 32 32k;</span></span>
<span class="line"><span>          proxy_busy_buffers_size 128k;</span></span>
<span class="line"><span>          proxy_temp_file_write_size 128k;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端处理" tabindex="-1"><a class="header-anchor" href="#前端处理"><span>前端处理</span></a></h3><p>前端项目进行打包，例如 <code>Vue</code> 项目打包出来的 <code>dist</code>，将整个文件夹放到 <code>nginx</code> 目录下的 <code>html</code> 文件夹中</p><p>上面的配置文件已经指定了根目录是 <code>html/dist</code></p><p>不要忘记开放端口号</p><h3 id="后端处理" tabindex="-1"><a class="header-anchor" href="#后端处理"><span>后端处理</span></a></h3><p>正常的运行就好</p>`,17),p=[l];function d(t,r){return a(),n("div",null,p)}const v=s(e,[["render",d],["__file","Nginx.html.vue"]]),h=JSON.parse('{"path":"/%E8%BF%90%E7%BB%B4/Nginx.html","title":"Nginx","lang":"zh-CN","frontmatter":{"title":"Nginx","description":"下载地址：http://nginx.org/en/download.html 安装及使用 下载稳定版Nginx，解压，存放位置不要有中文目录 进到目录下运行 nginx.exe 就行 配置文件默认监听80端口 直接在浏览器运行localhost就能看到效果了 常用命令 前后端分离项目部署 配置文件 前端处理 前端项目进行打包，例如 Vue 项目打包出来...","head":[["meta",{"property":"og:url","content":"https://mahe666.github.io/doc/%E8%BF%90%E7%BB%B4/Nginx.html"}],["meta",{"property":"og:site_name","content":"Mahe666"}],["meta",{"property":"og:title","content":"Nginx"}],["meta",{"property":"og:description","content":"下载地址：http://nginx.org/en/download.html 安装及使用 下载稳定版Nginx，解压，存放位置不要有中文目录 进到目录下运行 nginx.exe 就行 配置文件默认监听80端口 直接在浏览器运行localhost就能看到效果了 常用命令 前后端分离项目部署 配置文件 前端处理 前端项目进行打包，例如 Vue 项目打包出来..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-16T11:31:59.000Z"}],["meta",{"property":"article:author","content":"Mahe666"}],["meta",{"property":"article:modified_time","content":"2024-06-16T11:31:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-16T11:31:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mahe666\\"}]}"]]},"headers":[{"level":2,"title":"安装及使用","slug":"安装及使用","link":"#安装及使用","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"前后端分离项目部署","slug":"前后端分离项目部署","link":"#前后端分离项目部署","children":[{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"前端处理","slug":"前端处理","link":"#前端处理","children":[]},{"level":3,"title":"后端处理","slug":"后端处理","link":"#后端处理","children":[]}]}],"git":{"createdTime":1686300087000,"updatedTime":1718537519000,"contributors":[{"name":"mahe666","email":"m13234666930@163.com","commits":1}]},"filePathRelative":"运维/Nginx.md","localizedDate":"2023年6月9日","autoDesc":true}');export{v as comp,h as data};
