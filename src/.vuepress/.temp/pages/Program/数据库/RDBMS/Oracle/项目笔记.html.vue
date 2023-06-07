<template><div><h2 id="项目开发笔记" tabindex="-1"><a class="header-anchor" href="#项目开发笔记" aria-hidden="true">#</a> 项目开发笔记</h2>
<h3 id="oracle数据类型为blob的字段用java-string类型接收的解决办法" tabindex="-1"><a class="header-anchor" href="#oracle数据类型为blob的字段用java-string类型接收的解决办法" aria-hidden="true">#</a> oracle数据类型为Blob的字段用java String类型接收的解决办法</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/bigbear776/article/details/122216514" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/bigbear776/article/details/122216514<ExternalLinkIcon/></a></li>
</ul>
<p>加上typeHandler后，对应的字段就可以使用String类型了，而不是 <code v-pre>java.sql.Blob</code> 类型了</p>
<h3 id="oracle日期与字符串转换" tabindex="-1"><a class="header-anchor" href="#oracle日期与字符串转换" aria-hidden="true">#</a> oracle日期与字符串转换</h3>
<p>日期转换为字符串：&quot;TO_CHAR&quot; (字段名, <code v-pre>yyyy-MM-dd</code>)</p>
<p>日期转字符串，<code v-pre>yyyy-MM-dd</code>也可以别的格式，例如<code v-pre>yyyy-MM</code></p>
<p>字符串转换为日期：TO_DATE (待转字符串, 'yyyy-mm-dd hh24:mi:ss')</p>
<p>字符串转日期，不支持使用<code v-pre>/</code></p>
<h3 id="blob类型数据判断是否为空" tabindex="-1"><a class="header-anchor" href="#blob类型数据判断是否为空" aria-hidden="true">#</a> blob类型数据判断是否为空</h3>
<p>日期转换为字符串：&quot;TO_CHAR&quot; (字段名, <code v-pre>yyyy-MM-dd</code>)</p>
<p>日期转字符串，<code v-pre>yyyy-MM-dd</code>也可以别的格式，例如<code v-pre>yyyy-MM</code></p>
<p>字符串转换为日期：TO_DATE (待转字符串, 'yyyy-mm-dd hh24:mi:ss')</p>
<p>字符串转日期，不支持使用<code v-pre>/</code></p>
<h3 id="根据某条件排序-获取相同id下最近的一条" tabindex="-1"><a class="header-anchor" href="#根据某条件排序-获取相同id下最近的一条" aria-hidden="true">#</a> 根据某条件排序，获取相同id下最近的一条</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_45988641/article/details/124662160" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_45988641/article/details/124662160<ExternalLinkIcon/></a></li>
</ul>
<h2 id="项目错误笔记" tabindex="-1"><a class="header-anchor" href="#项目错误笔记" aria-hidden="true">#</a> 项目错误笔记</h2>
<h3 id="ora-00909-参数个数无效" tabindex="-1"><a class="header-anchor" href="#ora-00909-参数个数无效" aria-hidden="true">#</a> ORA-00909:参数个数无效</h3>
<p>相关博客：</p>
<ul>
<li><a href="http://www.manongjc.com/detail/29-yflxjnrjcrkdptp.html" target="_blank" rel="noopener noreferrer">http://www.manongjc.com/detail/29-yflxjnrjcrkdptp.html<ExternalLinkIcon/></a></li>
</ul>
<h3 id="命令未正确结束" tabindex="-1"><a class="header-anchor" href="#命令未正确结束" aria-hidden="true">#</a> 命令未正确结束</h3>
<p>在Oracle中as关键字不能用于指定表的别名，在Oracle中指定表的别名时只需在原有表名和表的别名之间用空格分隔即可。</p>
<p>as关键字可以用于指定列的别名，但在存储过程中如果列的别名与原有列名相同，在运行时会报错（编译时不会出错）。</p>
<p>其他情况下列的别名可以与列名本身相同</p>
<h3 id="无效的列类型1111" tabindex="-1"><a class="header-anchor" href="#无效的列类型1111" aria-hidden="true">#</a> 无效的列类型1111</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://blog.csdn.net/linfanhehe/article/details/50903999" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/linfanhehe/article/details/50903999<ExternalLinkIcon/></a></li>
</ul>
<h3 id="ora-01722-无效数字" tabindex="-1"><a class="header-anchor" href="#ora-01722-无效数字" aria-hidden="true">#</a> ORA-01722 无效数字</h3>
<p>相关博客：</p>
<ul>
<li><a href="https://www.cnblogs.com/muhai/p/15623905.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/muhai/p/15623905.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>


