![woman-s-face-with-light-reflections-3431494](D:\新桌面\woman-s-face-with-light-reflections-3431494.jpg)

# 深入JavaScript之-词法作用域

## 前言

> JavaScript作用域绝对是日常编程中最重要的模块之一，一旦出现问题，会非常隐蔽，如果不理解原理，往往连自己怎么解决的都不知道，用这篇文章带你去真正理解JavaScript词法作用域的概念，迈出深入JavaScript的第一步。

我是练习时长两年半的前端实习生（误）小c，看看今天有什么博客好看的，词法作用域？什么玩意，这种东西写代码又用不到，懒得看。ctrl+f4再见。

开始快乐的代码时间，快春招了，看看笔试题吧。

shift！又是作用域题，绕来绕去的。

```javascript
var scope = "global scope";
function scope1 (){
    var scope = "scope1"
    return scope
}
function checkscope () {
    var scope = "scope2";
    function f () {
        return scope;
    }
    console.log(f())
    console.log(scope1())
    return f;
}
const newcheck = checkscope()
console.log(newcheck())
```



<img src="https://s1.ax1x.com/2020/03/15/83kbRA.jpg" alt="83kbRA.jpg" border="0" />

~~错误~~ 答案是:`scope2 scope2 global scope` 吗？

控制台输出：

```
scope2
scope1
scope2
```



打得好，我认输。

默默打开了之前关闭的作用域博客。

## 作用域基本概念

当JavaScript开始运行时，就会产生一个**全局作用域**。

顾名思义，全局作用域就是在 JavaScript 运行时无论哪里都能够访问到的作用域。当代码运行遇到一个当前作用域不存在的变量时，就会按照**作用域链**（后文提及）依次向上查询，最后查询到全局作用域，若还不存在，则创建一个变量（严格模式下报错）。





每当创建一个函数，就会产生一个**函数作用域**。

函数作用域是最常见的作用域，在函数内部声明的变量**通常情况下**只能在函数内部的整个范围内使用，函数外部无法获取。

在ES6之前，JavaScript不存在原生**块级作用域**，在ES6补充了`let`和`const`，块级作用域的意思就是在这一代码块中，都能够访问块级作用域中定义的变量。

静态作用域是JavaScript中相对比较容易理解的一块，我们只需要分析上下文，注意提升

> 小c：“就这？这些东西谁不知道？再给你一分钟时间！”

小东西那么心急，我们慢慢由浅入深。

## 提升

提升其实是很常见的事情，我们在代码中随处可见，但是往往忽略了它。

```
console.log(a) //undefined
var a = 1

test() // 1

function test(){ console.log(1) }
test = function(){ console.log(2) }

```

上面的题目如果不知道提升，就会有三个问题：

1. 为什么a不报错，并且输出了`undefined`
2. 为什么能够在`test()`还未定义之前就调用，并且不报错
3. 为什么`test()`输出1，而不是2

回答这两个问题之前，我们从根源探寻一下为什么出现`变量提升`和`函数提升`这种现象。

> 引用自《你不知道的JavaScript》
>
> 尽管通常将JavaScript归类为“动态”或“解释执行”语言，单事实上它是一门编译语言。但与传统的编译语言不同的是，**它不是提前编译的**，编译结果也不能再分布式系统中进行移植。

JavaScript引擎在执行代码之前，需要对代码进行编译，或者说：**解释代码**。

这时候作用域的作用就出来了。当JavaScript引擎解析时，会前往变量所在作用域查询。为了能够让引擎尽早确认当前作用域是否存在该变量，所以对所有变量进行了提升。

以上面的题目为例：

我（引擎）：

我要拿快递`a`，立刻！我赶时间！`console.log(a)`

快递员（作用域）：

好嘞，我帮你先看看清单（提升），哦，我这儿有，你稍等，我给你找找在哪`var a`

我们可以发现，提升，**仅仅只是将声明提升，而并没有将赋值提升！**

---

以上讲解了变量提升的概念，但是我们可以探讨一下变量提升的意义。（为什么需要变量提升）

首先，最重要的：**提高性能**

这很好理解，就如同快递员的例子，如果快递员一件一件去寻找快递，如果确实到货了还好，如果还没到，那么我就白白多等了很长时间。

