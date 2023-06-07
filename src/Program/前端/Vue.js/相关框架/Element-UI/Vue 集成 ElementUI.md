---
title: Vue 集成 ElementUI
order: 10
---

使用vue-cli创建项目

安装ElementUI
```bash
npm i element-ui -S
```

在 `main.js` 中引用
```javascript
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

## 在App.vue中使用布局容器

```html
<template>
    <div id="app">
     <el-container>
       <el-header class="header">Header</el-header>
       <el-container>
         <el-aside width="200px" class="aside">Aside</el-aside>
         <el-main>Main</el-main>
       </el-container>
     </el-container>

    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {

        },
        data() {
            return {

            }
        },
        methods:{

        }
    }
</script>

<style scoped>

.header{
    border-bottom: 1px solid aqua ;
}

.aside{
    border-right: 1px solid aqua;
}

</style>
```

## 封装组件以路由的方式访问

`src/views/index.vue`

```html
<template>
    <div>
        <el-container class="wrap" >
          <el-header class="header">Header</el-header>
          <el-container>
            <el-aside width="200px" class="aside">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>
    </div>
</template>

<script>
</script>

<style scoped>

    .wrap{
        height: 100vh;
    }

    .header{
        border-bottom: 1px solid aqua ;
    }

    .aside{
        border-right: 1px solid aqua;
    }
</style>
```

`src/views/login/index.vue`

```html
<template>
  <div>登录画面</div>
</template>

<script>
  export default {
    name: 'Login',
    components: {

    },
    data() {
      return {
      }
    },
    methods: {

    },
    created() { }
  }
</script>

<style>
</style>
```

`src/App.vue`

```html
<div id="app">
	<router-view></router-view>
</div>
```

`src/router/index.js`

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            name:'Index',
            component:()=>import('@/views')
        },
        {
            path:'/login',
            name:'Login',
            component:() =>import('@/views/login')
        }
    ]
});
```

## 菜单组件

`src/components/Menu.vue`

```html
<template>

    <el-menu default-active="2" class="el-menu-vertical-demo" router background-color="#222D32" text-color="#B8C7CE"
     active-text-color="#fff">


        <el-submenu index="1">
            <template slot="title">
                <span>权限管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/user"> <i class="el-icon-location"></i>用户管理</el-menu-item>
                <el-menu-item index="/menu"> <i class="el-icon-location"></i>菜单管理</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
            <template slot="title">
                <span>ElementUI组件</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/table"> <i class="el-icon-location"></i>表格组件</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

    </el-menu>

</template>

<script>
    export default {
        name: 'Menu'
    }
</script>

<style>
</style>
```

`src/views/home.vue`

```html
<template>

    <el-menu default-active="2" class="el-menu-vertical-demo" router background-color="#222D32" text-color="#B8C7CE"
     active-text-color="#fff">


        <el-submenu index="1">
            <template slot="title">
                <span>权限管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/user"> <i class="el-icon-location"></i>用户管理</el-menu-item>
                <el-menu-item index="/menu"> <i class="el-icon-location"></i>菜单管理</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
            <template slot="title">
                <span>ElementUI组件</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/table"> <i class="el-icon-location"></i>表格组件</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

    </el-menu>

</template>

<script>
    export default {
        name: 'Menu'
    }
</script>

<style>
</style>
```




