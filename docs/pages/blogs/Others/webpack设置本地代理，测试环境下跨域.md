---
title: webpack设置本地代理，测试环境下跨域
---

使用 webpack 的 devServer插件可以实现本地代理，用来在测试环境下实现跨域，方便我们用来测试。

操作也十分简单，只需要proxy中将需要的接口按照格式写入即可。

```
devServer: { // 代理
    port: 8080,
    proxy: { // 配置跨域
      '/api': {
        target: 'https://test.com', // 此处填写需要模拟的api
        changeOrigin: true,  // 如果target是域名，则需要设置为true
        secure: false, // false表示支持https协议
        pathRewrite: {
          '^/api': ''// 请求的时候使用这个api就可以
        }
      }
    }
  }
```

在页面中使用时若需要访问 test.com 只需要访问 /api 即可。如访问:`/api/sign/upload`就等于访问 `https://test.com/sign/upload`

但是在 network 中查看会变成`http://localhost:8080/api/sign/upload`