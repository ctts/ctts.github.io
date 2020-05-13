<img src="https://s1.ax1x.com/2020/03/18/8DkhKP.jpg" alt="8DkhKP.jpg" border="0" />

# 深入JavaScript之-从ES规范理解动态作用域（this）

## 前言

> 虽然标题说的是动态作用域，但是第一要明确的是，**JavaScript 其实不存在动态作用域，只存在词法作用域**。只是 this 的形态和机制和动态作用域太相像了，所以我们直接用方便理解的动态作用域来理解。虽说 JavaScript 的 this 是公认的难以理解，但是不管是Vue开发还是React，this出现的频率都是很高的。那么今天就来真正深入地了解了解 this 吧。

我是练习时长两年半的前端实习生（误）小c，看看今天有什么博客好看的，动态作用域？没听说过，懒得看。ctrl+f4再见。（常规开局）

开始快乐的学习时间，看看笔试题吧。

```javascript
var name = 'global';
var obj = {
    name: 'local',
    foo: function () {
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
setTimeout(function () {
    console.log(window.name);
}, 0);
console.log(bar.name);

var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);

```

<img src="https://s1.ax1x.com/2020/03/15/83kbRA.jpg" alt="83kbRA.jpg" border="0" />

这代码是人写出来的吗？？？

答案是：

```
foo
foo2
global
```

…默默打开关掉的博客。

## 什么是this

> 在之前我们讲了**静态作用域**，接下来我们要做的事情就是：把之前将的全部忘掉！在使用this时，不要使用任何关于静态作用域的知识点！

对this的常见误区(注意！以下为错误观点)：

1.this指向function本身。X

2.this指向function的词法作用域。X

其实以上两点是新手经常会犯的错误，我们只需要看到两个例子就可以解决这个问题。

例1：

```javascript
function test (){
	this.num = 1
}

test.num = 2

test()

console.log(test.num) // 2
console.log(window.num) // 1
```

答案并不是我们所期待的 `1 ,undefined`，而是 `2 ，1`。这充分地说明了第一点，**this并不指向function本身**，那么 test 中的this指向谁呢？从下面的`window.mun = 1` 我们可以看出来指向了 window ，原因会在下文引出。

例2：

```javascript
function test (){
	console.log(this.num)
}

function test1 (){
	var num = 1
	test()
}

test1() // undefined
```

答案也并非我们期望的 1 ，而是 undefined 。这也正如上文的第二点：**this并非指向当前function的词法作用域**

---

那么this到底是什么呢？