同理，如果一开始编译的时候就查询整个作用域，只是为了确定`a`是否存在，这效率无疑是非常低效的。

其次，历史原因（无官方证实）：众所周知，JavaScript曾经只是个脚本语言，脚本语言就是要**容易上手，容错率高**，随便写写都能执行，只要结果是对的即可。

虽然在现在来看，貌似起到了反作用，增加了理解成本，但是在当前人均技术不佳的情况下，无疑是有些意义的。

---

现在再回来回答上面题目

1.由于变量提升，关于a的代码等同于以下代码

```
var a
console.log(a)
a = 1
```

2.函数提升，同上，test的代码等同于以下代码

```
function test(){ console.log(1) }
test() // 1
test = function(){ console.log(2) }
```

这里可能有人会问了：“不是只提升声明吗？为什么不是等同于以下的代码？为什么函数整个都被提升了？”

```
// 这是错误的！！！
var test
test()
test = function(){ console.log(1) }
test = function(){ console.log(2) }
```

这个问题其实需要你知道什么是**函数声明**，什么是**函数表达式**，这里简单说一下

> 以`function`开头的叫做函数声明
>
> 以等号形式的叫函数表达式。

再次强调：函数提升只提升**所有声明**！

3.这里涉及到了提升的一个原则：**函数优先原则**

`test = function(){ console.log(2) }`在这句代码中，这是一个函数表达式，test不是一个函数，而是一个变量，由于函数优先的原则

我们需要注意的是，在发生相同的声明时，会以函数声明优先提升！



> 小c：“嗯……有点东西了，再看一会”

开始有点信息量了……热身结束。

### let/const

之前提到了 JavaScript 中**提升**和**块级作用域**的概念，但现在看来这些概念都是和我们日常开发的习惯相违背的，JavaScript也意识到了这些问题，开始做出了改变，在ES6中提出了**let/const**命令。

一句话概括这两者的概念。

**let 声明变量，const声明常量，两者能够形成块级作用域，在作用域内不允许重复申明或提前使用（暂时性死区），并且两者不存在提升！**

两个操作符就解决了这两大难题！

> tip1: 在未来开发中，一般情况下不再使用`var`命令。能使用`const`就不使用`let`
>
> tip2：是否存在提升其实存在争议（后文提及），但是为了方便理解可以直接那么认为

前半句很好理解，重点是后半句 **暂时性死区（Temporal Dead Zone），并且两者不存在提升！**

> 小c:"暂时性死区是个什么玩意儿？"

<img src="https://s1.ax1x.com/2020/03/16/8GJw5Q.jpg" alt="8GJw5Q.jpg" border="0" width="100" />

```javascript
a = 5
console.log(a)// Uncaught ReferenceError: Cannot access 'a' before initialization  at <anonymous>:1:3
let a
```

若使用`var`定义是可以正常执行输出的，但是`let`不行,也就是说，在**当前作用域中**，从作用域的开始直到`let a`前，都形成了一个"死区",在其中使用变量都会报错！

```javascript
// 暂时性死区开始
a = 5
console.log(a)
// 暂时性死区结束
let a
// 形成了块级作用域（以下都是）
```

那么暂时性死区是如何形成的呢？

> 引用自`ECMA-262中13.3.1的NOTE`
>
> let and const declarations define variables that are scoped to the running execution context’s LexicalEnvironment. The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated. A variable defined by a LexicalBinding with an Initializer is assigned the value of its Initializer’s AssignmentExpression when the LexicalBinding is evaluated, not when the variable is created. If a LexicalBinding in a let declaration does not have an Initializer the variable is assigned the value undefined when the LexicalBinding is evaluated.

个人翻译（比较粗糙，英语过关的同学就别看啦）：

`let`和`const`能够为正在执行的上下文中的词法作用域申明变量。变量是在实例化词法环境是创建的，但是无法真正访问该变量，直到到达它所在的词法作用域。**当运行到赋值表达式时，静态绑定和初始化器才会初始化赋值表达式，而不是在创建变量时就会赋值。**如果 let 声明中对静态绑定没有初始化，则会为其分配 undefined 。

> 小c：“什么意思？我看不懂…”

换个意思说：

