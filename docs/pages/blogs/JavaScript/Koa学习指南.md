# Koa学习指南

------待填坑------

## 中间件

中间件是 Koa 中的一个核心概念，它本身其实就是一个函数，这个函数默认会有两个参数： `ctx `和 `next`,一个最简单的中间件可以是这样的

```javascript
app.use((ctx,next)=>{
	next()
})
```

以上是一个没有进行任何操作的最基础的中间件。可以看到每个中间件都会调用一个 next 回调。

我们可以分别从 ctx 和 next 两个角度去解读。

中间件执行顺序是按照洋葱模型来执行的，所以先来说说洋葱模型。

### 洋葱模型

所以最好将 **所有**中间件函数都使用 async 装饰，**所有** next 执行都使用 await 装饰 。这样可以确保中间件的执行是按照洋葱模型的顺序执行的。

```javascript
app.use(async (ctx,next)=>{
	await next()
})
```



为什么使用洋葱模型？洋葱模型的优点？



## ctx

ctx 的意思是全局上下文，相当是 Koa 的一个全局对象，

## 路由

### koa-router

koa是一个精简到极致的框架，它没有自带的 router 模块，需要我们导入第三方的router包，比较官方的router（几乎所有koa项目）使用的是 [koa-router](https://github.com/ZijianHe/koa-router) 这个包。

我们先导入

`npm install koa-router`

基本用法

```JavaScript
var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
});

app
  .use(router.routes())
  .use(router.allowedMethods());
```

基本用法分三步：

1. 引入router `var Router = require('koa-router');`
2. 如果是一个`get`请求，调用 `router.get()`方法，第一个参数是 **路由路径**，第二个参数是一个 **中间件**
3. 执行 `app.use(router.routes())`

详细用法请查询[官方文档](https://github.com/ZijianHe/koa-router#api-reference)

### 批量引入

设计时，我们应该将路由抽离出来，单独新建一个文件夹`api`用于存放路由。

```javascript
// api -> test.js
const Router = require('koa-router')
const router = new Router

router.get('/', (ctx, next) => {
    // ctx.router available
    ctx.body = 'hello world'
});

module.exports = router // 在此处导出
```

```javascript
// app.js
const test  = require('./api/v1/test')
app.use(test.routes())
```

这样做虽然没有问题，但是不可避免的，我们必须要手动注册一个个路由，当路由数量躲起来时，不美观也不方便管理。

不过还好，有前人以前为我们解决了这个方案：[require-directory](https://www.npmjs.com/package/require-directory)

这个包可以帮助我们自动完成路由的引入。

基本用法：

```javascript
// app.js
const requireDirectory = require('require-directory')
requireDirectory(module, './api', {
    visit: obj => {
        obj instanceof Router && app.use(obj.routes()) 
    }
});
```

高级用法请查询[官方文档](https://www.npmjs.com/package/require-directory)

### 路由解析

如果是get请求，可以直接通过变量和正则的形式获取

如果是post请求，则需求一个第三方中间件来进行解析：[koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser)

## 全局异常处理

## 配置文件

## TS支持（可选）

### 初始化

先**本地安装** typescript，注意不要全局安装

```
npm i --save-dev typescript
```

先在原先项目基础上安装对应的 @type 包

```
npm install --save-dev @types/koa @types/koa-router @types/koa-bodyparser
```

安装 ts 需要的热更新模块

```
npm i --save-dev typescript ts-node nodemon
```

执行 

```
tsc --init
```

初始化`tsconfig.json`文件,按照个人或团队习惯修改配置文件

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "allowJs": true,
  },
  "include": [
    "src/**/*"
  ]
}
```

配置文件相关内容前往 ts 文档查询。

### 启动

设置 `package.json` 下的 `script`

```json
"scripts": {
    "dev": "set NODE_ENV=development && nodemon --watch src/**/* -e ts,tsx --exec ts-node ./src/app.ts",
    "build": "rm -rf dist/* && tsc"
  },
```

### 调试

调试我使用的是 VSCode 自带的 debug 模式。

点击 vscode 的生成调试文件后，配置调试文件

```
{
    "name": "Current TS File",
    "type": "node",
    "request": "launch",
    "args": [
        "${workspaceRoot}/src/app.ts" // 入口文件
    ],
    "runtimeArgs": [
        "--nolazy",
        "-r",
        "ts-node/register"
    ],
    "sourceMaps": true,
    "cwd": "${workspaceRoot}",
    "protocol": "inspector",
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen"
},
```

