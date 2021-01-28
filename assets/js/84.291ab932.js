(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{360:function(t,e,n){"use strict";n.r(e);var r=n(14),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"手把手教你实现一只node爬虫（豆瓣top250）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手把手教你实现一只node爬虫（豆瓣top250）"}},[t._v("#")]),t._v(" 手把手教你实现一只node爬虫（豆瓣top250）")]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("爬虫是近两年比较火的概念了，学会爬虫可以实现很多很有 cool 的功能，我觉得非常的“极客”，比如我们可以去使用爬虫去找一些有意思的图片，有意思的资讯，寻找我们想要的信息。我是前端工程师，js是我们最拿手的语言，所以我们今天就来用node.js实现一只简单的表层网页（Surface Web）爬虫。")])]),t._v(" "),n("h2",{attrs:{id:"爬虫是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#爬虫是什么"}},[t._v("#")]),t._v(" 爬虫是什么")]),t._v(" "),n("p",[t._v("我们先来确认一下爬虫到底是什么，是如何运作的，运作的原理是什么。")]),t._v(" "),n("p",[t._v("简单来说，爬虫就是"),n("strong",[t._v("一段自动化程序")]),t._v("，原理是服务端"),n("strong",[t._v("向目标url发送http请求，目标网页返回页面上的数据信息，后端通过一些特殊手段解析返回的页面信息的数据（如正则表达式）")]),t._v("，从而找到自己想要的数据，保存到本地中。")]),t._v(" "),n("h2",{attrs:{id:"准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),n("p",[t._v("http协议基础知识")]),t._v(" "),n("p",[t._v("node环境 + cheerio + superagent")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install cheerio\nnpm install superagent\n")])])]),n("p",[n("strong",[t._v("cheerio")]),t._v("：可以将返回的目标页面信息像jQuery一样灵活自由地操作，帮助我们提取信息。（毕竟我们真的很讨厌正则表达式）")]),t._v(" "),n("p",[n("strong",[t._v("superagent")]),t._v("： 帮助服务端向目标页面发起请求，其实也可以使用node自带的http模块，但是superagent更方便我们使用。")]),t._v(" "),n("p",[t._v("目标页面：豆瓣电影top250 https://movie.douban.com/top250")]),t._v(" "),n("p",[t._v("我们要获取到豆瓣电影的标题和目标页面url，因为是教程级别的小爬虫，所以只爬出小部分的内容。")]),t._v(" "),n("h2",{attrs:{id:"开始制作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始制作"}},[t._v("#")]),t._v(" 开始制作")]),t._v(" "),n("h3",{attrs:{id:"向目标页面发起请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#向目标页面发起请求"}},[t._v("#")]),t._v(" 向目标页面发起请求")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function getHTML() {\n    let promise = new Promise((resolve, reject) => {\n    \t// 通过superagent向页面发起请求\n        superagent\n            .get('https://movie.douban.com/top250?start=0&filter=')\n            .end((err, res) => {\n                if (!err) {\n                    // 如果成功获取到网页内容， 返回网页数据\n                    resolve(res)\n                } else {\n                    reject(err)\n                }\n            })\n    })\n    return promise\n}\n")])])]),n("p",[t._v("通过superagent向页面发起请求，若请求成功，返回页面的html代码，待到下一步进行解析。")]),t._v(" "),n("h3",{attrs:{id:"解析页面数据，获取我们想要的内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解析页面数据，获取我们想要的内容"}},[t._v("#")]),t._v(" 解析页面数据，获取我们想要的内容")]),t._v(" "),n("p",[t._v("首先，"),n("strong",[t._v("打开chrome控制台，分析页面结构，找到信息所在节点")]),t._v("。")]),t._v(" "),n("p",[t._v("……说得那么高大上，其实就是看看网页代码")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/2mpJufH.gif",alt:""}})]),t._v(" "),n("p",[t._v("开始编码")]),t._v(" "),n("p",[t._v("学习使用cheerio，")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let $ = cheerio.load(res.text);\n")])])]),n("p",[t._v("多么熟悉的$符号……接下来应该就不用多说了吧（学习完了，滑稽）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 传入找到的html\nfunction analysisHTML(res) {\n    let promise = new Promise((resolve, reject) => {\n        let $ = cheerio.load(res.text)\n        let hotData = []\n        $('.item').find('.info').find('.hd').each((index, element) => {\n            let content = $(element).find('a')\n            let infoURL = content.attr('href')\n            let infoContent = content.find('.title').first().text()\n            let hot = {\n                infoContent,\n                infoURL,\n            }\n            hotData.push(hot)\n        })\n        resolve(hotData)\n    })\n\n    return promise\n}\n")])])]),n("h3",{attrs:{id:"基本逻辑完成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本逻辑完成"}},[t._v("#")]),t._v(" 基本逻辑完成")]),t._v(" "),n("p",[t._v("爬虫的基本逻辑就是这样，把它们串联起来,打印一下结果看看。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("async function spider() {\n    const html = await getHTML()\n    const result = await analysisHTML(html)\n    result.then(res => console.log(res))\n    return result\n}\n")])])]),n("p",[t._v("那么来运行一下看看能不能行呢？")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/bNBdJYq.png",alt:""}})]),t._v(" "),n("p",[t._v("成功得爬取了豆瓣的top250")]),t._v(" "),n("h2",{attrs:{id:"分页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分页"}},[t._v("#")]),t._v(" 分页")]),t._v(" "),n("p",[t._v("等等，上面说的不是top250吗？我们才抓了25个啊？")]),t._v(" "),n("p",[t._v("对哦，接下来就要说说如何处理分页。")]),t._v(" "),n("p",[t._v("正常情况下，分页之间都是有关联的，我们要前往下一页，"),n("strong",[t._v("换句话说不就是去往下一页的url进行相同操作")]),t._v("吗？")]),t._v(" "),n("p",[t._v("有了思路，我们来看看top250的url有什么关联。")]),t._v(" "),n("p",[t._v("这是第一页的url：https://movie.douban.com/top250?start=0&filter=")]),t._v(" "),n("p",[t._v("这是第二页的url: https://movie.douban.com/top250?start=25&filter=")]),t._v(" "),n("p",[t._v("这是第三页的url: https://movie.douban.com/top250?start=50&filter=")]),t._v(" "),n("p",[t._v("这是第十页的url: https://movie.douban.com/top250?start=225&filter=")]),t._v(" "),n("p",[t._v("很容易就能发现，只是start字段后面的数值等于（页码-1）*25")]),t._v(" "),n("p",[t._v("很简单，只需要用正则表达式定位到start字段后面之后执行替换操作，或者更简单的，只需动态改变字符串内容即可。")]),t._v(" "),n("p",[t._v("改造一下上面的代码，将固定的url改为动态的，将data改为全局变量，")]),t._v(" "),n("p",[t._v("运行一下")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/84BmI0V.png",alt:""}})]),t._v(" "),n("p",[t._v("一个简单的成功了！")]),t._v(" "),n("h2",{attrs:{id:"完整代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完整代码"}},[t._v("#")]),t._v(" 完整代码")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const superagent = require('superagent')\nconst cheerio = require('cheerio')\n\nlet hotData = []\n\nfunction getHTML(url) {\n    let promise = new Promise((resolve, reject) => {\n        superagent\n            .get(url)\n            .end((err, res) => {\n                if (!err) {\n                    // 如果成功获取到网页内容， 返回网页数据\n                    resolve(res)\n                } else {\n                    console.log(err)\n                    reject(err)\n                }\n            })\n    })\n    return promise\n}\n\nfunction analysisHTML(res) {\n    let promise = new Promise((resolve, reject) => {\n        let $ = cheerio.load(res.text)\n        $('.item').find('.info').find('.hd').each((index, element) => {\n            let content = $(element).find('a')\n            let infoURL = content.attr('href')\n            let infoContent = content.find('.title').first().text()\n            let hot = {\n                infoContent,\n                infoURL,\n            }\n            hotData.push(hot)\n        })\n        resolve(hotData)\n    })\n\n    return promise\n}\n\nasync function spider() {\n    for (let i = 0; i < 10; i++) {\n        let url = `https://movie.douban.com/top250?start=0&filter=`\n        const html = await getHTML(url)\n        await analysisHTML(html)\n    }\n    console.log(hotData)\n    return hotData\n}\n\nmodule.exports = spider\n")])])]),n("p",[t._v("这只是最基础的爬虫，其中没有涉及到反反爬虫，所以用来入门还是不错的，学习了这章之后可以自己尝试着去爬一爬小说漫画之类的，但是"),n("strong",[t._v("切勿抓取非法信息")]),t._v("！")])])}),[],!1,null,null,null);e.default=s.exports}}]);