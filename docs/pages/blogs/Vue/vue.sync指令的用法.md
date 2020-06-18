# vue.sync 指令的用法

.sync 其实只是一个语法糖

在组件间传递数据时，经常会有这种情况：父组件为子组件传递了一个值，子组件接收后，拷贝了一个副本（因为单向数据流，不可以直接修改props），修改副本后将修改后的值返回父组件。

这种我们一般如何处理呢?

1. 将变量通过`v-bind`传入，同时使用`v-on`监听一个修改事件
2. 子组件拷贝一个副本，子组件修改了值后，通过`$emit`方法触发监听
3. 父组件在一个方法中接收到`emit`传来的值，完成父子组件值的“双向绑定”

```vue
// 父组件
<template>
	<child-component :data="data" @dataChange="handledataChange"></child-component>
</template>
```

```js
data(){
    return{
        data:1
    }
},
methods:{
	handledataChange(val){
		this.data = val // 接收子组件返回的值
	}
}
```

```vue
// 子组件
props:{
	data:Number
},
data(){
	return {
		newData:this.data
	}
},
methods:{
	change(){
		this.newData++
		this.$emit('dataChange',this.newData) // 触发dataChange事件，顺带将改变的值返回
	}
```

这个方法在实现上并没有问题，但是在**语义上**大有问题。

在一段时间之后我们忘记了代码，或别人接手了项目后，问题就凸显出来了。我们无法一眼就看出哪些数据是否和子组件进行了“绑定”，需要经过调试才能知道，这样做使得代码的维护存在了隐患。

所以 Vue 在 2.3 版本提供了 `.sync`修饰符，那原先的代码变成什么样了呢？

```vue
// 父组件
<template>
	<child-component :data.sync="data"></child-component>
</template>
```

```vue
// 子组件
props:{
	data:Number
},
data(){
	return {
		newData:this.data
	}
},
methods:{
	change(){
		this.newData++
		this.$emit('update:data',this.newData) // 触发dataChange事件，顺带将改变的值返回
	}
```

我们可以发现，子组件只改变了`emit`事件，**明确告诉父组件发生了update更新事件**，更新了data值，语义更清晰了！

父组件变化更大，省略了一个自定义事件事件，减少了一个监听函数，同时，明确告诉子组件这是一个双向绑定的值，一目了然。

## 总结

越是成熟的代码，越是成熟的程序员，越会关注代码的可读性和语义性！坚持使用语义良好的开发习惯，未来的人（或许是自己）会感谢你的！