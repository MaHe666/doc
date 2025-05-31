import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as e,o as i}from"./app-CJh1pssu.js";const l={};function p(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>官方视频教程：<a href="https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021" target="_blank" rel="noopener noreferrer">https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021</a></p><p>官方代码示例：<a href="https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20230922175531.65055348860996115438581986419173:50001231000000:2800:1964FF42B4B90CD7966823E5E95D2348CCC40886FA50431FB654636F8ABB6D74.zip?needInitFileName=true" target="_blank" rel="noopener noreferrer">https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20230922175531.65055348860996115438581986419173:50001231000000:2800:1964FF42B4B90CD7966823E5E95D2348CCC40886FA50431FB654636F8ABB6D74.zip?needInitFileName=true</a></p><p>视频教程里对应的文档很全，这里不多赘述了</p><p>页面路由文档：<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-router-0000001478061893-V2" target="_blank" rel="noopener noreferrer">https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-router-0000001478061893-V2</a></p><p>管理应用窗口文档：<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-window-stage-0000001427584712-V2" target="_blank" rel="noopener noreferrer">https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-window-stage-0000001427584712-V2</a></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>UIAbility的生命周期包括Create、Foreground、Background、Destroy四个状态，<code>WindowStageCreate</code>和<code>WindowStageDestroy</code>为窗口管理器（WindowStage）在UIAbility中管理UI界面功能的两个生命周期回调，从而实现UIAbility与窗口之间的弱耦合。</p></div><h2 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参"><span>路由传参</span></a></h2><p>IndexPage.ets</p><div class="language-ets line-numbers-mode" data-highlighter="shiki" data-ext="ets" data-title="ets" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span> * Copyright (c) 2022 Huawei Device Co., Ltd.</span></span>
<span class="line"><span> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span> * you may not use this file except in compliance with the License.</span></span>
<span class="line"><span> * You may obtain a copy of the License at</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *     http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span> * See the License for the specific language governing permissions and</span></span>
<span class="line"><span> * limitations under the License.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import router from &#39;@ohos.router&#39;;</span></span>
<span class="line"><span>import CommonConstants from &#39;../common/constants/CommonConstants&#39;;</span></span>
<span class="line"><span>import Logger from &#39;../common/utils/Logger&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const TAG = &#39;[IndexPage]&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * The IndexPage is the entry point of the application.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct IndexPage {</span></span>
<span class="line"><span>  @State message: string = CommonConstants.INDEX_MESSAGE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @State content: string = &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  onPageShow(){</span></span>
<span class="line"><span>    // 在这里获取</span></span>
<span class="line"><span>    let variable = (router.getParams() as Record&lt;string, string&gt;)</span></span>
<span class="line"><span>    if (variable != undefined) {</span></span>
<span class="line"><span>      this.content = variable[&#39;content&#39;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Row() {</span></span>
<span class="line"><span>      Column() {</span></span>
<span class="line"><span>        Text(this.message)</span></span>
<span class="line"><span>          .fontSize(CommonConstants.FONT_SIZE)</span></span>
<span class="line"><span>          .fontWeight(FontWeight.Bold)</span></span>
<span class="line"><span>        Text(this.content)</span></span>
<span class="line"><span>          .fontSize(CommonConstants.PARAMS_FONT_SIZE)</span></span>
<span class="line"><span>          .opacity(CommonConstants.PARAMS_OPACITY)</span></span>
<span class="line"><span>        Blank()</span></span>
<span class="line"><span>        Button($r(&#39;app.string.next&#39;))</span></span>
<span class="line"><span>          .fontSize(CommonConstants.BUTTON_FONT_SIZE)</span></span>
<span class="line"><span>          .width(CommonConstants.BUTTON_WIDTH)</span></span>
<span class="line"><span>          .height(CommonConstants.BUTTON_HEIGHT)</span></span>
<span class="line"><span>          .backgroundColor($r(&#39;app.color.button_bg&#39;))</span></span>
<span class="line"><span>          .onClick(() =&gt; {</span></span>
<span class="line"><span>            router.pushUrl({</span></span>
<span class="line"><span>              url: CommonConstants.SECOND_URL,</span></span>
<span class="line"><span>              params: {</span></span>
<span class="line"><span>                src: CommonConstants.SECOND_SRC_MSG</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }).catch((error: Error) =&gt; {</span></span>
<span class="line"><span>              Logger.info(TAG, &#39;IndexPage push error&#39; + JSON.stringify(error));</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .width(CommonConstants.FULL_WIDTH)</span></span>
<span class="line"><span>      .height(CommonConstants.LAYOUT_HEIGHT)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .height(CommonConstants.FULL_HEIGHT)</span></span>
<span class="line"><span>    .backgroundColor($r(&#39;app.color.page_bg&#39;))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SecondPage.ets</p><div class="language-ets line-numbers-mode" data-highlighter="shiki" data-ext="ets" data-title="ets" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span> * Copyright (c) 2022 Huawei Device Co., Ltd.</span></span>
<span class="line"><span> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span> * you may not use this file except in compliance with the License.</span></span>
<span class="line"><span> * You may obtain a copy of the License at</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *     http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span> * See the License for the specific language governing permissions and</span></span>
<span class="line"><span> * limitations under the License.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import router from &#39;@ohos.router&#39;;</span></span>
<span class="line"><span>import CommonConstants from &#39;../common/constants/CommonConstants&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * The SecondPage is the router push page.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct SecondPage {</span></span>
<span class="line"><span>  @State message: string = CommonConstants.SECOND_MESSAGE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // private variable = (router.getParams() as Record&lt;string, string&gt;)</span></span>
<span class="line"><span>  // @State src: string = this.variable != undefined ? this.variable[CommonConstants.SECOND_SRC_PARAM] : &quot;mahe666&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 原来的代码</span></span>
<span class="line"><span>  @State src: string = (router.getParams() as Record&lt;string, string&gt;)[CommonConstants.SECOND_SRC_PARAM];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Row() {</span></span>
<span class="line"><span>      Column() {</span></span>
<span class="line"><span>        Text(this.message)</span></span>
<span class="line"><span>          .fontSize(CommonConstants.FONT_SIZE)</span></span>
<span class="line"><span>          .fontWeight(FontWeight.Bold)</span></span>
<span class="line"><span>        Text(this.src)</span></span>
<span class="line"><span>          .fontSize(CommonConstants.PARAMS_FONT_SIZE)</span></span>
<span class="line"><span>          .opacity(CommonConstants.PARAMS_OPACITY)</span></span>
<span class="line"><span>        Blank()</span></span>
<span class="line"><span>        Button($r(&#39;app.string.back&#39;))</span></span>
<span class="line"><span>          .fontSize(CommonConstants.BUTTON_FONT_SIZE)</span></span>
<span class="line"><span>          .width(CommonConstants.BUTTON_WIDTH)</span></span>
<span class="line"><span>          .height(CommonConstants.BUTTON_HEIGHT)</span></span>
<span class="line"><span>          .backgroundColor($r(&#39;app.color.button_bg&#39;))</span></span>
<span class="line"><span>          .onClick(() =&gt; {</span></span>
<span class="line"><span>            router.back({</span></span>
<span class="line"><span>              url: &quot;pages/IndexPage&quot;,</span></span>
<span class="line"><span>              params: {</span></span>
<span class="line"><span>                content: &quot;Second页面传来的数据&quot;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .width(CommonConstants.FULL_WIDTH)</span></span>
<span class="line"><span>      .height(CommonConstants.LAYOUT_HEIGHT)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .height(CommonConstants.FULL_HEIGHT)</span></span>
<span class="line"><span>    .backgroundColor($r(&#39;app.color.page_bg&#39;))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const d=s(l,[["render",p],["__file","UIAbility 及 页面间跳转.html.vue"]]),o=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF/HarmonyOS/ArkTS%20%E5%92%8C%20ArkUI/UIAbility%20%E5%8F%8A%20%E9%A1%B5%E9%9D%A2%E9%97%B4%E8%B7%B3%E8%BD%AC.html","title":"UIAbility 及 页面间跳转","lang":"zh-CN","frontmatter":{"title":"UIAbility 及 页面间跳转","order":20,"description":"官方视频教程：https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021 官方代码示例：https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyMan...","head":[["meta",{"property":"og:url","content":"https://mahe666.github.io/doc/%E7%BC%96%E7%A8%8B%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF/HarmonyOS/ArkTS%20%E5%92%8C%20ArkUI/UIAbility%20%E5%8F%8A%20%E9%A1%B5%E9%9D%A2%E9%97%B4%E8%B7%B3%E8%BD%AC.html"}],["meta",{"property":"og:site_name","content":"Mahe666"}],["meta",{"property":"og:title","content":"UIAbility 及 页面间跳转"}],["meta",{"property":"og:description","content":"官方视频教程：https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021 官方代码示例：https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyMan..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T07:43:35.000Z"}],["meta",{"property":"article:author","content":"Mahe666"}],["meta",{"property":"article:modified_time","content":"2024-07-08T07:43:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UIAbility 及 页面间跳转\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T07:43:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mahe666\\"}]}"]]},"headers":[{"level":2,"title":"路由传参","slug":"路由传参","link":"#路由传参","children":[]}],"git":{"createdTime":1718940343000,"updatedTime":1720424615000,"contributors":[{"name":"mahe666","email":"m13234666930@163.com","commits":1}]},"filePathRelative":"编程开发/前端/HarmonyOS/ArkTS 和 ArkUI/UIAbility 及 页面间跳转.md","localizedDate":"2024年6月21日","autoDesc":true}');export{d as comp,o as data};
