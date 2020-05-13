<template>
  <signature v-bind="options"></signature>
</template>

<script>
import signature from './Signature'
export default {
  name: 'MySignature',
  data () {
    return {
      options: {
        width: 300,
        height: 300
      }
    }
  },
  components: {
    signature,
  }
}
</script>

<style lang="less" scoped>
</style>
