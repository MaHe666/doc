import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as r,c as a,d as n,e,a as s,f as t}from"./app-CRxPAwu9.js";const o={},c={href:"https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021",target:"_blank",rel:"noopener noreferrer"},v={href:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20230922175531.65055348860996115438581986419173:50001231000000:2800:1964FF42B4B90CD7966823E5E95D2348CCC40886FA50431FB654636F8ABB6D74.zip?needInitFileName=true",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"视频教程里对应的文档很全，这里不多赘述了",-1),u={href:"https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-router-0000001478061893-V2",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-window-stage-0000001427584712-V2",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>UIAbility的生命周期包括Create、Foreground、Background、Destroy四个状态，<code>WindowStageCreate</code>和<code>WindowStageDestroy</code>为窗口管理器（WindowStage）在UIAbility中管理UI界面功能的两个生命周期回调，从而实现UIAbility与窗口之间的弱耦合。</p></div><h2 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参"><span>路由传参</span></a></h2><p>IndexPage.ets</p><div class="language-ets line-numbers-mode" data-ext="ets" data-title="ets"><pre class="language-ets"><code>/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import router from &#39;@ohos.router&#39;;
import CommonConstants from &#39;../common/constants/CommonConstants&#39;;
import Logger from &#39;../common/utils/Logger&#39;;

const TAG = &#39;[IndexPage]&#39;;

/**
 * The IndexPage is the entry point of the application.
 */
@Entry
@Component
struct IndexPage {
  @State message: string = CommonConstants.INDEX_MESSAGE;

  @State content: string = &#39;&#39;;

  onPageShow(){
    // 在这里获取
    let variable = (router.getParams() as Record&lt;string, string&gt;)
    if (variable != undefined) {
      this.content = variable[&#39;content&#39;]
    }
  }

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(CommonConstants.FONT_SIZE)
          .fontWeight(FontWeight.Bold)
        Text(this.content)
          .fontSize(CommonConstants.PARAMS_FONT_SIZE)
          .opacity(CommonConstants.PARAMS_OPACITY)
        Blank()
        Button($r(&#39;app.string.next&#39;))
          .fontSize(CommonConstants.BUTTON_FONT_SIZE)
          .width(CommonConstants.BUTTON_WIDTH)
          .height(CommonConstants.BUTTON_HEIGHT)
          .backgroundColor($r(&#39;app.color.button_bg&#39;))
          .onClick(() =&gt; {
            router.pushUrl({
              url: CommonConstants.SECOND_URL,
              params: {
                src: CommonConstants.SECOND_SRC_MSG
              }
            }).catch((error: Error) =&gt; {
              Logger.info(TAG, &#39;IndexPage push error&#39; + JSON.stringify(error));
            });
          })
      }
      .width(CommonConstants.FULL_WIDTH)
      .height(CommonConstants.LAYOUT_HEIGHT)
    }
    .height(CommonConstants.FULL_HEIGHT)
    .backgroundColor($r(&#39;app.color.page_bg&#39;))
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SecondPage.ets</p><div class="language-ets line-numbers-mode" data-ext="ets" data-title="ets"><pre class="language-ets"><code>/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import router from &#39;@ohos.router&#39;;
import CommonConstants from &#39;../common/constants/CommonConstants&#39;;

/**
 * The SecondPage is the router push page.
 */
@Entry
@Component
struct SecondPage {
  @State message: string = CommonConstants.SECOND_MESSAGE;

  // private variable = (router.getParams() as Record&lt;string, string&gt;)
  // @State src: string = this.variable != undefined ? this.variable[CommonConstants.SECOND_SRC_PARAM] : &quot;mahe666&quot;;

  // 原来的代码
  @State src: string = (router.getParams() as Record&lt;string, string&gt;)[CommonConstants.SECOND_SRC_PARAM];

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(CommonConstants.FONT_SIZE)
          .fontWeight(FontWeight.Bold)
        Text(this.src)
          .fontSize(CommonConstants.PARAMS_FONT_SIZE)
          .opacity(CommonConstants.PARAMS_OPACITY)
        Blank()
        Button($r(&#39;app.string.back&#39;))
          .fontSize(CommonConstants.BUTTON_FONT_SIZE)
          .width(CommonConstants.BUTTON_WIDTH)
          .height(CommonConstants.BUTTON_HEIGHT)
          .backgroundColor($r(&#39;app.color.button_bg&#39;))
          .onClick(() =&gt; {
            router.back({
              url: &quot;pages/IndexPage&quot;,
              params: {
                content: &quot;Second页面传来的数据&quot;
              }
            });
          })
      }
      .width(CommonConstants.FULL_WIDTH)
      .height(CommonConstants.LAYOUT_HEIGHT)
    }
    .height(CommonConstants.FULL_HEIGHT)
    .backgroundColor($r(&#39;app.color.page_bg&#39;))
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function p(g,C){const i=d("ExternalLinkIcon");return r(),a("div",null,[n("p",null,[e("官方视频教程："),n("a",c,[e("https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021"),s(i)])]),n("p",null,[e("官方代码示例："),n("a",v,[e("https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20230922175531.65055348860996115438581986419173:50001231000000:2800:1964FF42B4B90CD7966823E5E95D2348CCC40886FA50431FB654636F8ABB6D74.zip?needInitFileName=true"),s(i)])]),m,n("p",null,[e("页面路由文档："),n("a",u,[e("https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-router-0000001478061893-V2"),s(i)])]),n("p",null,[e("管理应用窗口文档："),n("a",b,[e("https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-window-stage-0000001427584712-V2"),s(i)])]),h])}const f=l(o,[["render",p],["__file","UIAbility 及 页面间跳转.html.vue"]]);export{f as default};
