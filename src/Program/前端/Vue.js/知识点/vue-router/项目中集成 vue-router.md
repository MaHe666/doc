---
title: 项目中集成 vue-router
order: 20
---
## 安装

vue-router是一个插件包， 所以我们还是需要用 `npm` 来进行安装的。打开命令行工具，进入你的项目目录，输入下面命令。

```bash
npm install vue-router -S
```

如果在一个模块化工程中使用它，必须要通过`Vue.use()`明确地安装路由功能：

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
```

## 使用

`src/router/index.js`

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import A from '@/components/A'
import B from '@/components/B'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/aaa',
      name: 'A',
      component: A
    },
    {
      path: '/bbb',
      name: 'B',
      component: B
    }
  ]
})
```

`src/main.js`

```javascript
import Vue from 'vue'
import App from './App.vue'

// import VueRouter from 'vue-router'

import router from  './router'

Vue.config.productionTip = false

new Vue({
 router,
  render: h => h(App),
}).$mount('#app')
```

`src/App.vue`

```html
<router-link to="/aaa">aaa</router-link>
<router-link to="/bbb">bbb</router-link>

<router-view></router-view>
```

## 示例

下载vue-router

```bash
npm i vue-router -S
```

1. 在src目录下新建router文件夹
2. 在router文件夹下新建index.js文件
3. 在index.js文件内配置路由

导出配置的路由，然后在main.js的Vue实例中导入并注册

```javascript
import router from "@/router"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

### 路由使用组件的两种方式

::: tabs

@tab 方式1
```javascript
import Vue from "vue";
import Router from 'vue-router'
//引入需要的页面
import HelloWorld from "@/views/HelloWorld";

Vue.use(Router)

const routes = [
    {
        path:'/hello',
        name:'HelloWorld',
        component:HelloWorld
    }
]

const router = new Router({
    routes,
    mode:'history'
})

export default router
```

@tab 方式2
```javascript
import Vue from "vue";
import Router from 'vue-router'
//引入需要的页面
import HelloWorld from "@/views/HelloWorld";

Vue.use(Router)

const routes = [
    {
        path:'/hello',
        name:'HelloWorld',
        component:HelloWorld
    }
]

const router = new Router({
    routes,
    mode:'history'
})

export default router
```

:::








