import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as o,d as e,e as n,a as s,f as r}from"./app-Iby1twKr.js";const a={},c={href:"https://blog.csdn.net/qq_35946021/article/details/136452217",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"当A组件使用B组件的时候，A组件就是父组件，B组件就是子组件",-1),v=e("p",null,"ArkTS中的父子组件传值分为两种：父子组件对值的双向绑定，父组件对子组件单向传值",-1),m={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"官方文档描述如下",-1),b=e("p",null,[n("组件状态管理装饰器用来管理组件中的状态，它们分别是："),e("code",null,"@State"),n("、"),e("code",null,"@Prop"),n("、"),e("code",null,"@Link"),n("。")],-1),h=e("p",null,[e("code",null,"@State"),n("装饰的变量是组件内部的状态数据，当这些状态数据被修改时，将会调用所在组件的build方法进行UI刷新。")],-1),_={href:"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-state-0000001474017162-V2",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[e("code",null,"@Prop"),n("与"),e("code",null,"@State"),n("有相同的语义，但初始化方式不同。"),e("code",null,"@Prop"),n("装饰的变量必须使用其父组件提供的"),e("code",null,"@State"),n("变量进行初始化，允许组件内部修改"),e("code",null,"@Prop"),n("变量，但更改不会通知给父组件，即"),e("code",null,"@Prop"),n("属于单向数据绑定。")],-1),f={href:"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-prop-0000001473537702-V2",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("code",null,"@Link"),n("装饰的变量可以和父组件的@State变量建立双向数据绑定，需要注意的是："),e("code",null,"@Link"),n("变量不能在组件内部进行初始化。")],-1),x={href:"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-link-0000001524297305-V2",target:"_blank",rel:"noopener noreferrer"},V=r(`<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><p>父组件</p><div class="language-ets line-numbers-mode" data-ext="ets" data-title="ets"><pre class="language-ets"><code>import {TitleComponent} from &quot;../view/TitleComponent&quot;
import {ButtonComponent} from &quot;../view/ButtonComponent&quot;

@Entry
@Component
struct Index {
  @State text: string = &#39;World&#39;

  build() {
    Row() {
      Column() {
        TitleComponent({message: this.text})
        ButtonComponent({content: $text})
      }
      .width(&#39;100%&#39;)
    }
    .height(&#39;100%&#39;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文本子组件</p><div class="language-ets line-numbers-mode" data-ext="ets" data-title="ets"><pre class="language-ets"><code>@Component
export struct TitleComponent {
  @Prop message: string

  build() {
    Row() {
      Text(&quot;Hello, &quot; + this.message)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按钮子组件</p><div class="language-ets line-numbers-mode" data-ext="ets" data-title="ets"><pre class="language-ets"><code>@Component
export struct ButtonComponent {
  @Link content: string

  build() {
    Row() {
      Button(&quot;这是个按钮&quot;)
        .height(80)
        .width(200)
        .margin(10)
        .onClick(() =&gt; {
          this.content = &quot;mahe666&quot;
        })
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function q(C,w){const i=l("ExternalLinkIcon");return d(),o("div",null,[e("p",null,[n("相关博客："),e("a",c,[n("https://blog.csdn.net/qq_35946021/article/details/136452217"),s(i)])]),u,v,e("div",m,[p,b,h,e("p",null,[n("官方文档："),e("a",_,[n("https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-state-0000001474017162-V2"),s(i)])]),g,e("p",null,[n("官方文档："),e("a",f,[n("https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-prop-0000001473537702-V2"),s(i)])]),k,e("p",null,[n("官方文档："),e("a",x,[n("https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-link-0000001524297305-V2"),s(i)])])]),V])}const y=t(a,[["render",q],["__file","组件状态管理 及 父子组件传值.html.vue"]]);export{y as default};
