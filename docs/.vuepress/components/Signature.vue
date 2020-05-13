<template>
  <div
    class="container"
    id="signature-container"
    :style="{width:width+'px',height:height+'px'}"
  >
    <canvas
      ref="signature"
      :width="ctx.width"
      :height="ctx.height"
      :style="{'background':ctx.background}"
      @mousedown="touchstart"
      @mousemove="touchmove"
      @mouseup="touchend"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    ></canvas>
    <img
      class="preview"
      :src="preview"
      alt="preview"
      :class="[preview === '' ? 'hide' : 'show']"
    >
    <div class="button-group">
      <button
        @click="clear"
      >清空</button>
      <button
        @click="save"
      >保存</button>
    </div>
  </div>
</template>

<script>
import Signature from './libs/Signature'
export default {
  name: 'Signature',
  props: {
    background: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    strokeStyle: {
      type: String,
      default: 'rgba(0, 0, 0, 1)'
    },
    width: {
      type: Number,
      default: 500
      // default: document.body.clientWidth
    },
    height: {
      type: Number,
      // default: document.body.clientHeight
      default: 500
    },
    lineWidth: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      ctx: {},
      preview: '',
      canvasDom: {}
    }
  },
  mounted () {
    this.canvasDom = this.$refs.signature
    this.ctx = new Signature({
      canvasDom: this.canvasDom,
      width: this.width,
      height: this.height,
      background: this.background,
      strokeStyle: this.strokeStyle,
      lineWidth: this.lineWidth
    })
  },
  methods: {
    touchstart (e) {
      this.ctx.moveStart(e)
    },
    touchmove (e) {
      this.ctx.moveOn(e, document.querySelector('#signature-container'))
    },
    touchend (e) {
      this.ctx.moveEnd(e)
    },
    clear () {
      this.ctx.clear()
      this.preview = ''
    },
    save () {
      let img = this.ctx.save()
      this.preview = img
    }
  },
}
</script>

<style scoped>
.container {
  position: relative;
  outline: 1px solid #eee;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.button-group {
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.button-group > button {
  width: 50%;
}

.preview {
  position: absolute;
  background: #eee;
  width: 80%;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
}

.hide {
  display: none;
}

.show {
  display: block;
  animation: show 1s ease-out;
}

@keyframes show {
  0% {
    top: -50%;
  }
  100% {
    top: 50%;
  }
}
</style>
