const sidebarConfig = require('../../config/sidebarConfig')
const navConfig = require('../../config/navConfig')
const pluginConfig = require('../../config/pluginConfig')
module.exports = {
    title: '参天桃树的博客',
    description: '前端学习',
    plugins: pluginConfig,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        nav: navConfig,
        sidebar: sidebarConfig,
        smoothScroll: true,
        navbar: true,
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
}