> 引自[《ECMAScript标准规范》](https://ecma-international.org/ecma-262/5.1/#sec-11.1.1)
>
> The `this` keyword evaluates to the value of the ThisBinding of the current execution context.
>
> 译：`this`关键字代表的是当前**执行上下文**的 `thisBinding`

<img src="https://s1.ax1x.com/2020/03/21/8WBkOf.jpg" alt="8WBkOf.jpg" border="0" height="200" />

> 小c：“说的是啥呀，谁听得懂呀？”

虽然讲解一个抽象的东西最愚蠢的方法就是用另一个抽象的东西来比喻它，但是毕竟是**深入JavaScript**，有些概念还是必须知道的。

通过这段话，我们知道了**this**，其实是由两个关键字决定的，执行上下文、thisBinding 。

理解这段话的前提是知道什么是**执行上下文**。

### 执行上下文

1. JavaScript 开始执行全局代码时，就会创建一个执行栈（后进先执行）
2. 每遇到一次函数调用，就生成执行上下文，放入栈顶，执行当前函数代码
3. 若继续遇到内部函数调用，重复第2步，否则执行完毕，并从栈中弹出当前执行上下文
4. 继续执行栈顶的执行上下文函数，直到栈空

当 JavaScript 开始执行一段代码时，若遇到套嵌的函数，并非以队列（先进先执行）的形式执行，而是以栈（后进先执行）的形式执行这段代码，这其实很常见，如：

```
function test1(){
	console.log(1)
	test2()
}

function test2(){
    console.log(2)
    test3()
}

function test3(){
    console.log(3)
    test4()
}

function test4(){
    console.log(4)
    test5()
}

function test5(){
    console.log(5)
}

test1()
```

再生动的代码也比不上动图展示来的好理解！

<img src="https://s1.ax1x.com/2020/03/21/8hhE7j.gif" alt="8hhE7j.gif" border="0" />

在这里安利一个用来理解执行栈和时间循环的网站 [loupe](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gdGVzdDEoKXsNCgljb25zb2xlLmxvZygxKQ0KCXRlc3QyKCkNCn0NCg0KZnVuY3Rpb24gdGVzdDIoKXsNCiAgICBjb25zb2xlLmxvZygyKQ0KICAgIHRlc3QzKCkNCn0NCg0KZnVuY3Rpb24gdGVzdDMoKXsNCiAgICBjb25zb2xlLmxvZygzKQ0KICAgIHRlc3Q0KCkNCn0NCg0KZnVuY3Rpb24gdGVzdDQoKXsNCiAgICBjb25zb2xlLmxvZyg0KQ0KICAgIHRlc3Q1KCkNCn0NCg0KZnVuY3Rpb24gdGVzdDUoKXsNCiAgICBjb25zb2xlLmxvZyg1KQ0KfQ0KDQp0ZXN0MSgp!!!)，是大佬 Philip Roberts 在 **jsconf** 中用来展示事件循环的工具。

自己动手执行一边，配合上面的文字讲解，你要是看了三遍还不懂，拿刀来砍我，好伐？

> 小c：“那么 执行上下文 和 this 有什么关系呢？”

别急，我们回到上面那句话：`this`关键字代表的是当前**执行上下文**的 `thisBinding`、

我们搞清楚了 执行上下文 ，那么我们来看看 什么是 thisBinding。继续看文档，

**Table 19 —Execution Context State Components**

| Component           | Purpose                                                      |
| ------------------- | ------------------------------------------------------------ |
| LexicalEnvironment  | Identifies the [Lexical Environment](https://ecma-international.org/ecma-262/5.1/#sec-10.2) used to resolve identifier references made by code within this execution context. |
| VariableEnvironment | Identifies the [Lexical Environment](https://ecma-international.org/ecma-262/5.1/#sec-10.2) whose environment record holds bindings created by *VariableStatements* and *FunctionDeclarations* within this execution context. |
| ThisBinding         | **The value associated with the `this` keyword within ECMAScript code associated with this execution context.**（这个值在这个执行上下文中会和关键字this联系起来） |

读完这个表我们终于找到了 this 和 thisBinding 和 执行上下文的关系。

1. 每当执行一个函数时，系统会生成一个 执行上下文
2. 每个执行上下文生成时就需要确定三个属性：创建词法环境、创建变量环境、**ThisBinding（也就是确定this的值）**

前两者不再本文的讨论范围。

继续往下看文档，

> The following steps are performed when control enters the execution context for function code contained in function object F, a caller provided thisArg, and a caller provided argumentsList:
>
> 1. If the function code is [strict code](https://ecma-international.org/ecma-262/5.1/#sec-10.1.1), set the [ThisBinding](https://ecma-international.org/ecma-262/5.1/#sec-10.3) to *thisArg*.
> 2. Else if *thisArg* is **null** or **undefined**, set the [ThisBinding](https://ecma-international.org/ecma-262/5.1/#sec-10.3) to the global object.
> 3. Else if [Type](https://ecma-international.org/ecma-262/5.1/#sec-8)(*thisArg*) is not Object, set the [ThisBinding](https://ecma-international.org/ecma-262/5.1/#sec-10.3) to [ToObject](https://ecma-international.org/ecma-262/5.1/#sec-9.9)(*thisArg*).

本人翻译（看得懂英文忽略）：

> 当执行进入函数对象的执行上下文时，**函数调用者**会提供 **thisArg** 和 argumentsList ，并执行以下步骤（我截取了仅跟this操作有关的步骤）：
>
> 1. 如果这个 function 处于严格模式下，让 **ThisBinding** 等于 **thisArg**
> 2. 否则，若不是严格模式下，并且 **thisArg** 的值为 null 或 undefined ，让 **ThisBinding** 等于 global
> 3. 否则，若 **thisArg** 的类型不是 Object，将 **thisArg** 转化为Object, 让 **ThisBinding** 等于 thisArg
> 4. 若非以上的情况，让 **ThisBinding** 等于 **thisArg**

我们又将目光投向了 thisArg ，终于看到一个比较眼熟的东西了，感动的热泪盈眶。

<img src="https://s1.ax1x.com/2020/03/23/87fJnP.jpg" alt="87fJnP.jpg" border="0" />

我们最常见到thisArg的地方就是 `Function.prototype.call()`

<img src="https://s1.ax1x.com/2020/03/23/87fj9H.png" alt="87fj9H.png" border="0" />

好了，我们整理一下思路：

执行上下文 =》 ThisBinding =》 thisArg

1. 函数执行（被调用），创建了一个执行上下文
2. 创建时所作的第一步，就是给执行上下文的 ThisBinding 属性赋值
3. ThisBinding 属性赋值的流程就是上文的 thisArg 四步判断

最终，编译器把 thisArg 赋值给了 this ，也就是我们用到的 this 了！



## 绑定规则（确定this）

上面我们从标准规范的角度理解了一般情况下 Function 中的 this，如果现在我们来系统地将绑定分一下类。

如果真正看懂了上文，那么以下的内容是很简单的。

### 默认绑定

这是最常见的绑定，也就是**独立函数调用**，这种调用我们其实可以理解为 window 在调用这个 function ，自然而然就是 window 提供 thisArg ， 所以 this 的值也就指向了 window （严格模式下为undefined）。这个行为对应了上文的

> 1. 如果这个 function 处于严格模式下，让 **ThisBinding** 等于 **thisArg**否则，
> 2. 若不是严格模式下，并且 **thisArg** 的值为 null 或 undefined ，让 **ThisBinding** 等于 global

```javascript
function test (){
	console.log(this)
}
test() // window
```

很好理解。

### 隐式绑定

为什么叫它隐式绑定呢？因为**它没有明确的告诉你 this 指向谁**，还需要你去猜！

<img src="https://s1.ax1x.com/2020/03/23/8H4tCF.jpg" alt="8H4tCF.jpg" border="0" />

当函数的**调用者是一个对象**时,或者说函数是某个对象属性时，也就是对象隐式提供 thisArg ，那么自然 this 也就指向了调用对象。值得注意的是，套嵌对象调用方法时，this指向的是最后调用的对象。

```javascript
function func (){
	console.log(this.a)
}
const obj = {
	a:1,
	o:{
		a:2,
		func:func
	}
}
obj.o.func() // 2
```

还有一种隐式调用，那就是**函数以参数的形式被传递调用**，

但是这种隐式绑定有个致命的问题，它会发生**隐式丢失**！

```javascript
var a = 'global'
function doTest(fn) {
    fn()
}
function test() {
    console.log(this.a)
}
const obj = {
    a: 'obj',
    fn: test
}
doTest(obj.fn) // global
```

我们可以看到传递时函数确实是被`obj`调用，但是打印出来的确实 global。这个问题可以从另个角度来解决。

JavaScript传参的有两种形式：1.按值传递、2.按引用传递。

当参数类型是**基本数据类型**时，一律是按值传递的，也就是传递的是一个副本，你在函数内部改变形参并不会改变外部的变量本身。

当参数类型时引用类型时（function是特殊的Object），传递的是一个引用，这个引用指向的是引用类型本身，（这里不展开讲，要不然又是一篇文章）所以当作参数时，**`test`函数已经不算是obj的属性了，它就是它自己，**一个普通的函数，**隐式绑定就转化为了默认绑定**，所以以上代码可以转化为：

```javascript
var a = 'global'
function doTest(fn) {
    fn()
}
function test() {
    console.log(this.a)
}
doTest(test) // 传递的是引用，所以 obj.fn 就是 test 本身，所以变成了默认绑定
```

隐式丢失部分有些难以理解，建议多花些时间理解。

### 显式绑定

显式绑定是我们比较提倡的绑定 this 的方式,也就是显式地告诉函数this指向谁，也就是使用 `call()` `apply()` `bind` 这三个方法，这三个函数的用法不多说。

其实理解这三个函数的最好方法就是自己模拟一个，而且并不困难，是常规的面试题之一。

```javascript
// call 和 apply 通用
Function.prototype.call = function(context){
	const fn = new Symbol()  // 为了不覆盖context原本的属性，要确定fn是唯一的，所以使用symbol类型
    context[fn] = this // ？？？
    const res = context[fn]() // 隐式绑定this，调用函数，此为简易版，不添加参数，只绑定this
    delete context[fn] // 删除对象上挂载的属性
    return res
}
```

我们可以看到，其实 显示绑定 的原理就是 **在函数内部实现一个隐式绑定** ，不同的是，内部隐式绑定的对象是我们自己指定的，增强了可读性和可控性。

这里最有疑问的一步就在于第二步，灵魂四问：

此时的 this 为什么是函数本身？而且可以直接被调用执行？this不应该指向对象吗？对象还能被执行？

<img src="https://s1.ax1x.com/2020/03/25/8XVJKK.jpg" alt="8XVJKK.jpg" border="0" />

现有的知识已经无法帮我解决问题了，**查文档吧**。

> [ecma-262](http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-the-function-prototype-object)
>
> The Function prototype object is the intrinsic object %FunctionPrototype%. The Function prototype object is itself a built-in function object. When invoked, it accepts any arguments and returns **undefined**. It does not have a [[Construct]] internal method so it is not a constructor.

译：

函数原型对象是内部对象 %FunctionPrototype% 。**prototype 本身就是一个内置的函数对象**。在调用时，它接受任何参数并返回 undefined 。它没有[[Construct]]内部方法，所以它不是一个构造函数。

…简单来说它即是函数又是对象？？？在文档下面还加了一段提示：

> The Function prototype object is specified to be a function object to ensure compatibility with ECMAScript code that was created prior to the ECMAScript 2015 specification.

译：

函数原型对象被指定为一个函数对象，以确保与ECMAScript代码的兼容性，该代码是在ECMAScript 2015规范之前创建的。

总而言之：prototype 既是对象又是函数（存疑），所以`context[fn] = this`此时的 this 就是调用 call 的函数本身，并且在下一步中对其进行调用。

这一步可以解释通了。

### bind硬绑定

虽然已经有了 `call` `apply`，但是这并不能满足我们的需求。我们可以发现，call和apply会 **立即执行**这个函数，有些时候我们并不想那么做，我们只是想把这个函数指向改变，并保存下来，等到需要时进行调用。

其实原理也很简单，**在外面再包一层壳不就好了**…

```javascript
function bind (fn,obj){
	return function(){ // 返回一个匿名函数
        return fn.call(obj) // 每次调用匿名函数就是调用一次call
	}
}
```

理解`bind`的关键就在于：bind返回的是一个**全新的函数**，已经不是我们传入的函数本身了。

为bind函数处理过的函数继续执行 call 是无效的，因为到最后，bind内部依然会执行自己的最后一次call ！被bind绑定过后就无法更改指向了！所以bind被称为**硬绑定**

`bind`在react中运用十分频繁，理解bind还是很重要的。

### new绑定

new是一个操作符，可以创建一个对象，我们用一个函数来模拟一下

```javascript
// 简易版，构造函数不返回值，旨在理解其中this，不涉及具体操作
function createObj (fn){
	const obj = Object.create(fn.prototype)
	fn.call(obj)
	return obj
}
```

来简略说说new的过程吧：

1. 创建一个空对象
2. **将构造函数的属性和作用域赋值给新对象**（此处直接使用`Object.create()完成了1、2两步`）
3. **这个对象会绑定到函数调用的this**
4. 如果构造函数没有返回其他对象，那么返回obj

由于第二步和第三步，所以这个新对象的所有属性和方法默认都是指向这个 obj 的

### 箭头函数

一句话，**箭头函数没有自己的this**，因为没有自己的，自然也就只能问爸爸要了（外部作用域）。

很多人是自以为理解了这句话，来一道题。

```javascript
function Outer (fg){
    let o = new Object()
    o.flag = fg
    o.getval = ()=>{ // 区别
		console.log(this)
    }
    return o
}
let outer = new Outer('test')
outer.getval() // ?
```

```javascript
function Outer (fg){
    let o = new Object()
    o.flag = fg
    o.getval = function(){ // 区别
		console.log(this)
    }
    return o
}
let outer = new Outer('test')
outer.getval() // ?
```

答案:

1.`Outer {}`

2.`{flag: "test", getval: ƒ}`

第 2 题，很好理解，我们可以看到唯一的区别就在于在构造函数内使用了箭头函数。

我们分析一下第 1 题，**由于箭头函数没有自己的this**，所以此时的this就是父级的this，那我们直接分析父级的this，由于使用了`new`操作符`let outer = new Outer('test')`，所以此时的this已经绑定在了 outer 对象，所以是一个空对象。

## 写在最后

1. 以上代码仅是模拟函数（call/bind/new），并非真实JavaScript源码，源码肯定没那么简单！
2. 本文信息量极大，涉及到了：作用域、new、call、执行上下文、执行栈等知识点，若不理解可以搭配其他文章一起理解
3. 本文看一遍应该无法完全理解…建议多看几遍

> 小c：“看了那么久，直接看绑定规则不就完事了吗？前面的理论有啥用啊？”

我感觉有很多人都会有这种观点，看了文档有啥了不起的，平时又用不上，除了能拿出去装X还能干啥…

有些东西仅仅知道怎么用确实够了，但是遇到现有的教程也没说到的问题，那么去哪里找答案呢？我们无法看到JavaScript内部运行的代码，但是我们可以通过文档知道它运行的逻辑，通过它的逻辑，从根源解决问题。

所以深入还是要靠文档，学会看文档是你突破瓶颈的方法之一！