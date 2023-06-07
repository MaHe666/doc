---
title: JavaScript
---

教程：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript>

MDN文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference>

JavaScript一门弱类型脚本语言，其源代码在发往客户端运行之前不需要经过编译，而是将文本格式的字符代码发送给浏览器，由浏览器解释运行。

原生JS开发，就是让我们按照【ECMAScript】标准的开发方式，简称ES，特点是所有浏览器都支持。

不同版本的标准，区别就是逐步增加新特性。

## Script标签

用来存放JavaScript代码

```html
<script></script>
```

这个标签无论什么情况下都没有自闭合

## 对象

JavaScript中所有的属性名都是字符串，值是任意对象

```javascript
var person = {
	name:"马赫",
	age:"21",
	hobby:['java','web','python']
}
```

**对象的赋值**

```javascript
person.name = "马赫666";
```

**对象属性的删除**

```javascript
delete person.name;
```

**动态添加**

```javascript
person.mahe666 = "mahe666";
```

**判断属性是否在对象中**，返回true或false

```javascript
'属性名' in 对象名
```

**判断一个属性是否是这个对象自身拥有的**：hasOwnProperty()

```javascript
person.hasOwnProperty('age');
```

## 严格检查模式

严格检查模式，预防JavaScript的随意性导致的问题

**必须写在JavaScript的第一行**

```html
<script>
	//严格检查模式
	'use strict';
</script>
```

## 增强for循环

```javascript
for(var 变量名 in 数组或列表){
	//当前变量是下标
}
```

```javascript
for(var 变量名 of 数组或列表){
	//当前变量是元素
}
```

## JSON字符串和JS对象的转化

**对象转化为json字符串 **

```javascript
let user = '{"name":"mahe666","age":3,"sex":"男"}'
let jsonUser = JSON.stringify(user);			//user是对象
```

**json字符串转化为对象参数为json字符串**

```javascript
let user = JSON.parse('{"name":"mahe666","age":3,"sex":"男"}');
```

## BOM对象

BOM（Browser Object Model）是指浏览器对象模型，可以对浏览器窗口进行访问和操作。使用 BOM，开发者可以移动窗口、改变状态栏中的文本以及执行其他与页面内容不直接相关的动作。

使 JavaScript 有能力与浏览器"对话"。

### window对象

window对象是客户端JavaScript最高层对象之一，由于window对象是其它大部分对象的共同祖先，在调用window对象的方法和属性时，可以省略window对象的引用。例如：`window.document.write()` 可以简写成：`document.write()`。

- 所有浏览器都支持 `window` 对象。它表示浏览器窗口；

- 概念上讲：一个 `html文档` 对应一个 `window对象`；

- 功能上讲：控制浏览器窗口的；

- 使用上讲：window对象不需要创建对象，直接使用即可；

- 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员；

- 全局变量是 window 对象的属性。全局函数是 window 对象的方法。

### location对象

Location 对象包含有关当前 URL 的信息。

Location 对象是 Window 对象的一个部分，可通过 `window.location` 属性来访问。

相关方法：

```javascript
location.reload()  //重新加载页面，即刷新

// 跳转到指定页面（可以返回上一个页面）
location.assign("URL")
location.href="URL"

// 跳转到指定页面（不可以返回上一个页面）
location.replace("URL")
```

### history对象

```javascript
//前进
history.forward()

//后退
history.back()
```

**了解即可，不建议使用**

### navigator对象

封装了浏览器的信息，该对象可以人为修改

通过 `window.navigator` 获取

### screen对象

由浏览器决定提供屏幕对象，此对象一般通过当前浏览器窗口活动状态动态检测来得到。

通过 `window.screen` 获取

### document对象

表示任何在浏览器中载入的网页，并作为网页内容的入口

```javascript
// 获取cookie
document.cookie
```

## DOM对象

DOM （Document Object Model）是指文档对象模型，通过它，可以访问HTML文档的所有元素。

DOM 是 W3C（万维网联盟）的标准。DOM 定义了访问 HTML 和 XML 文档的标准：

"W3C 文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。"

### 获得DOM节点

