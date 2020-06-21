# apiDoc使用教程

<img src="https://s1.ax1x.com/2020/06/21/N8lI8s.jpg" alt="N8lI8s.jpg" border="0" />

## 前言

> 一个好的API文档绝对是每个前后端分离的程序员想得到的，它可以让一个小时才能调试完成的项目只需半小时就完成（绝不夸张），一个差的API文档可以让两个程序员打起来（绝不夸张）。

现在很多项目的写API文档的需求已经交付到了前端手里，自己手动写一个文档绝对是一件费时费力的工作，这里推荐一个工具，他可以让半小时才能写完的API文档，几分钟轻松解决，那就是apiDoc。

先来看看效果

<img src="https://s1.ax1x.com/2020/06/21/N83pFg.png" alt="N83pFg.png" border="0" />

## 安装

```bash
npm install apidoc -g
```

全局安装 apiDoc

## 配置

apiDoc的配置过程也比较简单，总的来说分为三步

1.在`package.json`中编写配置项

```json
	//以下为基本配置项	
	"apidoc": {
    "name": "demo",
    "description": "apiDoc例子",
    "title": "apidoc"
  },
```

2.按照[官方文档](https://apidocjs.com/#param-api-private)编写api文档

	1. 新建一个文件夹，用于存放所有api文档
 	2. 新建一个js文件，以js注释的形式编写文档

```js
/**
 * @api {post} /v1/add 添加
 * @apiGroup web
 *
 * @apiParam {String} url 站点url
 * @apiParam {String} path 路径
 * @apiParamExample {json} Request-Example
 *{
 *    "webname": "baidu",
 *    "url": "https://baidu.com",
 *}
 *
 * @apiSuccessExample  {json} Response-Example
 * [
 *   {
 *    "webname": "baidu",
 *    "url": "https://baidu.com",
 *   },
 * ]
 */
```

3.执行编译命令

```
apidoc -i 此处填写注释文件所在位置 -o 此处填写输出文件所在位置
```

例如：

```bash
apidoc -i src/app/api/ -o apidoc/
```

为了方便，我们可以把它添加到 `package.json`的`script`中

```
"script":{
	"apidoc":"apidoc -i src/app/api/ -o apidoc/"
}
```

以后可以使用 npm run apidoc 来快速执行编译。

## 常用注释

官方文档中差不多罗列了20种 api ，当然你全用上肯定最好。

但是大部分情况下只需要其中较常用的 api 就可以清楚地表述了

**@api** 主要信息

```
@api {method} path [title]
例子
@api {post} /v1/addweb demo
```

**@apiGroup** 把api分组，便于管理

```
@apiGroup name
例子
@apiGroup web
```
**@apiVersion** api版本号管理

```
@apiVersion version
例子
@apiVersion 1.0.0
```
**@apiParam** api的参数，可以有多个

```
@apiParam [(group)] [{type}] [field=defaultValue] [description]
例子
@apiParam {String} url 站点url
```
**@apiParamExample** 成功的请求例子

```
@apiExample [{type}] title
example
例子
@apiParamExample {json} Request-Example
*{
 *    "webname": "",
 *    "url": "",
 *    "path": ""
 *}
```
**@apiSuccessExample** 请求成功的返回值

```
@apiSuccessExample [{type}] [title]
example
 * @apiSuccessExample  {json} Response-Example
 * [
 *   {
 *       "url": "",
 *       "text": ""
 *   },
 * ]
```

## 总结

又掌握了一项新技能，虽然并非那种硬性技能，但是作为一项软技能也是非常重要的！