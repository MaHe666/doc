---
title: 计算属性，slot插槽，内容分发，监听器
order: 50
---

## 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。

```html
<!-- 不应该这样写 -->
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用计算属性。

::: tabs

@tab 示例1

```html
<template>
    <div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>
<script>
export default {
    name: "testExample",
    data(){
        return{
            message: "Hello World!"
        }
    },
    computed:{
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    }
}
</script>
<style scoped>
</style>
```

@tab 示例2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>计算属性</title>
        <!-- 开发环境版本，包含了有帮助的命令行警告 -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <p>currentTime1 {{currentTime1()}}</p>
        <p>currentTime2 {{currentTime2}}</p>
    </div>
    <script>
        var app = new Vue({
            el:"#app",
            methods:{
                currentTime1:function(){
                    return Date.now();
                }
            },
			//计算属性的重点突出在属性两个字上(属性是名词)，首先它是个属性其次这个属性有计算的能力(计算是动词)，这里的计算就是个函数：简单点说，它就是一个能够将计算结果缓存起来的属性(将行为转化成了静态的属性)，仅此而已；可以想象为缓存!
            computed:{  //计算属性：methods和computed不能重名，重名后只会调用methods方法
                currentTime2:function(){
                    return Date.now();
                }
            }
        })
    </script>
</body>
</html>
```

:::

### 计算属性 和 方法

你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。

然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时，它们才会重新求值。

这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 `Date.now()` 不是响应式依赖

```javascript
computed: {
  now: function () {
    return Date.now()
  }
}
```

相比之下，每当触发重新渲染时，调用方法将总会再次执行函数

如果某个computed需要的遍历一个极大的数组和做大量的计算，可以减小性能开销，如果不希望有缓存，则用methods。

### 计算属性 和 监听器

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch。

然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调

举一个例子：`firstName` 的值 和 `lastName` 的值 相加后是 `fullName` 的值

如果使用watch来做，就需要分别监听 `firstName` 和 `lastName` 这两个变量是否改变，然而这两个监听方法的代码块是一样的

如果我们使用计算属性来做就非常简单了

::: tabs

@tab 使用Watch监听

```html
<template>
    <div id="demo">{{ fullName }}</div>
</template>
<script>
export default {
    name: "testExample",
    data(){
        return{
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        }
    },
    watch:{
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
}
</script>
<style scoped>
</style>
```

@tab 使用Computed计算属性

```html
<template>
    <div id="demo">{{ fullName }}</div>
</template>
<script>
export default {
    name: "testExample",
    data(){
        return{
            firstName: 'Foo',
            lastName: 'Bar',
        }
    },
    computed:{
        fullName(){
            return this.firstName + ' ' + this.lastName
        }
    }
}
</script>
<style scoped>
</style>
```

:::

## slot插槽

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>slot插槽</title>
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>
	<!--在Vue.js中我们使用<slot>元素作为承载分发内容的出口，作者称其为插槽，可以应用在组合组件的场景中；-->
	<!--为了更方便的渲染服务器端传过来的数据-->

    <div id="app">
        <todo>
            <todo-title slot="todo-title" :title="title"></todo-title>
            <todo-items slot="todo-items" v-for="item in items" :item="item"></todo-items>
        </todo>
    </div>

    <script>
		//定义一个名为todo-title的待办标题组件 和 todo-items的待办内容组件        
	 Vue.component("todo-title",{
            props:['title'],
            template:'<h1>{{title}}</h1>'
        });

        Vue.component("todo-items",{
            props:['item'],
            template:'<li>{{item}}</li>'
        })

		//第一步 定义一个待办事项的组件
		//第二步 我们需要让，代办事项的标题和值实现动态绑定，怎么做呢？我们可以留一个插槽！
        Vue.component("todo",{
            template:   '<div>'+
								//将代码留出一个插槽，即slot
                            '<slot name="todo-title"></slot>'+
                            '<ul>'+
                                '<slot name="todo-items"></slot>'+
                            '</ul>'+
                        '</div>'
        });

        var app = new Vue({
            el:"#app",
            data:{
                title:"我爱的",
                items:["我爱java","我爱vue","我爱slot"]
            }
        })
    </script>
