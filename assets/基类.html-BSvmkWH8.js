import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-CbZtwYzB.js";const p={},t=e(`<h2 id="basecontroller-java" tabindex="-1"><a class="header-anchor" href="#basecontroller-java"><span>BaseController.java</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>panda<span class="token punctuation">.</span>common<span class="token punctuation">.</span>result<span class="token punctuation">.</span></span><span class="token class-name">ApiResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 基础控制器
 *
 * <span class="token keyword">@className</span>: BaseController
 * <span class="token keyword">@author</span>: GuoShunFa
 * <span class="token keyword">@date</span>: 2022/11/10
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">BaseController</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 响应返回结果
     *
     * <span class="token keyword">@param</span> <span class="token parameter">rows</span> 影响行数
     * <span class="token keyword">@return</span> 操作结果
     */</span>
    <span class="token keyword">protected</span> <span class="token class-name">ApiResult</span> <span class="token function">toAjax</span><span class="token punctuation">(</span><span class="token keyword">int</span> rows<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rows <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token class-name">ApiResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">ApiResult</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 响应返回结果
     *
     * <span class="token keyword">@param</span> <span class="token parameter">result</span> 结果
     * <span class="token keyword">@return</span> 操作结果
     */</span>
    <span class="token keyword">protected</span> <span class="token class-name">ApiResult</span> <span class="token function">toAjax</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> result <span class="token operator">?</span> <span class="token class-name">ApiResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">ApiResult</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="baseentity-java" tabindex="-1"><a class="header-anchor" href="#baseentity-java"><span>BaseEntity.java</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>activerecord<span class="token punctuation">.</span></span><span class="token class-name">Model</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">ApiModel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">ApiModelProperty</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 基础实体类
 *
 * <span class="token keyword">@className</span>: BaseEntity
 * <span class="token keyword">@author</span>: GuoShunFa
 * <span class="token keyword">@date</span>: 2022/11/10
 **/</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span><span class="token string">&quot;基础类&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;主键id字段&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableId</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;乐观锁字段&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Version</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> version<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;逻辑删除字段&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;delete_flag&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableLogic</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> deleteFlag<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;记录创建时间&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;create_time&quot;</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;记录创建人&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;create_by&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> createBy<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;记录修改时间&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;update_time&quot;</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT_UPDATE</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span><span class="token string">&quot;记录创建人&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;update_by&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> updateBy<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCreateBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> createBy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCreateBy</span><span class="token punctuation">(</span><span class="token class-name">String</span> createBy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>createBy <span class="token operator">=</span> createBy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUpdateBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> updateBy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUpdateBy</span><span class="token punctuation">(</span><span class="token class-name">String</span> updateBy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>updateBy <span class="token operator">=</span> updateBy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> createTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> createTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>createTime <span class="token operator">=</span> createTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getUpdateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> updateTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUpdateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> updateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>updateTime <span class="token operator">=</span> updateTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> version<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVersion</span><span class="token punctuation">(</span><span class="token class-name">String</span> version<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>version <span class="token operator">=</span> version<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDeleteFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> deleteFlag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDeleteFlag</span><span class="token punctuation">(</span><span class="token class-name">String</span> deleteFlag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deleteFlag <span class="token operator">=</span> deleteFlag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="baseservice-java" tabindex="-1"><a class="header-anchor" href="#baseservice-java"><span>BaseService.java</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">IService</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 基础服务接口
 *
 * <span class="token keyword">@className</span>: BaseService
 * <span class="token keyword">@author</span>: GuoShunFa
 * <span class="token keyword">@date</span>: 2022/11/10
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BaseService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">IService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="baseserviceimpl-java" tabindex="-1"><a class="header-anchor" href="#baseserviceimpl-java"><span>BaseServiceImpl.java</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">ServiceImpl</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 基础服务实现类
 *
 * <span class="token keyword">@className</span>: BaseServiceImpl
 * <span class="token keyword">@author</span>: GuoShunFa
 * <span class="token keyword">@date</span>: 2022/11/10
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">M</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BaseService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="basemapper-java" tabindex="-1"><a class="header-anchor" href="#basemapper-java"><span>BaseMapper.java</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 基础映射类
 *
 * <span class="token keyword">@className</span>: BaseMapper
 * <span class="token keyword">@author</span>: GuoShunFa
 * <span class="token keyword">@date</span>: 2022/11/10
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span>BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[t];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","基类.html.vue"]]);export{k as default};
