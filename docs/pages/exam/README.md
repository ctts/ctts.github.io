## 排序
```js
function sort (arr) {
    if (arr.length === 0) return []
    const left = []
    const right = []
    const center = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        arr[i] >= center[0] ? (arr[i] === center[0] ? center.push(arr[i]) : right.push(arr[i])) : left.push(arr[i])
    }
    return [...sort(left), ...center, ...sort(right)]
}
const sort1 = sort([5, 4, 3, 2, 1])
console.assert(sort1[0] === 1)
console.assert(sort1[1] === 2)
console.assert(sort1[2] === 3)
console.assert(sort1[3] === 4)
console.assert(sort1[4] === 5)
const sort2 = sort([])
console.assert(sort2.length === 0)
const sort3 = sort([1, 1, 1])
console.assert(sort3[0] === 1)
console.assert(sort3[2] === 1)

```
## 斐波那契数列
```js
const memory = {}
function fibonacci (n) {
    if (memory[n]) return memory[n]
    if (n === 0 || n === 1) { return n }
    let result = fibonacci(n - 1) + fibonacci(n - 2)
    memory[n] = result
    return result
}
console.assert(fibonacci(0) === 0)
console.assert(fibonacci(1) === 1)
console.assert(fibonacci(2) === 1)
console.assert(fibonacci(3) === 2)
console.assert(fibonacci(4) === 3)
console.assert(fibonacci(5) === 5)
console.assert(fibonacci(6) === 8)
console.assert(fibonacci(20) === 6765)
console.assert(fibonacci(50) === 12586269025)
```

## promise
```js
function red () {
    console.log(new Date())
    console.log('red');
}
function green () {
    console.log(new Date())
    console.log('green');
}
function yellow () {
    console.log(new Date())
    console.log('yellow');
}

light(1, red).then(function () {
    return light(2, green);
}).then(function () {
    return light(3, yellow);
})

function light (timer, fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn.call(this)
            resolve()
        }, timer * 1000);
    })
}
```
## HACK
```js
let index = 1
Object.defineProperty(window, 'a', {
    get () {
        return index++
    }
})
console.assert(a === 1 && a === 2 && a === 3)
```