```javascript
var h1 = document.getElementsByTagName( ' h1' );
var p1 = document.getElementById( 'p1');
var p2 = document.getElementsByclassName( 'p2 ');

var father = document.getElementById( 'father' ) ;
//获取父节点下的所有子节点
var childrens = father.children;
```

这是原生JavaScript的写法，可以使用JQuery简化该操作

### 插入DOM节点

```html
<p id="js">JavaScript</p>
<div id="list">
	<p id="se ">JavaSE</p>
	<p id="ee ">JavaEE</p>
	<p id="me ">JavaME</p>
</div>

<script>
	var js = document. getElementById( 'js ');
	var list = document.getElementById( ' list');
	list.appendchild(js);// 追加到后面
</script>
```

## String

MDN文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String>

```javascript
let str = new String("Hello World!");
let str = "Hello World!"
```

## Number

MDN文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number>

TypeScript 与 JavaScript 类似，支持 Number 对象。
Number 对象是原始数值的包装对象。

let num = new Number(value);
注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。

调用Number属性代码示例
```javascript
console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大: " + Number.POSITIVE_INFINITY);
```

## Array

MDN文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array>

## MD5加密

```html
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
```

用法：将需要加密的值作为参数传入 `md5()` 函数

## var，let和const

`let`：ES6新增，用于声明变量，有块级作用域

`var`：ES5中用于声明变量的关键字，存在各种问题（例如：红杏出墙~）

如果你的代码里还存在 var，那你的良心就大大的坏了！

::: tabs
@tab var存在的问题

**1. 声明提升**

```javascript
 // 此处会正常打印，但这是错误的（属于先上车后买票了！）
 console.log(name); 
 var name = "大帅比";
```

**2. 变量覆盖**

```javascript
var demo = "小明";
var demo = "小红";
// 此处会打印小红，这也是错误的（属于套牌车，违法的啊，兄弟）
// 同一个项目中，发生变量覆盖可能会导致数据丢失以及各种不可预知的bug，原则上来说：变量不能重名
console.log(demo)
```

**3. 没有块级作用域**

```javascript
function fn2(){
	for(var i = 0; i < 5; i++){
		// do something
	}
	// 此处会正常打印出 i 的值，这是错误的
	// i是定义在循环体之内的，只能在循环体内打印，当前现象叫做红杏出墙！！！
	console.log(i);
}
fn2();
```

@tab let不会存在问题

**1. 不会存在声明提升**

```javascript
 // 此处会报错（这里必须报错，原则上来说不能先上车后买票）
 console.log(name); 
 let name = "大帅比";
```

**2. 不会有变量覆盖**

```javascript
 let demo = "小明";
 let demo = "小红";
 // 此处会报错（不能使用套牌车！）告诉你已经定义了此变量。避免了项目中存在变量覆盖的问题
 console.log(demo)
```

**3. 有块级作用域**

```javascript
function fn2(){
	for(let i = 0; i < 5; i++){
		// do something
	}
	// 此处会报错，无法打印，防止红杏出墙！！！
	// i是定义在循环体之内的，循环体外当然无法打印 
	console.log(i);
}
fn2();
```
::: 

### const常量

const 声明一个只读的常量，一旦声明，常量的值就不能改变

一般用于全局变量

通常，常量名全部大写（请按照规则来，不要乱搞，容易出事情）

```javascript
const PI = "3.1415926";
```

## 解构赋值

解构赋值是对赋值运算符的扩展

针对数组或者对象进行模式匹配，然后对其中的变量进行赋值

代码简洁且易读，语义更加清晰明了，方便了复杂对象中数据字段获取（简而言之：用起来很爽！）

### 用在数组上

```javascript
let [a, b, c] = [1, 2, 3];
// a = 1，b = 2，c = 3 相当于重新定义了变量a,b,c，取值也更加方便
```

```javascript
// ,是占位符
let arr = ["小明", "小花", "小鱼", "小猪"];
let [,,one] = arr; // 这里会取到小鱼
```

```javascript
// 解构整个数组
let strArr = [...arr];
// 得到整个数组
console.log(strArr);
```

### 用在对象上

```javascript
let obj = {
   className : "mahe666",
   age: 18
}
let {className} = obj; // 得到mahe666
let {age} = obj;	// 得到18
```

