# Vue源码分析之Vue响应式对象

<img src="https://s1.ax1x.com/2020/06/01/tJ0TET.jpg" width="100%" alt="tJ0TET.jpg" border="0" />

## 前言

> Vue深入学习的过程中绕不开的就是阅读源码，阅读源码可以让我们从根上去了解这个框架。但是如果和无头苍蝇一样乱撞只会把自己劝退，所以要有目的地去阅读。并且，我们不应该只满足于知道Vue代码逻辑，还应该去注意Vue源码的一些**代码规范，代码技巧**。

### 学习前提

相信大家一定已经提前知道 `Object.defineProperty`的基本概念了，还不知道的建议去[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)上学习一下，这里简单的提一下就是通过`Object.defineProperty`可以帮助我们**在设置对象属性时，对操作进行拦截，并添加额外操作**。

本文的核心还是分析源码，请先 fork 好 vue2 源码。

## init

在进行` new Vue`操作时会先进行对数据的初始化，让数据变为响应式是初始化的其中一步。

如何找到入口不在本文内容之内，我们直接定位到`src/core/instance/state.js`文件中，找到 `initState`方法。

```javascript
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm) // 注意这里，这是初始化data的位置
  } else {
    observe(vm._data = {}, true /* asRootData */) // initData最终也会执行observe()方法
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}

```
上面这段代码很简单，初始化数据的一段入口逻辑，我们从中可以定位到初始化 data 的方法所在位置，可以找到下面这段代码。

```javascript
function initData (vm: Component) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}
  if (!isPlainObject(data)) {
    data = {}
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    )
  }
  // proxy data on instance
  const keys = Object.keys(data)
  const props = vm.$options.props
  const methods = vm.$options.methods
  let i = keys.length
  while (i--) {
    const key = keys[i]
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          `Method "${key}" has already been defined as a data property.`,
          vm
        )
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
      )
    } else if (!isReserved(key)) {
      proxy(vm, `_data`, key)
    }
  }
  // observe data
  observe(data, true /* asRootData */)
}
```

“这也太长了吧？溜了溜了。”

如果你此时是这个心态，请看下面这段代码。

```
function initData (vm: Component) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {}

    // proxy data on instance
    const keys = Object.keys(data)
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (!isReserved(key)) { // isReserved用于判断字符串是否存在 $ 或 _
            proxy(vm, `_data`, key)
        }
    }
    // observe data
    observe(data, true /* asRootData */)
}
```

基本逻辑如下：

1. 初始化 data ，判断 data是否为 function ,是则执行，否则直接赋值
2. 为data对象添加代理（下文会提到）
3. 为data对象添加监听

### 思考

这是我将源码精简之后的代码，由于Vue是一个大型的库，所以避免不了提前帮助用户判断或警告，我们通过源码阅读，第一个要学会的技能就是：**化繁为简**，公司项目中肯定也会遇到这种情况，项目代码很杂乱，各种逻辑各种判断，这时候我们可以把相关逻辑单独提出来，单独分析，理清思路。最后，理清思路之后还是要**回归原文**，比如我们看了精简版的源码后，还是需要回去看真实代码，精简版的目的还是辅助作用，而不是取代。

继续反思，其实我们单独摘掉的代码，反而是上面这段代码最宝贵的，最高级的东西：**警告**。但是一般的小项目并不推荐使用，在**大型项目和组件、框架**中，这些是必不可少的东西，优秀的警告可以使得一些关键点逻辑更加清晰，避免一些隐蔽的过失，也是为后人（接盘侠）造福，积福积德啊（笑）！

## proxy

在 `initData`的过程中有一步 proxy 操作

```
const keys = Object.keys(data)
let i = keys.length
  while (i--) {
    const key = keys[i]
    if (!isReserved(key)) { // isReserved用于判断字符串是否存在 $ 或 _
    proxy(vm, `_data`, key)
  }
}
```

这是干什么的呢？

先来思考一个问题：为什么你在`data`中定义的参数，可以使用`this`访问到呢？（ps：此时的this指向`vm`对象）

带着这个问题去阅读下面的代码

```javascript
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function proxy (target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```

