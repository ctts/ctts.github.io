---
title: Vue事件监听
---

# Vue事件监听


## 前言

> 当你遇到问题时，官方文档才是你解决问题最好的地方

## 问题一：在父组件中定义的方法不触发

```
<template>
  <div>
    <sub @click="handleClick"></sub>  //此处的点击事件不触发
  </div>
</template>

<script>
export default {
  name: 'father',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    handleClick () {
      this.num++
    }
  },
}
</script>
```

查阅官方文档：
>你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符

```
 <sub @click.native="handleClick"></sub>  
 
```

这样就可以正确的监听原生事件了。（此处的原生事件指的是父组件上的方法）

**注意**：.native不使用于类似`<input>`的元素。

## 问题二：父组件和子组件同时触发了事件，谁先触发

我还没有发现触发的顺序是怎么规定的……有时候子组件快有时候父组件快，但是我们可以用事件修饰符来规定哪个组件先触发。

查阅官方文档：
```
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

使用这两个方法中的一个就可以自己指定一个规则了。这个问题很隐蔽，可能只有遇到过一次才能记忆深刻吧。

## 所有事件修饰符

摘抄自Vue官方文档  https://cn.vuejs.org/v2/guide/events.html
```
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

## 感悟

官方文档！官方文档！官方文档！很重要！要反复看！不一定要记住，但是一定要知道有那么个东西！