<template>
  <div id="global-layout">
    <base-background></base-background>
    <component
      :is="layout"
      class="test"
    />
  </div>
</template>

<script>
import BaseBackground from '../components/BaseBackground'
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  },
  components: {
    BaseBackground
  }
}
</script>

<style lang="less" scoped>

</style>