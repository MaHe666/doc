import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as l,c as a,d as e,e as n,a as r,f as v}from"./app-gRDwfY8R.js";const c={},o={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},t=v(`<h2 id="安装及使用" tabindex="-1"><a class="header-anchor" href="#安装及使用"><span>安装及使用</span></a></h2><p>下载稳定版Nginx，解压，存放位置不要有中文目录</p><p>进到目录下运行 nginx.exe 就行</p><p>配置文件默认监听80端口</p><p>直接在浏览器运行localhost就能看到效果了</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入目录</span>
<span class="token builtin class-name">cd</span> /usr/local/nginx/sbin

<span class="token comment"># 启动</span>
./nginx
<span class="token comment"># 停止</span>
./nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 安全退出</span>
./nginx <span class="token parameter variable">-s</span> quit
<span class="token comment"># 重新加载配置文件</span>
./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前后端分离项目部署" tabindex="-1"><a class="header-anchor" href="#前后端分离项目部署"><span>前后端分离项目部署</span></a></h2><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;


    
    server {
    # 需要被监听的端口号，前提是此端口号没有被占用，否则在重启 Nginx 时会报错。访问前端需要访问这个端口
    listen       8080;
    # 服务名称，无所谓
    server_name  cors;

    root html/dist;


    client_max_body_size 20m; 
    client_body_buffer_size 128k;

    # 根请求会指向的页面
    location / {
      try_files $uri $uri/ /index.html;
      #index index.html;
    }


    location /api/ {
          # 后端的真实接口。如果项目有后缀，也需要加
          proxy_pass http://127.0.0.1:9090/;
          proxy_redirect off;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header   Cookie $http_cookie;
          # for Ajax
          #fastcgi_param HTTP_X_REQUESTED_WITH $http_x_requested_with;
          proxy_set_header HTTP-X-REQUESTED-WITH $http_x_requested_with;
          proxy_set_header HTTP_X_REQUESTED_WITH $http_x_requested_with;
          proxy_set_header x-requested-with $http_x_requested_with;
          client_max_body_size 10m;
          client_body_buffer_size 128k;
          proxy_connect_timeout 90;
          proxy_send_timeout 90;
          proxy_read_timeout 90;
          proxy_buffer_size 128k;
          proxy_buffers 32 32k;
          proxy_busy_buffers_size 128k;
          proxy_temp_file_write_size 128k;
    }
}


}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端处理" tabindex="-1"><a class="header-anchor" href="#前端处理"><span>前端处理</span></a></h3><p>前端项目进行打包，例如 <code>Vue</code> 项目打包出来的 <code>dist</code>，将整个文件夹放到 <code>nginx</code> 目录下的 <code>html</code> 文件夹中</p><p>上面的配置文件已经指定了根目录是 <code>html/dist</code></p><p>不要忘记开放端口号</p><h3 id="后端处理" tabindex="-1"><a class="header-anchor" href="#后端处理"><span>后端处理</span></a></h3><p>正常的运行就好</p>`,16);function m(u,b){const i=d("ExternalLinkIcon");return l(),a("div",null,[e("p",null,[n("下载地址："),e("a",o,[n("http://nginx.org/en/download.html"),r(i)])]),t])}const h=s(c,[["render",m],["__file","Nginx.html.vue"]]);export{h as default};
