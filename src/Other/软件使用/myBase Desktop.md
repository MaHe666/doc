---
title: myBase Desktop
order: 10
---

## 破解

替换掉原来的exe启动文件，替换后启动软件，进行产品注册

随便输入什么然后确认即可

## Markdown样式修改

相关博客：

- <https://blog.csdn.net/cchulu/article/details/113996386>

### 样式1

```css
html {
    height: 100%;
}

body {
    color: #000;
    background: #FFF;
    font-family: "verdana","Arial","微软雅黑", "Helvetica", "sans-serif";
    font-size: 15pt;
    min-height: 101%;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

fieldset, img {
    border: 0;
}
ul {
    word-break: break-all;
}
li {
    list-style: none;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 110%;
    font-weight: normal;
}

a:link {
    color: black;
    text-decoration: none;
}
a:visited {
    color: black;
    text-decoration: none;
}
a:hover {
    color: #F60;
    /* 
    下划线
    text-decoration: underline;
    */
    
}
a:active {
    color: black;
    text-decoration: none;
}
.clear {

    clear: both;
}

/** MarkDown样式调整 */

 {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #333;
    overflow: hidden;
    font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    font-size: 16pt;
    line-height: 1.6;
    word-wrap: break-word;
}

 a {
  background: transparent;
}

 a:active,
 a:hover {
  outline: 0;
}

 strong {
  font-weight: bold;
}

 h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

 img {
  border: 0;
}

 hr {
    box-sizing: content-box;
    height: 0;
}

 pre {
  overflow: auto;
}

 code,
 kbd,
 pre {
    font-family: Consolas, "微软雅黑", Menlo, Courier, monospace !important
    font-size: 1em;
}

 input {
    color: inherit;
    font: inherit;
    margin: 0;
}

 html input[disabled] {
  cursor: default;
}

 input {
  line-height: normal;
}

 input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
    font-size: 16pt;
}

 table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* 控制 表格 没有框线*/
#cnblogs_post_body table, .cnblogs-post-body table {

    border: 0px solid #c0c0c0; 
    border-collapse: collapse;
    word-break: break-word;

}

 td,
 th {
  padding: 0;
}

 * {
    box-sizing: border-box;
    /*! font-size: 16px; */
}

 input {
  font: 13px/1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

 a {
    color: #4183c4;
    text-decoration: none;
}

 a:hover,
 a:active {
  text-decoration: underline;
}

 hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #ddd;
}

 hr:before {
    display: table;
    content: "";
}

 hr:after {
    display: table;
    clear: both;
    content: "";
}

 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
    margin-top: 15px;
    margin-bottom: 10px;
    line-height: 1.1;
}

 blockquote {
  margin: 0;
    line-height:  1.7 !important;
}

 ul,
 ol {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
}

 ol ol,
 ul ol {
  list-style-type: lower-roman;
}

 ul ul ol,
 ul ol ol,
 ol ul ol,
 ol ol ol {
  list-style-type: lower-alpha;
}

 dd {
  margin-left: 0;
}

 pre {
margin-top: 0;
margin-bottom: 0;
  font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

 .octicon {
    font: normal normal normal 16px/1 octicons-anchor;
    display: inline-block;
    text-decoration: none;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

 .octicon-link:before {
  content: '\f05c';
}

>*:first-child {
  margin-top: 0 !important;
}

>*:last-child {
  margin-bottom: 0 !important;
}

 a:not(:link):not(:visited) {
    color: inherit;
    text-decoration: none;
}

 .anchor {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding-right: 6px;
    padding-left: 30px;
    margin-left: -30px;
}

 .anchor:focus {
  outline: none;
}

 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
    position: relative;
    margin-top: 1em;
    margin-bottom: 16px;
    font-weight: bold;
    line-height: 1.4;
}

 h1 .octicon-link,
 h2 .octicon-link,
 h3 .octicon-link,
 h4 .octicon-link,
 h5 .octicon-link,
 h6 .octicon-link {
    display: none;
    color: #000;
    vertical-align: middle;
}

 h1:hover .anchor,
 h2:hover .anchor,
 h3:hover .anchor,
 h4:hover .anchor,
 h5:hover .anchor,
 h6:hover .anchor {
    padding-left: 8px;
    margin-left: -30px;
    text-decoration: none;
}

 h1:hover .anchor .octicon-link,
 h2:hover .anchor .octicon-link,
 h3:hover .anchor .octicon-link,
 h4:hover .anchor .octicon-link,
 h5:hover .anchor .octicon-link,
 h6:hover .anchor .octicon-link {
  display: inline-block;
}

 h1 {
    padding-bottom: 0.3em;
    font-size: 2.25em !important;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
}

 h1 .anchor {
  line-height: 1;
}

 h2 {
    padding-bottom: 0.3em;
    font-size: 1.75em !important;
    line-height: 1.225;
    /*! border-bottom: 1px solid #eee; */
}

 h2 .anchor {
  line-height: 1;
}

 h3 {
    font-size: 1.5em!important;
    line-height: 1.43;
}

 h3 .anchor {
  line-height: 1.2;
}

 h4 {
  font-size: 1.25em !important;
}

 h4 .anchor {
  line-height: 1.2;
}

 h5 {
  font-size: 1em !important;
}

 h5 .anchor {
  line-height: 1.1;
}

 h6 {
    font-size: 1em !important;
    color: #777;
}

 h6 .anchor {
  line-height: 1.1;
}

 p,
 blockquote,
 ul,
 ol,
 dl,
 table,
 pre {
    margin-top: 0;
    margin-bottom: 16px;
}

 hr {
    height: 4px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
}

 ul,
 ol {
    padding-left: 2em;
    font-size: 14pt;
}

 ul ul,
 ul ol,
 ol ol,
 ol ul {
    margin-top: 0;
    margin-bottom: 0;
}

 li>p {
  margin-top: 16px;
}

 dl {
  padding: 0;
}

 dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: bold;
}

 dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
}

 blockquote {
    color: #333;
    padding: 2px 10px;
    border: none;

    border-left: 5px solid #D6DBDF;
    line-height: 1.6;
}

 blockquote>:first-child {
  margin-top: 0;
}

 blockquote>:last-child {
  margin-bottom: 0;
}

 table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
}

 table th {
  font-weight: bold;
}

 table th,
 table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
}

 table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
}

 table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

 img {
    max-width: 100%;
    box-sizing: border-box;
}

 code {
    font-family: Consolas, "微软雅黑", Menlo, Courier, monospace !important;
    font-size: 12pt;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    /*! margin: 0; */
    font-size: 85%;
    background-color: rgba(0,0,0,0.04);
    border-radius: 3px;
    /*! border: none !important; */
    display: inline-block;
}

 code:before,
 code:after {
    letter-spacing: -0.2em;
    content: "\00a0";
}

/*only for syntaxhighlighter */
/*--start--*/
 .syntaxhighlighter table td.code {
  width:95% !important;
}

 .syntaxhighlighter code {
    font-family: "Consolas","Bitstream Vera Sans Mono","Courier New",Courier,monospace!important;
    padding: 0 !important;
    border-radius: 0 !important;
    background-color: transparent !important;
}

 .syntaxhighlighter code:before,
 .syntaxhighlighter code:before {
  letter-spacing: -0.5em;
}
/*--end--*/

 pre>code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
}

 .highlight {
  margin-bottom: 16px;
}

 .highlight pre,
 pre {
    
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7f7f7;
    border-radius: 3px;
}

 .highlight pre {
    margin-bottom: 0;
    word-break: normal;
}

 pre {
  word-wrap: normal;
}

 pre code {
    display: inline;
    max-width: initial;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
}

 pre code:before,
 pre code:after {
  content: normal;
}

 kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11pt;
    line-height: 10px;
    color: #555;
    vertical-align: middle;
    background-color: #fcfcfc;
    border: solid 1px #ccc;
    border-bottom-color: #bbb;
    border-radius: 3px;
box-shadow: inset 0 -1px 0 #bbb;
}

 .pl-c {
  color: #969896;
}

 .pl-c1,
 .pl-mdh,
 .pl-mm,
 .pl-mp,
 .pl-mr,
 .pl-s1 .pl-v,
 .pl-s3,
 .pl-sc,
 .pl-sv {
  color: #0086b3;
}

 .pl-e,
 .pl-en {
  color: #795da3;
}

 .pl-s1 .pl-s2,
 .pl-smi,
 .pl-smp,
 .pl-stj,
 .pl-vo,
 .pl-vpf {
  color: #333;
}

 .pl-ent {
  color: #63a35c;
}

 .pl-k,
 .pl-s,
 .pl-st {
  color: #a71d5d;
}

 .pl-pds,
 .pl-s1,
 .pl-s1 .pl-pse .pl-s2,
 .pl-sr,
 .pl-sr .pl-cce,
 .pl-sr .pl-sra,
 .pl-sr .pl-sre,
 .pl-src {
  color: #183691;
}

 .pl-v {
  color: #ed6a43;
}

 .pl-id {
  color: #b52a1d;
}

 .pl-ii {
    background-color: #b52a1d;
    color: #f8f8f8;
}

 .pl-sr .pl-cce {
    color: #63a35c;
    font-weight: bold;
}

 .pl-ml {
  color: #693a17;
}

 .pl-mh,
 .pl-mh .pl-en,
 .pl-ms {
    color: #1d3e81;
    font-weight: bold;
}

 .pl-mq {
  color: #008080;
}

 .pl-mi {
    color: #333;
    font-style: italic;
}

 .pl-mb {
    color: #333;
    font-weight: bold;
}

 .pl-md,
 .pl-mdhf {
    background-color: #ffecec;
    color: #bd2c00;
}

 .pl-mdht,
 .pl-mi1 {
    background-color: #eaffea;
    color: #55a532;
}

 .pl-mdr {
    color: #795da3;
    font-weight: bold;
}

 .pl-mo {
  color: #1d3e81;
}

 kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 10px;
    color: #555;
    vertical-align: middle;
    background-color: #fcfcfc;
    border: solid 1px #ccc;
    border-bottom-color: #bbb;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #bbb;
    padding-top: 20px;
}

 .task-list-item {
  list-style-type: none;
}

 .task-list-item+.task-list-item {
  margin-top: 3px;
}

 .task-list-item input {
    margin: 0 0.35em 0.25em -1.6em;
    vertical-align: middle;
}

 :checked+.radio-label {
    z-index: 1;
    position: relative;
    border-color: #4183c4;
}

/*
Monokai Sublime style. Derived from Monokai by noformnocontent https://nn.mit-license.org/
*/

pre {
/*控制代码不换行*/
    white-space: pre;
    word-wrap: normal;
}
 .hljs {
    font-size: 16pt!important;
    font-family: consolas,monospace !important;
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #23241f !important;
    color: #FFF;
    white-space: pre;
    word-break: normal;
  padding: 10px 15px !important;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}

```

