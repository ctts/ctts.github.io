(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{345:function(t,s,n){"use strict";n.r(s);var a=n(14),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"javascript设计模式-观察者模式和发布订阅模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript设计模式-观察者模式和发布订阅模式"}},[t._v("#")]),t._v(" JavaScript设计模式——观察者模式和发布订阅模式")]),t._v(" "),n("img",{attrs:{src:"https://s1.ax1x.com/2020/06/06/t6VQTU.jpg",width:"100%",alt:"t6VQTU.jpg",border:"0"}}),t._v(" "),n("p",[t._v("观察者模式和发布订阅模式是日常设计和开发时常用到的概念。两者"),n("strong",[t._v("一开始是同一概念")]),t._v("，但是随着模式发展，两者逐渐独立成为了"),n("strong",[t._v("独立的")]),t._v("设计模式。")]),t._v(" "),n("p",[t._v("统一定义：")]),t._v(" "),n("p",[t._v("当对象之间存在 一对一 或 一对多 的依赖关系时，当一发生改变，所有"),n("strong",[t._v("依赖该对象")]),t._v("的其他对象都能接收到"),n("strong",[t._v("变化通知")]),t._v("，并执行回调。")]),t._v(" "),n("h2",{attrs:{id:"观察者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[t._v("#")]),t._v(" 观察者模式")]),t._v(" "),n("p",[t._v("单从定义上我们很难理解，我们可以从实际出发，去理解。以我们最日常的 "),n("strong",[t._v("直播")]),t._v(" 为例。")]),t._v(" "),n("p",[n("strong",[t._v("S(Situation)")]),t._v(" ：在某直播平台，我发现了一个喜爱的主播，我想要每次他上线时就去看他直播。")]),t._v(" "),n("p",[n("strong",[t._v("T(Target)")]),t._v("：我想要每次他上线时就立刻去看他直播或提醒我前往")]),t._v(" "),n("p",[n("strong",[t._v("A(Action)")]),t._v("：我们有三种方法可以实现这个效果")]),t._v(" "),n("ol",[n("li",[t._v("不停地刷新这个直播间，一直刷刷刷刷刷……刷到他来直播为止")]),t._v(" "),n("li",[t._v("订阅这个主播，一旦他上线，主播给所有点过他关注的人一个通知，告诉订阅者他上线了（观察者模式）")]),t._v(" "),n("li",[t._v("订阅这个主播，一旦他上线，直播平台可以检测到主播上线，直播平台自动发送通知来通知用户（发布订阅模式）")])]),t._v(" "),n("p",[t._v("显然，正常人都不会选择第一种方式，第一种方式会让我把大量的精力都放在 "),n("strong",[t._v("“刷新”")]),t._v(" 这个操作上，会占用大量的系统资源")]),t._v(" "),n("p",[t._v("第二种方式看起来更人性化，这也就是使用了 "),n("strong",[t._v("观察者模式")]),t._v(" 。用户是订阅者，主播是 "),n("strong",[t._v("观察目标")]),t._v("，每当观察目标 "),n("strong",[t._v("状态")]),t._v(" 发生变化，主播会主动通知用户，用户接收到消息。")]),t._v(" "),n("p",[t._v("再来看第三种方式，第三种方式也就是 "),n("strong",[t._v("发布-订阅模式")]),t._v("。显然第三种方式和第二种唯一的区别在于：用户 和 主播 之间多出了一个 平台 的概念。这个平台就是它和观察者模式区别最大的地方。使用这种模式，主播不再通知用户，转而通知平台，平台再进行转播，通知到用户。")]),t._v(" "),n("p",[t._v("乍一看和第二种方法没区别啊？反而多此一举，多出了一个平台的开销，貌似第二种方法更合理一些。")]),t._v(" "),n("p",[t._v("方法 2 实现代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Anchor {\n    constructor() {\n        this.list = []\n    }\n    listen (user) {\n        this.list.push(user)\n    }\n    trigger () {\n        this.list.forEach(user => user.run.call())\n    }\n}\n\nclass User {\n    run () {\n        console.log('主播上线了！')\n    }\n}\n\nlet anchor = new Anchor() // 新建主播\n\nlet user = new User() // 新建用户\n\nanchor.listen(user) // 添加订阅\n\nsetTimeout(() => {  // 模拟异步触发\n    anchor.trigger() // 触发事件\n}, 3000);\n\n// 3s后：主播上线了！\n")])])]),n("p",[n("strong",[t._v("R(Result)")]),t._v("：我们使用了简单的"),n("strong",[t._v("观察者模式")]),t._v("实现了这个需求")]),t._v(" "),n("h2",{attrs:{id:"发布订阅模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式"}},[t._v("#")]),t._v(" 发布订阅模式")]),t._v(" "),n("p",[t._v("这篇文章还没结束。")]),t._v(" "),n("p",[t._v("这里先把上文的第三种方法，"),n("strong",[t._v("发布订阅模式")]),t._v("的代码放这里，下文要用，对比观察者模式的代码来理解")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Platform")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能存在多个 anchor ，用数组保存")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAnchor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("anchor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anchor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听主播")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("AnchorName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" AnchorName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Anchor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        plantform"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAnchor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化时平台添加主播")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("online")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        plantform"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上线时通知平台")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主播上线了！'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" plantform "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Platform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" anchor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Anchor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ctts'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建主播")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" user "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建用户")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始")]),t._v("\nplantform"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ctts'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加订阅")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟异步触发")]),t._v("\n    anchor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("online")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发事件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("过了不久，产品又提出了新的想法，我要搞一个 VIP 用户，VIP用户可以第一时间获取到主播上线时间，普通用户会晚一小时通知。（不要在意这个需求多蠢）继续STAR")]),t._v(" "),n("p",[n("strong",[t._v("S(Situation)")]),t._v(" ：需要新加一个 vip 属性，VIP用户可以第一时间获取到主播上线时间，普通用户会晚一小时通知。")]),t._v(" "),n("p",[n("strong",[t._v("T(Target)")]),t._v("：将用户和主播完全解耦，以较低开销实现这个功能")]),t._v(" "),n("p",[n("strong",[t._v("A(Action)")]),t._v("：我们有两种方法可以实现这个效果")]),t._v(" "),n("ol",[n("li",[t._v("沿用上文的第二种方法，再给用户添加一个 "),n("code",[t._v("isVIP")]),t._v("属性，修改 "),n("strong",[t._v("主播")]),t._v(" 的"),n("code",[t._v("trigger")]),t._v("方法，在中间添加用户属性判断。")]),t._v(" "),n("li",[t._v("沿用上文第三种方法，再给用户添加一个 "),n("code",[t._v("isVIP")]),t._v("属性，再通过 "),n("strong",[t._v("平台")]),t._v(" 的"),n("code",[t._v("trigger")]),t._v("方法 添加用户属性判断。")])]),t._v(" "),n("p",[t._v("这两者从实现上看似没什么区别，但是从 "),n("strong",[t._v("耦合度")]),t._v(" 的角度来说，是天差地别。")]),t._v(" "),n("p",[t._v("方法 1 本质上是在修改 主播 这个对象，这样有什么缺点呢？今天有个需求是添加 vip ，明天有个需求是添加性别，后天有个需求是添加年龄，这样 主播 这个类将会越来越庞大，逐渐变得难以理解，并且与 用户 类的耦合度会越来越高，这不符合类与类之间"),n("strong",[t._v("低耦合")]),t._v("的软件设计规范。")]),t._v(" "),n("p",[t._v("方法 2 将修改和操作完全托付给了 平台 这个中间概念，这样 主播 类和用户类基本无需做额外改动，我们未来修改其他逻辑直接去 平台类中修改即可，这样操作的直接结果就是：将 用户类 和 主播类 "),n("strong",[t._v("完全解耦")]),t._v("。用户类只负责自身的属性管理，主播类只负责自身的属性管理，各司其职，概念更加清晰！")]),t._v(" "),n("p",[n("strong",[t._v("R(Result)")]),t._v("：我们使用了发布订阅模式实现了这个需求，并且未来拓展能力更强了！")]),t._v(" "),n("h2",{attrs:{id:"两者区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两者区别"}},[t._v("#")]),t._v(" 两者区别")]),t._v(" "),n("p",[t._v("对比以上的两个例子，我们可以总结出两者的一些区别")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("最直观的区别，观察者模式多了一个中间者（平台），代码量和复杂度上升")]),t._v(" "),n("img",{attrs:{src:"https://s1.ax1x.com/2020/06/06/tgS4MT.png",alt:"tgS4MT.png",border:"0"}}),t._v(" "),n("p",[t._v("图片来自网络")])]),t._v(" "),n("li",[n("p",[t._v("观察者模式能够（相比第一种方法而言）降低两个类的耦合度，实现 "),n("strong",[t._v("低耦合")]),t._v(" ，发布订阅模式 实现的则是 "),n("strong",[t._v("完全解耦")])])]),t._v(" "),n("li",[n("p",[t._v("发布订阅模式 灵活度 高于观察者模式")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);