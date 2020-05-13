# 手把手教你实现一只node爬虫（豆瓣top250）

## 前言
::: tip
爬虫是近两年比较火的概念了，学会爬虫可以实现很多很有 cool 的功能，我觉得非常的“极客”，比如我们可以去使用爬虫去找一些有意思的图片，有意思的资讯，寻找我们想要的信息。我是前端工程师，js是我们最拿手的语言，所以我们今天就来用node.js实现一只简单的表层网页（Surface Web）爬虫。
:::
## 爬虫是什么

我们先来确认一下爬虫到底是什么，是如何运作的，运作的原理是什么。

简单来说，爬虫就是**一段自动化程序**，原理是服务端**向目标url发送http请求，目标网页返回页面上的数据信息，后端通过一些特殊手段解析返回的页面信息的数据（如正则表达式）**，从而找到自己想要的数据，保存到本地中。


## 准备

http协议基础知识

node环境 + cheerio + superagent

```
npm install cheerio
npm install superagent
```

**cheerio**：可以将返回的目标页面信息像jQuery一样灵活自由地操作，帮助我们提取信息。（毕竟我们真的很讨厌正则表达式）

**superagent**： 帮助服务端向目标页面发起请求，其实也可以使用node自带的http模块，但是superagent更方便我们使用。


目标页面：豆瓣电影top250 https://movie.douban.com/top250

我们要获取到豆瓣电影的标题和目标页面url，因为是教程级别的小爬虫，所以只爬出小部分的内容。


## 开始制作


### 向目标页面发起请求

```
function getHTML() {
    let promise = new Promise((resolve, reject) => {
    	// 通过superagent向页面发起请求
        superagent
            .get('https://movie.douban.com/top250?start=0&filter=')
            .end((err, res) => {
                if (!err) {
                    // 如果成功获取到网页内容， 返回网页数据
                    resolve(res)
                } else {
                    reject(err)
                }
            })
    })
    return promise
}
```

通过superagent向页面发起请求，若请求成功，返回页面的html代码，待到下一步进行解析。

### 解析页面数据，获取我们想要的内容


首先，**打开chrome控制台，分析页面结构，找到信息所在节点**。

……说得那么高大上，其实就是看看网页代码

![](https://i.imgur.com/2mpJufH.gif)


开始编码


学习使用cheerio，
```
let $ = cheerio.load(res.text);
```
多么熟悉的$符号……接下来应该就不用多说了吧（学习完了，滑稽）

```
// 传入找到的html
function analysisHTML(res) {
    let promise = new Promise((resolve, reject) => {
        let $ = cheerio.load(res.text)
        let hotData = []
        $('.item').find('.info').find('.hd').each((index, element) => {
            let content = $(element).find('a')
            let infoURL = content.attr('href')
            let infoContent = content.find('.title').first().text()
            let hot = {
                infoContent,
                infoURL,
            }
            hotData.push(hot)
        })
        resolve(hotData)
    })

    return promise
}
```

### 基本逻辑完成


爬虫的基本逻辑就是这样，把它们串联起来,打印一下结果看看。
```
async function spider() {
    const html = await getHTML()
    const result = await analysisHTML(html)
    result.then(res => console.log(res))
    return result
}
```
那么来运行一下看看能不能行呢？

![](https://i.imgur.com/bNBdJYq.png)

成功得爬取了豆瓣的top250

## 分页

等等，上面说的不是top250吗？我们才抓了25个啊？

对哦，接下来就要说说如何处理分页。

正常情况下，分页之间都是有关联的，我们要前往下一页，**换句话说不就是去往下一页的url进行相同操作**吗？

有了思路，我们来看看top250的url有什么关联。

这是第一页的url：https://movie.douban.com/top250?start=0&filter=

这是第二页的url: https://movie.douban.com/top250?start=25&filter=

这是第三页的url: https://movie.douban.com/top250?start=50&filter=

这是第十页的url: https://movie.douban.com/top250?start=225&filter=

很容易就能发现，只是start字段后面的数值等于（页码-1）*25

很简单，只需要用正则表达式定位到start字段后面之后执行替换操作，或者更简单的，只需动态改变字符串内容即可。

改造一下上面的代码，将固定的url改为动态的，将data改为全局变量，

运行一下

![](https://i.imgur.com/84BmI0V.png)

一个简单的成功了！

## 完整代码

```
const superagent = require('superagent')
const cheerio = require('cheerio')

let hotData = []

function getHTML(url) {
    let promise = new Promise((resolve, reject) => {
        superagent
            .get(url)
            .end((err, res) => {
                if (!err) {
                    // 如果成功获取到网页内容， 返回网页数据
                    resolve(res)
                } else {
                    console.log(err)
                    reject(err)
                }
            })
    })
    return promise
}

function analysisHTML(res) {
    let promise = new Promise((resolve, reject) => {
        let $ = cheerio.load(res.text)
        $('.item').find('.info').find('.hd').each((index, element) => {
            let content = $(element).find('a')
            let infoURL = content.attr('href')
            let infoContent = content.find('.title').first().text()
            let hot = {
                infoContent,
                infoURL,
            }
            hotData.push(hot)
        })
        resolve(hotData)
    })

    return promise
}

async function spider() {
    for (let i = 0; i < 10; i++) {
        let url = `https://movie.douban.com/top250?start=0&filter=`
        const html = await getHTML(url)
        await analysisHTML(html)
    }
    console.log(hotData)
    return hotData
}

module.exports = spider
```

这只是最基础的爬虫，其中没有涉及到反反爬虫，所以用来入门还是不错的，学习了这章之后可以自己尝试着去爬一爬小说漫画之类的，但是**切勿抓取非法信息**！