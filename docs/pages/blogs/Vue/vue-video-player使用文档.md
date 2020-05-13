# Vue-Video-Player

## 安装

```
npm install vue-video-player --save
```

## 基础使用

### 全局引入

```javascript

import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'
 
// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
 
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

```

### 作为组件引入(推荐)

新建`videoPlayer.vue`组件，写入以下代码

```javascript
<template lang="pug">
  video-player(:options="playerOptions" class="video-player-box" :playsinline="true" ref="videoPlayer")
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'videoPlay',
  props: {
    source: Object
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [],
        // sources: [{
        //   src: 'https://server.custouch.com/Corp/10007/1000702/Media/Attach/Air%20filter%E7%A9%BA%E6%B0%94%E6%BB%A4%E6%B8%85%E5%99%A8.mp4', // 路径
        //   type: 'video/mp4'// 类型
        // }],
        // poster: "../../static/images/test.jpg", // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: false// 全屏按钮
        }
      }
    }
  },
  created() {
    this.playerOptions.sources.push(this.source)
  },
  components: {
    videoPlayer
  }
}
</script>

<style lang="scss" scoped>
</style>

```

在需要的页面内引入插件

```
<template lang="pug">
  .container
    vue-video-player(:source="source")
</template>

<script>
import VueVideoPlayer from '@/lib/Vue-video-player'
export default {
  name: 'video',
  data() {
    return {
      source: {
        src: 'https://server.custouch.com/Corp/10007/1000702/Media/Attach/Air%20filter%E7%A9%BA%E6%B0%94%E6%BB%A4%E6%B8%85%E5%99%A8.mp4', // 路径
        type: 'video/mp4'// 类型
      }
    }
  },
  components: {
    VueVideoPlayer
  }
}
</script>

<style lang="scss" scoped>
</style>

```

## API文档

其他初始配置内容建议查阅官方文档

官方文档：https://docs.videojs.com/tutorial-options.html

回调方法建议查阅npm文档

npm文档：https://www.npmjs.com/package/vue-video-player