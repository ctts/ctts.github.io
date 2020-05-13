const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath + "/docs/"
const utils = require(rootpath + '/utils/index.js');
const filehelper = require(rootpath + '/utils/getFilenames.js');

module.exports = {
    // 博客
    '/pages/blogs/JavaScript/': utils.genSidebar('JavaScript', filehelper.getFileName(docs + "/pages/blogs/JavaScript/"), false),
    '/pages/blogs/CSS/': utils.genSidebar('CSS', filehelper.getFileName(docs + "/pages/blogs/CSS/"), false),
    '/pages/blogs/Vue/': utils.genSidebar('Vue', filehelper.getFileName(docs + "/pages/blogs/Vue/"), false),
    '/pages/blogs/Design/': utils.genSidebar('设计模式', filehelper.getFileName(docs + "/pages/blogs/Design/"), false),
    '/pages/blogs/Others/': utils.genSidebar('其他', filehelper.getFileName(docs + "/pages/blogs/Others/"), false),
    // // 随笔
    // '/pages/essays/JavaScript/': utils.genSidebar('JavaScript', filehelper.getFileName(docs + "/pages/essays/JavaScript/"), false),
    // '/pages/essays/CSS/': utils.genSidebar('JavaScript', filehelper.getFileName(docs + "/pages/essays/CSS/"), false),
    // '/pages/essays/Vue/': utils.genSidebar('Vue', filehelper.getFileName(docs + "/pages/essays/Vue/"), false),
    // '/pages/essays/Others/': utils.genSidebar('其他', filehelper.getFileName(docs + "/pages/essays/Others/"), false),
}