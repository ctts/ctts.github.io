module.exports = {
    '@vuepress/back-to-top': true,
    '@vuepress/nprogress': true,
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: true
    },
    '@vuepress/medium-zoom': {
        selector: '.theme-default-content:not(a) > img',
        options: {
            margin: 16
        }
    },
    // 'vuepress-plugin-comment': {
    //     choosen: 'valine',
    //     options: {
    //         el: '#valine-vuepress-comment',
    //         appId: '5aHHLc7y1Gqm0v1hCGNcOIoc-gzGzoHsz',
    //         appKey: 'fI1VzJAvEFgBjs4BPNFb5Yda',
    //     }
    // }
}