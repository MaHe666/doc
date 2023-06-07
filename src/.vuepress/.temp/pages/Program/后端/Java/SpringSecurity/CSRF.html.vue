<template><div><p>CSRF是指跨站请求伪造（Cross-site request forgery），是web常见的攻击之一。</p>
<p>SpringSecurity去防止CSRF攻击的方式就是通过csrf_token。后端会生成一个csrf_token，前端发起请求的时候需要携带这个csrf_token,后端会有过滤器进行校验，如果没有携带或者是伪造的就不允许访问。</p>
<p>我们可以发现CSRF攻击依靠的是cookie中所携带的认证信息。但是在前后端分离的项目中我们的认证信息其实是token，而token并不是存储中cookie中，并且需要前端代码去把token设置到请求头中才可以，所以CSRF攻击也就不用担心了。</p>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/freeking101/article/details/86537087" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/freeking101/article/details/86537087<ExternalLinkIcon/></a></li>
</ul>
</div></template>