</body>
</html>
```

## 内容分发

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>自定义事件内容分发</title>
        <!-- 开发环境版本，包含了有帮助的命令行警告 -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <todo>
            <todo-items slot="todo-items" v-for="(item,index) in items" 
            :item="item" :index="index" @remove="removeItem(index)" 
            ></todo-items>
        </todo>
    </div>
    <script>
        Vue.component("todo-items",{
            props:['item','index'], //接收上面绑定的产生参数
            //只能绑定当前组件的方法
            template:'<li>{{index}}---{{item}}&nbsp;<button @click="remove">删除</button></li>',
            methods:{
                remove:function(index){
                    /*
                    this.$emit('自定义事件名',参数)
                    这里绑定的事件是@remove，然后remove可以调用vue实例里面的方法
                    */
                    this.$emit('remove',index)
                }
            }
        })

        Vue.component("todo",{      //模板
            template:   '<div>'+
                            '<ul>'+
                                '<slot name="todo-items"></slot>'+
                            '</ul>'+
                        '</div>'
        });

        var app = new Vue({
            el:"#app",
            data:{
                title:"我爱的",
                items:["我爱java","我爱vue","我爱slot"]
            },
            methods:{
                removeItem:function(index){
                    console.log("删除了"+this.items[index]);
                    this.items.splice(index,1);
                    //splice万能公式(2,3,"a","b")
                    //从下表2开始删除三个，然后从2添加a和b
                }
            }
        })
    </script>
</body>
</html>
```

## 监听器

watch能够监听数据的改变。监听之后会调用一个回调函数。 此回调函数的参数有两个：

1. 更新后的值（新值）

2. 更新前的值（旧值）

### 监听基本数据类型

下面使用watch来监听商品数量的变化。如果商品数量小于1，就重置成上一个值。

```html
<div id="app">
    <table width="100%" style="text-align: center;">
        <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>商品数量</th>
            <th>合计</th>
        </tr>
        <tr>
            <td>1</td>
            <td>小米10</td>
            <td></td>
            <td>
                <button @click="subtract">-</button>

                <button @click="add">+</button>
            </td>
            <td></td>
        </tr>
    </table>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            price: 2999,
            quantity: 1
        },
        computed: {
            totalPrice() {
                return this.price * this.quantity;
            }
        },
        methods: {
            add() {
                this.quantity++;
            },
            subtract() {
                this.quantity--;
            }
        },
        watch:{
            quantity(newVal,oldVal){
                console.log(newVal,oldVal);
                this.quantity = newVal<=0?oldVal:newVal
            }
        }
    });
</script>
```

### 深度监听对象类型

在上面的例子中，监听的简单的数据类型，数据改变很容易观察，但是当需要监听的数据变为对象类型的时候，上面的监听方法就失效了，因为上面的简单数据类型属于浅度监听，对应的对象类型就需要用到深度监听，只需要在上面的基础上加上 `deep: true` 就可以了。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title></title>
        <!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
        <script src="./js/vue.js"></script>

    </head>
    <body>
        <div id="app">
            <table width="100%" style="text-align: center;">
                <tr>
                    <th>商品编号</th>
                    <th>商品名称</th>
                    <th>商品单价</th>
                    <th>商品数量</th>
                    <th>合计</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>小米10</td>
                    <td>{{goods.price}}</td>
                    <td>{{goods.quantity}}</td>

                    <td>{{totalPrice}}</td>
                    <td>
                        <button @click="subtract">-</button>

                        <button @click="add">+</button>
                    </td>
                </tr>
            </table>
        </div>

        <script>
            let vm = new Vue({
                el: '#app',
                data: {
                    price: 2999,
                    quantity: 1,
                    goods: {
                        price: 2999,
                        quantity: 1
                    }
                },
                computed: {
                    totalPrice() {
                        return this.price * this.quantity;
                    },
                    deepQuantity(){
                        return this.goods.quantity;
                    }


                },
                methods: {
                    add() {
                        this.goods.quantity++;
                    },
                    subtract() {
                        this.goods.quantity--;
                    }
                },
                watch: {
                    quantity(newVal, oldVal) {
                        console.log(newVal, oldVal);
                        this.quantity = newVal < 0 ? 0 : newVal
                    },
                    goods: {
                        deep: true,
                        handler:(newVal, oldVal)=> {
                            //console.log(newVal, oldVal);
                        }
                    },
                    deepQuantity(newVal, oldVal){
                        console.log("侦听器=",newVal, oldVal);
                    }
                }
            });
        </script>
    </body>
</html>
```

### 在vue中watch和created哪个先执行？

相关博客：<https://blog.csdn.net/zhangwenok/article/details/124251747>