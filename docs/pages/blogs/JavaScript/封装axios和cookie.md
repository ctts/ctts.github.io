# 封装axios和cookie小笔记

优秀的axios可以帮助我们管理ajax请求，极大地方便项目的维护和修改，这很重要。

## Cookie

``` js
// 获取cookie、
export function getCookie (name) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}

// 设置cookie,增加到vue实例方便全局调用
export function setCookie (name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : 'expires=' + exdate.toGMTString())
}

// 删除cookie
export function delCookie (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + 'expires=' + exp.toGMTString()
  }
}

```


## axios

``` js
import axios from 'axios' // 引入axios
import router from '../router/index'

// 创建axios并设置超时时间
var instance = axios.create({
  timeout: 1000 * 10
})
// 默认url
instance.defaults.baseURL = 'http://localhost:3000'
if (localStorage.token) {
  instance.defaults.headers.Authorization = localStorage.token
}

// 默认请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    name: 'Login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
      // 404请求不存在
    case 404:
      alert('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

// 默认请求拦截器
axios.interceptors.request.use(
  config => {
    // 添加token
    const token = localStorage.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 默认响应拦截器
instance.interceptors.response.use(
  res => {
    // 只有状态为200时请求成功，否则抛错
    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
  },
  error => {
    // 和后台协商自定义错误码
    const {
      response
    } = error
    errorHandle(error.status, response.data.message)
    return Promise.reject(response)
  }
)

export default instance


```