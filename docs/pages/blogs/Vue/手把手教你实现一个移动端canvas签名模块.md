---
title: 手把手教你实现一个移动端canvas签名模块
---

# 手把手教你实现一个移动端canvas签名模块

## 前言

> 众所周知，canvas是html5中的难点，但是功能异常强大，我们可以用它来实现很多有意思的功能，比如说这个签名功能，只有靠canvas可以实现。正好靠这个功能来入门一下canvas，记住canvas的常用api

## 需求

移动端的手写签名功能，有上传按钮，清除按钮，使用canvas实现。

## 学习canvas

既然还对canvas一无所知，那么我们先来学习一下待会会用到的api，有追求的同学可以去[mdn上学习完善的api](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

### HTMLCanvasElement.getContext('2d')

获取到canvas对象的**渲染上下文对象**，因为签名是2d图片，所以使用 2d 来标识。是使用 canvas 的必要内容。

### cxt.beginPath()

新建一条路径，可以认为是开始绘制路径的标记。

### cxt.closePath()

结束一条路径，恢复最初的状态。

### cxt.moveTo()

移动**画笔位置**到指定的坐标(不绘制路径)。

### cxt.lineTo()

开始绘制，从**画笔位置**绘制路径到指定坐标上。

### cxt.stroke()

填充路径。

### cxt.lineWidth()

线条宽度。

### cxt.fillStyle()

设置画笔颜色。

### HTMLCanvasElement.toDataURL()

将图片转化为base64格式输出。默认为png。

## 签名实现逻辑

使用移动端的touch事件来监听用户的滑动事件， `touchstart`  `touchmove`  `touchend` 分别对应开始滑动，滑动中和滑动结束。

1. 开始滑动时，将画笔移动到手指位置。
2. 滑动中，不断填充滑动位置。
3. 滑动结束，关闭一条路径，让画笔恢复。

那么已经很明确了，只需要在每个touch事件中触发相应的事件即可。

看代码(vue)。

``` 
<template>
  <div>
    <canvas
      @touchstart='touch_start'
      @touchend='touch_end'
      @touchmove='touch_move'
      ref='canvas'
      width="300"
      height="400"
    ></canvas>
  </div>
</template>
```

在模板中放置了一个canvas，并注册监听了他们的touch事件，分别对应三个事件，并设置canvas宽高，设置ref方便在下文中获取canvas的DOM对象。

通过ref获取到canvas

``` 
data () {
    return {
      cxt: this.$refs.canvas.getContext('2d') // 用来存放canvas的dom
    }
  },
```

设置粗细，和颜色

``` 
mounted () {
// 设置颜色（黑色）
this.cxt.fillStyle = 'rgb(0,0,0)'
// 设置粗细（2px）
this.cxt.lineWidth = '2px'
},
```

开始滑动时，将画笔移动到手指位置。

``` 
touch_start (event) {
  this.cxt.beginPath()
  // 获取到触摸位置的X Y轴
  let touch = event.changedTouches[0]
  this.cxt.moveTo(touch.clientX, touch.clientY)
},
```

滑动中，不断填充滑动位置。

``` 
touch_move (event) {
  let touch = event.changedTouches[0]
  this.cxt.lineTo(touch.clientX, touch.clientY)
  // 使用lineTo后必须填充
  this.cxt.stroke()
},
```

滑动结束，关闭一条路径，让画笔恢复。

``` 
touch_end () {
  // 关闭这条路径
  this.cxt.closePath()
}
```

这样应该就能完成了吧，运行一下尝试一下。
![](https://i.imgur.com/smI4FL0.png)

……犯了个Vue新手常犯的错误，默认值一般是在 created 生命周期中就开始赋值了。但是 created 中还没有生成dom，所以必须要在 mounted 中才能获取dom。

修改代码

``` 
data () {
  return {
    cxt: {} // 用来存放canvas的渲染上下文对象
  }
},
mounted () {
  // 获取canvas的渲染上下文对象
  this.cxt = this.$refs.canvas.getContext('2d')
  // 设置颜色（黑色）
  this.cxt.fillStyle = 'rgb(0,0,0)'
  // 设置粗细（2px）
  this.cxt.lineWidth = '2px'
},
```

这样一个基本的签名就完成了

![](https://i.imgur.com/y9coVnq.gif)

完整vue代码

``` 
<script>
export default {
  name: 'signature',
  data () {
    return {
      cxt: {}  //用来存放canvas的dom
    }
  },
  mounted () {
  	// 获取canvas的渲染上下文对象
    this.cxt = this.$refs.canvas.getContext('2d')
    // 设置颜色（黑色）
    this.cxt.fillStyle = 'rgb(0,0,0)'
    // 设置粗细（2px）
    this.cxt.lineWidth = '2px'
  },
  methods: {
  	// 开始滑动事件
    touch_start (event) {
      this.cxt.beginPath()
      // 获取到触摸位置的X Y轴
      let touch = event.changedTouches[0]
      this.cxt.moveTo(touch.clientX, touch.clientY)
    },

    touch_move (event) {
      let touch = event.changedTouches[0]
      this.cxt.lineTo(touch.clientX, touch.clientY)
      // 使用lineTo后必须填充
      this.cxt.stroke()
    },
    touch_end () {
      // 关闭这条路径
      this.cxt.closePath()
    }
  }
}
</script>
```

接下来我们要把它转化为base64代码，并实现点击按钮上传。

在 html 中添加一个按钮，并加上点击事件

这时候就要用到 `canvas.toDataURL` 这个api，因为签名生成的图片不是很大，所以使用base64格式存储或传输都比较方便。

不难写出下面的代码

``` 
toBase64 () {
  let imgdata = this.cxt.toDataURL()
  console.log(imgdata)
}
```

运行后![](https://i.imgur.com/ujcOodQ.png)

。。。又犯了个错误，调用 `toDataURL()` 的并**不是渲染上下文对象**，而是**canvas**本身

正确代码

``` 
toBase64 () {
  let imgdata = this.$refs.canvas.toDataURL()
  console.log(imgdata)
}
```

![](https://i.imgur.com/BOkw2SF.gif)

上传图片只需要上传base64编码即可，预览也可以使用base64。

接下来是清除按钮，只需要将canvas清空即可

``` 
// 清空
clearCanvas () {
  this.cxt.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
}
```

![](https://i.imgur.com/iAuPfqT.gif)

这样这个签名插件就完成了。

附上完整代码

``` 
<template>
  <div>
    <canvas
      @touchstart='touch_start'
      @touchend='touch_end'
      @touchmove='touch_move'
      ref='canvas'
      width="300"
      height="400"
    ></canvas>
    <button @click="toBase64">保存</button>
    <button @click="clearCanvas">清空</button>
  </div>
</template>

<script>
export default {
  name: 'signature',
  data () {
    return {
      cxt: {} // 用来存放canvas的渲染上下文对象
    }
  },
  mounted () {
    // 获取canvas的渲染上下文对象
    this.cxt = this.$refs.canvas.getContext('2d')
    // 设置颜色（黑色）
    this.cxt.fillStyle = 'rgb(0,0,0)'
    // 设置粗细（2px）
    this.cxt.lineWidth = '2px'
  },
  methods: {
    // 开始滑动事件
    touch_start (event) {
      this.cxt.beginPath()
      // 获取到触摸位置的X Y轴
      let touch = event.changedTouches[0]
      this.cxt.moveTo(touch.clientX, touch.clientY)
    },
    touch_move (event) {
      let touch = event.changedTouches[0]
      this.cxt.lineTo(touch.clientX, touch.clientY)
      // 使用lineTo后必须填充
      this.cxt.stroke()
    },
    touch_end () {
      // 关闭这条路径
      this.cxt.closePath()
    },
    // 转化base64
    toBase64 () {
      let imgdata = this.$refs.canvas.toDataURL()
      console.log(imgdata)
    },
    // 清空
    clearCanvas () {
      this.cxt.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
    }
  }
}
</script>

<style scoped>
button {
  width: 100px;
  height: 50px;
}
</style>

```

