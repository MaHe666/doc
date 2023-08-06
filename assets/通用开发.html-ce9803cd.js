import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,d as n,e as s,a as e,f as t}from"./app-0927109a.js";const i={},u=t(`<h2 id="配置端口和项目前缀" tabindex="-1"><a class="header-anchor" href="#配置端口和项目前缀" aria-hidden="true">#</a> 配置端口和项目前缀</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
	<span class="token key atrule">servlet</span><span class="token punctuation">:</span>
		<span class="token key atrule">context-path</span><span class="token punctuation">:</span> /mahe666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yaml给实体类赋值的几种方式" tabindex="-1"><a class="header-anchor" href="#yaml给实体类赋值的几种方式" aria-hidden="true">#</a> yaml给实体类赋值的几种方式</h2><p>类模板获取默认值的三种方式</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token comment">//注册为组件</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Component</span>
<span class="token comment">// 获取SpringBoot配置文件中person属性下dog属性的值</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person.dog&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Component</span>
<span class="token comment">//加载resources文件夹下指定的配置文件</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;classpath:dog.properties&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springboot配置文件示例" tabindex="-1"><a class="header-anchor" href="#springboot配置文件示例" aria-hidden="true">#</a> SpringBoot配置文件示例</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mahe666$<span class="token punctuation">{</span>random.uuid<span class="token punctuation">}</span>
<span class="token comment">#  这里也可以使用占位符和表达式</span>
  <span class="token key atrule">age</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>random.int<span class="token punctuation">}</span>
  <span class="token key atrule">happy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2019/12/12
  <span class="token key atrule">maps</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">k1</span><span class="token punctuation">:</span> v1<span class="token punctuation">,</span><span class="token key atrule">k2</span><span class="token punctuation">:</span> v2<span class="token punctuation">}</span>
  <span class="token key atrule">list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> code
    <span class="token punctuation">-</span> music
    <span class="token punctuation">-</span> girl
  <span class="token key atrule">dog</span><span class="token punctuation">:</span>
<span class="token comment">#    如果dog有giaogiao属性，就选择dog里面giaogiao的值</span>
<span class="token comment">#    如果没有，就选择冒号后面的值</span>
<span class="token comment">#    括号外面的值是拼接字符串</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>dog.giaogiao<span class="token punctuation">:</span>hello<span class="token punctuation">}</span>_旺财
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步任务-邮件任务-定时任务" tabindex="-1"><a class="header-anchor" href="#异步任务-邮件任务-定时任务" aria-hidden="true">#</a> 异步任务，邮件任务，定时任务</h2><h3 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h3><ol><li>在主启动类或配置类上加 <code>@EnableAsync</code> 注解，开启异步功能</li><li>在对应的方法上添加 <code>@Async</code> 注解，使方法异步执行</li></ol><p><strong>异步方法不需要返回值</strong></p><h3 id="邮件任务" tabindex="-1"><a class="header-anchor" href="#邮件任务" aria-hidden="true">#</a> 邮件任务</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置文件代码" tabindex="-1"><a class="header-anchor" href="#配置文件代码" aria-hidden="true">#</a> 配置文件代码</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#发送邮件的邮箱账号
spring.mail.username=m13234666930@qq.com
#邮箱的授权码
spring.mail.password=123
#主机
spring.mail.host=smtp.qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">SimpleMailMessage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">JavaMailSenderImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span></span><span class="token class-name">MimeMessageHelper</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span></span><span class="token class-name">MessagingException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>internet<span class="token punctuation">.</span></span><span class="token class-name">MimeMessage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">TesttasksApplicationTests</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">JavaMailSenderImpl</span> mailSender<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">easyMail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">SimpleMailMessage</span> simpleMailMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleMailMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//主题</span>
        simpleMailMessage<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;mahe666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//文本</span>
        simpleMailMessage<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;马赫好帅啊&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//目标邮箱</span>
        simpleMailMessage<span class="token punctuation">.</span><span class="token function">setTo</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//发送的邮箱</span>
        simpleMailMessage<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mailSender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>simpleMailMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">complexMail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MessagingException</span> <span class="token punctuation">{</span>
        <span class="token class-name">MimeMessage</span> mimeMessage <span class="token operator">=</span> mailSender<span class="token punctuation">.</span><span class="token function">createMimeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//组装</span>
        <span class="token class-name">MimeMessageHelper</span> mimeMessageHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MimeMessageHelper</span><span class="token punctuation">(</span>mimeMessage<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mimeMessageHelper<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;mahe666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//正文，true为支持解析html标签</span>
        mimeMessageHelper<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;马赫好帅啊&lt;/h1&gt;&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//附件</span>
        mimeMessageHelper<span class="token punctuation">.</span><span class="token function">addAttachment</span><span class="token punctuation">(</span><span class="token string">&quot;文件名.后缀&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;路径&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mailSender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>mimeMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h3>`,20),r=n("li",null,[n("p",null,[s("在主启动类或配置类上加 "),n("code",null,"@EnableScheduling"),s(" 注解，开启定时功能")])],-1),d=n("p",null,[s("在对应方法上添加 "),n("code",null,"@Scheduled"),s(" 注解，需要 "),n("code",null,"cron"),s(" 表达式")],-1),k=n("p",null,"cron表达式，相关博客：",-1),m={href:"https://www.cnblogs.com/javahr/p/8318728.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Scheduled</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledService</span> <span class="token punctuation">{</span>

    <span class="token comment">//@Scheduled注解使用cron表达式</span>
    <span class="token comment">//秒 分 时 日 月 星期几           </span>
    <span class="token comment">//应的位置可以写数组，用英文逗号隔开</span>
    <span class="token comment">//每隔多少时间执行一次使用/分割   比如每五分钟执行一次 0/5</span>
    <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">&quot;0 * * * * 0-7&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">//在一个特定的时间执行这个方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello被执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目启动后执行方法" tabindex="-1"><a class="header-anchor" href="#项目启动后执行方法" aria-hidden="true">#</a> 项目启动后执行方法</h2><p>相关博客：</p>`,3),b={href:"https://blog.csdn.net/qq_22310551/article/details/124296073",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"配置响应结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置响应结构","aria-hidden":"true"},"#"),s(" 配置响应结构")],-1),h=n("p",null,"配置统一响应结构，相关博客：",-1),y={href:"http://pandacode.cn/pages/dd4ecf/",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"配置特殊响应结构，相关博客：",-1),w={href:"http://pandacode.cn/pages/a879c2/",target:"_blank",rel:"noopener noreferrer"},x=t(`<h2 id="springboot整合mybatis" tabindex="-1"><a class="header-anchor" href="#springboot整合mybatis" aria-hidden="true">#</a> SpringBoot整合Mybatis</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.49<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置示例</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token comment"># 驱动</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token comment"># 连接</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/test<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;useSSL=false</span>
    <span class="token comment"># 用户名</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token comment"># 密码</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root

<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token comment"># 配置实体类报名，方便在xml中直接引用</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.example.pojo
  <span class="token comment"># xml 文件存放地址</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mapper/<span class="token important">*.xml</span>
  <span class="token comment"># mybatis配置文件 存放地址</span>
  <span class="token key atrule">config-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mybatis<span class="token punctuation">-</span>config.xml
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
  	<span class="token comment"># 日志</span>
  	<span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整合druid数据源" tabindex="-1"><a class="header-anchor" href="#整合druid数据源" aria-hidden="true">#</a> 整合Druid数据源</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置示例</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
    <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
        <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
        <span class="token key atrule">druid</span><span class="token punctuation">:</span>
            <span class="token comment"># 主库数据源</span>
            <span class="token key atrule">master</span><span class="token punctuation">:</span>
                <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/testDB<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8useSSL=false</span>
                <span class="token key atrule">username</span><span class="token punctuation">:</span> root
                <span class="token key atrule">password</span><span class="token punctuation">:</span>
            <span class="token comment"># 从库数据源</span>
            <span class="token key atrule">slave</span><span class="token punctuation">:</span>
                <span class="token comment"># 从数据源开关/默认关闭</span>
                <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
                <span class="token key atrule">url</span><span class="token punctuation">:</span> 
                <span class="token key atrule">username</span><span class="token punctuation">:</span> 
                <span class="token key atrule">password</span><span class="token punctuation">:</span> 
            <span class="token comment"># 初始连接数</span>
            <span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">5</span>
            <span class="token comment"># 最小连接池数量</span>
            <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">10</span>
            <span class="token comment"># 最大连接池数量</span>
            <span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">20</span>
            <span class="token comment"># 配置获取连接等待超时的时间</span>
            <span class="token key atrule">maxWait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
            <span class="token comment"># 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒</span>
            <span class="token key atrule">timeBetweenEvictionRunsMillis</span><span class="token punctuation">:</span> <span class="token number">60000</span>
            <span class="token comment"># 配置一个连接在池中最小生存的时间，单位是毫秒</span>
            <span class="token key atrule">minEvictableIdleTimeMillis</span><span class="token punctuation">:</span> <span class="token number">300000</span>
            <span class="token comment"># 配置一个连接在池中最大生存的时间，单位是毫秒</span>
            <span class="token key atrule">maxEvictableIdleTimeMillis</span><span class="token punctuation">:</span> <span class="token number">900000</span>
            <span class="token comment"># 配置检测连接是否有效</span>
            <span class="token key atrule">validationQuery</span><span class="token punctuation">:</span> SELECT 1 FROM DUAL
            <span class="token key atrule">testWhileIdle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">testOnBorrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
            <span class="token key atrule">testOnReturn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
            <span class="token key atrule">webStatFilter</span><span class="token punctuation">:</span> 
                <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">statViewServlet</span><span class="token punctuation">:</span>
                <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                <span class="token comment"># 设置白名单，不填则允许所有访问</span>
                <span class="token key atrule">allow</span><span class="token punctuation">:</span>
                <span class="token key atrule">url-pattern</span><span class="token punctuation">:</span> /druid/*
                <span class="token comment"># 控制台管理用户名和密码</span>
                <span class="token key atrule">login-username</span><span class="token punctuation">:</span> 
                <span class="token key atrule">login-password</span><span class="token punctuation">:</span> 
            <span class="token key atrule">filter</span><span class="token punctuation">:</span>
                <span class="token key atrule">stat</span><span class="token punctuation">:</span>
                    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                    <span class="token comment"># 慢SQL记录</span>
                    <span class="token key atrule">log-slow-sql</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                    <span class="token key atrule">slow-sql-millis</span><span class="token punctuation">:</span> <span class="token number">1000</span>
                    <span class="token key atrule">merge-sql</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
                <span class="token key atrule">wall</span><span class="token punctuation">:</span>
                    <span class="token key atrule">config</span><span class="token punctuation">:</span>
                        <span class="token key atrule">multi-statement-allow</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="声明式事务" tabindex="-1"><a class="header-anchor" href="#声明式事务" aria-hidden="true">#</a> 声明式事务</h2><p>相关博客：</p>`,10),_={href:"https://blog.csdn.net/qq_40850266/article/details/120408112",target:"_blank",rel:"noopener noreferrer"};function q(M,S){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("ol",null,[r,n("li",null,[d,k,n("ul",null,[n("li",null,[n("a",m,[s("https://www.cnblogs.com/javahr/p/8318728.html"),e(a)])])])])]),v,n("ul",null,[n("li",null,[n("a",b,[s("https://blog.csdn.net/qq_22310551/article/details/124296073"),e(a)])])]),g,h,n("ul",null,[n("li",null,[n("a",y,[s("http://pandacode.cn/pages/dd4ecf/"),e(a)])])]),f,n("ul",null,[n("li",null,[n("a",w,[s("http://pandacode.cn/pages/a879c2/"),e(a)])])]),x,n("ul",null,[n("li",null,[n("a",_,[s("https://blog.csdn.net/qq_40850266/article/details/120408112"),e(a)])])])])}const A=p(i,[["render",q],["__file","通用开发.html.vue"]]);export{A as default};