### 扩展运算符 和 剩余运算符

扩展运算符相当于把数组打开，而剩余运算符相当于组成数组

```javascript
let arr = [1, 2, 3]
console.log(...arr, 4, 5, 6)
// 输出结果为：1 2 3 4 5 6
```

```javascript
let arr = [1, 2, 3]
let [a, ...b] = arr
console.log(b)
// 输出结果为：[2, 3]
```

## 普通字符串 与 模板字符串

### 普通字符串

```javascript
// 普通字符串
let string = "hello" + "小兄弟"; 
// 如果想要换行
let string = "hello' \n '小兄弟" 
```

### 模板字符串

模板字符串相当于加强版的字符串，用反引号 ``

除了作为普通字符串，还可以用来定义多行字符串，可以在字符串中加入变量和表达式

```javascript
let str1 = "穿堂而过的";
let str2 = "风";
// 模板字符串
let newStr = `我是${str1}${str2}`;
// 我是穿堂而过的风
console.log(newStr)

// 字符串中调用方法
function fn3(){
  return "帅的不行！";
}
let string2= `我真是${fn3()}`;
console.log(string2);  // 我真是帅的不行！
```

## 函数

### 箭头函数

箭头函数是一种更加简洁的函数书写方式

箭头函数本身没有作用域（无this）

箭头函数的this指向上一层，上下文决定其this

```javascript
let fn = num => num;

//等价于
let fn = function(num){
 return num;
}

fn(100);  // 输出100
```

*带参数的写法*

```javascript
let fn2 = (num1,num2) => {
 let result = num1 + num2;
 return result;
}
fn2(3,2);  // 输出5
```

#### 问题：箭头函数中this指向

箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象。在函数定义的时候就已经决定了

```javascript
function fn3(){
	setTimeout(()=>{
		// 定义时，this 绑定的是 fn3 中的 this 对象
		// console.log(this.a);
	},0)
	console.log(a);
	console.log(this.a)
}
var a = 10;
// fn3 的 this 对象为 {a: 10}，因为它指向全局: window.a
fn3.call({a: 18});  // 改变this指向，此时 a = 18
```

#### 适用场景

当我们代码里存在这样的代码：let self = this;

需要新建变量去保存this的时候

示例如下：

```javascript
let Person = {
	'age': 18,
	'sayHello': function () {
	setTimeout(()=>{
		console.log(this.age);
	});
}
};
var age = 20;
Person1.sayHello();  // 18
```

### 函数参数的扩展

#### 默认参数

```javascript
// num为默认参数，如果不传，则默认为10
function fn(type, num=10){
	console.log(type, num);
}
fn(1);	// 打印 1，10
fn(1,2); // 打印 1，2 （此值会覆盖默认参数10）
```

**注意**：只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递

#### 不定参数

```javascript
// 此处的values是不定的，且无论你传多少个
function f(...values){
    console.log(values.length);
}
f(1,2);      // 2
f(1,2,3,4);  // 4
```

### 动态参数

```javascript
function hello(){
    let val = arguments[0] ? arguments[0] : 'HelloWorld'
    console.log(val)
}
```

以上函数并没有设置形参，但是当我们在调用方法时给了实参后（这里只检测了第一个实参），我们利用三目运算符检测

## class 关键字

### 类的定义

```javascript
// 声明类
class Demo {
    constructor(a) {
        this.a = a;
    }
}
```

```javascript
// 匿名类
let Demo = class {
    constructor(a) {
        this.a = a;
    }
}
```

```javascript
// 命名类
let Demo = class Demo {
    constructor(a) {
        this.a = a;
    }
}
```

定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）

- 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。

- 构造函数 − 类实例化时调用，可以为类的对象分配内存。

- 方法 − 方法为对象要执行的操作。

**注意**：类不能重复声明

类定义不会被提升，必须在访问前对类进行定义，否则就会报错。

类中方法不需要 function 关键字

方法间不能加分号

### 类的主体

#### 公共属性

```javascript
class Demo{}

Demo.prototype.a = 2;

```

#### 实例属性

```javascript
class Demo {
    a = 2;
    constructor () {
        console.log(this.a);
    }
}
```

#### 构造方法

