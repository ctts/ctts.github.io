# Vue源码分析之Vue依赖收集和派发更新

<img src="https://s1.ax1x.com/2020/06/04/tB43Lj.jpg" width="100%" alt="tB43Lj.jpg" border="0" />

Vue 中的 dep 的概念我认为是源码中比较难以理解的一块了，我也花费了很大的精力才理清思路，提前打好预防针，需要静下心来思考。

网络上大部分的源码解读资料就是在帮你读代码……没有从原理上解析为什么要那么设计，我觉得这和阅读源码的初衷相悖，接下来我会结合源码来解析代码的思路。

**如果你看到有那么多那么长的代码就怕了！不用担心，你可以先看代码下面的解读，和代码中的关键注释，你会发现那么长的代码关键信息就一两句而已。**

**战胜恐惧的*最佳*方法就是面对恐惧！**

## 发布订阅模式

网络上一部分人认为 Vue 的响应式是 观察者模式 ，watcher 作为 dep 的观测者，我认为不太正确。

我认为Vue的响应式设计应该是 发布订阅模式，而非观察者模式，**dep起到了中介者的作用，被监控的响应式对象的属性是发布者，watcher是订阅者**，此为本文前提。

在学习 Dep 的概念之前，需要先搞清楚 发布订阅模式 的概念。这里建议去阅读一下《JavaScript设计模式与开发实践》中的 发布订阅模式的章节。

> 如果没有彻底搞懂发布订阅模式，不建议阅读此文！

## 依赖收集

依赖收集的逻辑入口在`src/core/observer/index.js`的 `defineReactive`方法中，顾名思义就是在定义响应式的时候。那么何为**依赖收集**呢？

简单来说，就是当用户执行 get 操作的时候，告诉系统对象的这个属性是响应式的！未来如果要修改这个值，就通知系统执行更新操作（下文要将的派发更新）。如

```vue
<template>
  <div>
    <div>{{a+b}}</div>
    <div>{{a}}</div>
    <div>{{b}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1,
      b: 2
    }
  }
}
</script>
```

对于 `a`来说，有两处依赖，`{{a+b}}` `{{a}}`

对于 `b` 来说，也有两处`{{a+b}}` `{{b}}`

更直观的说就是在这两处位置对 a 和 b 发生了 `get`操作，每一次 `get` 操作就会生成一个依赖

在用户对对象执行了 get 操作的时候，就会有以下的逻辑流程

```javascript
const dep = new Dep()    
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
```

暂时忽略 `Dep.target` 逻辑判断，我们看到执行了`dep.depend()`方法，我们来到`src/core/observer/dep.js`中的 depend 方法。

```javascript
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}
```

通过查看 Dep 的类我们可以看到 `Dep.target `是一个 Watcher 类型的静态属性，全局唯一，用来指向当前的 Watcher 对象，也就是说，`depend` 方法调用了 Watcher 的 `addDep(this)` 方法，将当前 dep 传入。转到 `watcher.js `来

```javascript
  /**
   * Add a dependency to this directive.
   */
  addDep (dep: Dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }
```

忽略掉一些辅助逻辑，关键代码在于 `dep.addSub(this)`，又回到的 Dep 中，执行 `addSub(this)`，也就是把当前 watcher 添加到 subs 中。一次依赖收集就完成了。

是不是感觉云里雾里，绕来绕去看不懂，接下来解读一下。

首先的首先，我们要带着 **发布订阅模式** 思想去阅读 dep 和 watcher 的源码，就会豁然开朗：**dep 起到了中介者的作用，被监控的 响应式对象的属性 是发布者，watcher 是订阅者。**如果还不懂发布订阅模式的思想，请再去学习发布订阅模式！这对理解 Vue 源码很重要

1. `src/core/observer/index.js` 中的 `defineReact` 方法中 `const dep = new Dep()`

   在这一步，主要是新建一个dep对象，也就是中介者。也就是说，每一个响应式对象的每个属性都会生成一个 Dep 对象。

2. 当执行 get 操作时,执行`dep.depend()`

3. 定位到 `dep.js` 的 `depend()`，执行`Dep.target.addDep(this)`

4. `Dep.target` 是一个全局唯一的变量，用于储存当前激活的 Watcher ，所以执行的其实是 `Watcher.addDep(this)`方法。

   本文的 watcher 指的是 render-watcher，render-watcher的初始化时在创建组件的时候生成的，一个 watcher 对应一个组件。所以这里的`Watcher.addDep(this)`的意思就是为当前的 watcher **添加一个订阅**。

5. 定位到 `watcher.js` 的 `addDep() `方法内,执行`this.newDeps.push(dep)`,将传入的 dep 保存到 watcher 的 `newDeps` 中。然后执行`dep.addSub(this)`，将当前 watcher 添加的 dep 的 subs 中。

   这里的两个add方法分别的作用就是 为订阅者添加了一个订阅，为中介者添加一个订阅者

