(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{368:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2020网易雷火笔试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020网易雷火笔试题"}},[t._v("#")]),t._v(" 2020网易雷火笔试题")]),t._v(" "),a("blockquote",[a("p",[t._v("题目难度不高，但是由于最近工作太忙完全裸考…导致一些不太牢固的基础忘掉了，还有就是巩固一下不太扎实的内容，在这里记录一下")])]),t._v(" "),a("h2",{attrs:{id:"_1-根据中序遍历和后序遍历判断前序遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-根据中序遍历和后序遍历判断前序遍历"}},[t._v("#")]),t._v(" 1.根据中序遍历和后序遍历判断前序遍历")]),t._v(" "),a("p",[t._v("已知"),a("strong",[t._v("中序")]),t._v("是 DCFAGBE ,"),a("strong",[t._v("后序")]),t._v("是 DFCBEBA,求前序遍历结果。")]),t._v(" "),a("p",[a("strong",[t._v("关键在于，后序遍历的每棵子树的根节点都是最后一位。")])]),t._v(" "),a("p",[t._v("第一步：找到根节点。由上面的话可得，A 节点是树的根节点。")]),t._v(" "),a("p",[t._v("第二步：通过根节点对中序遍历进行分组。由中序遍历的特性可以得出左右子树位于根节点的左右两边。")]),t._v(" "),a("p",[t._v("第三步：若左右子树存在子节点，则重复到第一步。")]),t._v(" "),a("p",[t._v("文字的描述非常抽象，作答时最好按照逻辑打个草稿！草稿很重要！")]),t._v(" "),a("p",[t._v("草稿如下图：")]),t._v(" "),a("img",{attrs:{src:"https://s1.ax1x.com/2020/04/25/J6eAEQ.png",alt:"J6eAEQ.png",border:"0"}}),t._v(" "),a("h2",{attrs:{id:"_2-模拟new操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-模拟new操作符"}},[t._v("#")]),t._v(" 2.模拟new操作符")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mynew")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这是使用了ES6的极致简约版，这里可以介绍一下"),a("code",[t._v("new")]),t._v("操作符的实现原理，顺便说一下"),a("code",[t._v("Object.create()")]),t._v("方法。")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("new")]),t._v("操作符时，系统帮我们做了以下这些事情：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个空对象obj")]),t._v(" "),a("li",[t._v("将 obj 的 __proto__ 属性指向构造函数的 prototype")]),t._v(" "),a("li",[t._v("执行构造函数，并将构造函数的 this 指向 obj")]),t._v(" "),a("li",[t._v("如果构造函数没有返回一个对象，则返回 obj，否则返回该对象（简约版并未实现此功能）")])]),t._v(" "),a("p",[t._v("通过以上四步，就能够在创建一个对象的同时，对该对象执行构造函数中的各种操作（因为在第三步中绑定了this），随心所欲的创建一个我们需要的对象。")]),t._v(" "),a("p",[t._v("那么为什么我只用了一句代码就实现了1、2两步呢？")]),t._v(" "),a("blockquote",[a("p",[t._v("**"),a("code",[t._v("Object.create()")]),t._v("**方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。—— MDN")])]),t._v(" "),a("p",[t._v("我们一般新建一个对象都怎么来？")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const obj = {} // 字面量的形式创建\nconst obj1 = new Object() // new关键字创建\n")])])]),a("p",[t._v("不谈两种方法的过程（前者可直接被解析为对象，后者会调用一个复杂的构造函数），只谈结果，他们都会生成一个“空”对象。为什么我要给空打双引号呢？因为它并不是真正的空！")]),t._v(" "),a("img",{attrs:{src:"https://s1.ax1x.com/2020/05/07/Ymy4de.png",alt:"Ymy4de.png",border:"0"}}),t._v(" "),a("p",[t._v("里面明明那么多东西也好意思说自己是空的？")]),t._v(" "),a("p",[t._v("实际上使用字面量和"),a("code",[t._v("new")]),t._v("时，也会执行上面刚刚说的"),a("code",[t._v("Object")]),t._v("构造函数，为一个新建的对象绑定了 __proto__ ，也就是多出来的这一大串东西啦。")]),t._v(" "),a("p",[t._v("那么主角出场，我们使用"),a("code",[t._v("Object.create(null)")]),t._v("创建的对象是什么样的呢？")]),t._v(" "),a("img",{attrs:{src:"https://s1.ax1x.com/2020/05/07/YmylVg.png",alt:"YmylVg.png",border:"0"}}),t._v(" "),a("p",[t._v("显示"),a("code",[t._v("No properties")]),t._v("，也就是说，"),a("code",[t._v("Object.create()")]),t._v("借助了 null 来创建新对象，它的 __proto__ 指向了null，所以可以创建一个真正的空对象。")]),t._v(" "),a("p",[t._v("综上，")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let obj = Object.create(fn.prototype)\n// 等同于\nlet obj = Object.create(null)\nobj.__proto__ = this.prototype  //此处的this是构造函数的prototype\n")])])]),a("p",[t._v("另外，"),a("code",[t._v("Object.create()")]),t._v("还可以有第二个参数，也就是配置项，如可枚举啊、可写啊、value值啊等等，具体可以参照"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.defineProperty()"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_3-单页路由实现的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-单页路由实现的原理"}},[t._v("#")]),t._v(" 3.单页路由实现的原理")]),t._v(" "),a("p",[t._v("Vue-router中的"),a("code",[t._v("hash模式")]),t._v("和"),a("code",[t._v("history模式")]),t._v("使用了两种不同的实现单页面路由的方法。")]),t._v(" "),a("p",[t._v("但是实现的相同关键点在于："),a("strong",[t._v("改变URL时，不会引发页面的刷新。")])]),t._v(" "),a("h3",{attrs:{id:"hash-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[t._v("#")]),t._v(" hash 模式")]),t._v(" "),a("p",[t._v("hash，也就是URL中 "),a("strong",[t._v("#")]),t._v(" 号后面的部分，其实我们早就用到过hash了，没错，就是：锚链接。我们使用锚链接的时候，可以发现，浏览器的URL中多了一个 # 号，页面滚动到了指定的地方，"),a("strong",[t._v("但是浏览器并没有发生刷新")]),t._v("，符合我们单页面应用的需求。")]),t._v(" "),a("p",[t._v("之后经过查询可以知道，我们可以发现，在 DOM2 中添加了一个"),a("strong",[t._v("hashchange")]),t._v("事件，可以用于监听hash值的改变，并触发回调。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hashchange"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("并且，我们可以使用"),a("code",[t._v("window.location.hash")]),t._v("来操作历史记录")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushHash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样，浏览器历史记录中就会添加一条历史记录了")]),t._v(" "),a("p",[t._v("所以使用哈希模式改变路由的基本逻辑就是：")]),t._v(" "),a("p",[t._v("1.监听浏览器URL中hash的变化")]),t._v(" "),a("p",[t._v("2.变化时调用上文的"),a("code",[t._v("pushHash")]),t._v("方法添加浏览记录")]),t._v(" "),a("p",[t._v("3.执行回调（渲染函数），在Vue的"),a("code",[t._v("beforeCreate")]),t._v("钩子中混入一个响应式属性（值改变时，重新调用render函数）")]),t._v(" "),a("h3",{attrs:{id:"history模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history模式"}},[t._v("#")]),t._v(" history模式")]),t._v(" "),a("p",[t._v("history模式使用的是 HTML5 新增的两个API")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stateObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stateObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("通过以两个API可以用来操作浏览器历史记录栈，但是不会立刻发起请求，当URL发生变化时，我们可以通过"),a("code",[t._v("popstate")]),t._v("事件进行监听，执行回调，等同于hash模式。")]),t._v(" "),a("h3",{attrs:{id:"对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("美观")]),t._v("，显然，不带#号更符合我们一般访问的URL，而且这也是我们使用history的"),a("strong",[t._v("主要原因")]),t._v("！")]),t._v(" "),a("li",[t._v("浏览器兼容性， history 模式由于使用到了 H5的新特性，所以兼容性稍差点，Vue-router在源码上进行了处理，若不兼容 history 会自动回退了 hash 模式")]),t._v(" "),a("li",[a("code",[t._v("pushState")]),t._v("方法支持传入任意类型的数据，hash 模式只支持String")]),t._v(" "),a("li",[t._v("是否需要后端处理，history 模式需要"),a("RouterLink",{attrs:{to:"/pages/blogs/JavaScript/[https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子](https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子)"}},[t._v("后端配合")]),t._v("。想要直接加载 Vue 单页应用而不借助后端服务器，只能使用 hash 模式")],1)]),t._v(" "),a("h2",{attrs:{id:"_4-浏览器缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器缓存机制"}},[t._v("#")]),t._v(" 4.浏览器缓存机制")]),t._v(" "),a("p",[t._v("浏览器缓存机制是前端性能优化的重点之一。因为每次发起http请求都会经过一系列的操作：3次握手、数据传输等。拖慢了了前端渲染的同时增加了后端服务器的压力。所以我们需要对浏览器缓存机制有一定的了解，"),a("strong",[t._v("并作出合理的缓存操作")]),t._v("，错误地使用缓存可能会导致一些难以排查的问题。")]),t._v(" "),a("p",[t._v("浏览器缓存一般分为两种："),a("strong",[t._v("强缓发起存")]),t._v("和"),a("strong",[t._v("协商缓存")])]),t._v(" "),a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),a("p",[t._v("强缓存是有限级最高的缓存，浏览器最先向强缓存询问，若命中缓存，则会直接返回缓存中的数据，"),a("strong",[t._v("跳过访问服务器环节")])]),t._v(" "),a("p",[t._v("强缓存命中时，返回状态码 "),a("strong",[t._v("200")]),t._v(",使用chrome的调试工具时可以发现在后面带上了一串注释**(from disk cache)**,表命此数据来自于强缓存。")]),t._v(" "),a("p",[t._v("http header 中用于描述强缓存的字段有两个："),a("strong",[t._v("expires")]),t._v(" 和 "),a("strong",[t._v("cache-control")])]),t._v(" "),a("p",[a("strong",[t._v("expires")]),t._v(" 是一个已被淘汰的方案，值是一串依赖于本机时间的时间戳，存在的意义在于兼容旧版本浏览器。")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Expires:")]),t._v(" Wed, 06 May 2020 13:04:43 GMT\n\n")])])]),a("p",[t._v("着重来讲 cache-control。")]),t._v(" "),a("p",[a("strong",[t._v("cache-control")]),t._v(" 是 expire 的替代方案，它的值一般是以"),a("code",[t._v("max-age")]),t._v("开头，后接已"),a("strong",[t._v("秒")]),t._v("为单位的数字，代表从接受到数据后在缓存中的有效时间。")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" max-age=10\n// 缓存10s\n")])])]),a("p",[t._v("cache-control还有两种值"),a("code",[t._v("no-store")]),t._v("和"),a("code",[t._v("no-cache")])]),t._v(" "),a("p",[t._v("要注意的一点是"),a("code",[t._v("Cache-Control: max-age=0")]),t._v("等同于"),a("code",[t._v("no-cache")])]),t._v(" "),a("p",[t._v("**no-store:"),a("strong",[t._v("强制取消缓存，跳过缓存阶段")]),t._v("，要求每次请求都是一个完整的请求，**要注意的是，可能"),a("code",[t._v("no-cache")]),t._v("的翻译更像是取消缓存，但是确实"),a("code",[t._v("no-store")]),t._v("才是，切勿弄混。")]),t._v(" "),a("p",[t._v("**no-cache：**取消强缓存，转而使用协商缓存，接下来详细说协商缓存。")]),t._v(" "),a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),a("p",[t._v("当我们设置了"),a("code",[t._v("cache-control:no-cache")]),t._v("后，浏览器转而使用协商缓存的缓存方案。那么什么是协商缓存呢？")]),t._v(" "),a("ol",[a("li",[t._v("浏览器跳过本地缓存")]),t._v(" "),a("li",[t._v("发起一个请求，只请求文件的相关信息，如：最后一次编辑时间")]),t._v(" "),a("li",[t._v("通过服务器的相关信息对比本地数据的相关信息，判断资源是否发生改变")]),t._v(" "),a("li",[t._v("若改变，重新发起一次完整请求，否则，重定向至浏览器缓存，并返回"),a("strong",[t._v("304")]),t._v("状态码")])]),t._v(" "),a("p",[t._v("第二步和第三步可能存在疑惑，浏览器如何通过仅有的一点信息来判断数据是否过期呢？")]),t._v(" "),a("p",[t._v("当浏览器确定使用协商缓存后，第一次请求服务器后的"),a("code",[t._v("response header")]),t._v("（上述的4步已经是非第一次请求，因为第一次请求不可能存在缓存）中会带有一个 "),a("code",[t._v("last-modified")]),t._v("字段，记录着文件最后一次编辑的时间。在未来发起请求时，会将该数值存放在 "),a("code",[t._v("request header")]),t._v("的"),a("code",[t._v("last-modified-since")]),t._v("字段中。也就是第二步的操作。")]),t._v(" "),a("p",[t._v("在服务器得到"),a("code",[t._v("last-modified-since")]),t._v("的值后，会和文件当前的最新修改时间做对比，若未发生修改操作，则判断为资源为编辑，也就是第三步。并返回304，重定向至浏览器缓存资源。")]),t._v(" "),a("p",[t._v("但是，"),a("code",[t._v("modified-since")]),t._v(" 存在着缺陷,最为显著的就是：")]),t._v(" "),a("p",[t._v("系统打开了文件，但是并未做改动，就退出了。但此时服务器无法判断你是否发生了更改，因为它记录的是"),a("strong",[t._v("文件编辑的时间")]),t._v("，这样就一定程度上造成了资源浪费。这时候就衍生了另个技术 "),a("strong",[t._v("ETag")])]),t._v(" "),a("p",[t._v("例子："),a("code",[t._v('ETag: W/"25f3e-qDBFtcAaDnS/R5XboaD0ICQrSak"')])]),t._v(" "),a("p",[t._v("ETag 基本原理和"),a("code",[t._v("last-modified")]),t._v("并无不同，也是以上四步，主要的区别在于"),a("strong",[t._v("识别文件变化")]),t._v("的技术上。")]),t._v(" "),a("ul",[a("li",[t._v("last-modified 使用的是记录编辑时间")]),t._v(" "),a("li",[t._v("Etag使用的是"),a("code",[t._v("hash")]),t._v("技术，将文件内容通过哈希算法转化为一串"),a("code",[t._v("hash")]),t._v("值，每次对比时，实际上对比的是这串hash值，所以可以避免上面记录编辑时间的缺陷，但是由于哈希算法的存在，牺牲了服务器的一定性能。")]),t._v(" "),a("li",[t._v("Etag优先级高于 "),a("strong",[t._v("last-moditied")])])]),t._v(" "),a("p",[t._v("协商缓存一般用于**实时性不强但是可能会发生变化的数据。**如：商城中的商品。")]),t._v(" "),a("p",[t._v("6.DNS到IP的转化过程")]),t._v(" "),a("p",[a("strong",[t._v("解析顺序")])]),t._v(" "),a("p",[a("strong",[t._v("1）")]),t._v(" "),a("strong",[t._v("浏览器缓存")])]),t._v(" "),a("p",[t._v("当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的IP地址（若曾经访问过该域名且没有清空缓存便存在）；")]),t._v(" "),a("p",[a("strong",[t._v("2）")]),t._v(" "),a("strong",[t._v("系统缓存")])]),t._v(" "),a("p",[t._v("当浏览器缓存中无域名对应IP则会自动检查用户计算机系统Hosts文件DNS缓存是否有该域名对应IP；")]),t._v(" "),a("p",[a("strong",[t._v("3）")]),t._v(" "),a("strong",[t._v("路由器缓存")])]),t._v(" "),a("p",[t._v("当浏览器及系统缓存中均无域名对应IP则进入路由器缓存中检查，以上三步均为客服端的DNS缓存；")]),t._v(" "),a("p",[a("strong",[t._v("4）")]),t._v(" "),a("strong",[t._v("ISP")]),t._v("**（互联网服务提供商）DNS****缓存**")]),t._v(" "),a("p",[t._v("当在用户客服端查找不到域名对应IP地址，则将进入ISP DNS缓存中进行查询。比如你用的是电信的网络，则会进入电信的DNS缓存服务器中进行查找；")]),t._v(" "),a("p",[a("strong",[t._v("5）")]),t._v(" "),a("strong",[t._v("根域名服务器")])]),t._v(" "),a("p",[t._v("当以上均未完成，则进入根服务器进行查询。全球仅有13台根域名服务器，1个主根域名服务器，其余12为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（如.com）服务器IP告诉本地DNS服务器；")]),t._v(" "),a("p",[a("strong",[t._v("6）")]),t._v(" "),a("strong",[t._v("顶级域名服务器")])]),t._v(" "),a("p",[t._v("顶级域名服务器收到请求后查看区域文件记录，若无则将其管辖范围内主域名服务器的IP地址告诉本地DNS服务器；")]),t._v(" "),a("p",[a("strong",[t._v("7）")]),t._v(" "),a("strong",[t._v("主域名服务器")])]),t._v(" "),a("p",[t._v("主域名服务器接受到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确纪录；")]),t._v(" "),a("p",[a("strong",[t._v("8")]),t._v("**）保存结果至缓存**")]),t._v(" "),a("p",[t._v("本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个IP地址与web服务器建立链接。")]),t._v(" "),a("p",[t._v("原文链接：https://www.cnblogs.com/gopark/p/8430916.html")]),t._v(" "),a("h2",{attrs:{id:"_5-css渲染规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-css渲染规则"}},[t._v("#")]),t._v(" 5.CSS渲染规则")]),t._v(" "),a("p",[t._v("CSS渲染规则："),a("strong",[t._v("从上至下，从左至右")])]),t._v(" "),a("p",[t._v("使用这种规则自然是为了更高的"),a("strong",[t._v("性能")]),t._v("。")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<body>\n    <div></div>\n    <div>\n        <p>\n            <span></span>\n            <span></span>\n            <span class="test"></span>\n            <span></span>\n        </p>\n    </div>\n    <span class="test"></span>\n</body>\n')])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div p span .test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果按照从左至右，逻辑是：找到所有"),a("code",[t._v("div")]),t._v("，判断"),a("code",[t._v("div")]),t._v("中是否存在"),a("code",[t._v("p")]),t._v(",再遍历所有"),a("code",[t._v("p")]),t._v("中的"),a("code",[t._v("span")]),t._v("是否存在"),a("code",[t._v('class="test"')]),t._v("的元素，才能定位到指定元素，而且会循环页面中所有的"),a("code",[t._v("div")]),t._v("，在大型的页面中，这资源的消耗是无法接受的。")]),t._v(" "),a("p",[t._v("再来看看左至右的顺序，浏览器按照 "),a("code",[t._v(".test")]),t._v(" "),a("code",[t._v("span")]),t._v(" "),a("code",[t._v("p")]),t._v(" "),a("code",[t._v("div")]),t._v(" 的顺序遍历dom节点，先定位到"),a("code",[t._v('class="test"')]),t._v("，因为页面中只会存在少量的"),a("code",[t._v('class="test"')]),t._v("的元素，所以很容易找到。因为每个元素只会有一个父级元素，所以，接下来就判断它的父元素是否符合"),a("code",[t._v("span")]),t._v(",以此类推。这样对性能的提升是极大的。")]),t._v(" "),a("p",[t._v("从上至下很好理解，就是"),a("strong",[t._v("同名样式")]),t._v("和"),a("strong",[t._v("作用于同个dom的相同属性")]),t._v("，写在下面的内容会覆盖写在上面的内容")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("red yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yellow red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("<style>\n    div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".red")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".yellow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".yellow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n")])])]),a("p",[t._v("最终两个div的颜色都是 "),a("code",[t._v("orange")]),t._v(" ，而不是 "),a("code",[t._v("yellow")]),t._v("。")]),t._v(" "),a("p",[t._v("写在下面的（或之后引入的）会覆盖上面的相同部分样式。这也是我们使用UI库的时候能够覆盖样式或修改主题的原理。")]),t._v(" "),a("p",[t._v("如：修改ant-d的默认主题")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~ant-design-vue/dist/antd.less'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入官方提供的 less 样式入口文件")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-theme-file.less'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于覆盖上面定义的变量")]),t._v("\n")])])]),a("h2",{attrs:{id:"_6-斐波那契数列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-斐波那契数列"}},[t._v("#")]),t._v(" 6.斐波那契数列")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} n\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fib")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res1\n        res1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res2\n        res2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" res2\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("老生常谈的题了，太多题解了，不多解释…")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("前端的知识点太多太碎，不常用的基础很容易就忘掉，"),a("strong",[t._v("温故而知新啊")]),t._v("！")])])}),[],!1,null,null,null);s.default=e.exports}}]);