```javascript
class Demo{
    constructor(){
      console.log('我是构造器');
    }
}

new Demo(); // 我是构造器
```

### 类的实例化

```javascript
class Demo {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log('Demo');
    }
    sum() {
        return this.a + this.b;
    }
}

let demo1 = new Demo(2, 1);
let demo2 = new Demo(3, 1);

// 两者原型链是相等的

console.log(demo1._proto_ == demo2._proto_); // true

demo1._proto_.sub = function() {
    return this.a - this.b;
}

console.log(demo1.sub()); // 1
console.log(demo2.sub()); // 2
```


### 类的继承


我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。

类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

一次只能继承一个类，不支持继承多个类，但 `TypeScript` 支持多重继承（A 继承 B，B 继承 C）。

语法格式如下：

```javascript
class child_class_name extends parent_class_name
```

相关博客：<https://blog.csdn.net/niepan990810/article/details/109124978>

### 继承类的方法重写

类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。

```javascript
class aaa {
    test(){
        console.log("aaa")
    }
}
class bbb extends aaa{
    static test(){
        console.log("bbb")
    }
}

```

### static关键字

static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。

### 通过“类”创建对象的几种方式


::: tabs

@tab es6的 `class` 关键字

```javascript
class Obj {
    constructor(name) {
        this.name = name
    }
    getName(){
        return this.name
    }
}

console.log(new Obj("Hello World!").getName());
```

@tab 普通方式1

```javascript
let Obj = (function (){
    function Obj(name){return this.name = name}
    Obj.prototype.getName = function (){
        return this.name
    }
    return Obj
}())

console.log(new Obj("Hello World!").getName());
```

@tab 普通方式2

```javascript
function Obj(name){
    this.name = name
}

Obj.prototype.getName = function (){
    return this.name
}

console.log(new Obj("Hello World!").getName());
```

:::

## Map

一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值

Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是

Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算

MDN文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map>

```javascript
// 1. key是字符串
let myMap = new Map();
let keyString = "string"; 
myMap.set(keyString, "和键'string'关联的值");
// keyString === 'string'
myMap.get(keyString);    // "和键'string'关联的值"
myMap.get("string");   // "和键'string'关联的值"


// 2.key是对象
let myMap = new Map();
let keyObj = {}, 
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.get(keyObj); // "和键 keyObj 关联的值"
myMap.get({}); // undefined, 因为 keyObj !== {}


// 3. key也可以是函数或者NaN                         
```

### key的迭代

```javascript
// 1.使用 forEach
let myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
myMap.forEach(function(value, key) {	// 0 = zero , 1 = one
  console.log(key + " = " + value);
}, myMap)

// 2. 也可以使用 for...of
```

```javascript
// 配合箭头函数
this.map.forEach((value, key) => {
	this.list.push({
		name: key,
		pwd: value
	});
})
```

### Map和Array的转换

```javascript
let kvArray = [["key1", "value1"], ["key2", "value2"]];
 
// Map 构造函数可以将一个 二维 键值对 数组 转换成一个 Map 对象
let myMap = new Map(kvArray);
 
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
let outArray = Array.from(myMap);
```

### 关于Map的面试题

+ `forEach()` 方法不会返回执行结果，而是undefined
+ map()方法会得到一个新的数组并返回
+ 同样的一组数组，`map()` 的执行速度优于 `forEach()`，因为`map()` 底层做了深度优化

`forEach()` 适合于你并不打算改变数据的时候，而只是想用数据做一些事情（比如存入数据库）

```javascript
let arr = ['a', 'b', 'c', 'd'];
arr.forEach((val) => {
 console.log(val); // 依次打印出 a,b,c,d
});
```

`map()` 适用于你要改变数据值的时候，它更快，而且返回一个新的数组

```javascript
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]
```

### 提取对象的部分属性

相关博客：<https://blog.csdn.net/xuejianxinokok/article/details/125142820>

## Set

`Set` 对象允许你存储任何类型的唯一值，无论是[原始值](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)或者是对象引用。

MDN文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set>

```javascript
// 添加
set.add(2);
```

```javascript
// 删除
set.delete(1);
```

```javascript
// 是否包含某元素，返回true或false
set.has(3)
```

## Date

MDN文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date>
