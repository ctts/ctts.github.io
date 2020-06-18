<template lang="pug">
.container
  .wrapper(v-for="item of boxData" :key="item.title")
    show-box.classify(v-bind="item")
</template>

<script>
import ShowBox from './ShowBox'
export default {
  name: 'GuidePage',
  components: {
    ShowBox
  },
  data () {
    return {
      boxData: [{
        img: 'https://s1.ax1x.com/2020/03/24/8qAKcF.jpg',
        link: '/pages/blogs/JavaScript/学会使用async来实现异步编程',
        Content: '前端er的核心',
        title: 'JavaScript'
      }, {
        img: 'https://s1.ax1x.com/2020/03/24/8qAMX4.jpg',
        link: '/pages/blogs/CSS/inline元素小笔记',
        Content: '前端er的画笔',
        title: 'CSS'
      }, {
        img: 'https://s1.ax1x.com/2020/03/24/8qAlnJ.jpg',
        link: '/pages/blogs/Vue/手把手教你实现一个移动端canvas签名模块',
        Content: '前端er的梯子',
        title: 'VUE'
      }, {
        img: 'https://s1.ax1x.com/2020/03/24/8qADHA.jpg',
        link: '/pages/blogs/Others/企业git基本操作',
        Content: '技术不仅仅是前端',
        title: '其他技能'
      }, {
        img: 'https://s1.ax1x.com/2020/03/24/8qEgaR.jpg',
        link: '/pages/Share/',
        Content: '站在巨人的肩膀上',
        title: '工具分享'
      }, {
        img: 'https://s1.ax1x.com/2020/03/24/8qEWPx.jpg',
        link: '/pages/Article/',
        Content: '交流才能进步',
        title: '文章分享'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .wrapper {
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    .classify {
      width: 20rem;
      height: 14rem;
      margin: 1rem;
    }
  }
}
</style>
