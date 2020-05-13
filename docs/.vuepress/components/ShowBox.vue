<template lang="pug">
.show-box-container(@mouseover="showShade" @mouseout="hideShade" )
    img.box-content(:style="contentStyle" :src="img")
    .cover-shade(:style="shadeStyle")
        .cover-title {{title}}
        .cover-content {{Content}}
        a.read-more(@click="turnTo") 了解更多
</template>

<script>
export default {
  name: 'ShowBox',
  props: {
    title: {
      type: String,
      default: 'hello'
    },
    Content: {
      type: String,
      default: 'hello world'
    },
    link: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: 'https://s1.ax1x.com/2020/03/22/8IRViR.jpg'
    },
    // width: {
    //   type: String,
    //   default: 'auto'
    // },
    // height: {
    //   type: String,
    //   default: 'auto'
    // }
  },

  data () {
    return {
      isOver: false,
      shadeStyle: {
        top: '-110%'
      },
      contentStyle: {
        transform: 'scale(1)'
      }
    }
  },
  methods: {
    showShade () {
      this.contentStyle.transform = 'scale(1.15)'
      this.shadeStyle.top = '0'
    },
    hideShade () {
      this.contentStyle.transform = 'scale(1)'
      this.shadeStyle.top = '-110%'
    },
    turnTo () {
      if (this.link.includes('http')) {
        window.location.href = this.link
      } else {
        this.$router.push(this.link)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../theme/styles/utils.less";
@transition-time: 0.8s;
@theme-color: rgba(62, 175, 124, 0.65);
.flex-center(@direction:row,@justify:center,@align:center) {
  display: flex;
  flex-direction: @direction;
  justify-content: @justify;
  align-items: @align;
}

.show-box-container {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 5px;
  background-color: #eeeeee;

  .box-content {
    display: block;
    width: 100%;
    height: 100%;
    transition: all @transition-time;
    object-fit: fill;
  }
}

.cover-shade {
  position: absolute;
  top: -110%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  transition: all @transition-time;
  color: black;
  .flex-center(column);

  .cover-title {
    font-size: 1.28rem;
    font-weight: bold;
  }
  .cover-content {
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.8rem;
    width: 100% - 4rem;
    margin: 1rem 0;
    overflow: hidden;
    .text-overflow(4);
  }
  .read-more {
    width: 6rem;
    height: 2rem;
    .flex-center();
    font-size: 14px;
    background-color: @theme-color;
    border: 2px solid @theme-color;
    color: #fff;
    transition: all 0.3s;

    &:hover {
      background-color: #fff;
      color: @theme-color;
      text-decoration: none;
    }
  }
}
</style>
