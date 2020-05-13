---
title: inline元素小笔记
---

## 前言

> span元素我们一般不会去控制他们的样式，所以对span元素的了解也比较少，今天笔试题上遇到了，就来总结一下遇到的问题。

## 知识盲点

1. 哪些元素是inline元素？
2. inline元素的padding和margin

### 哪些元素是inline元素

先上mdn的汇总：

> mdn: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

注意：请在英文模式下查看

分别是块级元素还是行内元素真的挺困难
再说一下自己总结的行内元素：

1. 输入输出相关的元素：如input、video、textarea
2. 图片相关：如canvas、img、picture
3. 文字样式相关：b、strong
4. 表单相关：button、select（注意：form本身除外，option除外）

顺便再说一下块级元素吧：

1. 布局相关：table、ul、li
2. 页面布局：header、footer
3. 标题：h1~h6

以上只是本人总结，可能有部分出入

### inline元素的padding和margin

直接上结论：横向属性有效，padding竖向属性有效，margin竖向属性无效，普通的inline元素，height无效，img的height有效

### inline的高度

出现这个问题的主要原因是因为：**inline元素的高度并不取决于`height`，而取决于`line-height`**

<span class="inline-test">span</span>

这个`span`元素的高度为 300px 但是并没有达到预期的效果

```css
.inline-test{
    border: 1px solid #eee;
    width: 300px;
    height:300px;
}
```

由此可以发现`inline`元素的高度和宽度并不是我们可以控制的，**它由它内部的内容大小所决定**。

## 优秀文章分享

前端技术：https://zhuanlan.zhihu.com/p/31645001

<style>
    .inline-test{
        border: 1px solid #eee;
        width:300px;
        height: 300px;
    }
</style>