当我们使用`var`时，在创建时就会赋值一个undefined，而let和const不同，它会将创建和赋值分为两个操作。也就是编译器一开始也和`var`一样会识别`let/const`，**并提升**（发生争议的原因），**但是,没有为其进行赋值操作，连undefined都没有！**，也就是**undeclared**状态。所以在之前的代码中使用会报错。

>  小c：“怎么又来一个undeclared？这个我也不知道！”

<img src="https://s1.ax1x.com/2020/03/16/8GJw5Q.jpg" alt="8GJw5Q.jpg" border="0" width="100" />

```
console.log(a)  // 此时a为undeclared状态,也就是未申明，控制台会发生报错，并停止执行代码
var b // 申明了b
console.log(b) // 此时状态为undefined，会输出undefined
```

**虽然控制台统一报错都为undefined，但是切记undeclared与undefined并不相同！**

理解了上面这段代码之后，再回去读一遍，我相信你可以理解了！



JavaScript还有其他模拟块级作用域的方法，此处主要为理解块级作用域的概念，不再详述。

## 作用域链

作用域链其实很好理解，简单来说就是**套娃**

<img src="https://s1.ax1x.com/2020/03/16/8GLnpT.jpg" alt="8GLnpT.jpg" border="0" width="200" />

上图其实很好地解释了作用域链的形态。

当编译器在**当前作用域**下没有找到某变量的定义时，会随着**定义时的作用域链**依次向上查询，直到找到**最近的**变量申明，若到达最外层依然没找到，则报错。

特别要注意的是：当前作用域，定义时的作用域链。

讲到这里我们终于快接触到本文的核心——词法（**静态**）作用域。

老规矩，一句话概括词法作用域：**函数的作用域在函数定义时就已经确定了！**

> 《JavaScript权威指南》：
>
> JavaScript 是基于词法作用域的语言：通过阅读包含变量定义在内的数行源码就能知道变量的作用域。

这句话字面意思很简单，但是真的看到代码，很多人往往会忘记这句。来个例子

```javascript
var scope = "global scope";
function scope1 (){
    var scope = "scope1"
    return scope
}
function checkscope () {
    var scope = "scope2";
    function f () {
        return scope;
    }
    console.log(f())
    console.log(scope1())
    return f;
}
const newcheck = checkscope()
console.log(newcheck())
```

<img src="https://s1.ax1x.com/2020/03/15/83kbRA.jpg" alt="83kbRA.jpg" border="0" />

```
scope2
scope1
scope2
```

如果答对了，并且真的知道为什么了，基本就掌握了静态作用域和作用域链了。

如果没答对，再默读两遍**函数的作用域在函数定义时就已经确定了！**，并回去看看上面的知识吧。

## 闭包

如果你真的**理解**了静态作用域，那么你已经理解了**闭包**的概念了！

网上的解释真的是把闭包解释的天花乱坠，乱七八糟。我以前为了理解闭包翻遍了网上博客，实在是没什么作用，但是当你换一个角度，**从词法作用域的角度去理解闭包**，那么一切将会迎刃而解！

>  小c：“哦?那么神奇吗？闭包的概念我也听过，但是确实不太懂为什么能这样。”

好吧，我们还是从闭包的基本概念入手，以免一些同学根本没听说过闭包。

> 《JavaScript高级程序设计》：
>
> 闭包：**指有权访问另一个函数作用域中的变量的函数**。创建闭包的常见方式，就是在一个函数内部创建另一个函数。

带着这段话重新写一下上面的题。

```
var scope = "global scope";
function scope1 (){
    var scope = "scope1"
    return scope
}
function checkscope () {
    var scope = "scope2";
    function f () {
        return scope;
    }
    console.log(f()) // scope2
    console.log(scope1())  //scope1,这是一个闭包
    return f;
}
const newcheck = checkscope()
console.log(newcheck()) // scope2,这也是一个闭包
```

由于词法作用域，我们成功地在`checkscope`函数中打印出了`scope1`函数中的值！这不就是闭包吗？

原本在最外层作用域下我们无法获取到`checkscope`中的变量，但是我们却通过此法作用域获取成功了！这不就是闭包吗？

没错，理解了词法作用域后，闭包就是那么简单。