代码很短，很简洁，简单来说就是原本我们需要通过 `this._data.xxx `来访问对象，而通过这层代理之后，就可是直接使用 `this.xxx `访问。运用的原理也是 `Object.defineProperty`方法，将`get`和`set`方法劫持,从而达到该效果。

### 思考

使用代理的好处真是显而易见，并且非常实用。我们平时的项目中，可能存在套嵌很深的对象，如

```
let obj = {
    a: {
        b: {
            c: {
                data: 1
            }
        }
    }
}
```

我们可能需要经常对 data 进行操作，那么我们需要这样子：`obj.a.b.c.data`,这很容易出错，这时候我们就可以通过一个代理去代理 data

```javascript
Object.defineProperty(obj, '_data', {
    enumerable: false,  // 设置不可枚举！这里的逻辑和Vue源码不同，根据业务逻辑自行判断
    configurable: true,
    get: function () {
        return obj.a.b.c.data
    },
    set: function (newVal) {
        this.a.b.c.data = newVal
    }
})

console.log(obj._data) // 1
obj._data = 2
console.log(obj._data) // 2
console.log(obj) // { a: { b: { c: [Object] } } }
```

除此之外，还有一个**解耦**的思想。细心的同学可以发现，Vue源码中将配置对象单独提取了出来，命名为`sharedPropertyDefinition`,这么做的意义在于哪里呢？

由于在源码中，proxy 方法被多次使用到，而某些对象可能需要特殊定制`get`和`set`方法，或进行**特殊化处理**，这时候对这个方法的耦合度就升高了，需要将它解耦出来，放到外部作用域中，让其他方法可以对其进行特殊化处理，这也是代码优化的一个点。

## observe（监听）

在完成 proxy 之后，Vue 会为对象设置监听，也就是上文最后的执行 observe 函数。observe代码如下

```javascript
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
export function observe (value: any, asRootData: ?boolean): Observer | void {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  let ob: Observer | void
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value)
  }
  if (asRootData && ob) {
    ob.vmCount++
  }
  return ob
}
```

很简单的逻辑，主要是为了安全地新建一个 Observer 监听器，接下来看 Observer 类的实现。

Observer 的位置在`src/core/observer/index.js`

```javascript
export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that have this object as root $data

  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    def(value, '__ob__', this) // 定义方法，将__ob__定义到value上
    if (Array.isArray(value)) { // 判断是否是array类型，但是最后都会执行 work 方法
      if (hasProto) {
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }

  /**
   * Observe a list of Array items.
   */
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }
}
```

构造函数主要做了一件事情，判断是否是 array 类型，但是最后都是为每个对象执行 walk 方法。而 walk 方法则为对象的每个属性执行 `defineReactive`方法。这就是 observer 的核心方法了。

```javascript
/**
 * Define a reactive property on an Object.
 */
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}
```

很长，直接看很难看懂。所以先来精简一番吧。

极致精简版

```javascript
/**
 * Define a reactive property on an Object.
 */
export function defineReactive (
    obj: Object,
    key: string,
    val: any,
) {
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
            const value = val
            if (Dep.target) {
                dep.depend()
            }
            return value
        },
        set: function reactiveSetter (newVal) {
            val = newVal
            dep.notify()
        }
    })
}
```

只看精简版，我们很容易就可以看懂 `defineReactive `做了什么。其实就是使用`defineProperty`拦截传入的对象，在拦截的过程中进行 **依赖收集** 和 **派发更新** ，其他的代码基本都是为了保证数据处理的安全性。

到这里我们先理清一下思路，响应式对象到目前为止都为我们做了什么。

1. initData 操作，为 Vue 进行一些初始化操作，也是操作的**入口**
2. 为对象执行 proxy ，让用户可以通过 this 来访问到 data 中的属性
3. 为对象设置监听对象，拦截对象的属性设置和获取
4. 当用户执行 get 操作时，触发 **依赖收集**
5. 当用户执行 set 操作时，触发 **派发更新**

依赖收集和派发更新已经属于另外的大类了，本文的主要目的在于理清响应式对象的实现，也是 Vue 比较基础的模块，更多的是搞清楚我们阅读源码到底为了什么。