路线非常清晰，就一条主线，依赖收集的步骤就以上五步，想要理解，最为关键的就一个，发布订阅模式，看代码时，在心里里反复默念**dep 起到了中介者的作用，被监控的 响应式对象的属性 是发布者，watcher 是订阅者**。

## 派发更新

当执行 `set` 操作时，也就是数据发生了更新，这时候就进入了 **派发更新** 流程。顾名思义，就是把更新的数据告知订阅者，比依赖收集好理解些。

```javascript
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
```

照样，我们忽略掉一些辅助代码，核心就是将`val`赋值为`newVal`，然后执行了一个 `dep.notify()`方法，转到`dep.js`中

```javascript
notify () {
  // stabilize the subscriber list first
  const subs = this.subs.slice()
  if (process.env.NODE_ENV !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort((a, b) => a.id - b.id)
  }
  for (let i = 0, l = subs.length; i < l; i++) {
    subs[i].update()
  }
}
```

代码也很简单，就是调用依赖收集时收集的`watcher`的`update`方法，再来看update里有什么。

```javascript
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }
```

先忽略 `lazy `和 `sync`这是 watch 和 computed 的逻辑，我们直接看 `queueWatcher(this)`这是定义在`scheduler.js`中的一个方法

```javascript
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
export function queueWatcher (watcher: Watcher) {
  const id = watcher.id
  if (has[id] == null) {
    has[id] = true
    if (!flushing) {
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1
      while (i > index && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(i + 1, 0, watcher)
    }
    // queue the flush
    if (!waiting) {
      waiting = true

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue()
        return
      }
      nextTick(flushSchedulerQueue)
    }
  }
}
```

关键代码：将 watcher push到一个更新队列`queue`中去，执行`flushSchedulerQueue`,看看`flushSchedulerQueue`的代码。

```javascript
/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow()
  flushing = true
  let watcher, id

  // 激活前需要先排序
  // 这是为了保证:
  // 1. 组件更新顺序要从父组件到子组件（因为父组件总是比子组件创建早）
  // 2. 用户 自定义watcher 总是要比 渲染watcher 早（因为自定义watcher创建比渲染watcher早）
  // 3. 如果一个组件在父组件渲染watcher运行时被销毁，我们可以跳过这个组件的watcher
  queue.sort((a, b) => a.id - b.id)

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index]
    if (watcher.before) {
      watcher.before()
    }
    id = watcher.id
    has[id] = null
    watcher.run()
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? `in watcher with expression "${watcher.expression}"`
              : `in a component render function.`
          ),
          watcher.vm
        )
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  const activatedQueue = activatedChildren.slice()
  const updatedQueue = queue.slice()

  resetSchedulerState()

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue)
  callUpdatedHooks(updatedQueue)
}
```

先对 `queue`进行排序，原因在注释中了，这一步 sort 一箭三雕，watcher 的执行效率大幅度提升。

然后执行了`watcher.run()`方法，

最后执行`resetSchedulerState()`恢复一些状态变量，触发更新钩子

```
 /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  run () {
    if (this.active) {
      const value = this.get()
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        const oldValue = this.value
        this.value = value
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue)
          } catch (e) {
            handleError(e, this.vm, `callback for watcher "${this.expression}"`)
          }
        } else {
          this.cb.call(this.vm, value, oldValue)
        }
      }
    }
  }
```

run 方法就是最终执行回调的方法，判断当前 watcher 的 value 值，执行 cb 回调，派发更新的步骤就完成了。

派发更新的总流程如下：

1. `src/core/observer/index.js` 中的 `defineReact` 方法中 `const dep = new Dep()`
2. 数据发生变动，执行set操作，执行`dep.notify()`
3. 定位到 `dep.js` 的 `notify()`,遍历 subs，执行 watcher 的 `update()`方法
4. 定位到 `watcher.js`的 `update`方法，执行到`queueWatcher(this)`方法
5. 定位到`scheduler.js`的`queueWatcher`，执行`flushSchedulerQueue()`方法
6. 遍历 queue 中的 watcher，执行`watcher.run()`
7. 回到 `watcher.js`的`run`方法，执行`watcher`的`cb`回调

## 总结

虽然流程看起来很多，代码量很大，但是沉下心来理解就会发现 整个 依赖收集 和 派发更新 就是 发布订阅模式的发布和订阅操作，只是将其Vue本土化了而已。

通过了这一章的源码阅读，我也巩固了一下发布订阅模式的概念，同时了解了Vue数据更新的原理，能够减少平时代码书写时可能发生的错误，代码库的源码真是宝藏啊！