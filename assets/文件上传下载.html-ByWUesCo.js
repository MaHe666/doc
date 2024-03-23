import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-CA-vQrms.js";const p={},e=t(`<h2 id="文件的下载" tabindex="-1"><a class="header-anchor" href="#文件的下载"><span>文件的下载</span></a></h2><p>文件的下载去看Servlet的响应部分，那里有写</p><h2 id="文件上传的注意事项" tabindex="-1"><a class="header-anchor" href="#文件上传的注意事项"><span>文件上传的注意事项</span></a></h2><p>面试时人家问你怎么调优，就是这四句话</p><ol><li>为保证服务器安全，上传文件应该放在外界无法直接访问的目录下，比如放于WEB-INF目录下。</li><li>为防止文件覆盖的现象发生，要为上传文件产生一个唯一的文件名</li><li>要限制上传文件的最大值。</li><li>可以限制上传文件的类型，在收到上传文件名时，判断后缀名是否合法。</li></ol><h2 id="maven依赖" tabindex="-1"><a class="header-anchor" href="#maven依赖"><span>Maven依赖</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-fileupload<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-fileupload<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/commons-io/commons-io --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="详解需要用到的类" tabindex="-1"><a class="header-anchor" href="#详解需要用到的类"><span>详解需要用到的类</span></a></h2><p><code>ServletFileUpload</code> 负责处理上传的文件数据,并将表单中每个输入项封装成一个 <code>Fileltem</code> 对象，在使用 <code>ServletFileUpload</code> 对象解析请求时需要 <code>DiskFileltemFactory</code> 对象。所以，我们需要在进行解析工作前构造好 <code>DiskFileltemFactory</code> 对象，通过 <code>ServletFileUpload</code> 对象的构造方法或 <code>setFileltemFactory()</code> 方法设置 <code>ServletFileUpload</code> 对象的 <code>fileltemFactory</code> 属性。</p><h3 id="fileitem类" tabindex="-1"><a class="header-anchor" href="#fileitem类"><span>FileItem类</span></a></h3><p>html页面需要有一个 <code>&lt;input type=&quot;file&quot; name=&quot;file1&quot;&gt;</code></p><p>表单如果包含一个文件上传输入项的话，这个表单的 enctype 属性就必须设置为 multipart/form-data</p><p>【常用方法介绍】</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// isFormField 方法用于判断FileItem类对象封装的数据是一个普通文本表单还是一个文件表单，如果是普通表单则返回true，否则返回false</span>
<span class="token keyword">boolean</span> <span class="token function">isFormField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// getFileName 方法用于返回表单标签name属性的值</span>
<span class="token class-name">String</span> <span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// getString 方法用于将FileItem对象中保存的数据流内容以一个字符串返回</span>
<span class="token class-name">String</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// getName 方法用于获得文件上传的数据内容</span>
<span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 以流的形式返回上传文件的数据内容</span>
<span class="token class-name">InputStream</span> <span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// delete 方法用来清空 FileItem 类对象中存放的主体内容</span>
<span class="token comment">// 如果主体内容被保存在临时文件中，delete方法将删除该临时文件</span>
<span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="servletfileupload类" tabindex="-1"><a class="header-anchor" href="#servletfileupload类"><span>ServletFileUpload类</span></a></h3><p><code>ServletFileUpload</code> 负责处理上传的文件数据;并将表单中每个输入项封装成一个 <code>Fileltem</code> 对象中.使用其 <code>parseRequest(HttpServletRequest)</code> 方法可以将通过表单中每一个 HTML 标签提交的数据封装成一个 <code>Fileltem</code> 对象，然后以 <code>List列表</code> 的形式返回。使用该方法处理上传文件简单易用。</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span></span><span class="token class-name">FileItem</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span></span><span class="token class-name">FileUploadException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span></span><span class="token class-name">ProgressListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span>disk<span class="token punctuation">.</span></span><span class="token class-name">DiskFileItemFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletFileUpload</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">UUID</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//判断上传的表单是普通表单还是带文件的表单</span>

        <span class="token comment">//判断请求是否包含文件</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">ServletFileUpload</span><span class="token punctuation">.</span><span class="token function">isMultipartContent</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//说明这是一个普通的表单，终止方法运行</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//创建上传文件的保存路径，建议在WEB-INF路径下，安全，用户无法直接访问上传的文件</span>
        <span class="token comment">//获取全局Servlet上下文</span>
        <span class="token class-name">ServletContext</span> servletContext <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取绝对路径</span>
        <span class="token class-name">String</span> uploadPath <span class="token operator">=</span> servletContext<span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">&quot;/WEB-INF/upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//判断该文件是否存在（这里是判断路径）</span>
        <span class="token class-name">File</span> uploadFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>uploadPath<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//如果不存在</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>uploadFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//创建这个目录</span>
            uploadFile<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//缓存，临时文件       (缓存之后会在mybatis中学习)</span>
        <span class="token comment">//临时路径，假如文件超过了预期的大小，我们就把他放到一个临时文件中，过几天自动删除，或者提醒用户转存为永久</span>
        <span class="token class-name">String</span> tmpPath <span class="token operator">=</span> servletContext<span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">&quot;/WEB-INF/tmp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> tmpFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>tmpPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tmpFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tmpFile<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//处理上传的文件，一般都要通过流来获取，我们可以使用request.getInputStream()方法获取原生态的文件上传流，但是十分麻烦</span>
        <span class="token comment">//建议使用 Apache 的文件上传组件 common-fileupload 来实现，它需要依赖于commons-io组件</span>

        <span class="token comment">//1，创建 DiskFileItemFactory 磁盘文件的工厂对象，处理文件上传的路径或者文件大小的限制</span>
        <span class="token class-name">DiskFileItemFactory</span> factory <span class="token operator">=</span> <span class="token function">getDiskFileItemFactory</span><span class="token punctuation">(</span>tmpFile<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2，获取ServletFileUpload</span>
        <span class="token class-name">ServletFileUpload</span> upload <span class="token operator">=</span> <span class="token function">getServletFileUpload</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3，处理上传的文件</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>       <span class="token comment">// upload.parseRequest(request) 需要抛的异常</span>

            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token function">upLoadParseRequest</span><span class="token punctuation">(</span>upload<span class="token punctuation">,</span> request<span class="token punctuation">,</span> uploadPath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//servlet请求转发消息</span>
            request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;info.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileUploadException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
            i<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ServletException</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
            s<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//必须使用post，所以doGet方法没有用</span>
        <span class="token comment">/*
            protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
            }
        */</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DiskFileItemFactory</span> <span class="token function">getDiskFileItemFactory</span><span class="token punctuation">(</span><span class="token class-name">File</span> tmpFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DiskFileItemFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiskFileItemFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//通过这个工厂设置一个缓冲区，当上传的文件大于这个缓冲区的时候，将他放到临时文件中</span>
        factory<span class="token punctuation">.</span><span class="token function">setSizeThreshold</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//设置缓存区大小为1M，也可以不写，有默认值</span>
        factory<span class="token punctuation">.</span><span class="token function">setRepository</span><span class="token punctuation">(</span>tmpFile<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//临时文件的保存目录，需要一个file对象</span>
        <span class="token keyword">return</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ServletFileUpload</span> <span class="token function">getServletFileUpload</span><span class="token punctuation">(</span><span class="token class-name">DiskFileItemFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
            ServletFileUpload 负责处理上传的文件数据,并将表单中每个输入项（除按钮外的每个input） 封装成一个 FiLeItem 对象，
            在使用 servletFileUpLoad 对象解析请求时需要 DiskFiLeItemFactory 对象。
            所以，我们需要在进行解析工作前构造好 DiskFileItemFactory 对象，
            通过 ServletFiLeUpLoad 对象的构造方法或 setFileItemFactory() 方法设置 ServletFiLeUpLoad 对象的 fileItemFactory 属性。
         */</span>
        <span class="token class-name">ServletFileUpload</span> upload <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletFileUpload</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//监听文件上传进度</span>
        upload<span class="token punctuation">.</span><span class="token function">setProgressListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProgressListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//pBytesRead: 已经读取到的文件大小</span>
            <span class="token comment">//pContentLength: 文件大小</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">long</span> pBytesRead<span class="token punctuation">,</span> <span class="token keyword">long</span> pContentLength<span class="token punctuation">,</span> <span class="token keyword">int</span> pItems<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件总大小：&quot;</span> <span class="token operator">+</span> pContentLength <span class="token operator">+</span> <span class="token string">&quot;   已上传：&quot;</span> <span class="token operator">+</span> pBytesRead<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//处理乱码问题</span>
        <span class="token comment">//如果不设置的话，就是默认的 ISO-8859-1</span>
        upload<span class="token punctuation">.</span><span class="token function">setHeaderEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置单个文件的最大 大小限制</span>
        upload<span class="token punctuation">.</span><span class="token function">setFileSizeMax</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//一共能够上传文件的大小</span>
        <span class="token comment">//1024 = 1KB * 1024 = 1MB * 10 = 10MB</span>
        upload<span class="token punctuation">.</span><span class="token function">setSizeMax</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> upload<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">upLoadParseRequest</span><span class="token punctuation">(</span><span class="token class-name">ServletFileUpload</span> upload<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">String</span> uploadPath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileUploadException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">//解析前端请求，封装成一个FileItem对象，需要从 ServletFileUpload 对象中获取</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileItem</span><span class="token punctuation">&gt;</span></span> fileItems <span class="token operator">=</span> upload<span class="token punctuation">.</span><span class="token function">parseRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//fileItems中可能有很多个请求，所以我们需要遍历</span>
        <span class="token comment">//fileItem 每一个表单输入项对象</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FileItem</span> fileItem <span class="token operator">:</span> fileItems<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token comment">//判断该请求是不是文件输入项</span>
            <span class="token comment">//如果不是文件输入项</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fileItem<span class="token punctuation">.</span><span class="token function">isFormField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token comment">// getFieldName 指的是前端表单控件的name</span>
                <span class="token class-name">String</span> name <span class="token operator">=</span> fileItem<span class="token punctuation">.</span><span class="token function">getFieldName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> value <span class="token operator">=</span> fileItem<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//获取处理乱码后的值</span>

                <span class="token comment">//不是的话就正常处理</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

                <span class="token comment">//如果是文件输入项</span>
                <span class="token comment">//=================================处理文件==================================//</span>

                <span class="token comment">//拿到文件上传的名字</span>
                <span class="token class-name">String</span> uploadFileName <span class="token operator">=</span> fileItem<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;上传的文件名：&quot;</span><span class="token operator">+</span>uploadFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//可能存在文件名不合法的情况</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>uploadFileName <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> uploadFileName<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//跳过当前循环</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">//获得上传的文件名      获取最后一个/后面的名字</span>
                <span class="token class-name">String</span> fileName <span class="token operator">=</span> uploadFileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>uploadFileName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//获得文件的后缀名</span>
                <span class="token class-name">String</span> fileExtName <span class="token operator">=</span> uploadFileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>uploadFileName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">/*
                    如果文件后缀名 fileExtName 不是我们所需要的，就直接return，不处理，告诉用户文件类型不对
                 */</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件后缀名：&quot;</span><span class="token operator">+</span>fileExtName<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//=================================存放地址==================================//</span>

                <span class="token comment">//可以使用UUID（唯一识别的通用码），保证文件名唯一</span>
                <span class="token comment">//UUID.randomUUID() ，随机生成一个唯一识别的通用码</span>
                <span class="token class-name">String</span> uuidPath <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//存放的路径是 uploadPath</span>
                <span class="token comment">//文件真实存在的路径 realPath</span>
                <span class="token class-name">String</span> realPath <span class="token operator">=</span> uploadPath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> uuidPath<span class="token punctuation">;</span>
                <span class="token comment">//给文件创建一个单独的目录</span>
                <span class="token class-name">File</span> realPathFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>realPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>realPathFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    realPathFile<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">//=================================文件传输==================================//</span>
                <span class="token comment">//获取文件上传的流</span>
                <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> fileItem<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//创建一个文件输出流</span>
                <span class="token comment">//realPath = 真实的文件夹</span>
                <span class="token comment">//查了一个文件，加上输出文件的名字+&quot;/&quot;+uuidFileName</span>
                <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>realPath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//创建缓冲区</span>
                <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//判断是否读取完毕</span>
                <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token comment">//如果大于0说明还存在数据</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//关闭流</span>
                fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                msg <span class="token operator">=</span> <span class="token string">&quot;文件上传成功&quot;</span><span class="token punctuation">;</span>
                <span class="token comment">//文件上传成功，清除临时文件</span>
                fileItem<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">/*
                文件如果找不到，就去发布的路径下找WEB-INF
                看看能不能找到
                 */</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","文件上传下载.html.vue"]]);export{d as default};
