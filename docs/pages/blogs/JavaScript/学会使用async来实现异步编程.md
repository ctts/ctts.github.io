---
title: 学会使用async来实现异步编程
---

# 学会使用async/await来实现异步编程

## 前言

::: tip
还在被回调地狱给困扰着吗？赶紧来学习async吧。在学习async之前，每当接触到异步操作时，都会很头疼，因为遇到异步，就意味着代码会变得异常复杂难懂，而且变得凌乱。而使用了async之后，把异步代码当作同步来看待，语义更棒，可读性更好，大大增加了代码的质量。同时，这也是学习node必不可少的大前提。
:::
## 基础前提

一句话概括async的本质就是**promise和generator函数的语法糖**。

所以，我们第一步所要做的就是先理解**promise**和**generator**函数。已了解的可直接转往async/await

## promise

说它是es6最重要的语法特性也不为过，也是控制异步操作的核心。

看着代码来解释，先来看看一个普通的异步操作如何通过promise实现

``` 
(function learnPromise() {
    setTimeout(() => {  //耗时操作
        console.log('first')
    }, 2000);

    console.log('second')
    
    //second  first
})()
```

我需要先打印first，再打印second，如何操作呢

``` 
(function learnPromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('first')
            resolve()
        }, 2000);
    })
    promise.then(() => {
        console.log('second')
    }).catch((err) => {
        console.log(err)
    })
    
    //first second 
})()
```

这里就要引出promise的三个状态：pending（等待）、resolve（成功）、reject（失败），也就是 `let promise = new Promise((resolve, reject) => {})` 中的resolve和reject。

当代码执行到promise时，promise会处于pending状态，等待状态的改变。当状态发生改变后，若成功（resolve()），才会执行then方法, 若失败（reject（）），则胡执行catch方法。这就实现了异步操作的同步化。

当有多个异步操作时，我们可以这么写

``` 
function learnPromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('first')
            resolve()
        }, 2000);
    })
    return promise
}

function otherPromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('second')
            resolve()
        }, 2000);
    })
    return promise
}

// 主流程函数，在这里管理所有promise
(function race() {
    let promise = learnPromise()
    promise.then(() => {
        return otherPromise()
    }).then(() => {
        console.log('third')
    })
})()
```

这样可以更清晰地理解代码的含义，每个函数只需要管理自己的操作，代码耦合度更低，更好地实现了异步操作的同步化。

**重点： promise的构造函数内部是同步执行的，then方法才是异步执行的，then方法类似于回调函数。所以本质上promise只是改善了回调函数，而不是真正的解决了异步编程问题。**

注意：上面存在promise的链式调用，注意点在于想要实现链式调用一定要在 then 方法里**返回（return）一个promise对象**，否则视为第一个promise执行的回调方法！这是一个新手常见错误。


::: tip
promise的基本用法就是以上。 更多关于promise的知识，我推荐大家去看[阮一峰老师的es6入门](http://es6.ruanyifeng.com/#docs/promise#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)可以更系统的学习promise。

::: 
## generator函数

我觉得generator比promise稍微难理解一些。

借用es6入门里的一句话：

::: tip
generator 函数可以把它理解成一个**状态机**，还是一个**历遍器对象生成**函数。

::: 

简单来说，它的最主要的特性就是**“函数内部分段执行”**，交出当前代码执行权，分段的标记就是**yield**，使用next方法可以恢复执行。

generator函数功能很强大，但是我们回到异步转同步的话题。

如何用generator来处理异步方法呢？上面说到它可以交出函数执行权，也就是说，
**当我们遇到异步操作时，只需要先交出执行权，等待异步操作执行完毕，再恢复代码执行权，继续执行即可。**但是generator有个**致命的缺点就是需要我们手动执行 next 方法**，也就是每段操作后需要跟一个 `next()` 。这不是我们想要的。

``` 
// generator异步操作例子
function* main() {
  var result1 = yield request("http://some.url");
  var result2 = yield request("http://other.url");
}
 
function request(url) {
  makeAjaxCall(url, function(response){
    it.next(response);
  });
}
 
var it = main();
it.next();
```

要注意的是yield后面必须跟着

为了解决手动执行 next() 的问题，有人发明了**co模块**，它可以自动帮我们执行generator函数的next方法。但是现在基本已经被async取代了，所以就不深入了解co了。

## async/await 
::: tip
 广大前端开发者给予async的评价：异步操作的终极解决方法。
:::
终于来到了我们的重点：async/await, 回到开头的那句话：**async的本质就是promise和generator函数的语法糖**。

先来一段async函数看看它的庐山真面目：

``` 
async function handler() {
  const result1 = await asyncfunc1();
  const result2 = await asyncfunc2(result1);
  return result2;
}
handler()
```

是不是感觉和上面的generator有异曲同工之妙，那是因为他们本来就是亲戚。

但是它不需要next()来执行，async后面可以是任意类型，语法简洁，语义明确，实乃异步操作的最终解决手段！

以上是async的基本用法，我们来看看一些特殊情况。

### 1.async内发生错误的情况

以前使用回调函数实现异步操作的问题之一就是难以差错，try/catch无法捕捉异步操作传出的错误，如：

``` 
function main() {
  try {
    setTimeout(() => {
      throw new Error('async error')
    }, 1000)
  } catch(e) {
    console.log(e, 'err')
    console.log('continue...')
  }
}

main();
```

以上代码会直接报错，不会被trycatch捕获。而async很好的解决了这个问题。
我们只需要使用trycatch将await代码包裹即可。

``` 
async function handler() {
    const result1 = await asyncfunc1();
    const result2 = await asyncfunc2(result1);
    return result2;
}
// 错误捕捉
handler().catch(err => console.log(err))
```

多么简洁的语法…… 用过promise的小伙伴肯定很熟悉这种语法了。

### 在Array.forEach()中使用await

初学async，兴奋地使用forEach实现了个异步方法

``` 
async function handler() {
    let arr = [1, 2, 3, 4, 5]
    arr.forEach(num => {
        await setTimeout(() => {
            console.log(num)
        }, 1000);
    })
    console.log('success')
}
handler()
```

报错：Uncaught SyntaxError: await is only valid in async function

在forEach中就不算async了吗？！好，我改。

``` 
async function handler() {
    let arr = [1, 2, 3, 4, 5]
    arr.forEach(async num => {
        await setTimeout(() => {
            console.log(num)
        }, 1000);
    })
    console.log('success')
}
handler()
```

这下应该行了，看结果

``` 
success
1
2
3
4
5
```

……并没有实现异步。结合上一次await在forEach内部会显示不在async内的例子，**我猜测**forEach内部可能自成一个新函数作用域，（仅为个人猜想）所以无法影响到外层。

所以理论上forEach不支持await，所以在forEach中使用await会报错，我们需要使用 for of 来代替forEach

``` 
async function handler() {
    let arr = [1, 2, 3, 4, 5]
    for(let i of arr){
        console.log(i)
    }
    console.log('success')
}
handler()
```

正常打印结果

``` 
1
2
3
4
5
success
```

## 结语

如果真正理解了上面的那些东西，那么基本上就掌握了js的异步编程了，只需要在实在中多多运用就可以进一步掌握和理解async了，恭喜自己又进了一步。

