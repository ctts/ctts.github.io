module.exports = [
    { text: '首页', link: '/' },
    {
        text: '博客',
        ariaLabel: '博客',
        items: [
            { text: 'JavaScript', link: '/pages/blogs/JavaScript/学会使用async来实现异步编程.md' },
            { text: 'CSS', link: '/pages/blogs/CSS/inline元素小笔记.md' },
            { text: 'Vue', link: '/pages/blogs/Vue/手把手教你实现一个移动端canvas签名模块.md' },
            { text: '设计模式', link: '/pages/blogs/Design/单例模式.md' },
            { text: '其他', link: '/pages/blogs/Others/手把手教你实现一只node爬虫.md' }
        ]
    },
    // {
    //     text: '随笔',
    //     ariaLabel: '随笔',
    //     items: [
    //         { text: 'JavaScript', link: '/pages/essays/JavaScript/定位鼠标点击位置和目标元素相对位置.md' },
    //         { text: 'CSS', link: '/pages/essays/CSS/多行文本省略号.md' },
    //         { text: 'Vue', link: '/pages/essays/Vue/Vue事件监听.md' },
    //         { text: '其他', link: '/pages/essays/Others/IOS无法播放mp4视频.md' },
    //     ]
    // },
    // { text: '组件库', link: '/pages/myComponents/index.md' },
    { text: '关于我', link: '/about/' },
    { text: '分类', link: '/guide/' },
    { text: '优秀工具分享', link: '/pages/Share/' },
    { text: 'GitHub', link: 'https://github.com/ctts' },
]