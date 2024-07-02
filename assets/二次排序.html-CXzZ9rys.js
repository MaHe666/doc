import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as p,c as t,d as n,e,f as o}from"./app-CbLsyo3e.js";const c={},l=["href"],i=o(`<p>现在，有三个总流量相同的数据。新增需求：将总流量相同的数据按照上行流量升序排序（由小到大）</p><h2 id="bean类" tabindex="-1"><a class="header-anchor" href="#bean类"><span>Bean类</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">WritableComparable</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">DataInput</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">DataOutput</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 命名为FlowBean的意思是：Flow是流量，流量的Bean类
 * 1. 定义类实现WritableComparable接口
 * 2. 重写序列化和反序列化方法
 * 3. 重写无参构造方法
 * 4. 重写compareTo()方法
 * 5. 重写toString()方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlowBean</span> <span class="token keyword">implements</span> <span class="token class-name">WritableComparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FlowBean</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 上行流量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> upFlow<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 下行流量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> downFlow<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 总流量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> sumFlow<span class="token punctuation">;</span>

    <span class="token comment">// get和set方法</span>


    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getUpFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> upFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUpFlow</span><span class="token punctuation">(</span><span class="token keyword">long</span> upFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>upFlow <span class="token operator">=</span> upFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getDownFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> downFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDownFlow</span><span class="token punctuation">(</span><span class="token keyword">long</span> downFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>downFlow <span class="token operator">=</span> downFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getSumFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sumFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSumFlow</span><span class="token punctuation">(</span><span class="token keyword">long</span> sumFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sumFlow <span class="token operator">=</span> sumFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 重载setSumFlow()方法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSumFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sumFlow <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>upFlow <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>downFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 重写无参构造方法
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">FlowBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 序列化方法，方法体中先序列化哪个，反序列化时就需要先接哪个
     *
     * <span class="token keyword">@param</span> <span class="token parameter">out</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token class-name">DataOuput</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> to serialize this object into.
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">DataOutput</span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        out<span class="token punctuation">.</span><span class="token function">writeLong</span><span class="token punctuation">(</span>upFlow<span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">writeLong</span><span class="token punctuation">(</span>downFlow<span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">writeLong</span><span class="token punctuation">(</span>sumFlow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 反序列化方法，接收值时，需要与序列化时的顺序完全一致
     *
     * <span class="token keyword">@param</span> <span class="token parameter">in</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token class-name">DataInput</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> to deseriablize this object from.
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">readFields</span><span class="token punctuation">(</span><span class="token class-name">DataInput</span> in<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>upFlow <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>downFlow <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sumFlow <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 方便写入数据
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> upFlow <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> downFlow <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> sumFlow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">FlowBean</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 总流量的倒序，进行排序</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sumFlow <span class="token operator">&gt;</span> o<span class="token punctuation">.</span>sumFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 倒叙，返回-1</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sumFlow <span class="token operator">&lt;</span> o<span class="token punctuation">.</span>sumFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>upFlow <span class="token operator">&gt;</span> o<span class="token punctuation">.</span>upFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>upFlow <span class="token operator">&lt;</span> o<span class="token punctuation">.</span>upFlow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="driver类" tabindex="-1"><a class="header-anchor" href="#driver类"><span>Driver类</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>conf<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>fs<span class="token punctuation">.</span></span><span class="token class-name">Path</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Text</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span></span><span class="token class-name">Job</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>input<span class="token punctuation">.</span></span><span class="token class-name">FileInputFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>input<span class="token punctuation">.</span></span><span class="token class-name">KeyValueLineRecordReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>output<span class="token punctuation">.</span></span><span class="token class-name">FileOutputFormat</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlowDriver</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.获取job</span>
        <span class="token class-name">Configuration</span> conf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conf<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">KeyValueLineRecordReader</span><span class="token punctuation">.</span><span class="token constant">KEY_VALUE_SEPARATOR</span><span class="token punctuation">,</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Job</span> job <span class="token operator">=</span> <span class="token class-name">Job</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>conf<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.设置jar包路径</span>
        job<span class="token punctuation">.</span><span class="token function">setJarByClass</span><span class="token punctuation">(</span><span class="token class-name">FlowDriver</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3.关联mapper和reducer</span>
        job<span class="token punctuation">.</span><span class="token function">setMapperClass</span><span class="token punctuation">(</span><span class="token class-name">FlowMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        job<span class="token punctuation">.</span><span class="token function">setReducerClass</span><span class="token punctuation">(</span><span class="token class-name">FlowReducer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.设置map输出的KV类型，这里需要更改！</span>
        job<span class="token punctuation">.</span><span class="token function">setMapOutputKeyClass</span><span class="token punctuation">(</span><span class="token class-name">FlowBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        job<span class="token punctuation">.</span><span class="token function">setMapOutputValueClass</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5.设置最终输出的KV类型</span>
        job<span class="token punctuation">.</span><span class="token function">setOutputKeyClass</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        job<span class="token punctuation">.</span><span class="token function">setOutputValueClass</span><span class="token punctuation">(</span><span class="token class-name">FlowBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 6.设置输入路径和输出路径</span>
        <span class="token class-name">FileInputFormat</span><span class="token punctuation">.</span><span class="token function">setInputPaths</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\MaHe666\\\\Desktop\\\\phone_data2.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputFormat</span><span class="token punctuation">.</span><span class="token function">setOutputPath</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\output&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 7.提交job</span>
        <span class="token keyword">boolean</span> result <span class="token operator">=</span> job<span class="token punctuation">.</span><span class="token function">waitForCompletion</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>result <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function u(s,r){return p(),t("div",null,[n("p",null,[e("文件："),n("a",{href:s.$withBase("files/大数据/Hadoop/phone_data2.txt"),download:""},"phone_data2.txt",8,l)]),i])}const v=a(c,[["render",u],["__file","二次排序.html.vue"]]);export{v as default};