### Typora GitHub样式

```css
:root {
    --side-bar-bg-color: #fafafa;
    --control-text-color: #777;
}

@include-when-export url(https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);

/* open-sans-regular - latin-ext_latin */
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url('./github/open-sans-v17-latin-ext_latin-regular.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* open-sans-italic - latin-ext_latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: normal;
    src: local('Open Sans Italic'), local('OpenSans-Italic'), url('./github/open-sans-v17-latin-ext_latin-italic.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* open-sans-700 - latin-ext_latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    src: local('Open Sans Bold'), local('OpenSans-Bold'), url('./github/open-sans-v17-latin-ext_latin-700.woff2') format('woff2'); 
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* open-sans-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: bold;
    src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url('./github/open-sans-v17-latin-ext_latin-700italic.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

html {
    font-size: 16pt;
}

body {
    font-family: "Open Sans","Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgb(51, 51, 51);
    line-height: 1.6;
}

#write {
    max-width: 860px;
  	margin: 0 auto;
  	padding: 30px;
    padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
	#write {
		max-width: 1024px;
	}
}

@media only screen and (min-width: 1800px) {
	#write {
		max-width: 1200px;
	}
}

#write > ul:first-child,
#write > ol:first-child{
    margin-top: 30px;
}

a {
    color: #4183C4;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.4;
    cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    text-decoration: none;
}
h1 tt,
h1 code {
    font-size: inherit;
}
h2 tt,
h2 code {
    font-size: inherit;
}
h3 tt,
h3 code {
    font-size: inherit;
}
h4 tt,
h4 code {
    font-size: inherit;
}
h5 tt,
h5 code {
    font-size: inherit;
}
h6 tt,
h6 code {
    font-size: inherit;
}
h1 {
    font-size: 2.25em;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
}
h2 {
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;
}

/*@media print {
    .typora-export h1,
    .typora-export h2 {
        border-bottom: none;
        padding-bottom: initial;
    }

    .typora-export h1::after,
    .typora-export h2::after {
        content: "";
        display: block;
        height: 100px;
        margin-top: -96px;
        border-top: 1px solid #eee;
    }
}*/

h3 {
    font-size: 1.5em;
    line-height: 1.43;
}
h4 {
    font-size: 1.25em;
}
h5 {
    font-size: 1em;
}
h6 {
   font-size: 1em;
    color: #777;
}
p,
blockquote,
ul,
ol,
dl,
table{
    margin: 0.8em 0;
}
li>ol,
li>ul {
    margin: 0 0;
}
hr {
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
}

li p.first {
    display: inline-block;
}
ul,
ol {
    padding-left: 30px;
}
ul:first-child,
ol:first-child {
    margin-top: 0;
}
ul:last-child,
ol:last-child {
    margin-bottom: 0;
}
blockquote {
    border-left: 4px solid #dfe2e5;
    padding: 0 15px;
    color: #777777;
}
blockquote blockquote {
    padding-right: 0;
}
table {
    padding: 0;
    word-break: initial;
}
table tr {
    border-top: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;
}
table tr:nth-child(2n),
thead {
    background-color: #f8f8f8;
}
table tr th {
    font-weight: bold;
    border: 1px solid #dfe2e5;
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
}
table tr td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 6px 13px;
}
table tr th:first-child,
table tr td:first-child {
    margin-top: 0;
}
table tr th:last-child,
table tr td:last-child {
    margin-bottom: 0;
}

.CodeMirror-lines {
    padding-left: 4px;
}

.code-tooltip {
    box-shadow: 0 1px 1px 0 rgba(0,28,36,.3);
    border-top: 1px solid #eef2f2;
}

.md-fences,
code,
tt {
    border: 1px solid #e7eaed;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding: 0;
    padding: 2px 4px 0px 4px;
    font-size: 0.9em;
}

code {
    background-color: #f3f4f4;
    padding: 0 2px 0 2px;
}

.md-fences {
    margin-bottom: 15px;
    margin-top: 15px;
    padding-top: 8px;
    padding-bottom: 6px;
}


.md-task-list-item > input {
  margin-left: -1.3em;
}

@media print {
    html {
        font-size: 13pt;
    }
    table,
    pre {
        page-break-inside: avoid;
    }
    pre {
        word-wrap: break-word;
    }
}

.md-fences {
	background-color: #f8f8f8;
}
#write pre.md-meta-block {
	padding: 1rem;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7f7f7;
    border: 0;
    border-radius: 3px;
    color: #777777;
    margin-top: 0 !important;
}

.mathjax-block>.code-tooltip {
	bottom: .375rem;
}

.md-mathjax-midline {
    background: #fafafa;
}

#write>h3.md-focus:before{
	left: -1.5625rem;
	top: .375rem;
}
#write>h4.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h5.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h6.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
.md-image>.md-meta {
    /*border: 1px solid #ddd;*/
    border-radius: 3px;
    padding: 2px 0px 0px 4px;
    font-size: 0.9em;
    color: inherit;
}

.md-tag {
    color: #a7a7a7;
    opacity: 1;
}

.md-toc { 
    margin-top:20px;
    padding-bottom:20px;
}

.sidebar-tabs {
    border-bottom: none;
}

#typora-quick-open {
    border: 1px solid #ddd;
    background-color: #f8f8f8;
}

#typora-quick-open-item {
    background-color: #FAFAFA;
    border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
    border-style: solid;
    border-width: 1px;
}

/** focus mode */
.on-focus-mode blockquote {
    border-left-color: rgba(85, 85, 85, 0.12);
}

header, .context-menu, .megamenu-content, footer{
    font-family: "Segoe UI", "Arial", sans-serif;
}

.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state{
    visibility: visible;
}

.mac-seamless-mode #typora-sidebar {
    background-color: #fafafa;
    background-color: var(--side-bar-bg-color);
}

.md-lang {
    color: #b4654d;
}

.html-for-mac .context-menu {
    --item-hover-bg-color: #E6F0FE;
}

#md-notification .btn {
    border: 0;
}

.dropdown-menu .divider {
    border-color: #e5e5e5;
}

.ty-preferences .window-content {
    background-color: #fafafa;
}

.ty-preferences .nav-group-item.active {
    color: white;
    background: #999;
}
```