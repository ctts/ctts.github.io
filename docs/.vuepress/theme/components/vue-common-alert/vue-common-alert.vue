<template>
  <div
    class="alert-container"
    ref="alert"
    v-show="show"
  >
    <div class="alert-box">
      <div class="context">{{context}}</div>
      <div class="button-group">
        <div
          class="cancel"
          @click="handleCancel"
        >{{cancel}}</div>
        <div
          class="confirm"
          @click="handleConfirm"
        >{{confirm}}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
      show: false,
      context: '确定操作吗？',
      cancel: '取消',
      confirm: '确定',
      state: null,
    }
  },
  methods: {
    showAlert (options) {
      this.show = true
      if (Object.prototype.toString.call(options) === '[object Object]') {
        this.cancel = options.cancel || this.cancel
        this.confirm = options.confirm || this.confirm
        this.context = options.context || this.context
        this.callback = options.callback || null
      } else if (Object.prototype.toString.call(options) === '[object String]') {
        this.context = options.context
      }
      return new Promise((resolve, reject) => {
        this.state = { resolve, reject }
      })
    },
    handleCancel () {
      this.show = false
      this.state.reject()
    },
    handleConfirm () {
      this.state.resolve()
      this.show = false
    }
  }
}
</script>

<style scoped>
html,
body {
  font-size: 16px;
}
.alert-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.alert-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20rem;
  height: 150px;
  background: #fff;
  padding: 1rem;
  opacity: 1;
}

.context {
  letter-spacing: 0.1rem;
}

.button-group {
  display: flex;
  width: 20rem;
  justify-content: space-around;
}
.cancel {
  width: 4rem;
  height: 1.4rem;
  border: 1px solid #bebebe;
  text-align: center;
  line-height: 1.4rem;
  font-size: 0.7rem;
}
.confirm {
  width: 4rem;
  height: 1.4rem;
  background: #ee3a44;
  text-align: center;
  line-height: 1.4rem;
  font-size: 0.7rem;
  color: #fff;
}
</style>
