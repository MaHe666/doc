import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-C26KNVHs.js";const p={},e=t(`<p>有两种加载mysql链接的方式</p><h2 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1"><span>示例1</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> demo01 <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token comment">//1，加载驱动</span>
        <span class="token comment">/*
         * 常规加载驱动语法
         * DriverManager.registerDriver(new com.mysql.jdbc.Driver());
         *
         * 推荐使用下面的固定写法，这个写法与 注解和反射 知识有关
         */</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2，用户信息和URL</span>
        <span class="token comment">/*
        * useUnicode=true           使用中文编码
        * characterEncoding=utf8    字符集使用UTF-8
        * useSSL=true               使用安全的链接
        * */</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://localhost:3306/test?useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=true&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>   <span class="token comment">//数据库用户名</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>       <span class="token comment">//数据库密码</span>

        <span class="token comment">//3，连接成功，返回一个数据库对象，</span>
        <span class="token comment">//连接成功，connection代表数据库</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4，执行SQL的对象，执行SQL的对象</span>
        <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//5,执行SQL的对象 去 执行SQL，可能存在结果，查看返回结果</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from test&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//查询操作，返回结果集 ResultSet</span>
	    <span class="token keyword">int</span> rows <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">//插入，更新，删除都可以用这个，返回一个受影响的行数</span>
	    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>					<span class="token comment">//可以操作任何语句</span>
	    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rowsArray <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeBatch</span><span class="token punctuation">(</span>sql1<span class="token punctuation">,</span>sql2<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//同时操作多个语句</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//getObject()   参数是字段名</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id=&quot;</span><span class="token operator">+</span>resultSet<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id=&quot;</span><span class="token operator">+</span>resultSet<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id=&quot;</span><span class="token operator">+</span>resultSet<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//释放连接（关闭连接），先开后关原则</span>
        resultSet<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2"><span>示例2</span></a></h2><p><code>JdbcUtils.java</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> driver <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">//src目录下的配置文件都可以通过反射来拿到</span>
    <span class="token keyword">static</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token comment">//获取类加载器，获取资源    </span>
            <span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;db.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//配置文件的信息现在就在 properties 对象里面了</span>
            properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

            driver <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            url <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            username <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            password <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//驱动只用加载一次</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取连接</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>username<span class="token punctuation">,</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//释放连接</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span> <span class="token class-name">Statement</span> st<span class="token punctuation">,</span> <span class="token class-name">ResultSet</span> rs<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rs<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>st<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                st<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>conn<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>JdbcTest.java</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">ResultSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Statement</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Statement</span> st <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//获取数据库连接</span>
            conn <span class="token operator">=</span> <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            st <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from test&quot;</span><span class="token punctuation">;</span>
            rs <span class="token operator">=</span> st<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token comment">/*
            int i = st.executeUpdate(sql);
            if (i&gt;0){
                System.out.println(&quot;操作成功&quot;);
            }
           */</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> throwables<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwables<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>st<span class="token punctuation">,</span>rs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>db.properties</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/test?useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=true
username=root
password=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","代码示例.html.vue"]]);export{r as default};
