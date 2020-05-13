<template lang="pug">
div(class="bg")
    canvas(ref="bg")
</template>

<script>
export default {
  name: 'BaseBackground',
  data () {
    return {
      WIDTH: 0,
      HEIGHT: 0,
      ctx: {},
      starNumber: 40,
      stars: [],
      useCache: true
    }
  },
  mounted () {
    this.WIDTH = document.documentElement.clientWidth
    this.HEIGHT = document.documentElement.clientHeight
    const canvas = document.querySelector('canvas')
    canvas.width = this.WIDTH
    canvas.height = this.HEIGHT
    this.ctx = canvas.getContext('2d')
    for (let i = 0; i < this.starNumber; i++) {
      this.stars.push(this.createStar())
    }
    this.move()
  },
  methods: {
    init () {
      this.ctx.fillStyle = `rgba(189,189,189, ${(Math.random() * 10 + 1) / 10})`
      this.ctx.shadowBlur = 20
    },
    createStar () {
      const ctx = this.ctx
      const that = this
      function Star () {
        this.r = Math.floor(Math.random() * 10) + 1
        this.x = Math.random() * that.WIDTH
        this.y = Math.random() * that.HEIGHT
        this.color = `rgba(189,189,189, ${(Math.floor(Math.random() * 10) + 1) / 10})`
        this.speed = that.getRandomArbitrary(0.3, 1)
        this.useCache = that.useCache
        // 离屏缓存
        this.cacheCanvas = document.createElement('canvas')
        this.cacheCtx = this.cacheCanvas.getContext('2d')
        this.cacheCtx.width = 3 * (this.r + that.ctx.shadowBlur)
        this.cacheCtx.height = 3 * (this.r + that.ctx.shadowBlur)
        if (this.useCache) {
          this.saveCache()
        }
      }
      Star.prototype.saveCache = function () {
        if (!this.useCache) return
        this.cacheCtx.save();
        this.cacheCtx.fillStyle = this.color;
        this.cacheCtx.shadowColor = "white";
        this.cacheCtx.shadowBlur = this.r * 2;
        this.cacheCtx.beginPath();
        this.cacheCtx.arc(this.r * 3, this.r * 3, this.r, 0, 2 * Math.PI);
        this.cacheCtx.closePath();
        this.cacheCtx.fill();
        this.cacheCtx.restore();
      }
      const star = new Star()
      this.draw(star)
      return star
    },
    draw (star) {
      const { x, y, r, color, useCache } = star
      const ctx = this.ctx
      if (!useCache) {
        ctx.fillStyle = color
        ctx.shadowBlur = 10
        ctx.shadowColor = color
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI, false)
        ctx.closePath()
        ctx.fill()
      } else {
        ctx.drawImage(star.cacheCanvas, x - r, y - r)
      }
    },
    move () {
      const ctx = this.ctx
      ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT)
      for (let star of this.stars) {
        if (star.y + 4 * star.r < 0) {
          this.reset(star)
        }
        star.y -= star.speed
        this.draw(star)
      }
      requestAnimationFrame(this.move)
    },
    reset (star) {
      star.y = this.HEIGHT
      star.x = Math.random() * this.WIDTH
      star.r = Math.floor(Math.random() * 10) + 1
      star.speed = this.getRandomArbitrary(0.3, 1)
      return star
    },
    getRandomArbitrary (min, max) {
      return Math.random() * (max - min) + min;
    }
  }
}
</script>

<style lang="less" scoped>
.body,
html {
  width: 100%;
  height: 100%;
}
.bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
