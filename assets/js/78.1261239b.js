(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{355:function(a,s,t){"use strict";t.r(s);var e=t(14),p=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"apidoc使用教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apidoc使用教程"}},[a._v("#")]),a._v(" apiDoc使用教程")]),a._v(" "),t("img",{attrs:{src:"https://s1.ax1x.com/2020/06/21/N8lI8s.jpg",alt:"N8lI8s.jpg",border:"0"}}),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("blockquote",[t("p",[a._v("一个好的API文档绝对是每个前后端分离的程序员想得到的，它可以让一个小时才能调试完成的项目只需半小时就完成（绝不夸张），一个差的API文档可以让两个程序员打起来（绝不夸张）。")])]),a._v(" "),t("p",[a._v("现在很多项目的写API文档的需求已经交付到了前端手里，自己手动写一个文档绝对是一件费时费力的工作，这里推荐一个工具，他可以让半小时才能写完的API文档，几分钟轻松解决，那就是apiDoc。")]),a._v(" "),t("p",[a._v("先来看看效果")]),a._v(" "),t("img",{attrs:{src:"https://s1.ax1x.com/2020/06/21/N83pFg.png",alt:"N83pFg.png",border:"0"}}),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" apidoc -g\n")])])]),t("p",[a._v("全局安装 apiDoc")]),a._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("p",[a._v("apiDoc的配置过程也比较简单，总的来说分为三步")]),a._v(" "),t("p",[a._v("1.在"),t("code",[a._v("package.json")]),a._v("中编写配置项")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//以下为基本配置项\t")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"apidoc"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"demo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"apiDoc例子"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"apidoc"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("p",[a._v("2.按照"),t("a",{attrs:{href:"https://apidocjs.com/#param-api-private",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),t("OutboundLink")],1),a._v("编写api文档")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 新建一个文件夹，用于存放所有api文档\n2. 新建一个js文件，以js注释的形式编写文档\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/**\n * @api {post} /v1/add 添加\n * @apiGroup web\n *\n * @apiParam {String} url 站点url\n * @apiParam {String} path 路径\n * @apiParamExample {json} Request-Example\n *{\n *    "webname": "baidu",\n *    "url": "https://baidu.com",\n *}\n *\n * @apiSuccessExample  {json} Response-Example\n * [\n *   {\n *    "webname": "baidu",\n *    "url": "https://baidu.com",\n *   },\n * ]\n */')]),a._v("\n")])])]),t("p",[a._v("3.执行编译命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("apidoc -i 此处填写注释文件所在位置 -o 此处填写输出文件所在位置\n")])])]),t("p",[a._v("例如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("apidoc -i src/app/api/ -o apidoc/\n")])])]),t("p",[a._v("为了方便，我们可以把它添加到 "),t("code",[a._v("package.json")]),a._v("的"),t("code",[a._v("script")]),a._v("中")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"script":{\n\t"apidoc":"apidoc -i src/app/api/ -o apidoc/"\n}\n')])])]),t("p",[a._v("以后可以使用 npm run apidoc 来快速执行编译。")]),a._v(" "),t("h2",{attrs:{id:"常用注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用注释"}},[a._v("#")]),a._v(" 常用注释")]),a._v(" "),t("p",[a._v("官方文档中差不多罗列了20种 api ，当然你全用上肯定最好。")]),a._v(" "),t("p",[a._v("但是大部分情况下只需要其中较常用的 api 就可以清楚地表述了")]),a._v(" "),t("p",[t("strong",[a._v("@api")]),a._v(" 主要信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@api {method} path [title]\n例子\n@api {post} /v1/addweb demo\n")])])]),t("p",[t("strong",[a._v("@apiGroup")]),a._v(" 把api分组，便于管理")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@apiGroup name\n例子\n@apiGroup web\n")])])]),t("p",[t("strong",[a._v("@apiVersion")]),a._v(" api版本号管理")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@apiVersion version\n例子\n@apiVersion 1.0.0\n")])])]),t("p",[t("strong",[a._v("@apiParam")]),a._v(" api的参数，可以有多个")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@apiParam [(group)] [{type}] [field=defaultValue] [description]\n例子\n@apiParam {String} url 站点url\n")])])]),t("p",[t("strong",[a._v("@apiParamExample")]),a._v(" 成功的请求例子")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('@apiExample [{type}] title\nexample\n例子\n@apiParamExample {json} Request-Example\n*{\n *    "webname": "",\n *    "url": "",\n *    "path": ""\n *}\n')])])]),t("p",[t("strong",[a._v("@apiSuccessExample")]),a._v(" 请求成功的返回值")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('@apiSuccessExample [{type}] [title]\nexample\n * @apiSuccessExample  {json} Response-Example\n * [\n *   {\n *       "url": "",\n *       "text": ""\n *   },\n * ]\n')])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("又掌握了一项新技能，虽然并非那种硬性技能，但是作为一项软技能也是非常重要的！")])])}),[],!1,null,null,null);s.default=p.exports}}]);